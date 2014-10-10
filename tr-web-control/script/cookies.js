var cookies = {
	/* ***********************************************
	'** 函数名称:	取得Cookies的值
	'** 函数功能:	显示分页信息
	'** 参数说明:
	'**				strName					要取值的Cookies名称
	'**				strSubName				子项名称（如果有的话）
	'** 函数返回:
	'**				null						表示没有取得值
	'**				cookies值				正确返回（有值）
	'** 参考实例:
	'**				var strCookie = getCookie("myCookies","mySubCookies");
	*************************************************/
	get:function(strName,strSubName)
	{
		var strCookies = document.cookie.split("; ");
		var intCookiesLength = strCookies.length;
		var intLength;
		var strItem,strHead,strCookie;
	  
		for (var i=0; i < intCookiesLength; i++)
		{
			// 当有子项目时会有&符号
			if (strCookies[i].indexOf("&") > 0)
			{
				// 取得头
				strHead = strCookies[i].split("=");
				// 判断是否和要查找的参数相同
				if (strName == strHead[0])
				{
					// 去掉头信息
					strCookies[i] = strCookies[i].substr(strName.length+1);
					// 以&分割字符，以取得所有子项
					strCookie = strCookies[i].split("&");
					intLength = strCookie.length;
					var result = {};
					for (var j=0;j<intLength ;j++ )
					{
						strItem = strCookie[j].split("=");

						var value = unescape(strItem[1]);
						switch (value)
						{
							case "true":
								result[strItem[0]] = true;
								break;
							case "false":
								result[strItem[0]] = false;
								break;
							default:
								result[strItem[0]] = value;
								break;
						}
						
						
						if (strSubName == strItem[0])
						{
							return value;
						}	
					}
					// 如果没有指定子项名称时，则返回一个对象，包含所有子项；
					return result;
				}
			}
			// 没有子项时直接判断取值
			else
			{
				strItem = strCookies[i].split("=");
				if (strName == strItem[0])
				{
					return unescape(strItem[1]);
				}	
			}
		}
		return null;
	}
	// 设置 cookie 内容
	// value 可为对象，格式如：key:value
	,set:function(name,value,expireDays)
	{
		var exdate=new Date();
		if (expireDays==undefined)
		{
			expireDays = 0;
		}
		exdate.setDate(exdate.getDate()+expireDays);
		var cookieValue = value;
		switch (typeof(value))
		{
			// 如果为对象时，按格式拆分后保存
			case "object":
			case "function":
				var arr = new Array();
				for (var key in value)
				{
					arr.push(key+"="+escape(value[key]));
				}
				cookieValue = arr.join("&");
				break;

			default:
				cookieValue = escape(value);
				break;
		}
		document.cookie=name+"=" +cookieValue+((expireDays==0)? "" :"; expires="+exdate.toGMTString());
	}
	,remove:function(name)
	{
		this.set(name,"",-1);
	}
	,all:function()
	{
		return document.cookie;
	}
};