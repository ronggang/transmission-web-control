// transmission RPC 操作类
var transmission = {
	SessionId:""
	,isInitialized:false
	,host:""
	,port:"9091"
	,path:"/transmission/rpc"
	,fullpath:""
	,username:""
	,password:""
	,headers:{}
	,islocal:false
	,getSessionId:function(me,callback)
	{
		var settings = {
			type: "POST"
			,url:this.fullpath
			,crossDomain:true
			,error: function(request,event,settings) 
			{
				var SessionId = "";
				if (request.status === 409 && (SessionId = request.getResponseHeader('X-Transmission-Session-Id')))
				{
					me.isInitialized = true;
					me.headers["X-Transmission-Session-Id"] = SessionId;
					if (callback)
					{
						callback();
					}
				}
			}
			,headers:this.headers

		};
		jQuery.ajax(settings);
	}
	,init:function(config,callback)
	{
		jQuery.extend(this, config);
		if (this.islocal)
		{
			this.fullpath = this.path;
		}
		else
		{
			if (this.fullpath=="")
			{
				this.fullpath = this.host + (this.port?":"+this.port:"") + this.path;
			}
			if (this.username&&this.password)
			{
				this.headers["Authorization"] = "Basic "+(new Base64()).encode(this.username+":"+this.password);
			}
		}
		this.getSessionId(this,callback);
	}
	,exec:function(config,callback)
	{
		if (!this.isInitialized)
		{
			return false;
		}
		var data = {
			method:""
			,arguments:{}
			,tag:""
		};

		jQuery.extend(data, config);

		var settings = {
			type: "POST"
			,url:this.fullpath
			,dataType: 'json'
			,data:JSON.stringify(data)
			,crossDomain:true
			,success:function(resultData,textStatus)
			{
				if (callback)
				{
					callback(resultData);
				}
			}
			,error:function(request,event,settings) 
			{
				alert("数据提交错误，错误状态："+request.status);
			}
			,headers:this.headers
		};
		jQuery.ajax(settings);
	}
	,getStatus:function(callback)
	{
		this.exec(
			{
				method:"session-stats"
			}
			,function(data)
			{
				if (data.result=="success")
				{
					if (callback)
					{
						callback(data.arguments);
					}
				}
			}
		);
	}
}