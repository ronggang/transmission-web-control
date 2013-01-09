// 种子相关信息
transmission.torrents = {
	all:null
	,puased:null
	,downloading:null
	,actively:null
	,searchResult:null
	,error:null
	,warning:null
	,folders:{}
	,status:{}
	,count:0
	,totalSize:0
	,loadSimpleInfo:false
	,activeTorrentCount:0
	,pausedTorrentCount:0
	,fields:{
		base:"id,name,status,hashString,totalSize,percentDone,addedDate,trackerStats,leftUntilDone,rateDownload,rateUpload"
				+",rateDownload,rateUpload,peersGettingFromUs,peersSendingToUs,uploadRatio,uploadedEver,downloadedEver,downloadDir,error"
		,status:"id,status,percentDone,trackerStats,leftUntilDone,rateDownload,rateUpload"
					+",rateDownload,rateUpload,peersGettingFromUs,peersSendingToUs,uploadRatio,uploadedEver,downloadedEver,error,errorString"
		,config:"downloadLimit,downloadLimited,peer-limit,seedIdleLimit,seedIdleMode,seedRatioLimit,seedRatioMode,uploadLimit,uploadLimited"
	}
	// 所有已获取的种子列表
	,datas:{}
	// 当前获取的种子列表
	,recently:null
	// 当前移除的种子
	,removed:null
	// 是否正在获取有变化的种子
	,isRecentlyActive:false
	// 新增的种子
	,newIds:new Array()
	,getallids:function(callback,ids)
	{
		var fields = this.fields.base;
		if (this.loadSimpleInfo&&this.all)
			fields = this.fields.status;
		var arguments = {
			fields:fields.split(",")
		};
		this.isRecentlyActive = false;
		// 如果已经获取过
		if (this.all&&ids==undefined)
		{
			arguments["ids"] = "recently-active";
			this.isRecentlyActive = true;
		}
		else if (ids)
		{
			arguments["ids"] = ids;
		}
		if (!this.all)
		{
			this.all = {};
		}
		transmission.exec
		(
			{
				method:"torrent-get"
				,arguments:arguments
			}
			,function(data)
			{
				if (data.result=="success")
				{
					transmission.torrents.newIds.length = 0;
					transmission.torrents.loadSimpleInfo = true;
					transmission.torrents.recently = data.arguments.torrents;
					transmission.torrents.removed = data.arguments.removed;
					transmission.torrents.splitid();
					if (callback)
					{
						callback(data.arguments.torrents);
					}
				}
				else
				{
					transmission.torrents.datas = null;
					if (callback)
					{
						callback(null);
					}
				}
					
			}
		);
	}
	// 根据种子状态将ID进行分类
	,splitid:function()
	{
		// 正在下载的种子
		this.downloading = new Array();
		// 已暂停的种子
		this.puased = new Array();
		// 当前活动的种子
		this.actively = new Array();
		// 有错误提示的种子
		this.error = new Array();
		// 有警告提示的种子
		this.warning = new Array();
		// 所有下载目录列表
		transmission.downloadDirs = new Array();

		var _Status = transmission._status;
		this.status = {};
		transmission.trackers = {};
		this.totalSize=0;
		this.folders = {};

		var B64 = new Base64();

		// 合并两个数
		for (var index in this.recently)
		{
			var item = this.recently[index];
			this.datas[item.id] = item;
		}

		var removed = new Array();

		// 去除已经被删除的种子
		for (var index in this.removed)
		{
			var item = this.removed[index];
			removed.push(item.id);
		}

		// 将种子进行分类
		for (var index in this.datas)
		{
			var item = this.datas[index];
			if ($.inArray(item.id,removed)&&removed.length>0)
			{
				if (this.all[item.id])
				{
					this.all[item.id] = null;
				}
				continue;
			}
			// 如果当前是获取正有变化的种子，并且没有在之前种子列表内，即新增的种子，需要重新加载基本的信息
			if (this.isRecentlyActive&&!this.all[item.id])
			{
				this.newIds.push(item.id);
			}
			item = $.extend(this.all[item.id], item);
			if (item.uploadedEver==0&&item.downloadedEver==0)
			{
				item.uploadRatio = "∞";
			}
			item.infoIsLoading = false;
			var type = this.status[item.status];
			this.addTracker(item);
			if (!type)
			{
				this.status[item.status] = new Array();
				type = this.status[item.status];
			}
			
			type.push(item);
			// 发生错误的种子
			if (item.error!=0)
			{
				this.error.push(item);
			}
			
			// 当前有流量的种子
			if (item.rateUpload>0||item.rateDownload>0)
			{
				this.actively.push(item);
			}

			switch (item.status)
			{
			case _Status.stopped:
				this.puased.push(item);
				break;

			case _Status.download:
				this.downloading.push(item);
				break;
			}
			
			this.all[item.id]=item;
			
			this.totalSize+=item.totalSize;

			// 设置目录
			if ($.inArray(item.downloadDir, transmission.downloadDirs)==-1)
			{
				transmission.downloadDirs.push(item.downloadDir);
			}

			var folder = item.downloadDir.split("/");
			var folderkey = "folders-";
			for (var i in folder)
			{
				var text = folder[i]; 
				if (text=="")
				{
					continue;
				}
				folderkey += B64.encode(text);
				var node = this.folders[folderkey];
				if (!node)
				{
					node = {count:0,torrents:new Array(),size:0};
				}
				node.torrents.push(item);
				node.count++;
				node.size+=item.totalSize;
				this.folders[folderkey] = node;
			}

		}
		transmission.downloadDirs = transmission.downloadDirs.sort();

		// 是否有需要获取的新种子
		if (this.newIds.length>0)
		{
			this.getallids(null,this.newIds);
		}
	}
	,addTracker:function(item)
	{
		var trackerStats = item.trackerStats;
		var haveWarning= false;
		
		item.leecherCount = 0;
		item.seederCount = 0;
		if (trackerStats.length>0)
		{
			for (var index in trackerStats)
			{
				var trackerInfo = trackerStats[index];
				var lastResult = trackerInfo.lastAnnounceResult.toLowerCase();
				var trackerUrl = (trackerInfo.host.replace("http://","").replace("https://","").split(":")[0]).split(".");
				if ($.inArray(trackerUrl[0],"www,tracker".split(","))!=-1)
				{
					trackerUrl.shift();
				}
				
				var name = trackerUrl.join(".");
				var id = "tracker-"+name.replace(/\./g,"-");
				var tracker = transmission.trackers[id];
				if (!tracker)
				{
					transmission.trackers[id] = {count:0,torrents:new Array(),size:0,connected:true};
					tracker = transmission.trackers[id];
				}
				
				tracker["name"] = name;
				tracker["nodeid"] = id;
				tracker["host"] = trackerInfo.host;
				
				if (lastResult!="success")
				{
					haveWarning = true;
					item["warning"] = trackerInfo.lastAnnounceResult;
					
					if (lastResult=="could not connect to tracker")
					{
						tracker.connected = false;
					}
				}
				
				tracker.torrents.push(item);
				tracker.count++;
				tracker.size+=item.totalSize;
				item.leecherCount+=trackerInfo.leecherCount;
				item.seederCount+=trackerInfo.seederCount;
			}
			if (haveWarning)
			{
				this.warning.push(item);
			}
			
			if (item.leecherCount<0) item.leecherCount = 0;
			if (item.seederCount<0) item.seederCount = 0;
			
			//item.leecher = item.leecherCount+" | "+item.peersGettingFromUs;
			//item.seeder = item.seederCount+" | "+item.peersSendingToUs;
			item.leecher = item.leecherCount+" ("+item.peersGettingFromUs+")";
			item.seeder = item.seederCount+" ("+item.peersSendingToUs+")";
		}
	}
	// 获取下载者和做种者数量测试
	,getPeers:function(ids){
		transmission.exec
		(
			{
				method:"torrent-get"
				,arguments:{
					fields:("peers,peersFrom").split(",")
					,ids:ids
				}
			}
			,function(data)
			{
				console.log("data:",data);
			}
		);
	}
	// 获取更多信息
	,getMoreInfos:function(fields,ids,callback)
	{
		transmission.exec
		(
			{
				method:"torrent-get"
				,arguments:{
					fields:fields.split(",")
					,ids:ids
				}
			}
			,function(data)
			{
				if (data.result=="success")
				{
					if (callback)
						callback(data.arguments.torrents);
				}
				else if (callback)
					callback(null);
			}
		);
	}
	// 从当前已获取的种子列表中搜索指定关键的种子
	,search:function(key,source)
	{
		if (!key)
		{
			return null;
		}

		if (!source)
		{
			source = this.all;
		}

		var arrReturn = new Array();
		$.each(source, function(item,i){
			if (source[item].name.toLowerCase().indexOf(key.toLowerCase())!=-1)
			{
				arrReturn.push(source[item]);
			}
		});

		this.searchResult = arrReturn;

		return arrReturn;
	}
	// 获取指定种子的文件列表
	,getFiles:function(id,callback)
	{
		transmission.exec
		(
			{
				method:"torrent-get"
				,arguments:{
					fields:("files,fileStats").split(",")
					,ids:id
				}
			}
			,function(data)
			{
				if (data.result=="success")
				{
					if (callback)
						callback(data.arguments.torrents);
				}
				else if (callback)
					callback(null);
			}
		);
	}
	// 获取指定种子的设置信息
	,getConfig:function(id,callback)
	{
		this.getMoreInfos(this.fields.config,id,callback);
	}
	// 获取错误/警告的ID列表
	,getErrorIds:function(ignore)
	{
		var result = new Array();
		
		for (var index in this.error)
		{
			var item = this.error[index];
			if ($.inArray(item.id,ignore)!=-1&&ignore.length>0)
			{
				continue;
			}
			result.push(item.id);
		}

		for (var index in this.warning)
		{
			var item = this.warning[index];
			if ($.inArray(item.id,ignore)!=-1&&ignore.length>0)
			{
				continue;
			}
			result.push(item.id);
		}

		return result;
	}
};