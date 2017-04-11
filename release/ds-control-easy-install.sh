#! /bin/sh
rootFolder=""
webFolder=""
shareFolder="/usr/local/share"
orgindex="index.original.html"
index="index.html"
tmpFolder="/tmp/tr-web-control/"
packname="transmission-control-full.tar.gz"
oldpackname="transmission-web-control.tar.gz"
host="https://github.com/hitechbeijing/transmission-web-control/raw/master/release/"
downloadurl="$host$oldpackname"
downloadurlfull="$host$packname"
if [ ! -d "$tmpFolder" ]; then
	cd /tmp
	mkdir tr-web-control
fi
cd "$tmpFolder"
# 找出web ui 目录
folderIsExist=0
echo "Searching Transmission Web Folder..."

# 感谢 yumin9822 提供的代码
rootFolder="/var/packages/DownloadStation/target"

echo "Folder: ""$rootFolder""..."
if [ -d "$rootFolder" ]; then
	webFolder="$rootFolder""web/"
	folderIsExist=1
fi

# 如果目录存在，则进行下载和更新动作
if [ $folderIsExist = 1 ]; then
	echo "Downloading and Installing Transmission Web Control..."
	wget "$downloadurl"
	tar -xzf "$oldpackname"
	mv "$tmpFolder/web/$index" "$tmpFolder/web/$orgindex"
	rm "$oldpackname"
	wget "$downloadurlfull"
	tar -xzf "$packname"
	rm "$packname"
	# 复制文件到
	cp -r "$tmpFolder/web" "$rootFolder"
	# 改权限
	cd "$rootFolder"
	chown DownloadStation:DownloadStation web
	cd "$rootFolder/web"
	chown -R DownloadStation:DownloadStation *
	chown DownloadStation:DownloadStation *
	# 建软链接
	if [ ! -d "$shareFolder" ]; then
	cd /usr/local
	mkdir share
fi
    cd "$shareFolder"
    mkdir transmission
	ln -s "$rootFolder/web" "$shareFolder/transmission/web"
	echo "Done."
else
	echo "##############################################"
	echo "#"
	echo "# ERROR : DownloadStation Folder is missing."
	echo "#"
	echo "##############################################"
fi
rm -rf "$tmpFolder"