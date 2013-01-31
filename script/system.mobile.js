/*
	移动版
*/
var system = {
	version:"0.2 Beta"
	,codeupdate:"20130128"
	,config:{
		autoReload: true
		,reloadStep: 5000
		,pageSize: 30
		,defaultSelectNode: null
	}
	,lang:null
	,reloading:false
	,autoReloadTimer:null
	,downloadDir:""
	,islocal:false
	,B64:new Base64()
	// 当前选中的种子编号
	,currentTorrentId:0
	,currentContentPage:"home"
	,currentContentConfig:null
	,control:{
		tree:null
		,torrentlist:null
	}
	,serverConfig:null
	,serverSessionStats:null
	,debug:function(label,text){
		if (window.console)
		{
			if (window.console.log)
			{
				window.console.log(label,text);
			}
		}	
	}
	,setlang:function(lang,callback)
	{
		// 如果未指定语言，则获取当前浏览器默认语言
		if (!lang)
		{
			lang = navigator.language||navigator.browserLanguage;
			//this.debug("lang",lang);
		}
		if (!lang) lang="zh-CN";
		
		// 如果语言代码中包含-，则需要将后半部份转为大写
		if (lang.indexOf("-")!=-1)
		{
			// 因linux对文件有大小写限制，故重新赋值
			lang=lang.split("-")[0].toLocaleLowerCase()+"-"+lang.split("-")[1].toLocaleUpperCase();
		}
		
		// 如果该语言包没有定义，则使用英文
		if (!this.languages[lang])
		{
			lang = "en";
		}

		$.getScript("lang/"+lang+".js",function(){
			system.resetLangText();
			if (callback)
				callback();
		});
	}
	// 设置语言信息
	,resetLangText:function()
	{
		var items = $("*[system-lang]");

		$.each(items, function(key, item){
			var name = $(item).attr("system-lang");
			$(item).html(eval("system.lang."+name));
		});
	}
	,init:function(lang,islocal)
	{
		this.readConfig();
		transmission.options.getFolders = false;
		if (this.lang==null)
		{
			this.setlang(lang,function(){system.initdata()});
		}
		else
		{
			this.initdata();
		}
	}
	,initdata:function()
	{
		$(document).attr("title",this.lang.system.title+" "+this.version);
		//this.control.torrentlist = $("#content-torrent-list ul");
		this.control.torrentlist = $("#torrent-list");
		this.connect();
	}
	// 从 cookies 里加载配置
	,readConfig:function()
	{
		var config = cookies.get("transmission-web-control");
		if ($.isPlainObject(config))
		{
			this.config = $.extend(this.config, config);;
		}
	}
	// 在 cookies 里保存参数
	,saveConfig:function()
	{
		cookies.set("transmission-web-control",this.config,100);
	}

	// 连接服务器
	,connect:function()
	{
		// 当种子总数发生变化时，重新获取种子信息
		transmission.on.torrentCountChange = function()
		{
			system.reloadTorrentBaseInfos();
		};
		// 提交错误时
		transmission.on.postError = function()
		{
			//system.reloadTorrentBaseInfos();
		};
		// 初始化连接
		transmission.init(
			{
				islocal:true
			}
			,function (){
				system.reloadSession(true);
				system.getServerStatus();
			}
		);
	}
	// 重新加载服务器信息
	,reloadSession:function(isinit)
	{
		transmission.getSession(function(result)
		{
			system.serverConfig = result;
			if (result["alt-speed-enabled"]==true)
			{
				$("#status_alt_speed").show();
			}
			else
			{
				$("#status_alt_speed").hide();
			}
			
			system.downloadDir = result["download-dir"];

			var tmp = system.serverConfig["download-dir-free-space"];
			if (tmp==-1)
			{
				tmp = system.lang["public"]["text-unknown"];
			}
			else
			{
				tmp = formatSize(tmp);
			}
			$("#status_freespace").text(tmp);
		});
	}
	// 获取服务器当前状态
	,getServerStatus:function()
	{
		if (this.reloading) return;
		clearTimeout(this.autoReloadTimer);

		this.reloading = true;
		transmission.getStatus(function(data){
			system.reloading=false;
			$("#status_downloadspeed").html(formatSize(data["downloadSpeed"],false,"speed"));
			$("#status_uploadspeed").html(formatSize(data["uploadSpeed"],false,"speed"));
			system.serverSessionStats = data;
		});
	}
	// 重新获取种子信息
	,reloadTorrentBaseInfos:function(ids)
	{
		if (this.reloading) return;
		clearTimeout(this.autoReloadTimer);
		this.reloading = true;
		var oldInfos = {
			trackers:transmission.trackers
			,folders:transmission.torrents.folders
		}

		// 获取所有种子id信息
		transmission.torrents.getallids(function(resultTorrents)
		{
			var ignore = new Array();
			for (var index in resultTorrents)
			{
				var item = resultTorrents[index];
				ignore.push(item.id);
			}

			// 错误的编号列表
			var errorIds = transmission.torrents.getErrorIds(ignore,true);

			if (errorIds.length>0)
			{
				transmission.torrents.getallids(function(){
					system.resetTorrentInfos(oldInfos);
				},errorIds);
			}
			else
			{
				system.resetTorrentInfos(oldInfos);
			}
		},ids);
	}
	//
	,resetTorrentInfos:function(oldInfos)
	{
		var currentTorrentId = this.currentTorrentId;
		
		// 已暂停
		if (transmission.torrents.status[transmission._status.stopped])
		{
			this.updateCount("paused",transmission.torrents.status[transmission._status.stopped].length);
		}
		else
		{
			this.updateCount("paused",0);
		}

		// 做种
		if (transmission.torrents.status[transmission._status.seed])
		{
			this.updateCount("sending",transmission.torrents.status[transmission._status.seed].length);
		}
		else
		{
			this.updateCount("sending",0);
		}

		
		// 校验
		if (transmission.torrents.status[transmission._status.check])
		{
			this.updateCount("check",transmission.torrents.status[transmission._status.check].length);
		}
		else
		{
			this.updateCount("check",0);
		}


		// 下载中
		if (transmission.torrents.status[transmission._status.download])
		{
			this.updateCount("downloading",transmission.torrents.status[transmission._status.download].length);
		}
		else
		{
			this.updateCount("downloading",0);
		}


		// 活动中
		this.updateCount("actively",transmission.torrents.actively.length);
		// 发生错误
		this.updateCount("error",transmission.torrents.error.length);
		// 警告
		this.updateCount("warning",transmission.torrents.warning.length);

		
		system.reloading = false;

		if (system.config.autoReload)
		{
			system.autoReloadTimer = setTimeout(function(){system.reloadData();},system.config.reloadStep);
		}
		
		// 总大小
		this.updateCount("all",transmission.torrents.count);

		if (this.currentContentPage=="torrent-list")
		{
			var _config = this.currentContentConfig;
			_config.reload = true;
			this.showContent(_config);
		}
	}
	// 更新状态中
	,updateCount:function(nodeId,count)
	{
		var item = $("#count-"+nodeId);
		item.text(count);
		if (count==0)
		{
			item.hide();
		}
		else
			item.show();
	}
	// 重新加载数据
	,reloadData:function()
	{
		this.reloadSession();
		this.reloading=false;
		this.getServerStatus();
		this.reloading=false;
		this.reloadTorrentBaseInfos();
	}
	,showContent:function(target)
	{
		var _default = {
			page:""
			,type:""
			,data:""
			,title:this.lang.system.title
			,reload:false
		};
		var config = null;
		if (typeof(target)=="string")
		{
			_default.page = target;
			config = _default;
		}
		else
			config = jQuery.extend(_default, target);
		if (config.page==this.currentContentPage&&!config.reload)
		{
			return;
		}
		$("#content-"+config.page).show();
		if (config.page!=this.currentContentPage)
		{
			$("#content-"+this.currentContentPage).hide();
		}
		$("#torrent-page-bar").hide();
		$("#torrent-toolbar").hide();
		this.currentContentPage = config.page;
		switch (config.type)
		{
			case "torrent-list":
				config.title = this.lang.tree[config.data];
				this.loadTorrentToList({target:config.data});
				break;
		}
		$("#page-title").text(config.title);
		config.reload = false;
		this.currentContentConfig = config;
	}
	,getTorrentFromType:function(type)
	{
		var torrents = null;
		switch (type)
		{
			case "torrent-all":
			case "all":
			case "servers":
				torrents = transmission.torrents.all;
				break;
			case "paused":
				torrents = transmission.torrents.status[transmission._status.stopped];
				break;
			case "sending":
				torrents = transmission.torrents.status[transmission._status.seed];
				break;

			case "seedwait":
				torrents = transmission.torrents.status[transmission._status.seedwait];
				break;

			case "check":
				torrents = transmission.torrents.status[transmission._status.check];
				break;
			case "checkwait":
				torrents = transmission.torrents.status[transmission._status.checkwait];
				break;

			case "downloading":
				torrents = transmission.torrents.status[transmission._status.download];
				break;
			case "downloadwait":
				torrents = transmission.torrents.status[transmission._status.downloadwait];
				break;
				
			case "actively":
				torrents = transmission.torrents.actively;
				break;

			case "error":
				torrents = transmission.torrents.error;
				break;
				
			case "warning":
				torrents = transmission.torrents.warning;
				break;

			case "search-result":
				torrents = transmission.torrents.searchResult;
				break;

			default:
				break;
		}
		return torrents;
	}
	// 加载种子列表
	,loadTorrentToList:function(config)
	{
		if (!transmission.torrents.all)
		{
			return;
		}
		var def = {
			node:null
			,page:1
			,target:"all"
		};
		
		jQuery.extend(def, config);
		if (!config.target) return;
		
		var torrents = this.getTorrentFromType(config.target);

		this.config.defaultSelectNode = config.target;
		this.saveConfig();

		var datas = new Array();
		this.control.torrentlist.empty();
		for (var index in torrents)
		{
			if (!torrents[index])
			{
				continue;
			}
			var percentDone = parseFloat(torrents[index].percentDone*100).toFixed(2);
			var status = this.lang.torrent["status-text"][torrents[index].status];
			if (torrents[index].error!=0)
			{
				status = "<span class='text-status-error'>"+status+"</span>";
			}
			else if (torrents[index].warning)
			{
				status = "<span class='text-status-warning' title='"+torrents[index].warning+"'>"+status +"</span>";
			}
			var data = {
				id:torrents[index].id
				,name:this.getTorrentNameBar(torrents[index])
				,totalSize:torrents[index].totalSize
				,percentDone:this.getTorrentProgressBar(percentDone,torrents[index])
				,percentDoneNumber:percentDone
				,status:status
				,addedDate:formatLongTime(torrents[index].addedDate)
				,completeSize:(torrents[index].totalSize-torrents[index].leftUntilDone)
				,rateDownload:torrents[index].rateDownload
				,rateUpload:torrents[index].rateUpload
				,leecherCount:torrents[index].leecher
				,seederCount:torrents[index].seeder
				,uploadRatio:torrents[index].uploadRatio
				,uploadedEver:torrents[index].uploadedEver
			};

			datas.push(data);
			//this.appendTorrentToList(data);
		}
		if (datas.length==0)
		{
			setTimeout(function(){system.showContent('home');},100);
			return;
		}
		if (this.torrentPager.onGotoPage==null)
		{
			this.torrentPager.onGotoPage = function(datas){
				system.control.torrentlist.empty();
				$("#torrent-toolbar").hide();
				for (var key in datas)
				{
					system.appendTorrentToList(datas[key]);
				}
			}
		}
		
		this.torrentPager.setDatas(datas,config.target);
	}
	// 添加种子信息到列表
	,appendTorrentToList:function(data)
	{
		var item = $("<input id='torrent-" + data.id + "' type='checkbox'/>").attr("inited",0);
		var label = $("<label for='torrent-" + data.id + "'>"
				+  data.name
				+  data.percentDone 
				+ "<span class='torrent-list-infos'>↓" + formatSize(data.rateDownload,false,"speed") + " ↑" + formatSize(data.rateUpload,false,"speed") 
					+ "|" + formatSize(data.completeSize) + "/" + formatSize(data.totalSize)
					+ "</span>"
				+ "</label>");
		item.click(function(){
			system.changeTorrentToolbar(this,data);
		});
		label.appendTo(item);
		item.appendTo(this.control.torrentlist);
		item.checkboxradio({ theme: "c" });
	}
	// 获取种子名称显示区域的内容
	,getTorrentNameBar:function(torrent)
	{
		var className = "";
		var tip = torrent.name;
		switch (torrent.status)
		{
			case transmission._status.stopped:
				className = "iconlabel icon-pause-small";
				break;

			case transmission._status.check:
				className = "iconlabel icon-checking";
				break;

			case transmission._status.download:
				className = "iconlabel icon-down";
				break;

			case transmission._status.seed:
				className = "iconlabel icon-up";
				break;

			case transmission._status.seedwait:
			case transmission._status.downloadwait:
			case transmission._status.checkwait:
				className = "iconlabel icon-wait";
			break;
		}

		if (torrent.warning)
		{
			className = "iconlabel icon-warning-type1";
			tip+="\n\n"+this.lang["public"]["text-info"]+": "+torrent.warning;
		}

		if (torrent.error!=0)
		{
			className = "iconlabel icon-exclamation";
			tip+="\n\n"+this.lang["public"]["text-info"]+": "+torrent.errorString;
		}
		

		return '<span class="'+className+'" title="'+tip+'">'+torrent.name+'</span>';
	}
	// 获取指定种子的进度条
	,getTorrentProgressBar:function(progress,torrent)
	{
		progress=progress+"%";
		var className = "";
		switch (torrent.status)
		{
		case transmission._status.stopped:
			className = "torrent-progress-stop";
			break;

		case transmission._status.checkwait:
		case transmission._status.check:
			className = "torrent-progress-check";
			break;

		case transmission._status.downloadwait:
		case transmission._status.download:
			className = "torrent-progress-download";
			break;

		case transmission._status.seedwait:
		case transmission._status.seed:
			className = "torrent-progress-seed";
			break;
		}
		if (torrent.warning)
		{
			className = "torrent-progress-warning";
		}
		if (torrent.error!=0)
		{
			className = "torrent-progress-error";
		}
		return '<div class="torrent-progress" title="'+progress+'"><div class="torrent-progress-text">'+progress+'</div><div class="torrent-progress-bar '+className+'" style="width:'+progress+';"></div></div>';
	}
	// 改变种子的工具栏
	,changeTorrentToolbar:function(source,item)
	{
		var checked = this.control.torrentlist.find("input:checked");
		
		if (checked.length>0)
		{
			$("#torrent-toolbar").show();
		}
		else
		{
			$("#torrent-toolbar").hide();
		}
		this.currentTorrentId = item.id;
	}
	// 种子列表分页处理
	,torrentPager:{
		datas:null
		,pageSize:30
		,pageNumber:0
		,pageCount:0
		,count:0
		,onGotoPage:null
		,currentDatas:null
		,pageBar:null
		,controls:{
			prev:null
			,next:null
			,number:null
		}
		,head:""
		,init:function(datas)
		{
			this.pageBar = $("#torrent-page-bar");
			this.controls.next = this.pageBar.find("#page-next");
			this.controls.next.click(function(){
				system.torrentPager.gotoPage("next");
			});
			this.controls.prev = this.pageBar.find("#page-prev");
			this.controls.prev.click(function(){
				system.torrentPager.gotoPage("prev");
			});

			this.controls.number = this.pageBar.find("#page-number");
			if (datas)
			{
				this.setDatas(datas);
			}
		}
		,setDatas:function(datas,head)
		{
			if (!this.datas)
			{
				this.init();
			}
			this.datas = datas;
			this.pageBar.show();
			this.count = this.datas.length;
			this.pageCount = parseInt(this.count/this.pageSize);
			if (this.count%this.pageSize>0)
			{
				this.pageCount++;
			}
			if (this.pageCount==1)
			{
				this.pageBar.hide();
			}
			if (this.head==head)
			{
				this.gotoPage();
			}
			else
				this.gotoPage(1);
			this.head = head;
		}
		,gotoPage:function(page)
		{
			if (typeof(page)=="number")
			{
				this.pageNumber = page;
			}
			else
			{
				switch (page)
				{
					case "next":
						this.pageNumber++;
						break;
					case "prev":
						this.pageNumber--;
						break;
				}
			}
			if (this.pageNumber>this.pageCount)
			{
				this.pageNumber = this.pageCount;
			}
			if (this.pageNumber<1)
			{
				this.pageNumber = 1;
			}
			var start = (this.pageNumber-1)*parseInt(this.pageSize);
			var end = start + parseInt(this.pageSize);
			this.currentDatas = (this.datas.slice(start, end));

			this.controls.number.text(this.pageNumber+"/"+this.pageCount);
			if (this.pageNumber>1)
			{
				this.controls.prev.show();
			}
			else
			{
				this.controls.prev.hide();
			}

			if (this.pageNumber<this.pageCount)
			{
				this.controls.next.show();
			}
			else
			{
				this.controls.next.hide();
			}

			if (this.onGotoPage)
			{
				this.onGotoPage(this.currentDatas);
			}
		}
	}
	// 开始/暂停已选择的种子
	,changeSelectedTorrentStatus:function(status,button)
	{
		var items = this.control.torrentlist.find("input:checked");
		var ids = new Array();
		if (!status)
		{
			status = "start";
		}
		for (var i=0;i<items.length;i++)
		{
			ids.push(parseInt(items[i].id.replace("torrent-","")));
		}

		if (ids.length>0)
		{
			switch (status)
			{
			case "remove":
				return;
				break;
			case "verify":
				if (rows.length==1)
				{
					var torrent = transmission.torrents.all[ids[0].id];
					if (torrent.percentDone>0)
					{
						if (confirm(system.lang.toolbar.tip["recheck-confirm"])==false)
						{
							return;
						}
					}
				}
				else if (confirm(system.lang.toolbar.tip["recheck-confirm"])==false)
				{
					return;
				}
				break;
			
			}
			button = $(button);
			button.attr("disabled",true);
			transmission.exec({
					method:"torrent-"+status
					,arguments:{
						ids:ids
					}
				}
				,function(data){
					button.attr("disabled",false);
					system.reloadTorrentBaseInfos();
				}
			);
		}
	}
};

$(document).ready(function(){
	// 加载可用的语言列表
	$.getScript("lang/_languages.js",function(){
		system.init(location.search.getQueryString("lang"));
	});
});