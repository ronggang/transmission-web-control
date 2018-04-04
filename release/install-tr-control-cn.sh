#!/bin/sh
# 获取第一个参数做为目录
ROOT_FOLDER="$1"
SCRIPT_VERSION="1.1.0"
VERSION="$2"
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

# 开始
main() {
	begin
	# 判断临时目录是否存在，不存在则创建
	if [ ! -d "$TMP_FOLDER" ]; then
		mkdir -p "$TMP_FOLDER"
	fi

	if [ "$VERSION" = "" ]; then
		VERSION="$ROOT_FOLDER"
	fi

	# 判断 ROOT_FOLDER 是否为一个有效的目录，如果是则表明传递了一个有效路径
	if [ -d "$ROOT_FOLDER" ]; then
		showLog "使用参数: $ROOT_FOLDER"
		INSTALL_TYPE=3
		WEB_FOLDER="$ROOT_FOLDER/web"
		SKIP_SEARCH=1
	fi

	# 判断是否指定了版本
	if [ "$VERSION" != "" ]; then
		showLog "您正在使用指定版本安装，版本：$VERSION"
		PACK_NAME="v$VERSION.tar.gz"
		DOWNLOAD_URL="https://github.com/ronggang/transmission-web-control/archive/$PACK_NAME"
	fi	

	if [ $SKIP_SEARCH = 0 ]; then
		# 查找目录
		findWebFolder
	fi

	# 安装
	install
	# 清理
	clear
}

# 查找Web目录
findWebFolder() {
	# 找出web ui 目录
	showLog "正在搜索 Transmission Web 目录..."
	# 指定一次当前系统的默认目录
	# 用户如知道自己的 Transmission Web 所在的目录，直接修改这个值，以避免搜索所有目录
	ROOT_FOLDER="/usr/local/transmission/share/transmission"
	# Fedora 或 Debian 发行版的默认 ROOT_FOLDER 目录
	if [ -f /etc/fedora-release ] || [ -f "/etc/debian_version" ]; then
		ROOT_FOLDER="/usr/share/transmission"
	fi
		
	# 判断 TRANSMISSION_WEB_HOME 环境变量是否被定义，如果是，直接用这个变量的值
	if [ $TRANSMISSION_WEB_HOME ]; then
		showLog "使用 TRANSMISSION_WEB_HOME 变量: $TRANSMISSION_WEB_HOME"
		# 判断目录是否存在，如果不存在则创建 https://github.com/ronggang/transmission-web-control/issues/167
		if [ ! -d "$TRANSMISSION_WEB_HOME" ]; then
         mkdir -p "$TRANSMISSION_WEB_HOME"
      fi
		INSTALL_TYPE=2
	else
		showLog "判断 $ROOT_FOLDER/web 是否可用"
		if [ -d "$ROOT_FOLDER/web" ]; then
			WEB_FOLDER="$ROOT_FOLDER/web"
			INSTALL_TYPE=1
			showLog "$ROOT_FOLDER/web 可用."
		else
			showLog "指定的目录不存在，准备进行搜索，请稍候..."
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
		showLog "正在尝试指定版本 $VERSION"
		# 下载最新的安装包
		download
		# 
		unpack

		showLog "正在复制安装包..."
		# 复制文件到
		cp -r "$TMP_FOLDER/transmission-web-control-$VERSION/src/." "$WEB_FOLDER/"

		showLog "正在设置权限..."
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
		
		showLog "正在复制安装包..."
		# 复制文件到
		cp -r web "$ROOT_FOLDER"

		showLog "正在设置权限..."
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

		showLog "正在设置权限..."
		# 设置权限
		find "$TRANSMISSION_WEB_HOME" -type d -exec chmod o+rx {} \;
		find "$TRANSMISSION_WEB_HOME" -type f -exec chmod o+r {} \;

		# 安装完成
		installed
	else
		echo "##############################################"
		echo "#"
		echo "# 错误 : Transmisson WEB 目录不存在，请确认是否已安装 Transmisson 。"
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
		echo -n "\n$PACK_NAME 已存在，是否重新下载？（y/n）"
		read flag
		if [ "$flag" = "y" -o "$flag" = "Y" ] ; then
			rm "$PACK_NAME"
		else
			showLog "\n跳过下载，正在准备安装"
			return 0
		fi
	fi
	showLog "正在下载 Transmission Web Control...\n"
	wget "$DOWNLOAD_URL" --no-check-certificate
	# 判断是否下载成功
	if [ $? -eq 0 ]; then
		showLog "下载完成，正在准备安装..."
		return 0
	else 
		showLog "安装包下载失败，请重试或尝试其他版本。"
		end
		exit 1
	fi
}

# 安装完成
installed() {
	showLog "Transmission Web Control 安装完成!"
}

# 输出日志
showLog() {
	echo "=== TR WEB Control === >>>>> $1"
}

# 解压安装包
unpack() {
	showLog "正在解压安装包..."
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
	showLog "正在清理安装包..."
	if [ -f "$PACK_NAME" ]; then
		# 删除安装包
		rm "$PACK_NAME"
	fi

	if [ -d "$TMP_FOLDER" ]; then
		# 删除临时目录
		rm -rf "$TMP_FOLDER"
	fi

	showLog "安装脚本执行完成。如遇到问题请查看：https://github.com/ronggang/transmission-web-control/wiki "
	end
}

begin() {
	echo ""
	showLog "== 开始 =="
	showLog ""
	showLog "欢迎使用 Transmission Web Control 中文安装脚本，当前脚本版本：$SCRIPT_VERSION"
	showLog ""	
}

end() {
	showLog "== 结束 ==\n"
}

# 执行
main