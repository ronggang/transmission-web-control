#!/bin/sh
rootFolder=""
webFolder=""
orgindex="index.original.html"
index="index.html"
tmpFolder="/tmp/tr-web-control"
packname="transmission-control-full.tar.gz"
host="https://github.com/ronggang/transmission-web-control/raw/master/release/"
downloadurl="$host$packname"
if [ ! -d "$tmpFolder" ]; then
	mkdir -p "$tmpFolder"
fi
# 找出web ui 目录
folderIsExist=0
echo "Searching Transmission Web Folder..."
rootFolder="usr/share/transmission"
echo "Looking for folder: $rootFolder/web"
if [ -d "$rootFolder/web" ]; then
	    webFolder="$rootFolder/web"
	    folderIsExist=1
      echo "Folder found. Using it."
else
      echo "Folder not found. Will search the entire /. This will take a while..."
      rootFolder=`find / -name 'web' -type d 2>/dev/null| grep 'transmission/web' | sed 's/\/web$//g'`

      if [ -d "$rootFolder/web" ]; then
	            webFolder="$rootFolder/web"
	            folderIsExist=1
      fi
fi

# 如果目录存在，则进行下载和更新动作
if [ $folderIsExist = 1 ]; then
        cd "$temFolder"
      	echo "Downloading Transmission Web Control..."
      	wget "$downloadurl"
      	echo "Installing..."
        mkdir web
      	tar -xzf "$packname" -C "$tmpFolder/web"
      	rm "$packname"
      	# 如果之前没有安装过，则先将原系统的文件改为
      	if [ ! -f "$webFolder/$orgindex" -a -f "$webFolder/$index" ]; then
      		      mv "$webFolder/$index" "$webFolder/$orgindex"
      	fi
      	# 复制文件到
      	cp -r web "$rootFolder"
        find "$rootFolder" -type d -exec chmod o+rx {} \;
        find "$rootFolder" -type f -exec chmod o+r {} \;
      	echo "Done."
else
      	echo "##############################################"
      	echo "#"
      	echo "# ERROR : Transmisson WEB UI Folder is missing."
      	echo "#"
      	echo "##############################################"
fi
rm -rf "$tmpFolder"
