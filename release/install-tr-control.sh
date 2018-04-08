#!/bin/sh
# 获取第一个参数做为目录
ROOT_FOLDER="$1"
SCRIPT_NAME="$0"
SCRIPT_VERSION="1.1.0"
VERSION=""
WEB_FOLDER=""
ORG_INDEX_FILE="index.original.html"
INDEX_FILE="index.html"
TMP_FOLDER="/tmp/tr-web-control"
PACK_NAME="src.tar.gz"
WEB_HOST="https://github.com/ronggang/twc-release/raw/master/"
DOWNLOAD_URL="$WEB_HOST$PACK_NAME"
# 安装类型
# 1 安装至当前 Transmission Web 所在目录
# 2 安装至 TRANSMISSION_WEB_HOME 环境变量指定的目录，参考：https://github.com/transmission/transmission/wiki/Environment-Variables#transmission-specific-variables
# 使用环境变量时，如果 transmission 不是当前用户运行的，则需要将 TRANSMISSION_WEB_HOME 添加至 /etc/profile 文件，以达到“永久”的目的
# 3 用户指定参数做为目录，如 sh install-tr-control.sh /usr/local/transmission/share/transmission
INSTALL_TYPE=-1
SKIP_SEARCH=0

initValues() {
	# 判断临时目录是否存在，不存在则创建
	if [ ! -d "$TMP_FOLDER" ]; then
		mkdir -p "$TMP_FOLDER"
	fi

	# 判断 ROOT_FOLDER 是否为一个有效的目录，如果是则表明传递了一个有效路径
	if [ -d "$ROOT_FOLDER" ]; then
		showLog "Use parameters: $ROOT_FOLDER"
		INSTALL_TYPE=3
		WEB_FOLDER="$ROOT_FOLDER/web"
		SKIP_SEARCH=1
	fi

	# 判断是否指定了版本
	if [ "$VERSION" != "" ]; then
		showLog "You are using the specified version to install, version: $VERSION"
		PACK_NAME="v$VERSION.tar.gz"
		DOWNLOAD_URL="https://github.com/ronggang/transmission-web-control/archive/$PACK_NAME"
	fi	

	if [ $SKIP_SEARCH = 0 ]; then
		# 查找目录
		findWebFolder
	fi
}

# 开始
main() {
	begin
	# 初始化值
	initValues
	# 安装
	install
	# 清理
	clear
}

# 查找Web目录
findWebFolder() {
	# 找出web ui 目录
	showLog "Searching Transmission Web Folder..."
	# 指定一次当前系统的默认目录
	# 用户如知道自己的 Transmission Web 所在的目录，直接修改这个值，以避免搜索所有目录
	ROOT_FOLDER="/usr/local/transmission/share/transmission"
	# Fedora 或 Debian 发行版的默认 ROOT_FOLDER 目录
	if [ -f /etc/fedora-release ] || [ -f "/etc/debian_version" ]; then
		ROOT_FOLDER="/usr/share/transmission"
	fi
		
	# 判断 TRANSMISSION_WEB_HOME 环境变量是否被定义，如果是，直接用这个变量的值
	if [ $TRANSMISSION_WEB_HOME ]; then
		showLog "Use TRANSMISSION_WEB_HOME : $TRANSMISSION_WEB_HOME"
		# 判断目录是否存在，如果不存在则创建 https://github.com/ronggang/transmission-web-control/issues/167
		if [ ! -d "$TRANSMISSION_WEB_HOME" ]; then
         mkdir -p "$TRANSMISSION_WEB_HOME"
      fi
		INSTALL_TYPE=2
	else
		showLog "Looking for folder $ROOT_FOLDER/web"
		if [ -d "$ROOT_FOLDER/web" ]; then
			WEB_FOLDER="$ROOT_FOLDER/web"
			INSTALL_TYPE=1
			showLog "Folder found. Using it."
		else
			showLog "Folder not found. Will search the entire /. This will take a while..."
			ROOT_FOLDER=`find / -name 'web' -type d 2>/dev/null| grep 'transmission/web' | sed 's/\/web$//g'`

			if [ -d "$ROOT_FOLDER/web" ]; then
				WEB_FOLDER="$ROOT_FOLDER/web"
				INSTALL_TYPE=1
			fi
		fi
	fi
}

