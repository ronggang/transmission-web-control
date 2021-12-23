#!/bin/bash
# 获取第一个参数
ARG1="$1"
ROOT_FOLDER=""
SCRIPT_NAME="$0"
SCRIPT_VERSION="1.2.3"
VERSION=""
WEB_FOLDER=""
ORG_INDEX_FILE="index.original.html"
INDEX_FILE="index.html"
TMP_FOLDER="/tmp/tr-web-control"
PACK_NAME="master.tar.gz"
WEB_HOST="https://github.com/ronggang/transmission-web-control/archive/"
DOWNLOAD_URL="$WEB_HOST$PACK_NAME"
# 安装类型
# 1 安装至当前 Transmission Web 所在目录
# 2 安装至 TRANSMISSION_WEB_HOME 环境变量指定的目录，参考：https://github.com/transmission/transmission/wiki/Environment-Variables#transmission-specific-variables
# 使用环境变量时，如果 transmission 不是当前用户运行的，则需要将 TRANSMISSION_WEB_HOME 添加至 /etc/profile 文件，以达到“永久”的目的
# 3 用户指定参数做为目录，如 sh install-tr-control.sh /usr/local/transmission/share/transmission
INSTALL_TYPE=-1
SKIP_SEARCH=0
AUTOINSTALL=0
if which whoami 2>/dev/null; then
	USER=`whoami`
fi

#==========================================================
MSG_TR_WORK_FOLDER="当前 Transmission Web 目录为: "
MSG_SPECIFIED_VERSION="您正在使用指定版本安装，版本："
MSG_SEARCHING_TR_FOLDER="正在搜索 Transmission Web 目录..."
MSG_THE_SPECIFIED_DIRECTORY_DOES_NOT_EXIST="指定的目录不存在，准备进行搜索，请稍候..."
MSG_USE_WEB_HOME="使用 TRANSMISSION_WEB_HOME 变量: $TRANSMISSION_WEB_HOME"
MSG_AVAILABLE="可用"
MSG_TRY_SPECIFIED_VERSION="正在尝试指定版本"
MSG_PACK_COPYING="正在复制安装包..."
MSG_WEB_PATH_IS_MISSING="错误 : Transmisson WEB 目录不存在，请确认是否已安装 Transmisson 。"
MSG_PACK_IS_EXIST=" 已存在，是否重新下载？（y/n）"
MSG_SIKP_DOWNLOAD="\n跳过下载，正在准备安装"
MSG_DOWNLOADING="正在下载 Transmission Web Control..."
MSG_DOWNLOAD_COMPLETE="下载完成，正在准备安装..."
MSG_DOWNLOAD_FAILED="安装包下载失败，请重试或尝试其他版本。"
MSG_INSTALL_COMPLETE="Transmission Web Control 安装完成!"
MSG_PACK_EXTRACTING="正在解压安装包..."
MSG_PACK_CLEANING_UP="正在清理安装包..."
MSG_DONE="安装脚本执行完成。如遇到问题请查看：https://github.com/ronggang/transmission-web-control/wiki "
MSG_SETTING_PERMISSIONS="正在设置权限，大约需要一分钟 ..."
MSG_BEGIN="开始"
MSG_END="结束"
MSG_MAIN_MENU="
	欢迎使用 Transmission Web Control 中文安装脚本。
	官方帮助文档：https://github.com/ronggang/transmission-web-control/wiki 
	安装脚本版本：$SCRIPT_VERSION 

	1. 安装最新的发布版本（release）；
	2. 安装指定版本，可用于降级；
	3. 恢复到官方UI；
	4. 重新下载安装脚本（$SCRIPT_NAME）；
	5. 检测 Transmission 是否已启动；
	6. 指定安装目录；
	9. 安装最新代码库中的内容（master）；
	===================
	0. 退出安装；

	请输入对应的数字："
