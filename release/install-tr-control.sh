#!/bin/sh
# 获取第一个参数做为目录
ROOT_FOLDER="$1"
WEB_FOLDER=""
ORG_INDEX_FILE="index.original.html"
INDEX_FILE="index.html"
TMP_FOLDER="/tmp/tr-web-control"
PACK_NAME="src.tar.gz"
WEB_HOST="https://github.com/ronggang/transmission-web-control/raw/master/release/"
DOWNLOAD_URL="$WEB_HOST$PACK_NAME"
# 安装类型
# 1 安装至当前 Transmission Web 所在目录
# 2 安装至 TRANSMISSION_WEB_HOME 环境变量指定的目录，参考：https://github.com/transmission/transmission/wiki/Environment-Variables#transmission-specific-variables
# 使用环境变量时，如果 transmission 不是当前用户运行的，则需要将 TRANSMISSION_WEB_HOME 添加至 /etc/profile 文件，以达到“永久”的目的
# 3 用户指定参数做为目录，如 sh install-tr-control.sh /usr/local/transmission/share/transmission
INSTALL_TYPE=-1

# 开始
main() {
	# 判断临时目录是否存在，不存在则创建
	if [ ! -d "$TMP_FOLDER" ]; then
		mkdir -p "$TMP_FOLDER"
	fi

	# 判断 ROOT_FOLDER 是否为一个有效的目录，如果是则表明传递了一个有效路径
	if [ -d "$ROOT_FOLDER" ]; then
		echo "use arg: $ROOT_FOLDER"
		INSTALL_TYPE=3
		WEB_FOLDER="$ROOT_FOLDER/web"
	else
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
	echo "Searching Transmission Web Folder..."
	# 指定一次当前系统的默认目录
	# 用户如知道自己的 Transmission Web 所在的目录，直接修改这个值，以避免搜索所有目录
	ROOT_FOLDER="/usr/local/transmission/share/transmission"
	# Fedora 或 Debian 发行版的默认 ROOT_FOLDER 目录
	if [ -f /etc/fedora-release ] || [ -f "/etc/debian_version" ]; then
		ROOT_FOLDER="/usr/share/transmission"
	fi
		
	# 判断 TRANSMISSION_WEB_HOME 环境变量是否被定义，如果是，直接用这个变量的值
	if [ $TRANSMISSION_WEB_HOME ]; then
		echo "use TRANSMISSION_WEB_HOME: $TRANSMISSION_WEB_HOME"
		INSTALL_TYPE=2
	else
		echo "Looking for folder: $ROOT_FOLDER/web"
		if [ -d "$ROOT_FOLDER/web" ]; then
			WEB_FOLDER="$ROOT_FOLDER/web"
			INSTALL_TYPE=1
			echo "Folder found. Using it."
		else
			echo "Folder not found. Will search the entire /. This will take a while..."
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
	# 如果目录存在，则进行下载和更新动作
	if [ $INSTALL_TYPE = 1 -o $INSTALL_TYPE = 3 ]; then
		# 下载最新的安装包
		download
		echo "Installing..."
		# 创建web文件夹，从 20171014 之后，打包文件不包含web目录，直接打包为src下所有文件
		mkdir web
		# 解压缩包
		tar -xzf "$PACK_NAME" -C "web"
		# 如果之前没有安装过，则先将原系统的文件改为
		if [ ! -f "$WEB_FOLDER/$ORG_INDEX_FILE" -a -f "$WEB_FOLDER/$INDEX_FILE" ]; then
			mv "$WEB_FOLDER/$INDEX_FILE" "$WEB_FOLDER/$ORG_INDEX_FILE"
		fi
		# 复制文件到
		cp -r web "$ROOT_FOLDER"

		# 设置权限
		find "$ROOT_FOLDER" -type d -exec chmod o+rx {} \;
		find "$ROOT_FOLDER" -type f -exec chmod o+r {} \;

		# 安装完成
		installed
	elif [ $INSTALL_TYPE = 2 ]; then
		# 下载最新的安装包
		download
		echo "Installing..."
		# 解压缩包
		tar -xzf "$PACK_NAME" -C "$TRANSMISSION_WEB_HOME"
		# 安装完成
		installed
	else
		echo "##############################################"
		echo "#"
		echo "# ERROR : Transmisson WEB UI Folder is missing."
		echo "#"
		echo "##############################################"
	fi
}

# 下载最新的安装包
download() {
	cd "$TMP_FOLDER"
	echo "Downloading Transmission Web Control..."
	wget "$DOWNLOAD_URL" --no-check-certificate
}

# 安装完成
installed() {
	echo "Transmission Web Control Installation completed!"
}

# 清除工作
clear() {
	# 删除安装包
	rm "$PACK_NAME"
	# 删除临时目录
	rm -rf "$TMP_FOLDER"
}

# 执行
main