# 安装
install() {
	# 是否指定版本
	if [ "$VERSION" != "" ]; then
		showLog "Attempting to specify version: $VERSION"
		# 下载最新的安装包
		download
		# 
		unpack

		showLog "Copying installation package..."
		# 复制文件到
		cp -r "$TMP_FOLDER/transmission-web-control-$VERSION/src/." "$WEB_FOLDER/"

		showLog "Setting permissions..."
		# 设置权限
		find "$WEB_FOLDER" -type d -exec chmod o+rx {} \;
		find "$WEB_FOLDER" -type f -exec chmod o+r {} \;

		# 安装完成
		installed

	# 如果目录存在，则进行下载和更新动作
	elif [ $INSTALL_TYPE = 1 -o $INSTALL_TYPE = 3 ]; then
		# 下载最新的安装包
		download
		# 创建web文件夹，从 20171014 之后，打包文件不包含web目录，直接打包为src下所有文件
		mkdir web
		
		# 解压缩包
		unpack "web"
		
		showLog "Copying installation package..."
		# 复制文件到
		cp -r web "$ROOT_FOLDER"

		showLog "Setting permissions..."
		# 设置权限
		find "$ROOT_FOLDER" -type d -exec chmod o+rx {} \;
		find "$ROOT_FOLDER" -type f -exec chmod o+r {} \;

		# 安装完成
		installed
	elif [ $INSTALL_TYPE = 2 ]; then
		# 下载最新的安装包
		download
		# 解压缩包
		unpack "$TRANSMISSION_WEB_HOME"

		showLog "Setting permissions..."
		# 设置权限
		find "$TRANSMISSION_WEB_HOME" -type d -exec chmod o+rx {} \;
		find "$TRANSMISSION_WEB_HOME" -type f -exec chmod o+r {} \;

		# 安装完成
		installed
	else
		echo "##############################################"
		echo "#"
		echo "# ERROR : Transmisson WEB UI Folder is missing, Please confirm if Transmisson is installed 。"
		echo "#"
		echo "##############################################"
	fi
}

# 下载最新的安装包
download() {
	# 切换到临时目录
	cd "$TMP_FOLDER"
	# 判断安装包文件是否已存在
	if [ -f "$PACK_NAME" ]; then
		echo -n "\n$PACK_NAME Already exist, whether to download again? (y/n)"
		read flag
		if [ "$flag" = "y" -o "$flag" = "Y" ] ; then
			rm "$PACK_NAME"
		else
			showLog "\nSkip download, preparing to install"
			return 0
		fi
	fi
	showLog "Downloading Transmission Web Control...\n"
	wget "$DOWNLOAD_URL" --no-check-certificate
	# 判断是否下载成功
	if [ $? -eq 0 ]; then
		showLog "Download completed, ready to install..."
		return 0
	else 
		showLog "The installation package failed to download. Please try again or try another version."
		end
		exit 1
	fi
}

# 安装完成
installed() {
	showLog "Transmission Web Control Installation Completed!"
}

# 输出日志
showLog() {
	echo ">>>>> $1"
}

# 解压安装包
unpack() {
	showLog "Decompressing installation package..."
	if [ "$1" != "" ]; then
		tar -xzf "$PACK_NAME" -C "$1"
	else
		tar -xzf "$PACK_NAME"
	fi
	# 如果之前没有安装过，则先将原系统的文件改为
	if [ ! -f "$WEB_FOLDER/$ORG_INDEX_FILE" -a -f "$WEB_FOLDER/$INDEX_FILE" ]; then
		mv "$WEB_FOLDER/$INDEX_FILE" "$WEB_FOLDER/$ORG_INDEX_FILE"
	fi

	# 清除原来的内容
	if [ -d "$WEB_FOLDER/tr-web-control" ]; then
		rm -rf "$WEB_FOLDER/tr-web-control"
	fi
}

