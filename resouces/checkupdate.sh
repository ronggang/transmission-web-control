#! /bin/sh
rootFolder=""
webFolder=""
tmpFolder="/tmp/tr-web-control/"
packname="lastupdate.json"
host="http://transmission-control.googlecode.com/svn/resouces/"
donwloadurl="$host$packname"
if [ ! -d "$tmpFolder" ]; then
	cd /tmp
	mkdir tr-web-control
fi
cd "$tmpFolder"
wget "$host""checkfolders.lst"
# 找出web ui 目录
folderIsExist=0
for i in `/bin/cat "$tmpFolder"checkfolders.lst`
do
	if [ -d "$i""web/" ]; then
		rootFolder="$i"
		webFolder="$i""web/"
		folderIsExist=1
		break
	fi
done
# 如果目录存在，则进行下载和更新动作
if [ $folderIsExist = 1 ]; then
	cd "$webFolder"
	wget "$donwloadurl"
fi
rm -rf "$tmpFolder"