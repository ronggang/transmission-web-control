// 当前系统全局对象
var system = {
	version:"0.6 Beta"
	,codeupdate:"20130909"
	,config:{
		autoReload: true
		,reloadStep: 5000
		,pageSize: 30
		,defaultSelectNode: null
		,autoExpandAttribute: false
		,defaultLang: ""
	}
	,storageKeys: {
		dictionary: {
			folders:"dictionary.folders"
		}
	}
	// 本地数据存储
	,dictionary:{
		folders:null
	}
	,checkUpdateScript:"https://transmission-control.googlecode.com/svn/resouces/checkupdate.js"
	,contextMenus:{
	}
	,panel:null
	,lang:null
	,reloading:false
	,autoReloadTimer:null
	,downloadDir:""
	,islocal:false
	,B64:new Base64()
	// 当前选中的种子编号
	,currentTorrentId:0
	,control:{
		tree:null
		,torrentlist:null
	}
	,serverConfig:null
	,serverSessionStats:null
	// 对话框模板暂存列表
	,templates:{}
	,setlang:function(lang,callback)
	{
		// 如果未指定语言，则获取当前浏览器默认语言
		if (!lang)
		{
			if (this.config.defaultLang)
				lang = this.config.defaultLang;
			else
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
			system.lang = $.extend(true,system.defaultLang, system.lang);
			system.resetLangText();
			// 设置 easyui 语言
			$.getScript("script/easyui/locale/easyui-lang-"+lang.replace("-","_")+".js")
				.done(function(script, textStatus){
					if (callback)
						callback();
				// 如果加载失败，则加载英文语言
				})
				.fail(function(jqxhr, settings, exception) {
					$.getScript("script/easyui/locale/easyui-lang-en.js",function(){
						if (callback)
							callback();
				});
			});
		});
	}
	,init:function(lang,islocal,devicetype)
	{
		this.readConfig();
		/*
		 alert(screen.width+","+this.config.mobileDeviceWidth);
		//return;
		if (screen.width<=this.config.mobileDeviceWidth&&devicetype!="computer")
		{
			location.href = "index.mobile.html";
			return;
		}
		*/
		this.islocal = (islocal==1?true:false);
		this.panel = {
			main:$("#main")
			,top:$("#m_top")
			,toolbar:$("#m_toolbar")
			,left_layout:$("#m_left_layout")
			,left:$("#m_left")
			,body:$("#m_body")
			,layout_body:$("#layout_body")
			,list:$("#m_list")
			,attribute:$("#m_attribute")
			,bottom:$("#m_bottom")
			,title:$("#m_title")
			,status:$("#m_status")
			,statusbar:$("#m_statusbar")
			,status_text:$("#status_text")
			,droparea:$("#dropArea")
		};
		
		if (this.lang==null)
		{
			this.setlang(lang,function(){system.initdata()});
		}
		else
			this.initdata();
			
	}
	// 设置语言信息
	,resetLangText:function(parent)
	{
		if (!parent)
			parent = $;
		var items = parent.find("*[system-lang]");

		$.each(items, function(key, item){
			var name = $(item).attr("system-lang");
			$(item).html(eval("system.lang."+name));
		});

		items = parent.find("*[system-tip-lang]");

		$.each(items, function(key, item){
			var name = $(item).attr("system-tip-lang");
			$(item).attr("title",eval("system.lang."+name));
		});
	}
	,initdata:function()
	{
		//this.panel.title.text(this.lang.system.title+" "+this.version+" ("+this.codeupdate+")");
		$(document).attr("title",this.lang.system.title+" "+this.version);

		// 初始导航栏
		var buttons = new Array();
		var title = "<span>" + this.lang.title.left+"</span>";
		buttons.push("<span class='tree-title-toolbar'>");
		for (var key in this.lang.tree.toolbar.nav)
		{
			var value = this.lang.tree.toolbar.nav[key];
			buttons.push('<a href="javascript:void(0);" id="tree-toolbar-nav-'+key+'" class="easyui-linkbutton" data-options="plain:true,iconCls:\'icon-disabled\'" onclick="javascript:system.navToolbarClick(this);">'+value+"</a>");
		}
		buttons.push("</span>");
		if (buttons.length>1)
		{
			title+=buttons.join("");
			this.panel.left_layout.panel("setTitle",title);
			for (var key in this.lang.tree.toolbar.nav)
			{
				$("#tree-toolbar-nav-"+key).linkbutton();
			}
		}
		else
		{
			this.panel.left_layout.panel("setTitle",title);
		}
		
		// 初始化种子列表栏目标题
		title = "<span>" + this.lang.title.list+"</span>";
		buttons.length = 0;
		buttons.push("<span class='tree-title-toolbar'>");
		for (var key in this.lang["torrent-head"].buttons)
		{
			var value = this.lang["torrent-head"].buttons[key];
			buttons.push('<a href="javascript:void(0);" id="torrent-head-buttons-'+key+'" class="easyui-linkbutton" data-options="plain:true,iconCls:\'icon-disabled\'" onclick="javascript:system.navToolbarClick(this);">'+value+"</a>");
		}
		buttons.push("</span>");
		if (buttons.length>1)
		{
			title+=buttons.join("");
			this.panel.body.panel("setTitle",title);
			for (var key in this.lang["torrent-head"].buttons)
			{
				$("#torrent-head-buttons-"+key).linkbutton();
				switch (key)
				{
					case "autoExpandAttribute":
						if (system.config.autoExpandAttribute)
						{
							$("#torrent-head-buttons-"+key).linkbutton({iconCls:"icon-enabled"}).data("status",1);
						}
						else
						{
							$("#torrent-head-buttons-"+key).linkbutton({iconCls:"icon-disabled"}).data("status",0);
						}
						break;

					default:
						break;
				}
				
			}
		}
		else
		{
			this.panel.body.panel("setTitle",title);
		}

		this.panel.status.panel("setTitle",this.lang.title.status);
		this.panel.attribute.panel({
			title:this.lang.title.attribute
			,onExpand:function()
			{
				if (system.currentTorrentId!=0&&$(this).data("isload"))
				{
					system.getTorrentInfos(system.currentTorrentId);
				}
				else
				{
					system.clearTorrentAttribute();
				}
			}
			,onLoad:function()
			{
				if (!$(this).data("isload"))
				{
					$(this).data("isload",true);
					if (system.currentTorrentId!=0)
					{
						setTimeout(function(){
							system.getTorrentInfos(system.currentTorrentId);
						},500);
					}
				}
			}
		});

		// 设置语言
		$.each(this.languages, function(key, value){
			$("<option/>").text(value).val(key).attr("selected",(key==system.lang.name?true:false)).appendTo(system.panel.top.find("#lang"));
		});
		this.panel.top.find("#lang").change(function(){
			location.href = "?lang="+this.value;
		});

		this.panel.toolbar.attr("class","panel-header");
		this.initTree();
		this.initToolbar();
		this.initStatusBar();
		this.initTorrentTable();
		this.connect();
		this.initEvent();
		// 检查更新
		this.checkUpdate();
	}
	//
	,initEvent:function()
	{
		// 窗口尺寸发生变化时
		$(window).resize(function(){
			$("#main").layout("resize");
		});

		// 添加文件拖放事件处理 Begin
		this.panel.droparea[0].addEventListener("dragover",function(e){
			e.stopPropagation();
			e.preventDefault();
			system.debug("#dropArea.dragover");
		},false);

		this.panel.list[0].addEventListener("dragover",function(e){
			e.stopPropagation();
			e.preventDefault();
			system.panel.droparea.show();
			system.debug("dragover");
		},false);

		this.panel.droparea[0].addEventListener("drop",function(e){
			e.stopPropagation();
			e.preventDefault();
			system.panel.droparea.hide();
			system.debug("drop.e.dataTransfer:",e.dataTransfer);
			system.checkDropFiles(e.dataTransfer.files);
		},false);

		this.panel.droparea[0].addEventListener("dragleave",function(e){
			e.stopPropagation();
			e.preventDefault();
			system.panel.droparea.hide();
			system.debug("dragleave");
		},false);

		$("#text-drop-title").html(this.lang["public"]["text-drop-title"]);
		// End

	}
	// 导航工具栏单击事件
	,navToolbarClick:function(source)
	{
		var key = source.id;
		var status = $(source).data("status");
		var treenode = null;
		switch (key)
		{
			case "tree-toolbar-nav-folders":
				treenode = this.panel.left.tree("find","folders");
				break;

			case "tree-toolbar-nav-statistics":
				treenode = this.panel.left.tree("find","statistics");
				break;

			case "torrent-head-buttons-autoExpandAttribute":
				treenode = {};
				treenode.target = null;
				if (status==1){
					this.config.autoExpandAttribute = false;
				}
				else
				{
					this.config.autoExpandAttribute = true;
				}
				break;
		
		}

		if (!treenode)
		{
			return;
		}

		if (status==1)
		{
			$(source).linkbutton({iconCls:"icon-disabled"});
			$(treenode.target).parent().hide();
			status = 0;
		}
		else
		{
			$(source).linkbutton({iconCls:"icon-enabled"});
			$(treenode.target).parent().show();
			status = 1;
		}
		
		$(source).data("status",status);
		this.saveConfig();
	}
	// 检查拖放的文件
	,checkDropFiles:function(sources)
	{
		if (!sources || !sources.length) return;
		var files = new Array();
		for (var i = 0; i < sources.length; i++) {
			var file = sources[i];
			if ((file.name.split(".")).pop().toLowerCase()=="torrent")
				files.push(file);
		}
		
		if (files.length>0)
		{
			system.openDialogFromTemplate({
				id: "dialog-torrent-addfile",
				options: {
					title: system.lang.toolbar["add-torrent"],  
					width: 620,
					height: 300,
					resizable: true
				},
				datas: {
					"files": files
				}
			});
		}
	}
	// 初始化树形列表
	,initTree:function()
	{
		this.panel.left.tree({
			data: [{
				id:"torrent-all"
				,iconCls:"icon-home"
				,text: this.lang.tree.all+" ("+this.lang.tree.status.loading+")"
				,children:[
					{
						id: "downloading"
						,text: this.lang.tree.downloading
						,iconCls:"icon-download"
					}
					,{
						id:"paused"
						,text: this.lang.tree.paused
						,iconCls:"icon-pause"
					}
					,{
						id:"sending"
						,text: this.lang.tree.sending
						,iconCls:"icon-seed"
					}
					,{
						id:"check"
						,text: this.lang.tree.check
						,iconCls:"icon-check"
					}
					,{
						id:"actively"
						,text: this.lang.tree.actively
						,iconCls:"icon-actively"
					}
					,{
						id:"error"
						,text: this.lang.tree.error
						,iconCls:"icon-error"
					}
					,{
						id:"warning"
						,text: this.lang.tree.warning
						,iconCls:"icon-warning"
					}
				]
			}
			,{
				id:"servers"
				,text:this.lang.tree.servers
				,iconCls:"icon-servers"
				,children:[
					{
						id:"servers-loading"
						,text:this.lang.tree.status.loading
						,iconCls:"tree-loading"
					}
				]
			}
			,{
				id:"folders"
				,text:this.lang.tree.folders
				,children:[
					{
						id:"folders-loading"
						,text:this.lang.tree.status.loading
						,iconCls:"tree-loading"
					}
				]
			}
			,{
				id:"statistics"
				,text:this.lang.tree.statistics.title
				,state:"closed"
				,iconCls:"icon-chart"
				,children:[
					{
						id:"cumulative-stats"
						,text:this.lang.tree.statistics.cumulative
						,children:[
							{
								id:"uploadedBytes"
								,text:this.lang.tree.statistics.uploadedBytes
							}
							,{
								id:"downloadedBytes"
								,text:this.lang.tree.statistics.downloadedBytes
							}
							,{
								id:"filesAdded"
								,text:this.lang.tree.statistics.filesAdded
							}
							,{
								id:"sessionCount"
								,text:this.lang.tree.statistics.sessionCount
							}
							,{
								id:"secondsActive"
								,text:this.lang.tree.statistics.secondsActive
							}
						]
					}
					,{
						id:"current-stats"
						,text:this.lang.tree.statistics.current
						,children:[
							{
								id:"current-uploadedBytes"
								,text:this.lang.tree.statistics.uploadedBytes
							}
							,{
								id:"current-downloadedBytes"
								,text:this.lang.tree.statistics.downloadedBytes
							}
							,{
								id:"current-filesAdded"
								,text:this.lang.tree.statistics.filesAdded
							}
							,{
								id:"current-sessionCount"
								,text:this.lang.tree.statistics.sessionCount
							}
							,{
								id:"current-secondsActive"
								,text:this.lang.tree.statistics.secondsActive
							}
						]
					}
				]
			}
			
		]
		,onSelect:function(node){
			system.loadTorrentToList({node:node});
		}
		,lines:true
		});

		for (var key in this.lang.tree.toolbar.nav)
		{
			var treenode = this.panel.left.tree("find",key);
			$(treenode.target).parent().hide();
		}

		// 是否有指定默认选择的节点
		if (this.config.defaultSelectNode)
		{
			var node = this.panel.left.tree("find",this.config.defaultSelectNode);
			if (node)
			{
				this.panel.left.tree("select", node.target);
			}
		}
	}
	// 初始化种子列表显示表格
	,initTorrentTable:function()
	{
		this.control.torrentlist = $("<table/>").attr("class","torrent-list").appendTo(this.panel.list);
		$.get("template/torrent-fields.json?time="+(new Date()),function(data){
			var fields = data.fields;
			for (var key in fields)
			{
				fields[key].title = system.lang.torrent.fields[fields[key].field];
				system.setFieldFormat(fields[key]);
			}
			system.control.torrentlist.datagrid({
				autoRowHeight:false
				,pagination:true
				,rownumbers:true
				,remoteSort:false
				,checkOnSelect:false
				,pageSize:system.config.pageSize
				,idField:"id"
				,fit: true
				,striped:true
			   ,columns:[fields]
				,onCheck:function(rowIndex, rowData)
				{
					system.checkTorrentRow(rowIndex,rowData);
				}
				,onUncheck:function(rowIndex, rowData)
				{
					system.checkTorrentRow(rowIndex,rowData);
				}
				,onCheckAll:function(rows)
				{
					system.checkTorrentRow("all",false);
				}
				,onUncheckAll:function(rows)
				{
					system.checkTorrentRow("all",true);
				}
				,onSelect:function(rowIndex, rowData)
				{
					$(this).datagrid("clearSelections");

					if (system.config.autoExpandAttribute)
					{
						// 如果没有展开时，将其展开
						if (system.panel.attribute.panel("options").collapsed)
							system.panel.layout_body.layout("expand","south");
					}
					system.getTorrentInfos(rowData.id);
				}
				,onUnselect:function(rowIndex, rowData)
				{
					if (system.config.autoExpandAttribute)
					{
						// 如果展开时，将其合拢
						if (!system.panel.attribute.panel("options").collapsed)
							system.panel.layout_body.layout("collapse","south");

					}
					system.currentTorrentId = 0;
				}
				// 加载数据之前
				,onBeforeLoad:function(param)
				{
					system.currentTorrentId = 0;
				}
				// 表头排序
				,onSortColumn:function(field, order)
				{
					var datas = system.control.torrentlist.datagrid("getData").originalRows.sort(arrayObjectSort(field,order));
					system.control.torrentlist.datagrid("loadData",datas);
				}
				,onRowContextMenu: function(e, rowIndex, rowData)
				{
					system.control.torrentlist.datagrid("checkRow",rowIndex);
					e.preventDefault();
					system.showContextMenu("torrent-list",e);
				}
			});
		},"json");
		this.panel.list.bind('contextmenu',function(e){
			 e.preventDefault();
			 system.showContextMenu("torrent-list",e); 
		});
	}
	// 显示右键菜单
	,showContextMenu: function(type,e)
	{
		var parent = this.contextMenus[type];
		if (!parent)
		{
			parent = $("<div/>").attr("class","easyui-menu").css({"width":"180px"}).appendTo(this.panel.main);
			this.contextMenus[type] = parent;
			parent.menu();
		}
		else
		{
			parent.empty();
		}
		var menus = null;
		
		switch (type)
		{
			case "torrent-list":
				menus = new Array("start","pause","-","remove","recheck","-","morepeers","changeDownloadDir"
									,"-","menu-queue-move-top","menu-queue-move-up","menu-queue-move-down","menu-queue-move-bottom");
				var toolbar = this.panel.toolbar;
				for (var item in menus)
				{
					var key = menus[item];
					if (key=="-")
					{
						//
						var id = ("line-"+Math.random()).replace(".","");
						parent.menu("appendItem",{
							text: ""
							,id: id
						});
						parent.find("#"+id).attr("class","menu-sep").attr("disabled",true).html("&nbsp;").unbind('.menu');
					}
					else
					{
						var menu = toolbar.find("#toolbar_"+key);
						if (menu.length>0)
						{
							parent.menu("appendItem",{
								text: menu.attr("title")
								,id: key
								,iconCls: menu.linkbutton("options").iconCls
								,disabled: menu.linkbutton("options").disabled
								,onclick: function(){
									system.panel.toolbar.find("#toolbar_"+$(this).attr("id")).click();
								}
							});
						}
						else
						{
							menu = $("#"+key);
							if (menu.length>0)
							{
								parent.menu("appendItem",{
									text: menu.attr("title")
									,id: key
									,iconCls: menu.attr("id").replace("menu","icon")
									,disabled: toolbar.find("#toolbar_changeDownloadDir").linkbutton("options").disabled
									,onclick: function(){
										$("#"+$(this).attr("id")).click();
									}
								});
							}
						}
						menu = null;
					}
				}
				break;
		}
		parent.menu("show",{left: e.pageX, top: e.pageY});
		parent = null;
		menus = null;
	}
	,checkTorrentRow:function(rowIndex, rowData)
	{
		if (rowIndex=="all")
		{
			this.panel.toolbar.find("#toolbar_start").linkbutton({disabled:rowData});
			this.panel.toolbar.find("#toolbar_pause").linkbutton({disabled:rowData});
			this.panel.toolbar.find("#toolbar_remove").linkbutton({disabled:rowData});
			this.panel.toolbar.find("#toolbar_recheck").linkbutton({disabled:rowData});
			this.panel.toolbar.find("#toolbar_changeDownloadDir").linkbutton({disabled:rowData});
			this.panel.toolbar.find("#toolbar_morepeers").linkbutton({disabled:rowData});
			return;
		}
		var rows = this.control.torrentlist.datagrid("getChecked");
		if (rows.length==0)
		{
			this.panel.toolbar.find("#toolbar_start").linkbutton({disabled:true});
			this.panel.toolbar.find("#toolbar_pause").linkbutton({disabled:true});
			this.panel.toolbar.find("#toolbar_remove").linkbutton({disabled:true});
			this.panel.toolbar.find("#toolbar_recheck").linkbutton({disabled:true});
			this.panel.toolbar.find("#toolbar_changeDownloadDir").linkbutton({disabled:true});
			this.panel.toolbar.find("#toolbar_morepeers").linkbutton({disabled:true});
			this.panel.toolbar.find("#toolbar_queue").menubutton("disable");
			return;
		}

		this.panel.toolbar.find("#toolbar_remove").linkbutton({disabled:false});
		this.panel.toolbar.find("#toolbar_changeDownloadDir").linkbutton({disabled:false});
		this.panel.toolbar.find("#toolbar_queue").menubutton("enable");
		
		var torrent = transmission.torrents.all[rowData.id];
		switch (torrent.status)
		{
			case transmission._status.stopped:
				this.panel.toolbar.find("#toolbar_start").linkbutton({disabled:false});
				this.panel.toolbar.find("#toolbar_pause").linkbutton({disabled:true});
				this.panel.toolbar.find("#toolbar_recheck").linkbutton({disabled:false});
				this.panel.toolbar.find("#toolbar_morepeers").linkbutton({disabled:true});
				break;

			case transmission._status.check:
			case transmission._status.checkwait:
				this.panel.toolbar.find("#toolbar_start").linkbutton({disabled:true});
				this.panel.toolbar.find("#toolbar_pause").linkbutton({disabled:true});
				this.panel.toolbar.find("#toolbar_recheck").linkbutton({disabled:true});
				this.panel.toolbar.find("#toolbar_morepeers").linkbutton({disabled:true});
				break;

			default:
				this.panel.toolbar.find("#toolbar_start").linkbutton({disabled:true});
				this.panel.toolbar.find("#toolbar_pause").linkbutton({disabled:false});
				this.panel.toolbar.find("#toolbar_recheck").linkbutton({disabled:true});
				this.panel.toolbar.find("#toolbar_morepeers").linkbutton({disabled:false});
				break;
		}
	}
	// 初始化系统工具栏
	,initToolbar:function()
	{
		// 刷新时间
		this.panel.toolbar.find("#toolbar_label_reload_time").html(this.lang.toolbar["reload-time"]);
		this.panel.toolbar.find("#toolbar_label_reload_time_unit").html(this.lang.toolbar["reload-time-unit"]);
		this.panel.toolbar.find("#toolbar_reload_time").numberspinner(
		{
			value:this.config.reloadStep/1000
			,min:3
			,disabled:!this.config.autoReload
			,onChange:function()
			{
				var value = this.value;
				if ($.isNumeric(value))
				{
					system.config.reloadStep = value * 1000;
					system.saveConfig();
				}
			}
		});

		// 启用/禁用自动刷新
		this.panel.toolbar.find("#toolbar_autoreload")
			.linkbutton({text:(this.config.autoReload?this.lang.toolbar["autoreload-enabled"]:this.lang.toolbar["autoreload-disabled"]),iconCls:(this.config.autoReload?"icon-enabled":"icon-disabled")})
			.attr("title",(this.config.autoReload?this.lang.toolbar.tip["autoreload-disabled"]:this.lang.toolbar.tip["autoreload-enabled"]))
			.click(function(){
				if (system.config.autoReload)
				{
					system.config.autoReload = false;
					clearTimeout(system.autoReloadTimer);
					system.panel.toolbar.find("#toolbar_reload_time").numberspinner("disable");
				}
				else
				{
					system.config.autoReload = true;
					system.reloadData();
					system.panel.toolbar.find("#toolbar_reload_time").numberspinner("enable");
				}
				system.saveConfig();

				$(this).linkbutton({text:(system.config.autoReload?system.lang.toolbar["autoreload-enabled"]:system.lang.toolbar["autoreload-disabled"]),iconCls:(system.config.autoReload?"icon-enabled":"icon-disabled")})
				.attr("title",(system.config.autoReload?system.lang.toolbar.tip["autoreload-disabled"]:system.lang.toolbar.tip["autoreload-enabled"]));
			});
		
		// 添加种子
		this.panel.toolbar.find("#toolbar_add_torrents")
			.linkbutton({text:this.lang.toolbar["add-torrent"],disabled:false})
			.attr("title",this.lang.toolbar.tip["add-torrent"])
			.click(function(){
				system.openDialogFromTemplate({
					id: "dialog-torrent-add",
					options: {
						title: system.lang.toolbar["add-torrent"],  
						width: 620,
						height: 400,
						resizable: true
					}
				});
			});
		
		// 开始所有
		this.panel.toolbar.find("#toolbar_start_all")
			//.linkbutton({text:this.lang.toolbar["start-all"],disabled:false})
			.linkbutton({disabled:false})
			.attr("title",this.lang.toolbar.tip["start-all"])
			.click(function(){
				var button = $(this);
				var icon = button.linkbutton("options").iconCls;
				button.linkbutton({disabled:true,iconCls:"icon-loading"});
				transmission.exec({method:"torrent-start"},function(data){
					button.linkbutton({iconCls:icon,disabled:false});
					button = null;
				});
			});
		
		// 暂停所有
		this.panel.toolbar.find("#toolbar_pause_all")
			//.linkbutton({text:this.lang.toolbar["pause-all"],disabled:false})
			.linkbutton({disabled:false})
			.attr("title",this.lang.toolbar.tip["pause-all"])
			.click(function(){
				var button = $(this);
				var icon = button.linkbutton("options").iconCls;
				button.linkbutton({disabled:true,iconCls:"icon-loading"});
				transmission.exec({method:"torrent-stop"},function(data){
					button.linkbutton({iconCls:icon,disabled:false});
					button = null;
				});
			});

		// 开始已选择的
		this.panel.toolbar.find("#toolbar_start")
			.linkbutton({disabled:true})
			.attr("title",this.lang.toolbar.tip["start"])
			.click(function(){
				system.changeSelectedTorrentStatus("start",$(this));
			});

		// 暂停已选择的
		this.panel.toolbar.find("#toolbar_pause")
			.linkbutton({disabled:true})
			.attr("title",this.lang.toolbar.tip["pause"])
			.click(function(){
				system.changeSelectedTorrentStatus("stop",$(this));
			});
		
		// 重新校验已选择的
		this.panel.toolbar.find("#toolbar_recheck")
			.linkbutton({disabled:true})
			.attr("title",this.lang.toolbar.tip["recheck"])
			.click(function(){
				var rows = system.control.torrentlist.datagrid("getChecked");
				if (rows.length>0)
				{
					if (rows.length==1)
					{
						var torrent = transmission.torrents.all[rows[0].id];
						if (torrent.percentDone>0)
						{
							if (confirm(system.lang.toolbar.tip["recheck-confirm"]))
							{
								system.changeSelectedTorrentStatus("verify",$(this));
							}
						}
						else
						{
							system.changeSelectedTorrentStatus("verify",$(this));
						}
					}
					else if (confirm(system.lang.toolbar.tip["recheck-confirm"]))
					{
						system.changeSelectedTorrentStatus("verify",$(this)); 
					}
				}
			});

		// 獲取更多的peer
		this.panel.toolbar.find("#toolbar_morepeers")
			.linkbutton({disabled:true})
			.click(function(){
				system.changeSelectedTorrentStatus("reannounce",$(this));
			});
		
		// 删除选定的内容
		this.panel.toolbar.find("#toolbar_remove")
			.linkbutton({disabled:true})
			.attr("title",this.lang.toolbar.tip["remove"])
			.click(function()
			{
				var rows = system.control.torrentlist.datagrid("getChecked");
				var ids = new Array();
				for (var i in rows)
				{
					ids.push(rows[i].id);
				}
				if (ids.length==0) return;
				
				system.openDialogFromTemplate({
					id: "dialog-torrent-remove-confirm",
					options: {
						title: system.lang.dialog["torrent-remove"].title,  
						width: 350,
						height: 150
					},
					datas: {
						"ids": ids
					}
				});
			});

		// 修改选定的种子数据保存目录
		this.panel.toolbar.find("#toolbar_changeDownloadDir")
		.linkbutton({disabled:true})
		.attr("title",this.lang.toolbar.tip["change-download-dir"])
		.click(function()
		{
			var rows = system.control.torrentlist.datagrid("getChecked");
			var ids = new Array();
			for (var i in rows)
			{
				ids.push(rows[i].id);
			}
			if (ids.length==0) return;
			
			system.openDialogFromTemplate({
				id: "dialog-torrent-changeDownloadDir",
				options: {
					title: system.lang.dialog["torrent-changeDownloadDir"].title,  
					width: 520,
					height: 200
				},
				datas: {
					"ids": ids
				}
			});
		});
		
		// 限速
		this.panel.toolbar.find("#toolbar_alt_speed")
			.linkbutton()
			.attr("title",this.lang.toolbar.tip["alt-speed"])
			.click(function(){
				var button = $(this);
				var options = button.linkbutton("options");
				var enabled = false;
				if (options.iconCls=="icon-alt-speed-false")
				{
					enabled = true;
				}
				transmission.exec(
					{
						method:"session-set"
						,arguments:{"alt-speed-enabled":enabled}
					}
					,function(data){
						if (data.result=="success")
						{
							system.serverConfig["alt-speed-enabled"] = enabled;
							button.linkbutton({iconCls:"icon-alt-speed-"+enabled.toString()});
							if (enabled)
							{
								$("#status_alt_speed").show();
							}
							else
							{
								$("#status_alt_speed").hide();
							}
						}
					}
				);

				button.linkbutton({iconCls:"icon-loading"});
			});
		
		// 参数
		this.panel.toolbar.find("#toolbar_config")
			.linkbutton()
			.attr("title",this.lang.toolbar.tip["system-config"])
			.click(function(){
				system.openDialogFromTemplate({
					id: "dialog-system-config",
					options: {
						title: system.lang.toolbar["system-config"],  
						width: 620,
						height: 440,
						resizable: true
					}
				});
			});
		
		// 刷新
		this.panel.toolbar.find("#toolbar_reload")
			.linkbutton()
			.attr("title",this.lang.toolbar.tip["system-reload"])
			.click(function(){
				system.reloadData();
			});		
	
		// 搜索
		this.panel.toolbar.find("#toolbar_search").searchbox(
		{  
			searcher:function(value){
				system.searchTorrents(value);
			},  
			prompt:this.lang.toolbar["search-prompt"]
		});
	}
	// 初始化状态栏
	,initStatusBar:function()
	{
		this.panel.statusbar.find("#status_title_downloadspeed").html(this.lang.statusbar.downloadspeed);
		this.panel.statusbar.find("#status_title_uploadspeed").html(this.lang.statusbar.uploadspeed);
	}
	// 连接服务器
	,connect:function()
	{
		this.showStatus(this.lang.system.status.connect,0);
		
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
			// 版本信息
			$("#status_version").html("Transmission "+system.lang.statusbar.version+result["version"]+", RPC: "+result["rpc-version"]
				+", WEB Control: "+system.version+"("+system.codeupdate+")");
			if (result["alt-speed-enabled"]==true)
			{
				system.panel.toolbar.find("#toolbar_alt_speed").linkbutton({iconCls:"icon-alt-speed-true"});
				$("#status_alt_speed").show();
			}
			else
			{
				system.panel.toolbar.find("#toolbar_alt_speed").linkbutton({iconCls:"icon-alt-speed-false"});
				$("#status_alt_speed").hide();
			}
			
			system.downloadDir = result["download-dir"];

			// rpc-version 版本为 15 起，不再提供 download-dir-free-space 参数，需从新的方法获取
			if (parseInt(system.serverConfig["rpc-version"])>=15)
			{
				transmission.getFreeSpace(system.downloadDir,function(datas){
					system.serverConfig["download-dir-free-space"] = datas.arguments["size-bytes"];
					system.showFreeSpace(datas.arguments["size-bytes"]);
				});
			}
			else
			{
				system.showFreeSpace(system.serverConfig["download-dir-free-space"]);
			}

			if (isinit)
			{
				system.showStatus(system.lang.system.status.connected);
			}
		});
	}
	,showFreeSpace:function(size)
	{
		var tmp = size;
		if (tmp==-1)
		{
			tmp = system.lang["public"]["text-unknown"];
		}
		else
		{
			tmp = formatSize(tmp);
		}
		$("#status_freespace").text(system.lang.dialog["system-config"]["download-dir-free-space"]+" "+tmp);
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
		var parentNode = this.panel.left.tree("find","servers");
		if (parentNode)
		{
			this.removeTreeNode("servers-loading");
		}
		else
		{
			this.appendTreeNode(null,[{
					id:"servers"
					,text:this.lang.tree.servers
					,iconCls:"icon-servers"
				}]);
			parentNode = this.panel.left.tree("find","servers");
		}
		
		var datas = new Array();
		for (var index in transmission.trackers)
		{
			var tracker = transmission.trackers[index];
			var node = system.panel.left.tree("find",tracker.nodeid);
			var text = tracker.name+this.showNodeMoreInfos(tracker.count,tracker.size);
			if (node)
			{
				system.updateTreeNodeText(tracker.nodeid,text,(tracker.connected?"icon-server":"icon-server-error"));
			}
			else
			{
				system.appendTreeNode(parentNode,[{
					id:tracker.nodeid
					,text:text
					,iconCls:(tracker.connected?"icon-server":"icon-server-error")
				}]);
			}

			oldInfos.trackers[tracker.nodeid] = null;
		}

		// 删除已经不存在的服务器
		for (var index in oldInfos.trackers)
		{
			var tracker = oldInfos.trackers[index];
			if (tracker)
			{
				system.removeTreeNode(tracker.nodeid);
			}
		}

		
		// 已暂停
		if (transmission.torrents.status[transmission._status.stopped])
		{
			system.updateTreeNodeText("paused",system.lang.tree.paused+this.showNodeMoreInfos(transmission.torrents.status[transmission._status.stopped].length));
		}
		else
		{
			system.updateTreeNodeText("paused",system.lang.tree.paused);
		}

		// 做种
		if (transmission.torrents.status[transmission._status.seed])
		{
			system.updateTreeNodeText("sending",system.lang.tree.sending+this.showNodeMoreInfos(transmission.torrents.status[transmission._status.seed].length));
		}
		else
		{
			system.updateTreeNodeText("sending",system.lang.tree.sending);
		}
		// 等待做种
		if (transmission.torrents.status[transmission._status.seedwait])
		{
			var node = system.panel.left.tree("find","sending");
			var childs = system.panel.left.tree("getChildren",node.target);
			var text = system.lang.tree.wait+this.showNodeMoreInfos(transmission.torrents.status[transmission._status.seedwait].length);
			if (childs.length>0)
			{
				system.updateTreeNodeText(childs[0].id,text);
			}
			else
			{
				system.appendTreeNode(node,[{id:"seedwait",text:text,iconCls:"icon-wait"}]);
			}
		}
		else
		{
			system.removeTreeNode("seedwait");
		}
		
		// 校验
		if (transmission.torrents.status[transmission._status.check])
		{
			system.updateTreeNodeText("check",system.lang.tree.check+this.showNodeMoreInfos(transmission.torrents.status[transmission._status.check].length));
		}
		else
		{
			system.updateTreeNodeText("check",system.lang.tree.check);
		}
		// 等待校验
		if (transmission.torrents.status[transmission._status.checkwait])
		{
			var node = system.panel.left.tree("find","check");
			var childs = system.panel.left.tree("getChildren",node.target);
			var text = system.lang.tree.wait+this.showNodeMoreInfos(transmission.torrents.status[transmission._status.checkwait].length);
			if (childs.length>0)
			{
				system.updateTreeNodeText(childs[0].id,text);
			}
			else
			{
				system.appendTreeNode(node,[{id:"checkwait",text:text,iconCls:"icon-wait"}]);
			}
		}
		else
		{
			system.removeTreeNode("checkwait");
		}

		// 下载中
		if (transmission.torrents.status[transmission._status.download])
		{
			system.updateTreeNodeText("downloading",system.lang.tree.downloading+this.showNodeMoreInfos(transmission.torrents.status[transmission._status.download].length));
		}
		else
		{
			system.updateTreeNodeText("downloading",system.lang.tree.downloading);
		}
		// 等待下载
		if (transmission.torrents.status[transmission._status.downloadwait])
		{
			var node = system.panel.left.tree("find","downloading");
			var childs = system.panel.left.tree("getChildren",node.target);
			var text = system.lang.tree.wait+this.showNodeMoreInfos(transmission.torrents.status[transmission._status.downloadwait].length);
			if (childs.length>0)
			{
				system.updateTreeNodeText(childs[0].id,text);
			}
			else
			{
				system.appendTreeNode(node,[{id:"downloadwait",text:text,iconCls:"icon-wait"}]);
			}
		}
		else
		{
			system.removeTreeNode("downloadwait");
		}

		// 活动中
		system.updateTreeNodeText("actively",system.lang.tree.actively+this.showNodeMoreInfos(transmission.torrents.actively.length));
		// 发生错误
		system.updateTreeNodeText("error",system.lang.tree.error+this.showNodeMoreInfos(transmission.torrents.error.length));
		// 警告
		system.updateTreeNodeText("warning",system.lang.tree.warning+this.showNodeMoreInfos(transmission.torrents.warning.length));

		var node = system.panel.left.tree("getSelected");
		if (node!=null)
		{
			var p = system.control.torrentlist.datagrid("options").pageNumber;
			system.loadTorrentToList({node:node,page:p});
		}
		
		if (currentTorrentId!=0)
		{
			system.control.torrentlist.datagrid("selectRecord",currentTorrentId);
		}
		
		system.reloading = false;

		if (system.config.autoReload)
		{
			system.autoReloadTimer = setTimeout(function(){system.reloadData();},system.config.reloadStep);
		}
		
		// 总大小
		system.updateTreeNodeText("torrent-all",system.lang.tree.all+this.showNodeMoreInfos(transmission.torrents.count,transmission.torrents.totalSize));

		// 统计信息
		var items = ("uploadedBytes,downloadedBytes,filesAdded,sessionCount,secondsActive").split(",");
		$.each(items, function(key, item){
			switch (item)
			{
				case "uploadedBytes":
				case "downloadedBytes":
					system.updateTreeNodeText(item,system.lang.tree.statistics[item]+formatSize(system.serverSessionStats["cumulative-stats"][item]));
					system.updateTreeNodeText("current-"+item,system.lang.tree.statistics[item]+formatSize(system.serverSessionStats["current-stats"][item]));
					break;
				case "secondsActive":
					system.updateTreeNodeText(item,system.lang.tree.statistics[item]+getTotalTime(system.serverSessionStats["cumulative-stats"][item]*1000));
					system.updateTreeNodeText("current-"+item,system.lang.tree.statistics[item]+getTotalTime(system.serverSessionStats["current-stats"][item]*1000));
					break;
				default:
					system.updateTreeNodeText(item,system.lang.tree.statistics[item]+system.serverSessionStats["cumulative-stats"][item]);
					system.updateTreeNodeText("current-"+item,system.lang.tree.statistics[item]+system.serverSessionStats["current-stats"][item]);
					break;
			}
		});

		for (var index in transmission.torrents.folders)
		{
			var item = transmission.torrents.folders[index];
			oldInfos.folders[item.nodeid] = null;
		}

		// 加载目录列表
		this.loadFolderList(oldInfos.folders);

		// FF 浏览器显示各个 总大小 时，会下移一行，故单独处理
		if (navigator.userAgent.indexOf("Firefox")>0)
		{
			system.panel.left.find("span.nav-total-size").css({"margin-top":"-19px"});
		}
	}
	// 显示当前种子数量和大小
	,showNodeMoreInfos:function(count,size)
	{
		var result = "";
		if (count>0)
		{
			result = " <span class='nav-torrents-number'>("+count+")</span>";
		}
		if (size>0)
		{
			result += "<span class='nav-total-size'>["+formatSize(size)+"]</span>";
		}

		return result;
	}
	// 获取服务器当前状态
	,getServerStatus:function()
	{
		if (this.reloading) return;
		clearTimeout(this.autoReloadTimer);

		this.reloading = true;
		transmission.getStatus(function(data){
			system.reloading=false;
			//system.updateTreeNodeText("torrent-all",system.lang.tree.all+" ("+data["torrentCount"]+")");
			//system.updateTreeNodeText("paused",system.lang.tree.paused+(data["pausedTorrentCount"]==0?"":" ("+data["pausedTorrentCount"]+")"));
			//system.updateTreeNodeText("sending",system.lang.tree.sending+(data["activeTorrentCount"]==0?"":" ("+data["activeTorrentCount"]+")"));
			$("#status_downloadspeed").html(formatSize(data["downloadSpeed"],false,"speed"));
			$("#status_uploadspeed").html(formatSize(data["uploadSpeed"],false,"speed"));
			system.serverSessionStats = data;
			if (data["torrentCount"]==0)
			{
				var parentNode = system.panel.left.tree("find","servers");
				if (parentNode)
				{
					system.panel.left.tree('remove',parentNode.target);
				}
				system.updateTreeNodeText("torrent-all",system.lang.tree.all);
			}
		});
	}
	// 显示状态信息
	,showStatus:function(msg,outtime){
		if ($("#m_status").panel("options").collapsed)
		{
			$("#layout_left").layout("expand","south");
		}
		this.panel.status_text.show();
		this.panel.status_text.html(msg);
		if (outtime==0)
		{
			return;
		}
		if (outtime==undefined)
		{
			outtime=3000;
		}
		this.panel.status_text.fadeOut(outtime,function(){
			$("#layout_left").layout("collapse","south");
		});
	}
	// 更新指定树形节点文字内容
	,updateTreeNodeText:function(id,text,iconCls)
	{
		var node = this.panel.left.tree("find",id);
		if (node)
		{
			var data = {
				target: node.target,
				text: text
			};
			
			if (iconCls!=undefined)
			{
				data["iconCls"] = iconCls
			}
			this.panel.left.tree("update", data);
		}
		node = null;
	}
	// 追加树节点
	,appendTreeNode:function(parentid,data)
	{
		var parent = null;
		if (typeof(parentid)=="string")
		{
			parent = this.panel.left.tree("find",parentid);
		}
		else
			parent = parentid;
		
		if (parent)
		{
			this.panel.left.tree("append", {
				parent: parent.target,
				data: data
			});
		}
		else
		{
			this.panel.left.tree("append", {
				data: data
			});
		}
		parent = null;
	}
	// 删除指定的节点
	,removeTreeNode:function(id)
	{
		var node = this.panel.left.tree("find",id);
		if (node)
		{
			this.panel.left.tree("remove", node.target);
		}
		node = null;
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
		};
		
		jQuery.extend(def, config);
		if (!config.node) return;
		
		var torrents = null;
		var parent = this.panel.left.tree("getParent",config.node.target)||{id:""};
		var currentNodeId = this.panel.left.data("currentNodeId");

		if (currentNodeId!=config.node.id)
		{
			this.control.torrentlist.datagrid({pageNumber:1});
			currentNodeId = config.node.id;
		}
		this.panel.left.data("currentNodeId",currentNodeId);

		switch (parent.id)
		{
		case "servers":
			torrents = transmission.trackers[config.node.id].torrents;
			break;
		default:
			switch (config.node.id)
			{
				case "torrent-all":
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
					// 分类目录
					if (config.node.id.indexOf("folders-")!=-1)
					{
						var folder = transmission.torrents.folders[config.node.id];
						if (folder)
						{
							torrents = folder.torrents;
						}
					}
					break;
			}
			break;
		}

		if (this.config.defaultSelectNode!=config.node.id)
		{
			this.control.torrentlist.datagrid("loadData",[]);
			this.config.defaultSelectNode = config.node.id;
			this.saveConfig();
		};

		var datas = new Array();
		for (var index in torrents)
		{
			if (!torrents[index])
			{
				return;
			}
			var status = this.lang.torrent["status-text"][torrents[index].status];
			var percentDone = parseFloat(torrents[index].percentDone*100).toFixed(2);
			// 校验时，使用校验进度
			if (status==transmission._status.check)
			{
				percentDone = parseFloat(torrents[index].recheckProgress*100).toFixed(2);
			}
			
			if (torrents[index].error!=0)
			{
				status = "<span class='text-status-error'>"+status+"</span>";
			}
			else if (torrents[index].warning)
			{
				status = "<span class='text-status-warning' title='"+torrents[index].warning+"'>"+status +"</span>";
			}
			datas.push({
				id:torrents[index].id
				,name:torrents[index].name
				,totalSize:torrents[index].totalSize
				,percentDone:torrents[index].percentDone
				,remainingTime:torrents[index].remainingTime
				,status:status
				,statusCode:torrents[index].status
				,addedDate:torrents[index].addedDate
				,completeSize:(torrents[index].totalSize-torrents[index].leftUntilDone)
				,rateDownload:torrents[index].rateDownload
				,rateUpload:torrents[index].rateUpload
				,leecherCount:torrents[index].leecher
				,seederCount:torrents[index].seeder
				,uploadRatio:torrents[index].uploadRatio
				,uploadedEver:torrents[index].uploadedEver
			});
		}
		
		this.panel.toolbar.find("#toolbar_start").linkbutton({disabled:true});
		this.panel.toolbar.find("#toolbar_pause").linkbutton({disabled:true});
		this.panel.toolbar.find("#toolbar_remove").linkbutton({disabled:true});
		this.panel.toolbar.find("#toolbar_recheck").linkbutton({disabled:true});
		this.panel.toolbar.find("#toolbar_changeDownloadDir").linkbutton({disabled:true});
		this.panel.toolbar.find("#toolbar_morepeers").linkbutton({disabled:true});
		this.panel.toolbar.find("#toolbar_queue").menubutton("disable");

		this.updateTorrentCurrentPageDatas(datas);
	}
	// 更新种子列表当前页数据
	,updateTorrentCurrentPageDatas: function(currentTypeDatas)
	{

		// 获取当前页数据
		var rows = this.control.torrentlist.datagrid("getRows");

		if (currentTypeDatas.length==0&&rows.length>0)
		{
			this.control.torrentlist.datagrid("loadData",[]);
			return;
		}

		var _options = this.control.torrentlist.datagrid("options");
		var orderField = null;
		if (_options.sortName)
		{
			orderField = _options.sortName;
			currentTypeDatas = currentTypeDatas.sort(arrayObjectSort(orderField,_options.sortOrder));
		}		

		if (rows.length==0||(currentTypeDatas.length!=this.control.torrentlist.datagrid("getData").total)&&currentTypeDatas.length>_options.pageSize)
		{
			this.control.torrentlist.datagrid({
				loadFilter:pagerFilter
				,pageNumber:_options.pageNumber
				,sortName:orderField
				,sortOrder:_options.sortOrder
			}).datagrid("loadData",currentTypeDatas);
			return;
		}

		// 设置数据
		this.control.torrentlist.datagrid("getData").originalRows = currentTypeDatas;
		var start = (_options.pageNumber-1)*parseInt(_options.pageSize);  
		var end = start + parseInt(_options.pageSize);  
		currentTypeDatas = (currentTypeDatas.slice(start, end));

		//this.debug("currentTypeDatas:",currentTypeDatas);

		// 当前更新的种子列表
		var recently = {};
		//
		var datas = {};

		// 初始化最近更新的数据
		for (var index in transmission.torrents.recently)
		{
			var item = transmission.torrents.recently[index];
			recently[item.id] = true;
			item = null;
		}

		// 初始化当前类型下的数据
		for (var index in currentTypeDatas)
		{
			var item = currentTypeDatas[index];
			datas[item.id] = item;
			item = null;
		}

		//this.debug("datas:",datas);
		//this.debug("recently:",recently);
		//this.debug("rows:",rows);

		var addedDatas = {};
		// 更新有变化的数据
		for (var index=rows.length-1;index>=0;index--)
		{
			var item = rows[index];
			var data = datas[item.id];
			if (!data)
			{
				this.control.torrentlist.datagrid("deleteRow",index);
			}
			else if (recently[item.id])
			{
				this.control.torrentlist.datagrid("updateRow",{
					index: index
					,row:data
				});
				addedDatas[item.id] = item;
			}
			// 移除当前删除的种子
			else if (transmission.torrents.removed)
			{
				if (transmission.torrents.removed.length>0&&$.inArray(item.id,transmission.torrents.removed)!=-1)
				{
					this.control.torrentlist.datagrid("deleteRow",index);
				}
				else
				{
					addedDatas[item.id] = item;
				}
			}
			else
			{
				addedDatas[item.id] = item;
			}
			item = null;
			data = null;
		}

		
		// 追加当前不存在的行
		for (var index in currentTypeDatas)
		{
			var item = currentTypeDatas[index];
			if (!addedDatas[item.id])
			{
				this.control.torrentlist.datagrid("appendRow",item);
			}
		}
		
		rows = null;
		recently = null;
		datas = null;
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

		tip+="\n"+torrent.downloadDir;

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
		var status = 0;
		if (typeof(torrent)=="object")
		{
			status = torrent.status;
		}
		else
		{
			status = torrent;
		}
		switch (status)
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
		if (typeof(torrent)=="object")
		{
			if (torrent.warning)
			{
				className = "torrent-progress-warning";
			}
			if (torrent.error!=0)
			{
				className = "torrent-progress-error";
			}
		}
		return '<div class="torrent-progress" title="'+progress+'"><div class="torrent-progress-text">'+progress+'</div><div class="torrent-progress-bar '+className+'" style="width:'+progress+';"></div></div>';
	}
	// 增加种子
	,addTorrentsToServer:function(urls,count,autostart,savepath)
	{
		//this.config.autoReload = false;
		var index = count-urls.length;
		var url = urls.shift();
		if (!url)
		{
			this.showStatus(this.lang.system.status.queuefinish);
			//this.config.autoReload = true;
			this.getServerStatus();
			return;
		}
		this.showStatus(this.lang.system.status.queue+(index+1)+"/"+(count) + "<br/>" + url,0);
		transmission.addTorrentFromUrl(url,savepath,autostart,function(data){
			system.addTorrentsToServer(urls,count,autostart,savepath);
		});
	}
	// 开始/暂停已选择的种子
	,changeSelectedTorrentStatus:function(status,button,method)
	{
		var rows = this.control.torrentlist.datagrid("getChecked");
		var ids = new Array();
		if (!status)
		{
			status = "start";
		}
		for (var i in rows)
		{
			ids.push(rows[i].id);
		}

		if (!method)
		{
			method = "torrent-"+status;
		}
		if (ids.length>0)
		{
			if (button)
			{
				var icon = button.linkbutton("options").iconCls;
				button.linkbutton({disabled:true,iconCls:"icon-loading"});
			}
			
			transmission.exec({
					method:method
					,arguments:{
						ids:ids
					}
				}
				,function(data){
					if (button)
					{
						button.linkbutton({iconCls:icon});
					}					
					system.control.torrentlist.datagrid("uncheckAll");
					system.reloadTorrentBaseInfos();
				}
			);
		}
	}
	// 从种子列表中查找指定的种子
	,searchTorrents:function(key)
	{
		if (key=="")
		{
			return;
		}
		var result = transmission.torrents.search(key);
		if (result==null||result.length==0)
		{
			this.removeTreeNode("search-result");
			return;
		}

		var node = this.panel.left.tree("find","search-result");
		var text = this.lang.tree["search-result"]+" : "+key+" ("+result.length+")";
		if (node==null)
		{
			this.appendTreeNode("torrent-all",[{id:"search-result",text:text,iconCls:"icon-search"}]);
			node = this.panel.left.tree("find","search-result");
		}
		else
		{
			this.panel.left.tree("update",{target:node.target,text:text});
		}
		this.panel.left.tree("select",node.target);
	}
	// 获取种子详细信息
	,getTorrentInfos:function(id)
	{
		if (!transmission.torrents.all[id]) return;
		if (transmission.torrents.all[id].infoIsLoading) return;
		if (this.currentTorrentId>0&&transmission.torrents.all[this.currentTorrentId])
		{
			if (transmission.torrents.all[this.currentTorrentId].infoIsLoading) return;
		}
		this.currentTorrentId = id;
		// 只在展开时才加载
		if (!this.panel.attribute.panel("options").collapsed)
		{
			this.panel.attribute.panel({iconCls:"icon-loading"});
			var torrent = transmission.torrents.all[id];
			torrent.infoIsLoading = true;
			var fields = "fileStats,trackerStats,peers,leftUntilDone,status,rateDownload,rateUpload,uploadedEver,uploadRatio,error,errorString";
			// 如果是第一次加载这个种子资料时，获取更多信息
			if (!torrent.moreInfosTag)
			{
				fields += ",files,trackers,comment,dateCreated,creator,downloadDir";
			}

			// 获取文件列表
			transmission.torrents.getMoreInfos(fields,id,function(result){
				torrent.infoIsLoading = false;
				system.panel.attribute.panel({iconCls:""});
				if (result==null) return;
				// 合并当前返回的值到当前种子
				jQuery.extend(torrent, result[0]);
				if (system.currentTorrentId==0||system.currentTorrentId!=id) 
				{
					system.clearTorrentAttribute();
					return;
				}

				torrent.completeSize = (torrent.totalSize-torrent.leftUntilDone);
				torrent.moreInfosTag = true;
				system.fillTorrentBaseInfos(torrent);
				system.fillTorrentFileList(torrent);
				system.fillTorrentServerList(torrent);
				system.fillTorrentPeersList(torrent);
				system.fillTorrentConfig(torrent);
				transmission.torrents.all[id] = torrent;
				transmission.torrents.datas[id] = torrent;
			});
		}
	}
	,clearTorrentAttribute:function()
	{
		system.panel.attribute.find("#torrent-files-table").datagrid("loadData",[]);
		system.panel.attribute.find("#torrent-servers-table").datagrid("loadData",[]);
		system.panel.attribute.find("#torrent-peers-table").datagrid("loadData",[]);
		system.panel.attribute.find("span[id*='torrent-attribute-value']").html("");
	}
	// 更新指定的表示当前页数理
	,updateCurrentPageDatas:function(keyField,datas,sourceTable)
	{
		// 获取当前页数据
		var rows = sourceTable.datagrid("getRows");
		var _options = sourceTable.datagrid("options");
		var orderField = null;
		if (_options.sortName)
		{
			orderField = _options.sortName;
			datas = datas.sort(arrayObjectSort(orderField,_options.sortOrder));
		}		

		if (rows.length==0||(datas.length!=sourceTable.datagrid("getData").total)&&datas.length>_options.pageSize)
		{
			sourceTable.datagrid({
				loadFilter:pagerFilter
				,pageNumber:1
				,sortName:orderField
				,sortOrder:_options.sortOrder
			}).datagrid("loadData",datas);
			return;
		}

		// 设置数据
		sourceTable.datagrid("getData").originalRows = datas;
		var start = (_options.pageNumber-1)*parseInt(_options.pageSize);  
		var end = start + parseInt(_options.pageSize);
		datas = (datas.slice(start, end));

		var newDatas = {};
		// 初始化当前类型下的数据
		for (var index in datas)
		{
			var item = datas[index];
			newDatas[item[keyField]] = item;
			item = null;
		}

		// 更新有变化的数据
		for (var index=rows.length-1;index>=0;index--)
		{
			var item = rows[index];

			var data = newDatas[item[keyField]];

			if (data)
			{
				sourceTable.datagrid("updateRow",{
					index: index
					,row:data
				});
			}
			else
			{
				sourceTable.datagrid("deleteRow",index);
			}
			data = null;

			item = null;
		}
	}
	// 填充种子的基本信息
	,fillTorrentBaseInfos:function(torrent)
	{
		$.each(torrent, function(key, value){
			switch (key)
			{
				// 速度相关
				case "rateDownload":
				case "rateUpload":
					value = formatSize(value,true,"speed");
					break;

				// 大小相关
				case "totalSize":
				case "uploadedEver":
				case "leftUntilDone":
				case "completeSize":
					value = formatSize(value);
					break;

				// 时间相关
				case "addedDate":
				case "dateCreated":
					value = formatLongTime(value);
					break;

				// 状态
				case "status":
					value = system.lang.torrent["status-text"][value];
					break;
				// 错误
				case "error":
					if (value==0)
					{
						system.panel.attribute.find("#torrent-attribute-tr-error").hide();
					}
					else
					{
						system.panel.attribute.find("#torrent-attribute-tr-error").show();
					}
					break;

				// 描述
				case "comment":
					value = system.replaceURI(value);
					break;

			}
			system.panel.attribute.find("#torrent-attribute-value-"+key).html(value);
		});
	}
	// 填充种子的文件列表
	,fillTorrentFileList:function(torrent)
	{
		var files = torrent.files;
		var fileStats = torrent.fileStats;
		var datas = new Array();
		var namelength = torrent.name.length+1;
		for (var index in files)
		{
			var file = files[index];
			var stats = fileStats[index];
			var percentDone = parseFloat(stats.bytesCompleted/file.length*100).toFixed(2);
			datas.push({
				name:(file.name==torrent.name?file.name:file.name.substr(namelength))
				,index:index
				,bytesCompleted:stats.bytesCompleted
				,percentDone:system.getTorrentProgressBar(percentDone,transmission._status.download)
				,length:file.length
				,wanted:system.lang.torrent.attribute["status"][stats.wanted]
				,priority:'<span class="iconlabel icon-flag-'+stats.priority+'">'+system.lang.torrent.attribute["priority"][stats.priority]+'</span>'
			});
		}

		this.updateCurrentPageDatas("index",datas,system.panel.attribute.find("#torrent-files-table"));
		
	}
	// 填充种子的服务器列表
	,fillTorrentServerList:function(torrent)
	{
		var trackers = torrent.trackers;
		var trackerStats = torrent.trackerStats;
		var datas = new Array();
		for (var index in trackers)
		{
			var item = trackers[index];
			var stats = trackerStats[index];
			var rowdata = {};
			for (var key in stats)
			{
				switch (key)
				{
					// 时间相关
					case "lastAnnounceTime":
					case "nextAnnounceTime":
						rowdata[key] = formatLongTime(stats[key]);
						break;

					// true/false
					case "lastAnnounceSucceeded":
					case "lastAnnounceTimedOut":
						rowdata[key] = system.lang.torrent.attribute["status"][stats[key]];
						break;

					default:
						rowdata[key] = stats[key];
						break;
				}
			}

			datas.push(rowdata);
		}
		// 替換 Tracker 信息
		transmission.torrents.addTracker(torrent);

		this.updateCurrentPageDatas("id",datas,system.panel.attribute.find("#torrent-servers-table"));
		//console.log("datas:",datas);
		//system.panel.attribute.find("#torrent-servers-table").datagrid({loadFilter:pagerFilter,pageNumber:1}).datagrid("loadData",datas);
	}
	// 填充种子的用户列表
	,fillTorrentPeersList:function(torrent)
	{
		var peers = torrent.peers;
		var datas = new Array();
		for (var index in peers)
		{
			var item = peers[index];
			var rowdata = {};
			for (var key in item)
			{
				rowdata[key] = item[key];
			}
			var percentDone = parseFloat(item.progress*100).toFixed(2);
			rowdata.progress = system.getTorrentProgressBar(percentDone,transmission._status.download)
			datas.push(rowdata);
		}

		this.updateCurrentPageDatas("address",datas,system.panel.attribute.find("#torrent-peers-table"));
		//console.log("datas:",datas);
		//system.panel.attribute.find("#torrent-peers-table").datagrid({loadFilter:pagerFilter,pageNumber:1}).datagrid("loadData",datas);
	}
	// 填充种子设置参数
	,fillTorrentConfig:function(torrent)
	{
		if (system.panel.attribute.find("#torrent-attribute-tabs").data("selectedIndex")!=4)
		{
			return;
		}
		transmission.torrents.getConfig(torrent.id,function(result){
			if (result==null) return;
			
			var torrent = transmission.torrents.all[system.currentTorrentId];
			// 合并当前返回的值到当前种子
			jQuery.extend(torrent, result[0]);
			if (system.currentTorrentId==0) return;
			$.each(result[0], function(key, value){
				var indeterminate = false;
				var checked = false;
				var useTag = false;
				switch (key)
				{
					//
					case "seedIdleMode":
					case "seedRatioMode":
						if (value==0)
						{
							checked = false;
							indeterminate = true;
						}
						useTag = true;
					case "downloadLimited":
					case "uploadLimited":
						if (value==true||value==1)
						{
							checked = true;
						}
						
						system.panel.attribute.find("input[enabledof='"+key+"']").prop("disabled",!checked);
						if (useTag)
						{
							system.panel.attribute.find("#"+key).prop("indeterminate",indeterminate).data("_tag",value)
						}
						system.panel.attribute.find("#"+key).prop("checked",checked);

						break;

					default:
						system.panel.attribute.find("#"+key).val(value);
						system.panel.attribute.find("#"+key).numberspinner("setValue",value);
						break;

				}
			});
		});
	}
	// 设置字段显示格式
	,setFieldFormat:function(field)
	{
		if (field.formatter)
		{
			switch (field.formatter)
			{
			case "size":
				field.formatter =  function(value,row,index){return formatSize(value);};
				break;
			case "speed":
				field.formatter =  function(value,row,index){return formatSize(value,true,"speed");};
				break;

			case "longtime":
				field.formatter =  function(value,row,index){return formatLongTime(value);};
				break;

			case "progress":
				field.formatter =  function(value,row,index){
					var percentDone = parseFloat(value*100).toFixed(2);
					return system.getTorrentProgressBar(percentDone,transmission.torrents.all[row["id"]]);
				};
				break;

			case "_usename_":
				switch (field.field)
				{
				case "name":
					field.formatter =  function(value,row,index){
						return system.getTorrentNameBar(transmission.torrents.all[row["id"]]);
					};
					break;
				}
				break;
				
			}
		}
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
	// 加载目录列表
	,loadFolderList:function(oldFolders)
	{
		this.removeTreeNode("folders-loading");
		// 删除已经不存在的目录
		for (var index in oldFolders)
		{
			var item = oldFolders[index];
			if (item)
			{
				system.removeTreeNode(item.nodeid);
			}
		}
		if (transmission.downloadDirs.length==0)
		{
			return;
		}

		timedChunk(transmission.downloadDirs, this.appendFolder, this, 10, function(){
			// FF 浏览器显示各个 总大小 时，会下移一行，故单独处理
			if (navigator.userAgent.indexOf("Firefox")>0)
			{
				system.panel.left.find("span.nav-total-size").css({"margin-top":"-19px"});
			}

			
		});
		/*
		for (var index in transmission.downloadDirs)
		{
			var parentkey = rootkey;
			var fullkey = transmission.downloadDirs[index];
			
		}*/
	}
	,appendFolder:function(fullkey)
	{
		if (!fullkey) return;

		var rootkey = "folders";
		var parentkey = rootkey;
		var folder = fullkey.split("/");
		var key = rootkey + "-";
		for (var i in folder)
		{
			var name = folder[i]; 
			if (name=="")
			{
				continue;
			}
			//key += "--" + text.replace(/\./g,"。") + "--";
			key += this.B64.encode(name);
			var node = this.panel.left.tree("find",key);
			var folderinfos = transmission.torrents.folders[key];
			var text = name+this.showNodeMoreInfos(folderinfos.count,folderinfos.size);
			
			if (!node)
			{
				this.appendTreeNode(parentkey,[{id:key,text:text}]);
				if (parentkey!=rootkey)
				{
					node = this.panel.left.tree("find",parentkey);
					this.panel.left.tree("collapse",node.target);
				}
			}
			else
			{
				this.updateTreeNodeText(key, text);
			}
			parentkey = key;
		}
	}
	,replaceURI:function(text)
	{
		var reg = /(http|https|ftp):\/\/([^/:]+)(:\d*)?([^# ]*)/ig;
		return text.replace(reg,function(url){return '<a href="'+url+'" target="_blank">'+url+'</a>';});
	}
	// 从 cookies 里加载配置
	,readConfig:function()
	{
		var config = cookies.get("transmission-web-control");
		if ($.isPlainObject(config))
		{
			this.config = $.extend(this.config, config);;
		}

		for (var key in this.storageKeys.dictionary)
		{
			this.dictionary[key] = this.getStorageData(this.storageKeys.dictionary[key]);
		}
	}
	// 在 cookies 里保存参数
	,saveConfig:function()
	{
		cookies.set("transmission-web-control",this.config,100);
		for (var key in this.storageKeys.dictionary)
		{
			this.setStorageData(this.storageKeys.dictionary[key],this.dictionary[key]);
		}
	}
	// 上传种子文件
	,uploadTorrentFile: function(fileInputId,savePath,paused,callback)
	{
		// 判断是否支持 FileReader 接口
		if (window.FileReader)
		{
			var files = $("input[id='"+fileInputId+"']")[0].files;
			$.each(files,function(index,file){
				transmission.addTorrentFromFile(file,savePath,paused,callback,files.length);
			});
		}
		else
		{
			alert(system.lang["publit"]["text-browsers-not-support-features"]);
		}
	}
	,checkUpdate: function()
	{
		$.getScript(this.checkUpdateScript,function(){
			if (system.codeupdate<system.lastUpdateInfos.update)
			{
				$("#area-update-infos").show();
				$("#msg-updateInfos").html(system.lastUpdateInfos.update+" -> "+system.lastUpdateInfos.infos);
			}
			else
				$("#area-update-infos").hide();
		});
	}
	// 設置語言，重新加載頁面
	,changeLanguages: function(lang)
	{
		if (lang==this.lang.name||!lang) return;

		this.config.defaultLang = lang;
		this.saveConfig();
		location.href = "?lang="+lang;
	}
	,getStorageData: function(key,defaultValue)
	{
		return (window.localStorage[key]==null?defaultValue:window.localStorage[key]);
	}
	,setStorageData: function(key,value)
	{
		window.localStorage[key] = value;
	}
	// 打开指定的模板窗口
	,openDialogFromTemplate: function(config)
	{
		var defaultConfig = {
			id: null,  
			options: null,
			datas: null
		};
		config = $.extend(true,defaultConfig, config);

		if (config.id==null) return;

		var dialogId = config.id;
		var options = config.options;
		var datas = config.datas;

		var dialog = $("#"+dialogId);
		if (dialog.length)
		{
			dialog.dialog("open");
			if (datas)
			{
				$.each(datas,function(key,value){
					dialog.data(key,value);
				});
			}
			
			
			dialog.dialog({content:system.templates[dialogId]});
			
			return;
		}
		var defaultOptions = {
			title: "",  
			width: 100,
			height: 100,
			resizable: false,
			cache: true,
			content:"loading...",  
			modal: true
		};
		options = $.extend(true,defaultOptions, options);

		$("<div/>").attr("id",dialogId).appendTo(document.body).dialog(options);
		
		$.get("template/"+dialogId+".html?time="+(new Date()),function(data){
			system.templates[dialogId] = data;
			if (datas)
			{
				$.each(datas,function(key,value){
					$("#"+dialogId).data(key,value);
				});
			}
			
			$("#"+dialogId).dialog({content:data});
		});
	}
	// 调试信息
	,debug:function(label,text){
		if (window.console)
		{
			if (window.console.log)
			{
				window.console.log(label,text);
			}
		}	
	}
};

$(document).ready(function(){
	// 加载默认语言内容
	$.getScript("lang/default.js");
	// 加载可用的语言列表
	$.getScript("lang/_languages.js",function(){
		system.init(location.search.getQueryString("lang"),location.search.getQueryString("local"));
	});
});

function pagerFilter(data){  
	if (typeof data.length == 'number' && typeof data.splice == 'function'){    // is array  
		 data = {  
			  total: data.length,  
			  rows: data  
		 }  
	}  
	var dg = $(this);  
	var opts = dg.datagrid('options');
	var pager = dg.datagrid('getPager');
	var buttons = dg.data("buttons");
	//system.debug("pagerFilter.buttons:",buttons);
	pager.pagination({  
		 onSelectPage:function(pageNum, pageSize){  
			  opts.pageNumber = pageNum;  
			  opts.pageSize = pageSize;
			  pager.pagination('refresh',{  
					pageNumber:pageNum,  
					pageSize:pageSize  
			  });  
			  dg.datagrid('loadData',data);  
		 }
		 ,buttons:buttons
	});
	if (!data.originalRows){  
		 data.originalRows = (data.rows);  
	}  
	var start = (opts.pageNumber-1)*parseInt(opts.pageSize);  
	var end = start + parseInt(opts.pageSize);  
	data.rows = (data.originalRows.slice(start, end));  
	return data;  
}