MSG_INPUT_VERSION="请输入版本号（如：1.5.1）："
MSG_INPUT_TR_FOLDER="请输入 Transmission Web 所在的目录（不包含web，如：/usr/share/transmission）："
MSG_SPECIFIED_FOLDER="安装目录已指定为："
MSG_INVALID_PATH="输入的路径无效。"
MSG_MASTER_INSTALL_CONFIRM="最新代码可能包含未知错误，是否确认安装？ (y/n): "
MSG_FIND_WEB_FOLDER_FROM_PROCESS="正在尝试从进程中识别 Transmission Web 目录..."
MSG_FIND_WEB_FOLDER_FROM_PROCESS_FAILED=" × 识别失败，请确认 Transmission 已启动。"
MSG_CHECK_TR_DAEMON="正在检测 Transmission 进程..."
MSG_CHECK_TR_DAEMON_FAILED="在系统进程中没有找到 Transmission ，请确认是否已启动。"
MSG_TRY_START_TR="是否尝试启动 Transmission ？（y/n）"
MSG_TR_DAEMON_IS_STARTED="Transmission 已启动。"
MSG_REVERTING_ORIGINAL_UI="正在恢复官方UI..."
MSG_REVERT_COMPLETE="恢复完成，在浏览器中重新访问 http://ip:9091/ 或刷新即可查看官方UI。"
MSG_ORIGINAL_UI_IS_MISSING="官方UI不存在。"
MSG_DOWNLOADING_INSTALL_SCRIPT="正在重新下载安装脚本..."
MSG_INSTALL_SCRIPT_DOWNLOAD_COMPLETE="下载完成，请重新运行安装脚本。"
MSG_INSTALL_SCRIPT_DOWNLOAD_FAILED="安装脚本下载失败！"
MSG_NON_ROOT_USER="无法确认当前是否为 root 用户，可能无法进行安装操作。是否继续？（y/n）"
#==========================================================

# 是否自动安装
if [ "$ARG1" = "auto" ]; then
	AUTOINSTALL=1
else
	ROOT_FOLDER=$ARG1
fi

initValues() {
	# 判断临时目录是否存在，不存在则创建
	if [ ! -d "$TMP_FOLDER" ]; then
		mkdir -p "$TMP_FOLDER"
	fi

    # 判断是否指定了ROOT_FOLDER
    if [ "$ROOT_FOLDER" == "" ]; then
        # 获取 Transmission 目录
        getTransmissionPath
    fi
	# 判断 ROOT_FOLDER 是否为一个有效的目录，如果是则表明传递了一个有效路径
	if [ -d "$ROOT_FOLDER" ]; then
		showLog "$MSG_TR_WORK_FOLDER $ROOT_FOLDER/web"
		INSTALL_TYPE=3
		WEB_FOLDER="$ROOT_FOLDER/web"
		SKIP_SEARCH=1
	fi

	# 判断是否指定了版本
	if [ "$VERSION" != "" ]; then
		# master 或 hash
		if [ "$VERSION" = "master" -o ${#VERSION} = 40 ]; then
			PACK_NAME="$VERSION.tar.gz"
		# 是否指定了 v
		elif [ ${VERSION:0:1} = "v" ]; then
			PACK_NAME="$VERSION.tar.gz"
			VERSION=${VERSION:1}
		else
			PACK_NAME="v$VERSION.tar.gz"
		fi
		showLog "$MSG_SPECIFIED_VERSION $VERSION"
		
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
	showLog "$MSG_SEARCHING_TR_FOLDER"
		
	# 判断 TRANSMISSION_WEB_HOME 环境变量是否被定义，如果是，直接用这个变量的值
	if [ $TRANSMISSION_WEB_HOME ]; then
		showLog "$MSG_USE_WEB_HOME"
		# 判断目录是否存在，如果不存在则创建 https://github.com/ronggang/transmission-web-control/issues/167
		if [ ! -d "$TRANSMISSION_WEB_HOME" ]; then
         mkdir -p "$TRANSMISSION_WEB_HOME"
      fi
		INSTALL_TYPE=2
	else
		if [ -d "$ROOT_FOLDER" -a -d "$ROOT_FOLDER/web" ]; then
			WEB_FOLDER="$ROOT_FOLDER/web"
			INSTALL_TYPE=1
			showLog "$ROOT_FOLDER/web $MSG_AVAILABLE."
		else
			showLog "$MSG_THE_SPECIFIED_DIRECTORY_DOES_NOT_EXIST"
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
		showLog "$MSG_TRY_SPECIFIED_VERSION $VERSION"
		# 下载安装包
		download
		# 解压安装包
		unpack

		showLog "$MSG_PACK_COPYING"
		# 复制文件到
		cp -r "$TMP_FOLDER/transmission-web-control-$VERSION/src/." "$WEB_FOLDER/"
		# 设置权限
		setPermissions "$WEB_FOLDER"
		# 安装完成
		installed

	# 如果目录存在，则进行下载和更新动作
	elif [ $INSTALL_TYPE = 1 -o $INSTALL_TYPE = 3 ]; then
		# 下载安装包
		download
		# 创建web文件夹，从 20171014 之后，打包文件不包含web目录，直接打包为src下所有文件
		mkdir web
		
		# 解压缩包
		unpack "web"
		
		showLog "$MSG_PACK_COPYING"
		# 复制文件到
		cp -r web "$ROOT_FOLDER"
		# 设置权限
		setPermissions "$ROOT_FOLDER"
		# 安装完成
		installed

	elif [ $INSTALL_TYPE = 2 ]; then
		# 下载安装包
		download
		# 解压缩包
		unpack "$TRANSMISSION_WEB_HOME"
		# 设置权限
		setPermissions "$TRANSMISSION_WEB_HOME"
		# 安装完成
		installed

	else
		echo "##############################################"
		echo "#"
		echo "# $MSG_WEB_PATH_IS_MISSING"
		echo "#"
		echo "##############################################"
	fi
}

# 下载安装包
download() {
	# 切换到临时目录
	cd "$TMP_FOLDER"
	# 判断安装包文件是否已存在
	if [ -f "$PACK_NAME" ]; then
		if [ $AUTOINSTALL = 0 ]; then
			echo -n "\n$PACK_NAME $MSG_PACK_IS_EXIST"
			read flag
		else
			flag="y"
		fi

		if [ "$flag" = "y" -o "$flag" = "Y" ] ; then
			rm "$PACK_NAME"
		else
			showLog "$MSG_SIKP_DOWNLOAD"
			return 0
		fi
	fi
	showLog "$MSG_DOWNLOADING"
	echo ""
	wget "$DOWNLOAD_URL" --no-check-certificate
	# 判断是否下载成功
	if [ $? -eq 0 ]; then
		showLog "$MSG_DOWNLOAD_COMPLETE"
		return 0
	else 
		showLog "$MSG_DOWNLOAD_FAILED"
		end
		exit 1
	fi
}

# 安装完成
installed() {
	showLog "$MSG_INSTALL_COMPLETE"
}

# 输出日志
showLog() {
	TIME=`date "+%Y-%m-%d %H:%M:%S"`

	case $2 in
		"n")
			echo -n "<< $TIME >> $1" ;;
		*)
			echo "<< $TIME >> $1" ;;
	esac
	
}

