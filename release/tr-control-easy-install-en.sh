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
# find web ui folder
folderIsExist=0
echo "Searching Transmission Web Folder..."
rootFolder="/usr/share/transmission"
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

# if the folder does not exist，then do download and installation
if [ $folderIsExist = 1 ]; then
        mkdir "$tmpFolder"
        cd "$tmpFolder"
      	echo "Downloading Transmission Web Control..."
      	wget "$downloadurl"
      	echo "Installing..."
        mkdir web
      	tar -xzf "$packname" -C "$tmpFolder/web"
      	rm "$packname"
	    # if did not install before，then change the original system file name
      	if [ ! -f "$webFolder/$orgindex" -a -f "$webFolder/$index" ]; then
      		      mv "$webFolder/$index" "$webFolder/$orgindex"
      	fi
	    # copy the files to folder
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
