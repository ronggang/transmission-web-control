## Warning
####THIS IS NOT OFFICIAL RELEASE
For official release, plese visit https://github.com/ronggang/transmission-web-control

-----
## Introduction
-------------------
Transmission Web Control is a custom web UI. The project began in [Google Code](https://code.google.com/p/transmission-control/). 

### Support Transmission Version
 - Transmission 2.40 and above (RPC version: 14 and above)

### Features
 - Add torrent files or URLs
 - Drag-and-drop to add torrent files
 - Online modify the Transmission setting (Download folder,Speed ​​limit,Port,etc.)
 - Pause / resume / recheck selected or all torrents
 - View the current torrents status (Files,Peers,Trackers,etc.)
 - View Statistics(Cumulative/Current)
 - The pagination torrents
 - Set files priority
 - Change the torrent download directory
 - Trackers list
 - ...

### Browsers support
 - All browsers support HTML5. (Chrome 15.0.874，Firefox 8.0.1，IE 9.0.8112，Opera 11.52 etc.)

### Multi-language
#### How to use the language pack:
 - All language files are needed to put in the "lang" directory, format refer "lang/en.js";
 - Translated language file naming, and then copied to the lang directory, note that necessary ".js" suffix, such as: en.js;
 - Modify the the "lang/`_`languages.js" file, the new language format to add a line;
 - Regain access to the TR, if your browser's default configuration language "`_`languages.js" where it will automatically display the current language, if not, please manually select the language or the end of the page plus "?lang=language"; such as: 192.168.1.1/transmission/web/?lang=en

#### Currently supported languages：
 - `2013-04-22` [Simplified Chinese](https://github.com/ronggang/transmission-web-control/raw/master/src/tr-web-control/lang/zh-CN.js) @ronggang
 - `2014-02-09` [Traditional Chinese](https://github.com/ronggang/transmission-web-control/raw/master/src/tr-web-control/lang/zh-TW.js) @Sean
 - `2013-04-22` [English](https://github.com/ronggang/transmission-web-control/raw/master/src/tr-web-control/lang/en.js) @ronggang
 - `2014-02-09` [Russian](https://github.com/ronggang/transmission-web-control/raw/master/src/tr-web-control/lang/ru.js) @Oleksandr Gureiev & @irherder
 - `2013-04-17` [Spanish](https://github.com/ronggang/transmission-web-control/raw/master/src/tr-web-control/lang/es.js) @Adrián González
 - `2013-02-05` [Polish](https://github.com/ronggang/transmission-web-control/raw/master/src/tr-web-control/lang/pl.js) @Daniel Kolek
 - `2013-11-11` [Hungarian](https://github.com/ronggang/transmission-web-control/raw/master/src/tr-web-control/lang/hu.js) @Swartzy
 - `2013-05-18` [Romanian](https://github.com/ronggang/transmission-web-control/raw/master/src/tr-web-control/lang/ro.js) @Laurentiu Dinulescu
 - `2013-05-28` [Italian](https://github.com/ronggang/transmission-web-control/raw/master/src/tr-web-control/lang/it.js) @Daniele Buccilli
 - `2014-02-12` [Brazilian Portuguese](https://github.com/ronggang/transmission-web-control/raw/master/src/tr-web-control/lang/pt-BR.js) @Dudu Maroja & @pcgaldo
 - `2013-08-20` [Dutch/Flemmisch](https://github.com/ronggang/transmission-web-control/raw/master/src/tr-web-control/lang/nl.js) @Alwin Hummels
 - `2013-09-12` [French](https://github.com/ronggang/transmission-web-control/raw/master/src/tr-web-control/lang/fr.js) @Amaury Aubry
 - `2013-12-05` [Korean](https://github.com/ronggang/transmission-web-control/raw/master/src/tr-web-control/lang/ko.js) @kdsz330
 - `2014-02-12` [European Portuguese](https://github.com/ronggang/transmission-web-control/raw/master/src/tr-web-control/lang/pt-PT.js) @pcgaldo
 - `2015-09-11` [Ukrainian](https://github.com/ronggang/transmission-web-control/blob/master/src/tr-web-control/lang/uk.js) @noreplyme
 - If you have translated a language pack, please upload it here issue 9

#### Quick install on Linux
- Download the "release/tr-control-easy-install.sh"
- Run "sudo tr-control-easy-install.sh"

### Download
 - You can get the latest version of the program for this address:
 - https://github.com/balonik/transmission-web-control/raw/master/release/transmission-control-full.tar.gz
 - Or download easy install script:
 - https://github.com/balonik/transmission-web-control/raw/master/release/tr-control-easy-install.sh

###### 创建于(Create): 2012.12.18；更新于(Update): 2014.10.13 By 栽培者(ronggang); (Update): 2017.01.02 ######