# 解压安装包
unpack() {
	showLog "$MSG_PACK_EXTRACTING"
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
	showLog "$MSG_PACK_CLEANING_UP"
	if [ -f "$PACK_NAME" ]; then
		# 删除安装包
		rm "$PACK_NAME"
	fi

	if [ -d "$TMP_FOLDER" ]; then
		# 删除临时目录
		rm -rf "$TMP_FOLDER"
	fi

	showLog "$MSG_DONE"
	end
}

# 设置权限
setPermissions() {
	folder="$1"
	showLog "$MSG_SETTING_PERMISSIONS"
	# 设置权限
	find "$folder" -type d -exec chmod o+rx {} \;
	find "$folder" -type f -exec chmod o+r {} \;
}

# 开始
begin() {
	echo ""
	showLog "== $MSG_BEGIN =="
	showLog ""
}

# 结束
end() {
	showLog "== $MSG_END =="
	echo ""
}

# 显示主菜单
showMainMenu() {
	echo -n "$MSG_MAIN_MENU"
	read flag
	echo ""
	case $flag in
		1)
			getLatestReleases
			main
			;;

		2)
			echo -n "$MSG_INPUT_VERSION"
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

		6)
			echo -n "$MSG_INPUT_TR_FOLDER"
			read input
			if [ -d "$input/web" ]; then
				ROOT_FOLDER="$input"
				showLog "$MSG_SPECIFIED_FOLDER $input/web"
			else
				showLog "$MSG_INVALID_PATH"
			fi
			sleep 2
			showMainMenu
			;;
		
		# 下载最新的代码
		9)
			echo -n "$MSG_MASTER_INSTALL_CONFIRM"
			read input
			if [ "$input" = "y" -o "$input" = "Y" ]; then
				VERSION="master"
				main
			else
				showMainMenu
			fi
			;;
		*)
			showLog "$MSG_END"
			;;
	esac
}

