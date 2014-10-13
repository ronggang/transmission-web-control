#! /bin/sh
rootFolder=""
webFolder=""
orgindex="index.original.html"
index="index.html"
tmpFolder="/tmp/tr-web-control/"
packname="transmission-control-full.tar.gz"
host="https://github.com/ronggang/transmission-web-control/raw/master/release/"
donwloadurl="$host$packname"
if [ ! -d "$tmpFolder" ]; then
	cd /tmp
	mkdir tr-web-control
fi
cd "$tmpFolder"
# 找出web ui 目录
folderIsExist=0
echo "Searching Transmission Web Folder..."

# 感谢 yumin9822 提供的代码
rootFolder=`find / -name 'web' -type d | grep 'transmission/web' | head -n 1 | sed 's/web.*$//g'`

echo "Folder: ""$rootFolder""..."
if [ -d "$rootFolder""web/" ]; then
	webFolder="$rootFolder""web/"
	folderIsExist=1
fi

# 如果目录存在，则进行下载和更新动作
if [ $folderIsExist = 1 ]; then
	echo "Transmission Web Control Is Downloading..."
	wget "$donwloadurl"
	echo "Installing..."
	tar -xzf "$packname"
	rm "$packname"
	# 如果之前没有安装过，则先将原系统的文件改为
	if [ ! -f "$webFolder$orgindex" -a -f "$webFolder$index" ]; then
		mv "$webFolder$index" "$webFolder$orgindex"
	fi
	# 复制文件到
	cp -r web "$rootFolder"
	echo "Done."
else
	echo "##############################################"
	echo "#"
	echo "# ERROR : Transmisson WEB UI Folder is missing."
	echo "#"
	echo "##############################################"
fi
rm -rf "$tmpFolder"