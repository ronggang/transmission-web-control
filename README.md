
## [English Introduction](#introduction)

### 目前项目已恢复正常维护，感谢 @DarkAlexWang 支持 :)
-----
关于
-----
本项目主要目的是想加强[Transmission](https://www.transmissionbt.com/) Web的操作能力，本项目原本在[Google Code](https://code.google.com/p/transmission-control/)托管，现迁移至GitHub。
本项目设计之初仅针对PT站，因此增加了 Tracker 服务器分组及状态，但这不并适用于普通BT种子。

### 界面预览
![tr-web-control](https://user-images.githubusercontent.com/8065899/32538836-0c2d970e-c42d-11e7-966d-84210bb41825.png)

### 支持的Transmission版本(Support Transmission Version)
 - Transmission 2.40 及以上版本（RPC版本：14及以上）
 - Transmission 2.40 and above (RPC version: 14 and above)

### [更新日志](https://github.com/ronggang/transmission-web-control/blob/master/CHANGELOG.md)

### 功能介绍
 - 在线查看Transmission当前工作情况；
 - 在线添加新的种子文件或连接；
 - 在线修改Transmission参数；
 - 分页浏览方式加载种子；
 - 多语言环境支持；
 - 文件拖放添加种子；
 - 删除指定的种子；
 - 批量修改 Tracker；
 - 移动指定种子的数据存放目录；
 - 可按 Trackers 分组浏览；
 - 增加对群晖 `Download Station` 的支持；By - @hitechbeijing
 - 其他……

### 浏览器支持
 - 所有支持HTML5的浏览器(Chrome 15.0.874，Firefox 8.0.1，IE 9.0.8112，Opera 11.52)

### 安装方法
 - 可通过以下地址获取最新版的程序：
~~~
  https://github.com/ronggang/transmission-web-control/raw/master/release/src.tar.gz
~~~
 - 或到下载安装脚本，此脚本只需要下载一次，以后只需要执行即可:
~~~
  wget https://github.com/ronggang/transmission-web-control/raw/master/release/install-tr-control.sh
  sudo bash install-tr-control.sh
~~~
 - 如果需要http而不是https，请使用以下命令:
~~~
  wget https://github.com/ronggang/transmission-web-control/raw/master/release/install-tr-control.sh --no-check-certificate
  sudo bash install-tr-control.sh
~~~
 - 如果需要安装到群晖 `Download Station`，请下载下列安装脚本并运行：
~~~
  wget https://github.com/ronggang/transmission-web-control/raw/master/release/ds-control-easy-install.sh
  sudo bash ds-control-easy-install-en-http.sh
~~~
 - 群晖 `Download Station` 安装注意事项，请参考这个 [Wiki](https://github.com/ronggang/transmission-web-control/wiki/%E5%85%B3%E4%BA%8E-Synology-Download-Station) 。

### 关于多语言(Multi-language)
系统使用多语言的方式构建，所以可以支持其他任何语言；但，由于本人水平有限，只会中文，所以需要懂其他语言的您的帮助，如果您已经翻译好了一个语言版本，欢迎提交 pull requests，我们会合并后分享给更多的用户，谢谢。

#### 当前已支持的语言(Currently supported languages)：
||语言|合作者|最近更新|
|-|-|-|-|
|🇨🇳|[简体中文](https://github.com/ronggang/transmission-web-control/raw/master/src/tr-web-control/lang/zh-CN.js)|栽培者, vodek3|[2017-04-14](https://github.com/ronggang/transmission-web-control/commits/master/src/tr-web-control/lang/zh-CN.js)|
|🇨🇳|[正體中文](https://github.com/ronggang/transmission-web-control/raw/master/src/tr-web-control/lang/zh-TW.js) |Sean, vodek3|[2017-04-14](https://github.com/ronggang/transmission-web-control/commits/master/src/tr-web-control/lang/zh-TW.js)|
|🇬🇧|[英语](https://github.com/ronggang/transmission-web-control/raw/master/src/tr-web-control/lang/en.js)|栽培者, ASAPHAANING, vodek3, DarkAlexWang|[2017-11-19](https://github.com/ronggang/transmission-web-control/commits/master/src/tr-web-control/lang/en.js)
|🇷🇺|[俄语](https://github.com/ronggang/transmission-web-control/raw/master/src/tr-web-control/lang/ru.js)|Oleksandr Gureiev, irherder, Isseq, DarkAlexWang, vodek3|[2017-11-21](https://github.com/ronggang/transmission-web-control/commits/master/src/tr-web-control/lang/ru.js)
|🇪🇸|[西班牙语](https://github.com/ronggang/transmission-web-control/raw/master/src/tr-web-control/lang/es.js)|Adrián González, malkavi, vodek3|[2017-04-14](https://github.com/ronggang/transmission-web-control/commits/master/src/tr-web-control/lang/es.js)
|🇵🇱|[波兰语](https://github.com/ronggang/transmission-web-control/raw/master/src/tr-web-control/lang/pl.js)|Daniel Kolek, Piotr Kozica, vodek3|[2017-04-14](https://github.com/ronggang/transmission-web-control/commits/master/src/tr-web-control/lang/pl.js)
|🇭🇺|[匈牙利语](https://github.com/ronggang/transmission-web-control/raw/master/src/tr-web-control/lang/hu.js)|Swartzy, Marcell, vodek3|[2017-04-14](https://github.com/ronggang/transmission-web-control/commits/master/src/tr-web-control/lang/hu.js)
|🇷🇴|[罗马尼亚](https://github.com/ronggang/transmission-web-control/raw/master/src/tr-web-control/lang/ro.js)|Laurentiu Dinulescu, vodek3|[2017-04-14](https://github.com/ronggang/transmission-web-control/commits/master/src/tr-web-control/lang/ro.js)
|🇮🇹|[意大利](https://github.com/ronggang/transmission-web-control/raw/master/src/tr-web-control/lang/it.js)|Daniele Buccilli, vodek3, Oliver Cervera|[2017-06-29](https://github.com/ronggang/transmission-web-control/commits/master/src/tr-web-control/lang/it.js)
|🇧🇷|[葡萄牙语（巴西）](https://github.com/ronggang/transmission-web-control/raw/master/src/tr-web-control/lang/pt-BR.js)|Dudu Maroja, pcgaldo, vodek3, Brivaldo Junior, DarkAlexWang|[2017-09-29](https://github.com/ronggang/transmission-web-control/commits/master/src/tr-web-control/lang/pt-BR.js)
|🇳🇱|[荷兰语](https://github.com/ronggang/transmission-web-control/raw/master/src/tr-web-control/lang/nl.js)|Alwin Hummels, Jeroen, vodek3|[2017-04-14](https://github.com/ronggang/transmission-web-control/commits/master/src/tr-web-control/lang/nl.js)
|🇫🇷|[法语](https://github.com/ronggang/transmission-web-control/raw/master/src/tr-web-control/lang/fr.js)|Amaury Aubry, ewan34500, vodek3|[2017-04-14](https://github.com/ronggang/transmission-web-control/commits/master/src/tr-web-control/lang/fr.js)
|🇰🇷|[韩语](https://github.com/ronggang/transmission-web-control/raw/master/src/tr-web-control/lang/ko.js)|kdsz330, vodek3|[2017-04-14](https://github.com/ronggang/transmission-web-control/commits/master/src/tr-web-control/lang/ko.js)
|🇵🇹|[葡萄牙语](https://github.com/ronggang/transmission-web-control/raw/master/src/tr-web-control/lang/pt-PT.js)|pcgaldo, vodek3|[2017-04-14](https://github.com/ronggang/transmission-web-control/commits/master/src/tr-web-control/lang/pt-PT.js)
|🇺🇦|[乌克兰语](https://github.com/ronggang/transmission-web-control/raw/master/src/tr-web-control/lang/uk.js)|Andrew, vodek3|[2017-04-14](https://github.com/ronggang/transmission-web-control/commits/master/src/tr-web-control/lang/uk.js)


-----
# Introduction
Transmission Web Control is a custom web UI. The project began in [Google Code](https://code.google.com/p/transmission-control/). Welcome to give me any feedback or submit a Pull Request.

### Support Transmission Version
 - Transmission 2.40 and above (RPC version: 14 and above)

### Fixed issues
I will do my best to fix the issues in this repo.
 - Updated the install tar file
 - Fixed several typos in English interface
 - Added http install script
 - Added install.sh with English comments
 - Updated easyui to 1.5.1 and jquery to 1.12.4 By -- @balonik
 - Fixed issue #20, #21, #23, #39, #40, #43, #44 #53 By -- @balonik
 - Replaced some Chinese comments to English
 - Fixed issue #77，#81 (Please clear your cookies if you encounter any error) By -- @balonik
 - Now the maximum number of torrents per page is 300，meanwhile, you can still modify the file config.js "pagination:true" to "pagination:false" in order to show ALL the torrents. By -- @balonik

### Features
 - Add torrent files or URLs
 - Drag-and-drop to add torrent files
 - Modify Transmission settings online (Download folder, Speed limit, Port, etc.)
 - Pause / resume / recheck selected or all torrents
 - View the current torrents status (Files, Peers, Trackers etc.)
 - View Statistics (Cumulative/Current)
 - Pagination
 - Set files priority
 - Change the torrent download directory
 - Trackers list
 - Add support for `Synology NAS Download Station`; By - @hitechbeijing

### Browsers support
 - A browser which supports HTML5. (Chrome 15.0.874，Firefox 8.0.1，IE 9.0.8112，Opera 11.52 etc.)

### Multi-language
#### How to use the language pack:
 - All language files are needed to put in the "lang" directory, format refer "lang/en.js";
 - Translated language file naming, and then copied to the lang directory, note that necessary ".js" suffix, such as: en.js;
 - Modify the the "lang/`_`languages.js" file, the new language format to add a line;
 - Regain access to the TR, if your browser's default configuration language "`_`languages.js" where it will automatically display the current language, if not, please manually select the language or the end of the page plus "?lang=language"; such as: 192.168.1.1/transmission/web/?lang=en

#### Currently supported languages：
||Language|Team|Update|
|-|-|-|-|
|🇨🇳|[Simplified Chinese](https://github.com/ronggang/transmission-web-control/raw/master/src/tr-web-control/lang/zh-CN.js)|ronggang, vodek3|[2017-04-14](https://github.com/ronggang/transmission-web-control/commits/master/src/tr-web-control/lang/zh-CN.js)|
|🇨🇳|[Traditional Chinese](https://github.com/ronggang/transmission-web-control/raw/master/src/tr-web-control/lang/zh-TW.js) |Sean, vodek3|[2017-04-14](https://github.com/ronggang/transmission-web-control/commits/master/src/tr-web-control/lang/zh-TW.js)|
|🇬🇧|[English](https://github.com/ronggang/transmission-web-control/raw/master/src/tr-web-control/lang/en.js)|ronggang, ASAPHAANING, vodek3, DarkAlexWang|[2017-11-19](https://github.com/ronggang/transmission-web-control/commits/master/src/tr-web-control/lang/en.js)
|🇷🇺|[Russian](https://github.com/ronggang/transmission-web-control/raw/master/src/tr-web-control/lang/ru.js)|Oleksandr Gureiev, irherder, Isseq, DarkAlexWang, vodek3|[2017-11-21](https://github.com/ronggang/transmission-web-control/commits/master/src/tr-web-control/lang/ru.js)
|🇪🇸|[Spanish](https://github.com/ronggang/transmission-web-control/raw/master/src/tr-web-control/lang/es.js)|Adrián González, malkavi, vodek3|[2017-04-14](https://github.com/ronggang/transmission-web-control/commits/master/src/tr-web-control/lang/es.js)
|🇵🇱|[Polish](https://github.com/ronggang/transmission-web-control/raw/master/src/tr-web-control/lang/pl.js)|Daniel Kolek, Piotr Kozica, vodek3|[2017-04-14](https://github.com/ronggang/transmission-web-control/commits/master/src/tr-web-control/lang/pl.js)
|🇭🇺|[Hungarian](https://github.com/ronggang/transmission-web-control/raw/master/src/tr-web-control/lang/hu.js)|Swartzy, Marcell, vodek3|[2017-04-14](https://github.com/ronggang/transmission-web-control/commits/master/src/tr-web-control/lang/hu.js)
|🇷🇴|[Romanian](https://github.com/ronggang/transmission-web-control/raw/master/src/tr-web-control/lang/ro.js)|Laurentiu Dinulescu, vodek3|[2017-04-14](https://github.com/ronggang/transmission-web-control/commits/master/src/tr-web-control/lang/ro.js)
|🇮🇹|[Italian](https://github.com/ronggang/transmission-web-control/raw/master/src/tr-web-control/lang/it.js)|Daniele Buccilli, vodek3, Oliver Cervera|[2017-06-29](https://github.com/ronggang/transmission-web-control/commits/master/src/tr-web-control/lang/it.js)
|🇧🇷|[Brazilian Portuguese](https://github.com/ronggang/transmission-web-control/raw/master/src/tr-web-control/lang/pt-BR.js)|Dudu Maroja, pcgaldo, vodek3, Brivaldo Junior, DarkAlexWang|[2017-09-29](https://github.com/ronggang/transmission-web-control/commits/master/src/tr-web-control/lang/pt-BR.js)
|🇳🇱|[Dutch/Flemmisch](https://github.com/ronggang/transmission-web-control/raw/master/src/tr-web-control/lang/nl.js)|Alwin Hummels, Jeroen, vodek3|[2017-04-14](https://github.com/ronggang/transmission-web-control/commits/master/src/tr-web-control/lang/nl.js)
|🇫🇷|[French](https://github.com/ronggang/transmission-web-control/raw/master/src/tr-web-control/lang/fr.js)|Amaury Aubry, ewan34500, vodek3|[2017-04-14](https://github.com/ronggang/transmission-web-control/commits/master/src/tr-web-control/lang/fr.js)
|🇰🇷|[Korean](https://github.com/ronggang/transmission-web-control/raw/master/src/tr-web-control/lang/ko.js)|kdsz330, vodek3|[2017-04-14](https://github.com/ronggang/transmission-web-control/commits/master/src/tr-web-control/lang/ko.js)
|🇵🇹|[European Portuguese](https://github.com/ronggang/transmission-web-control/raw/master/src/tr-web-control/lang/pt-PT.js)|pcgaldo, vodek3|[2017-04-14](https://github.com/ronggang/transmission-web-control/commits/master/src/tr-web-control/lang/pt-PT.js)
|🇺🇦|[Ukrainian](https://github.com/ronggang/transmission-web-control/raw/master/src/tr-web-control/lang/uk.js)|Andrew, vodek3|[2017-04-14](https://github.com/ronggang/transmission-web-control/commits/master/src/tr-web-control/lang/uk.js)
- **If you have translated a language pack, welcome pull requests.**

### How to install

#### Download
 - Latest source tarball:
~~~
  wget https://github.com/ronggang/transmission-web-control/raw/master/release/src.tar.gz
~~~
 - Latest easy-install script:
~~~
  wget https://github.com/ronggang/transmission-web-control/raw/master/release/install-tr-control.sh
  sudo bash install-tr-control.sh
~~~
 - If you need to install into `Synology NAS Download Station`, please download the following script:
~~~
  wget https://github.com/ronggang/transmission-web-control/raw/master/release/ds-control-easy-install.sh
  sudo bash ds-control-easy-install-en-http.sh
~~~
 - If you need http download instead of https, please use the following
     commands:
~~~
  wget https://github.com/ronggang/transmission-web-control/raw/master/release/install-tr-control.sh --no-check-certificate
  sudo bash install-tr-control.sh
~~~


###### 创建于(Create): 2012.12.18；更新于(Update): 2014.10.13 By 栽培者(ronggang); Updated: 03-31-2017 by DarkAlexWang  ######