# 获取Tr所在的目录
getTransmissionPath() {
	# 指定一次当前系统的默认目录
	# 用户如知道自己的 Transmission Web 所在的目录，直接修改这个值，以避免搜索所有目录
	# ROOT_FOLDER="/usr/local/transmission/share/transmission"
	# Fedora 或 Debian 发行版的默认 ROOT_FOLDER 目录
	if [ -f "/etc/fedora-release" ] || [ -f "/etc/debian_version" ] || [ -f "/etc/openwrt_release" ]; then
		ROOT_FOLDER="/usr/share/transmission"
	fi
	
	if [ -f "/bin/freebsd-version" ]; then
		ROOT_FOLDER="/usr/local/share/transmission"
	fi

	# 群晖
	if [ -f "/etc/synoinfo.conf" ]; then
		ROOT_FOLDER="/var/packages/transmission/target/share/transmission"
	fi

	if [ ! -d "$ROOT_FOLDER" ]; then
		showLog "$MSG_FIND_WEB_FOLDER_FROM_PROCESS" "n"
		infos=`ps -Aww -o command= | sed -r -e '/[t]ransmission-da/!d' -e 's/ .+//'`
		if [ "$infos" != "" ]; then
			echo " √"
			search="bin/transmission-daemon"
			replace="share/transmission"
			path=${infos//$search/$replace}
			if [ -d "$path" ]; then
				ROOT_FOLDER=$path
			fi
		else
			echo "$MSG_FIND_WEB_FOLDER_FROM_PROCESS_FAILED"
		fi
	fi
}

# 获取最后的发布版本号
# 因在源码库里提交二进制文件不便于管理，以后将使用这种方式获取最新发布的版本
getLatestReleases() {
	VERSION=`wget -O - https://api.github.com/repos/ronggang/transmission-web-control/releases/latest | grep tag_name | head -n 1 | cut -d '"' -f 4`
}

# 检测 Transmission 进程是否存在
checkTransmissionDaemon() {
	showLog "$MSG_CHECK_TR_DAEMON"
	ps -C transmission-daemon
	if [ $? -ne 0 ]; then
		showLog "$MSG_CHECK_TR_DAEMON_FAILED"
		echo -n "$MSG_TRY_START_TR"
		read input
		if [ "$input" = "y" -o "$input" = "Y" ] ; then
			service transmission-daemon start
		fi
	else
		showLog "$MSG_TR_DAEMON_IS_STARTED"
	fi
	sleep 2
	showMainMenu
}

# 恢复官方UI
revertOriginalUI() {
	initValues
	# 判断是否有官方的UI存在
	if [ -f "$WEB_FOLDER/$ORG_INDEX_FILE" ]; then
		showLog "$MSG_REVERTING_ORIGINAL_UI"
		# 清除原来的内容
		if [ -d "$WEB_FOLDER/tr-web-control" ]; then
			rm -rf "$WEB_FOLDER/tr-web-control"
			rm "$WEB_FOLDER/favicon.ico"
			rm "$WEB_FOLDER/index.html"
			rm "$WEB_FOLDER/index.mobile.html"
			mv "$WEB_FOLDER/$ORG_INDEX_FILE" "$WEB_FOLDER/$INDEX_FILE"
			showLog "$MSG_REVERT_COMPLETE"
		else
			showLog "$MSG_WEB_PATH_IS_MISSING"
			sleep 2
			showMainMenu
		fi
	else
		showLog "$MSG_ORIGINAL_UI_IS_MISSING"
		sleep 2
		showMainMenu
	fi
}

# 重新下载安装脚本
downloadInstallScript() {
	if [ -f "$SCRIPT_NAME" ]; then
		rm "$SCRIPT_NAME"
	fi
	showLog "$MSG_DOWNLOADING_INSTALL_SCRIPT"
	wget "https://github.com/ronggang/transmission-web-control/raw/master/release/$SCRIPT_NAME" --no-check-certificate
	# 判断是否下载成功
	if [ $? -eq 0 ]; then
		showLog "$MSG_INSTALL_SCRIPT_DOWNLOAD_COMPLETE"
	else 
		showLog "$MSG_INSTALL_SCRIPT_DOWNLOAD_FAILED"
		sleep 2
		showMainMenu
	fi
}

if [ "$USER" != 'root' ]; then
	showLog "$MSG_NON_ROOT_USER" "n"
	read input
	if [ "$input" = "n" -o "$input" = "N" ]; then
		exit -1
	fi
fi

if [ $AUTOINSTALL = 1 ]; then
	getLatestReleases
	main
else
	# 执行
	showMainMenu
fi