# 清除工作
clear() {
	showLog "Cleaning up the installation package..."
	if [ -f "$PACK_NAME" ]; then
		# 删除安装包
		rm "$PACK_NAME"
	fi

	if [ -d "$TMP_FOLDER" ]; then
		# 删除临时目录
		rm -rf "$TMP_FOLDER"
	fi

	showLog "The installation script execution is completed. If you have problems please check: https://github.com/ronggang/transmission-web-control/wiki "
	end
}

# 开始
begin() {
	echo ""
	showLog "== Beginning =="
	showLog ""
}

# 结束
end() {
	showLog "== End ==\n"
}

# 显示主菜单
showMainMenu() {
	msg="
	Welcome to the Transmission Web Control Installation Script.
	Official help documentation: https://github.com/ronggang/transmission-web-control/wiki 
	Installation script version: $SCRIPT_VERSION\n
	1. Install the latest release;
	2. Install the specified version;
	3. Revert to the official UI;
	4. Re-download the installation script;
	5. Check if Transmission is started;
	===================
	0. Exit the installation;\n
	Please enter the corresponding number:"
	echo -n "$msg"
	read flag
	echo "\n"
	case $flag in
		1)
			main
			;;

		2)
			echo -n "Please enter the version number (do not include v, such as: 1.5.1): "
			read VERSION
			main
			;;
		
		3)
			revertOriginalUI
			;;

		4)
			downloadInstallScript
			;;

		5)
			checkTransmissionDaemon
			;;
		*)
			showLog "END"
			;;
	esac
}

# 检测 Transmission 进程是否存在
checkTransmissionDaemon() {
	showLog "Detecting the Transmission process..."
	ps -fe|grep ransmission-daemon |grep -v grep
	if [ $? -ne 0 ]; then
		showLog "No Transmission was found in the system process. Please confirm that it is started."
	else
		showLog "Transmission is running."
	fi
	sleep 2
	showMainMenu
}

# 恢复官方UI
revertOriginalUI() {
	initValues
	# 判断是否有官方的UI存在
	if [ -f "$WEB_FOLDER/$ORG_INDEX_FILE" ]; then
		showLog "Restoring the official UI..."
		# 清除原来的内容
		if [ -d "$WEB_FOLDER/tr-web-control" ]; then
			rm -rf "$WEB_FOLDER/tr-web-control"
			rm "$WEB_FOLDER/favicon.ico"
			rm "$WEB_FOLDER/index.html"
			rm "$WEB_FOLDER/index.mobile.html"
			mv "$WEB_FOLDER/$ORG_INDEX_FILE" "$WEB_FOLDER/$INDEX_FILE"
			showLog "After the recovery is complete, visit http://ip:9091/ again in the browser to see the official UI."
		else
			showLog "Transmission Web Control Directory does not exist."
			sleep 2
			showMainMenu
		fi
	else
		showLog "The official UI does not exist."
		sleep 2
		showMainMenu
	fi
}

# 重新下载安装脚本
downloadInstallScript() {
	if [ -f "$SCRIPT_NAME" ]; then
		rm "$SCRIPT_NAME"
	fi
	showLog "Re-downloading the installation script..."
	wget "https://github.com/ronggang/transmission-web-control/raw/master/release/$SCRIPT_NAME" --no-check-certificate
	# 判断是否下载成功
	if [ $? -eq 0 ]; then
		showLog "The download is complete. Please re-run the installation script."
	else 
		showLog "Installation script failed to download!"
		sleep 2
		showMainMenu
	fi
}

# 执行
showMainMenu