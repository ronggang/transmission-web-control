var cookies = {
	/* ***********************************************
	'** Function name:	Get the value of Cookies
	'** Parameters:
	'**				strName					Cookie name
	'**				strSubName				subkey name (if any)
	'** returns:
	'**				null					if no values has been obtained
	'**				cookie					values in cookie
	'** Example:
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
			// There will be ampersand if there are subprojects
			if (strCookies[i].indexOf("&") > 0)
			{
				// Get head
				strHead = strCookies[i].split("=");
				// If we have cookie we seek
				if (strName == strHead[0])
				{
					// Manipulate head information
					strCookies[i] = strCookies[i].substr(strName.length+1);
					// Use the & divisible character to get all the children
					strCookie = strCookies[i].split("&");
					intLength = strCookie.length;
					var result = {};
					for (var j=0;j<intLength ;j++ )
					{
						strItem = strCookie[j].split("=");

						//var value = unescape(strItem[1]);
						var value = JSON.parse(strItem[1]);
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
					// If no child name is specified, an object is returned that contains all the children;
					return result;
				}
			}
			// There is no child to determine the value directly
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
	// Set the cookie content
	// Value can be an object, such as: key: value
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
			// Save it per object type
			case "object":
			case "function":
				var arr = new Array();
				for (var key in value)
				{
					//arr.push(key+"="+escape(value[key]));
					arr.push(key+"="+JSON.stringify(value[key]));
				}
				cookieValue = arr.join("&");
				break;

			default:
				//cookieValue = escape(value);
				cookieValue = JSON.stringify(value);
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