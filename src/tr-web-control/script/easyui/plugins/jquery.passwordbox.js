/**
 * jQuery EasyUI 1.5.2
 * 
 * Copyright (c) 2009-2017 www.jeasyui.com. All rights reserved.
 *
 * Licensed under the freeware license: http://www.jeasyui.com/license_freeware.php
 * To use it on other terms please contact us: info@jeasyui.com
 *
 */
(function($){
function _1(_2){
var _3=$.data(_2,"passwordbox");
var _4=_3.options;
var _5=$.extend(true,[],_4.icons);
if(_4.showEye){
_5.push({iconCls:"passwordbox-open",handler:function(e){
_4.revealed=!_4.revealed;
_6(_2);
}});
}
$(_2).addClass("passwordbox-f").textbox($.extend({},_4,{icons:_5}));
_6(_2);
};
function _7(_8,_9,_a){
var t=$(_8);
var _b=t.passwordbox("options");
if(_b.revealed){
t.textbox("setValue",_9);
return;
}
var _c=unescape(_b.passwordChar);
var cc=_9.split("");
var vv=t.passwordbox("getValue").split("");
for(var i=0;i<cc.length;i++){
var c=cc[i];
if(c!=vv[i]){
if(c!=_c){
vv.splice(i,0,c);
}
}
}
var _d=t.passwordbox("getSelectionStart");
if(cc.length<vv.length){
vv.splice(_d,vv.length-cc.length,"");
}
for(var i=0;i<cc.length;i++){
if(_a||i!=_d-1){
cc[i]=_c;
}
}
t.textbox("setValue",vv.join(""));
t.textbox("setText",cc.join(""));
t.textbox("setSelectionRange",{start:_d,end:_d});
};
function _6(_e,_f){
var t=$(_e);
var _10=t.passwordbox("options");
var _11=t.next().find(".passwordbox-open");
var _12=unescape(_10.passwordChar);
_f=_f==undefined?t.textbox("getValue"):_f;
t.textbox("setValue",_f);
t.textbox("setText",_10.revealed?_f:_f.replace(/./ig,_12));
_10.revealed?_11.addClass("passwordbox-close"):_11.removeClass("passwordbox-close");
};
function _13(e){
var _14=e.data.target;
var t=$(e.data.target);
var _15=t.data("passwordbox");
var _16=t.data("passwordbox").options;
_15.checking=true;
_15.value=t.passwordbox("getText");
(function(){
if(_15.checking){
var _17=t.passwordbox("getText");
if(_15.value!=_17){
_15.value=_17;
if(_15.lastTimer){
clearTimeout(_15.lastTimer);
_15.lastTimer=undefined;
}
_7(_14,_17);
_15.lastTimer=setTimeout(function(){
_7(_14,t.passwordbox("getText"),true);
_15.lastTimer=undefined;
},_16.lastDelay);
}
setTimeout(arguments.callee,_16.checkInterval);
}
})();
};
function _18(e){
var _19=e.data.target;
var _1a=$(_19).data("passwordbox");
_1a.checking=false;
if(_1a.lastTimer){
clearTimeout(_1a.lastTimer);
_1a.lastTimer=undefined;
}
_6(_19);
};
$.fn.passwordbox=function(_1b,_1c){
if(typeof _1b=="string"){
var _1d=$.fn.passwordbox.methods[_1b];
if(_1d){
return _1d(this,_1c);
}else{
return this.textbox(_1b,_1c);
}
}
_1b=_1b||{};
return this.each(function(){
var _1e=$.data(this,"passwordbox");
if(_1e){
$.extend(_1e.options,_1b);
}else{
_1e=$.data(this,"passwordbox",{options:$.extend({},$.fn.passwordbox.defaults,$.fn.passwordbox.parseOptions(this),_1b)});
}
_1(this);
});
};
$.fn.passwordbox.methods={options:function(jq){
return $.data(jq[0],"passwordbox").options;
},setValue:function(jq,_1f){
return jq.each(function(){
_6(this,_1f);
});
},clear:function(jq){
return jq.each(function(){
_6(this,"");
});
},reset:function(jq){
return jq.each(function(){
$(this).textbox("reset");
_6(this);
});
},showPassword:function(jq){
return jq.each(function(){
var _20=$(this).passwordbox("options");
_20.revealed=true;
_6(this);
});
},hidePassword:function(jq){
return jq.each(function(){
var _21=$(this).passwordbox("options");
_21.revealed=false;
_6(this);
});
}};
$.fn.passwordbox.parseOptions=function(_22){
return $.extend({},$.fn.textbox.parseOptions(_22),$.parser.parseOptions(_22,["passwordChar",{checkInterval:"number",lastDelay:"number",revealed:"boolean",showEye:"boolean"}]));
};
$.fn.passwordbox.defaults=$.extend({},$.fn.textbox.defaults,{passwordChar:"%u25CF",checkInterval:200,lastDelay:500,revealed:false,showEye:true,inputEvents:{focus:_13,blur:_18},val:function(_23){
return $(_23).parent().prev().passwordbox("getValue");
}});
})(jQuery);

