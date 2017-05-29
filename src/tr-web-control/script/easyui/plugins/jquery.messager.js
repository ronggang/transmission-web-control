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
function _1(){
$(document).unbind(".messager").bind("keydown.messager",function(e){
if(e.keyCode==27){
$("body").children("div.messager-window").children("div.messager-body").each(function(){
$(this).dialog("close");
});
}else{
if(e.keyCode==9){
var _2=$("body").children("div.messager-window");
if(!_2.length){
return;
}
var _3=_2.find(".messager-input,.messager-button .l-btn");
for(var i=0;i<_3.length;i++){
if($(_3[i]).is(":focus")){
$(_3[i>=_3.length-1?0:i+1]).focus();
return false;
}
}
}else{
if(e.keyCode==13){
var _4=$(e.target).closest("input.messager-input");
if(_4.length){
var _5=_4.closest(".messager-body");
_6(_5,_4.val());
}
}
}
}
});
};
function _7(){
$(document).unbind(".messager");
};
function _8(_9){
var _a=$.extend({},$.messager.defaults,{modal:false,shadow:false,draggable:false,resizable:false,closed:true,style:{left:"",top:"",right:0,zIndex:$.fn.window.defaults.zIndex++,bottom:-document.body.scrollTop-document.documentElement.scrollTop},title:"",width:250,height:100,minHeight:0,showType:"slide",showSpeed:600,content:_9.msg,timeout:4000},_9);
var _b=$("<div class=\"messager-body\"></div>").appendTo("body");
_b.dialog($.extend({},_a,{noheader:(_a.title?false:true),openAnimation:(_a.showType),closeAnimation:(_a.showType=="show"?"hide":_a.showType),openDuration:_a.showSpeed,closeDuration:_a.showSpeed,onOpen:function(){
_b.dialog("dialog").hover(function(){
if(_a.timer){
clearTimeout(_a.timer);
}
},function(){
_c();
});
_c();
function _c(){
if(_a.timeout>0){
_a.timer=setTimeout(function(){
if(_b.length&&_b.data("dialog")){
_b.dialog("close");
}
},_a.timeout);
}
};
if(_9.onOpen){
_9.onOpen.call(this);
}else{
_a.onOpen.call(this);
}
},onClose:function(){
if(_a.timer){
clearTimeout(_a.timer);
}
if(_9.onClose){
_9.onClose.call(this);
}else{
_a.onClose.call(this);
}
_b.dialog("destroy");
}}));
_b.dialog("dialog").css(_a.style);
_b.dialog("open");
return _b;
};
function _d(_e){
_1();
var _f=$("<div class=\"messager-body\"></div>").appendTo("body");
_f.dialog($.extend({},_e,{noheader:(_e.title?false:true),onClose:function(){
_7();
if(_e.onClose){
_e.onClose.call(this);
}
setTimeout(function(){
_f.dialog("destroy");
},100);
}}));
var win=_f.dialog("dialog").addClass("messager-window");
win.find(".dialog-button").addClass("messager-button").find("a:first").focus();
return _f;
};
function _6(dlg,_10){
dlg.dialog("close");
dlg.dialog("options").fn(_10);
};
$.messager={show:function(_11){
return _8(_11);
},alert:function(_12,msg,_13,fn){
var _14=typeof _12=="object"?_12:{title:_12,msg:msg,icon:_13,fn:fn};
var cls=_14.icon?"messager-icon messager-"+_14.icon:"";
_14=$.extend({},$.messager.defaults,{content:"<div class=\""+cls+"\"></div>"+"<div>"+_14.msg+"</div>"+"<div style=\"clear:both;\"/>"},_14);
if(!_14.buttons){
_14.buttons=[{text:_14.ok,onClick:function(){
_6(dlg);
}}];
}
var dlg=_d(_14);
return dlg;
},confirm:function(_15,msg,fn){
var _16=typeof _15=="object"?_15:{title:_15,msg:msg,fn:fn};
_16=$.extend({},$.messager.defaults,{content:"<div class=\"messager-icon messager-question\"></div>"+"<div>"+_16.msg+"</div>"+"<div style=\"clear:both;\"/>"},_16);
if(!_16.buttons){
_16.buttons=[{text:_16.ok,onClick:function(){
_6(dlg,true);
}},{text:_16.cancel,onClick:function(){
_6(dlg,false);
}}];
}
var dlg=_d(_16);
return dlg;
},prompt:function(_17,msg,fn){
var _18=typeof _17=="object"?_17:{title:_17,msg:msg,fn:fn};
_18=$.extend({},$.messager.defaults,{content:"<div class=\"messager-icon messager-question\"></div>"+"<div>"+_18.msg+"</div>"+"<br/>"+"<div style=\"clear:both;\"/>"+"<div><input class=\"messager-input\" type=\"text\"/></div>"},_18);
if(!_18.buttons){
_18.buttons=[{text:_18.ok,onClick:function(){
_6(dlg,dlg.find(".messager-input").val());
}},{text:_18.cancel,onClick:function(){
_6(dlg);
}}];
}
var dlg=_d(_18);
dlg.find(".messager-input").focus();
return dlg;
},progress:function(_19){
var _1a={bar:function(){
return $("body>div.messager-window").find("div.messager-p-bar");
},close:function(){
var dlg=$("body>div.messager-window>div.messager-body:has(div.messager-progress)");
if(dlg.length){
dlg.dialog("close");
}
}};
if(typeof _19=="string"){
var _1b=_1a[_19];
return _1b();
}
_19=_19||{};
var _1c=$.extend({},{title:"",minHeight:0,content:undefined,msg:"",text:undefined,interval:300},_19);
var dlg=_d($.extend({},$.messager.defaults,{content:"<div class=\"messager-progress\"><div class=\"messager-p-msg\">"+_1c.msg+"</div><div class=\"messager-p-bar\"></div></div>",closable:false,doSize:false},_1c,{onClose:function(){
if(this.timer){
clearInterval(this.timer);
}
if(_19.onClose){
_19.onClose.call(this);
}else{
$.messager.defaults.onClose.call(this);
}
}}));
var bar=dlg.find("div.messager-p-bar");
bar.progressbar({text:_1c.text});
dlg.dialog("resize");
if(_1c.interval){
dlg[0].timer=setInterval(function(){
var v=bar.progressbar("getValue");
v+=10;
if(v>100){
v=0;
}
bar.progressbar("setValue",v);
},_1c.interval);
}
return dlg;
}};
$.messager.defaults=$.extend({},$.fn.dialog.defaults,{ok:"Ok",cancel:"Cancel",width:300,height:"auto",minHeight:150,modal:true,collapsible:false,minimizable:false,maximizable:false,resizable:false,fn:function(){
}});
})(jQuery);

