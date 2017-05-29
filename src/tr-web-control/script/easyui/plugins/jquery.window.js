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
function _1(_2,_3){
var _4=$.data(_2,"window");
if(_3){
if(_3.left!=null){
_4.options.left=_3.left;
}
if(_3.top!=null){
_4.options.top=_3.top;
}
}
$(_2).panel("move",_4.options);
if(_4.shadow){
_4.shadow.css({left:_4.options.left,top:_4.options.top});
}
};
function _5(_6,_7){
var _8=$.data(_6,"window").options;
var pp=$(_6).window("panel");
var _9=pp._outerWidth();
if(_8.inline){
var _a=pp.parent();
_8.left=Math.ceil((_a.width()-_9)/2+_a.scrollLeft());
}else{
_8.left=Math.ceil(($(window)._outerWidth()-_9)/2+$(document).scrollLeft());
}
if(_7){
_1(_6);
}
};
function _b(_c,_d){
var _e=$.data(_c,"window").options;
var pp=$(_c).window("panel");
var _f=pp._outerHeight();
if(_e.inline){
var _10=pp.parent();
_e.top=Math.ceil((_10.height()-_f)/2+_10.scrollTop());
}else{
_e.top=Math.ceil(($(window)._outerHeight()-_f)/2+$(document).scrollTop());
}
if(_d){
_1(_c);
}
};
function _11(_12){
var _13=$.data(_12,"window");
var _14=_13.options;
var win=$(_12).panel($.extend({},_13.options,{border:false,doSize:true,closed:true,cls:"window "+(!_14.border?"window-thinborder window-noborder ":(_14.border=="thin"?"window-thinborder ":""))+(_14.cls||""),headerCls:"window-header "+(_14.headerCls||""),bodyCls:"window-body "+(_14.noheader?"window-body-noheader ":" ")+(_14.bodyCls||""),onBeforeDestroy:function(){
if(_14.onBeforeDestroy.call(_12)==false){
return false;
}
if(_13.shadow){
_13.shadow.remove();
}
if(_13.mask){
_13.mask.remove();
}
},onClose:function(){
if(_13.shadow){
_13.shadow.hide();
}
if(_13.mask){
_13.mask.hide();
}
_14.onClose.call(_12);
},onOpen:function(){
if(_13.mask){
_13.mask.css($.extend({display:"block",zIndex:$.fn.window.defaults.zIndex++},$.fn.window.getMaskSize(_12)));
}
if(_13.shadow){
_13.shadow.css({display:"block",zIndex:$.fn.window.defaults.zIndex++,left:_14.left,top:_14.top,width:_13.window._outerWidth(),height:_13.window._outerHeight()});
}
_13.window.css("z-index",$.fn.window.defaults.zIndex++);
_14.onOpen.call(_12);
},onResize:function(_15,_16){
var _17=$(this).panel("options");
$.extend(_14,{width:_17.width,height:_17.height,left:_17.left,top:_17.top});
if(_13.shadow){
_13.shadow.css({left:_14.left,top:_14.top,width:_13.window._outerWidth(),height:_13.window._outerHeight()});
}
_14.onResize.call(_12,_15,_16);
},onMinimize:function(){
if(_13.shadow){
_13.shadow.hide();
}
if(_13.mask){
_13.mask.hide();
}
_13.options.onMinimize.call(_12);
},onBeforeCollapse:function(){
if(_14.onBeforeCollapse.call(_12)==false){
return false;
}
if(_13.shadow){
_13.shadow.hide();
}
},onExpand:function(){
if(_13.shadow){
_13.shadow.show();
}
_14.onExpand.call(_12);
}}));
_13.window=win.panel("panel");
if(_13.mask){
_13.mask.remove();
}
if(_14.modal){
_13.mask=$("<div class=\"window-mask\" style=\"display:none\"></div>").insertAfter(_13.window);
}
if(_13.shadow){
_13.shadow.remove();
}
if(_14.shadow){
_13.shadow=$("<div class=\"window-shadow\" style=\"display:none\"></div>").insertAfter(_13.window);
}
var _18=_14.closed;
if(_14.left==null){
_5(_12);
}
if(_14.top==null){
_b(_12);
}
_1(_12);
if(!_18){
win.window("open");
}
};
function _19(_1a,top,_1b,_1c){
var _1d=this;
var _1e=$.data(_1d,"window");
var _1f=_1e.options;
if(!_1f.constrain){
return {};
}
if($.isFunction(_1f.constrain)){
return _1f.constrain.call(_1d,_1a,top,_1b,_1c);
}
var win=$(_1d).window("window");
var _20=_1f.inline?win.parent():$(window);
if(_1a<0){
_1a=0;
}
if(top<_20.scrollTop()){
top=_20.scrollTop();
}
if(_1a+_1b>_20.width()){
if(_1b==win.outerWidth()){
_1a=_20.width()-_1b;
}else{
_1b=_20.width()-_1a;
}
}
if(top-_20.scrollTop()+_1c>_20.height()){
if(_1c==win.outerHeight()){
top=_20.height()-_1c+_20.scrollTop();
}else{
_1c=_20.height()-top+_20.scrollTop();
}
}
return {left:_1a,top:top,width:_1b,height:_1c};
};
function _21(_22){
var _23=$.data(_22,"window");
_23.window.draggable({handle:">div.panel-header>div.panel-title",disabled:_23.options.draggable==false,onBeforeDrag:function(e){
if(_23.mask){
_23.mask.css("z-index",$.fn.window.defaults.zIndex++);
}
if(_23.shadow){
_23.shadow.css("z-index",$.fn.window.defaults.zIndex++);
}
_23.window.css("z-index",$.fn.window.defaults.zIndex++);
},onStartDrag:function(e){
_24(e);
},onDrag:function(e){
_25(e);
return false;
},onStopDrag:function(e){
_26(e,"move");
}});
_23.window.resizable({disabled:_23.options.resizable==false,onStartResize:function(e){
_24(e);
},onResize:function(e){
_25(e);
return false;
},onStopResize:function(e){
_26(e,"resize");
}});
function _24(e){
if(_23.pmask){
_23.pmask.remove();
}
_23.pmask=$("<div class=\"window-proxy-mask\"></div>").insertAfter(_23.window);
_23.pmask.css({display:"none",zIndex:$.fn.window.defaults.zIndex++,left:e.data.left,top:e.data.top,width:_23.window._outerWidth(),height:_23.window._outerHeight()});
if(_23.proxy){
_23.proxy.remove();
}
_23.proxy=$("<div class=\"window-proxy\"></div>").insertAfter(_23.window);
_23.proxy.css({display:"none",zIndex:$.fn.window.defaults.zIndex++,left:e.data.left,top:e.data.top});
_23.proxy._outerWidth(e.data.width)._outerHeight(e.data.height);
_23.proxy.hide();
setTimeout(function(){
if(_23.pmask){
_23.pmask.show();
}
if(_23.proxy){
_23.proxy.show();
}
},500);
};
function _25(e){
$.extend(e.data,_19.call(_22,e.data.left,e.data.top,e.data.width,e.data.height));
_23.pmask.show();
_23.proxy.css({display:"block",left:e.data.left,top:e.data.top});
_23.proxy._outerWidth(e.data.width);
_23.proxy._outerHeight(e.data.height);
};
function _26(e,_27){
$.extend(e.data,_19.call(_22,e.data.left,e.data.top,e.data.width+0.1,e.data.height+0.1));
$(_22).window(_27,e.data);
_23.pmask.remove();
_23.pmask=null;
_23.proxy.remove();
_23.proxy=null;
};
};
$(function(){
if(!$._positionFixed){
$(window).resize(function(){
$("body>div.window-mask:visible").css({width:"",height:""});
setTimeout(function(){
$("body>div.window-mask:visible").css($.fn.window.getMaskSize());
},50);
});
}
});
$.fn.window=function(_28,_29){
if(typeof _28=="string"){
var _2a=$.fn.window.methods[_28];
if(_2a){
return _2a(this,_29);
}else{
return this.panel(_28,_29);
}
}
_28=_28||{};
return this.each(function(){
var _2b=$.data(this,"window");
if(_2b){
$.extend(_2b.options,_28);
}else{
_2b=$.data(this,"window",{options:$.extend({},$.fn.window.defaults,$.fn.window.parseOptions(this),_28)});
if(!_2b.options.inline){
document.body.appendChild(this);
}
}
_11(this);
_21(this);
});
};
$.fn.window.methods={options:function(jq){
var _2c=jq.panel("options");
var _2d=$.data(jq[0],"window").options;
return $.extend(_2d,{closed:_2c.closed,collapsed:_2c.collapsed,minimized:_2c.minimized,maximized:_2c.maximized});
},window:function(jq){
return $.data(jq[0],"window").window;
},move:function(jq,_2e){
return jq.each(function(){
_1(this,_2e);
});
},hcenter:function(jq){
return jq.each(function(){
_5(this,true);
});
},vcenter:function(jq){
return jq.each(function(){
_b(this,true);
});
},center:function(jq){
return jq.each(function(){
_5(this);
_b(this);
_1(this);
});
}};
$.fn.window.getMaskSize=function(_2f){
var _30=$(_2f).data("window");
if(_30&&_30.options.inline){
return {};
}else{
if($._positionFixed){
return {position:"fixed"};
}else{
return {width:$(document).width(),height:$(document).height()};
}
}
};
$.fn.window.parseOptions=function(_31){
return $.extend({},$.fn.panel.parseOptions(_31),$.parser.parseOptions(_31,[{draggable:"boolean",resizable:"boolean",shadow:"boolean",modal:"boolean",inline:"boolean"}]));
};
$.fn.window.defaults=$.extend({},$.fn.panel.defaults,{zIndex:9000,draggable:true,resizable:true,shadow:true,modal:false,border:true,inline:false,title:"New Window",collapsible:true,minimizable:true,maximizable:true,closable:true,closed:false,constrain:false});
})(jQuery);

