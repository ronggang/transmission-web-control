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
# find web ui folder
folderIsExist=0
echo "Searching Transmission Web Folder..."

# thanks yumin9822 for this piece of code
rootFolder=`find / -name 'web' -type d | grep 'transmission/web' | head -n 1 | sed 's/web.*$//g'`

echo "Folder: ""$rootFolder""..."
if [ -d "$rootFolder""web/" ]; then
	webFolder="$rootFolder""web/"
	folderIsExist=1
fi

# if the folder does not exist，then do download and installation
if [ $folderIsExist = 1 ]; then
	echo "Transmission Web Control Is Downloading..."
	wget "$donwloadurl" --no-check-certificate
	echo "Installing..."
	tar -xzf "$packname"
	rm "$packname"
	# if did not install before，then change the original system file name
	if [ ! -f "$webFolder$orgindex" -a -f "$webFolder$index" ]; then
		mv "$webFolder$index" "$webFolder$orgindex"
	fi
	# copy the files to folder
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
