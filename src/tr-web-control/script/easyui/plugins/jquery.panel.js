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
$.fn._remove=function(){
return this.each(function(){
$(this).remove();
try{
this.outerHTML="";
}
catch(err){
}
});
};
function _1(_2){
_2._remove();
};
function _3(_4,_5){
var _6=$.data(_4,"panel");
var _7=_6.options;
var _8=_6.panel;
var _9=_8.children(".panel-header");
var _a=_8.children(".panel-body");
var _b=_8.children(".panel-footer");
var _c=(_7.halign=="left"||_7.halign=="right");
if(_5){
$.extend(_7,{width:_5.width,height:_5.height,minWidth:_5.minWidth,maxWidth:_5.maxWidth,minHeight:_5.minHeight,maxHeight:_5.maxHeight,left:_5.left,top:_5.top});
}
_8._size(_7);
if(!_c){
_9._outerWidth(_8.width());
}
_a._outerWidth(_8.width());
if(!isNaN(parseInt(_7.height))){
if(_c){
if(_7.header){
var _d=$(_7.header)._outerWidth();
}else{
_9.css("width","");
var _d=_9._outerWidth();
}
var _e=_9.find(".panel-title");
_d+=Math.min(_e._outerWidth(),_e._outerHeight());
var _f=_8.height();
_9._outerWidth(_d)._outerHeight(_f);
_e._outerWidth(_9.height());
_a._outerWidth(_8.width()-_d-_b._outerWidth())._outerHeight(_f);
_b._outerHeight(_f);
_a.css({left:"",right:""}).css(_7.halign,(_9.position()[_7.halign]+_d)+"px");
_7.panelCssWidth=_8.css("width");
if(_7.collapsed){
_8._outerWidth(_d+_b._outerWidth());
}
}else{
_a._outerHeight(_8.height()-_9._outerHeight()-_b._outerHeight());
}
}else{
_a.css("height","");
var min=$.parser.parseValue("minHeight",_7.minHeight,_8.parent());
var max=$.parser.parseValue("maxHeight",_7.maxHeight,_8.parent());
var _10=_9._outerHeight()+_b._outerHeight()+_8._outerHeight()-_8.height();
_a._size("minHeight",min?(min-_10):"");
_a._size("maxHeight",max?(max-_10):"");
}
_8.css({height:(_c?undefined:""),minHeight:"",maxHeight:"",left:_7.left,top:_7.top});
_7.onResize.apply(_4,[_7.width,_7.height]);
$(_4).panel("doLayout");
};
function _11(_12,_13){
var _14=$.data(_12,"panel");
var _15=_14.options;
var _16=_14.panel;
if(_13){
if(_13.left!=null){
_15.left=_13.left;
}
if(_13.top!=null){
_15.top=_13.top;
}
}
_16.css({left:_15.left,top:_15.top});
_16.find(".tooltip-f").each(function(){
$(this).tooltip("reposition");
});
_15.onMove.apply(_12,[_15.left,_15.top]);
};
function _17(_18){
$(_18).addClass("panel-body")._size("clear");
var _19=$("<div class=\"panel\"></div>").insertBefore(_18);
_19[0].appendChild(_18);
_19.bind("_resize",function(e,_1a){
if($(this).hasClass("easyui-fluid")||_1a){
_3(_18);
}
return false;
});
return _19;
};
function _1b(_1c){
var _1d=$.data(_1c,"panel");
var _1e=_1d.options;
var _1f=_1d.panel;
_1f.css(_1e.style);
_1f.addClass(_1e.cls);
_1f.removeClass("panel-hleft panel-hright").addClass("panel-h"+_1e.halign);
_20();
_21();
var _22=$(_1c).panel("header");
var _23=$(_1c).panel("body");
var _24=$(_1c).siblings(".panel-footer");
if(_1e.border){
_22.removeClass("panel-header-noborder");
_23.removeClass("panel-body-noborder");
_24.removeClass("panel-footer-noborder");
}else{
_22.addClass("panel-header-noborder");
_23.addClass("panel-body-noborder");
_24.addClass("panel-footer-noborder");
}
_22.addClass(_1e.headerCls);
_23.addClass(_1e.bodyCls);
$(_1c).attr("id",_1e.id||"");
if(_1e.content){
$(_1c).panel("clear");
$(_1c).html(_1e.content);
$.parser.parse($(_1c));
}
function _20(){
if(_1e.noheader||(!_1e.title&&!_1e.header)){
_1(_1f.children(".panel-header"));
_1f.children(".panel-body").addClass("panel-body-noheader");
}else{
if(_1e.header){
$(_1e.header).addClass("panel-header").prependTo(_1f);
}else{
var _25=_1f.children(".panel-header");
if(!_25.length){
_25=$("<div class=\"panel-header\"></div>").prependTo(_1f);
}
if(!$.isArray(_1e.tools)){
_25.find("div.panel-tool .panel-tool-a").appendTo(_1e.tools);
}
_25.empty();
var _26=$("<div class=\"panel-title\"></div>").html(_1e.title).appendTo(_25);
if(_1e.iconCls){
_26.addClass("panel-with-icon");
$("<div class=\"panel-icon\"></div>").addClass(_1e.iconCls).appendTo(_25);
}
if(_1e.halign=="left"||_1e.halign=="right"){
_26.addClass("panel-title-"+_1e.titleDirection);
}
var _27=$("<div class=\"panel-tool\"></div>").appendTo(_25);
_27.bind("click",function(e){
e.stopPropagation();
});
if(_1e.tools){
if($.isArray(_1e.tools)){
$.map(_1e.tools,function(t){
_28(_27,t.iconCls,eval(t.handler));
});
}else{
$(_1e.tools).children().each(function(){
$(this).addClass($(this).attr("iconCls")).addClass("panel-tool-a").appendTo(_27);
});
}
}
if(_1e.collapsible){
_28(_27,"panel-tool-collapse",function(){
if(_1e.collapsed==true){
_52(_1c,true);
}else{
_3e(_1c,true);
}
});
}
if(_1e.minimizable){
_28(_27,"panel-tool-min",function(){
_5d(_1c);
});
}
if(_1e.maximizable){
_28(_27,"panel-tool-max",function(){
if(_1e.maximized==true){
_61(_1c);
}else{
_3d(_1c);
}
});
}
if(_1e.closable){
_28(_27,"panel-tool-close",function(){
_3f(_1c);
});
}
}
_1f.children("div.panel-body").removeClass("panel-body-noheader");
}
};
function _28(c,_29,_2a){
var a=$("<a href=\"javascript:;\"></a>").addClass(_29).appendTo(c);
a.bind("click",_2a);
};
function _21(){
if(_1e.footer){
$(_1e.footer).addClass("panel-footer").appendTo(_1f);
$(_1c).addClass("panel-body-nobottom");
}else{
_1f.children(".panel-footer").remove();
$(_1c).removeClass("panel-body-nobottom");
}
};
};
function _2b(_2c,_2d){
var _2e=$.data(_2c,"panel");
var _2f=_2e.options;
if(_30){
_2f.queryParams=_2d;
}
if(!_2f.href){
return;
}
if(!_2e.isLoaded||!_2f.cache){
var _30=$.extend({},_2f.queryParams);
if(_2f.onBeforeLoad.call(_2c,_30)==false){
return;
}
_2e.isLoaded=false;
if(_2f.loadingMessage){
$(_2c).panel("clear");
$(_2c).html($("<div class=\"panel-loading\"></div>").html(_2f.loadingMessage));
}
_2f.loader.call(_2c,_30,function(_31){
var _32=_2f.extractor.call(_2c,_31);
$(_2c).panel("clear");
$(_2c).html(_32);
$.parser.parse($(_2c));
_2f.onLoad.apply(_2c,arguments);
_2e.isLoaded=true;
},function(){
_2f.onLoadError.apply(_2c,arguments);
});
}
};
function _33(_34){
var t=$(_34);
t.find(".combo-f").each(function(){
$(this).combo("destroy");
});
t.find(".m-btn").each(function(){
$(this).menubutton("destroy");
});
t.find(".s-btn").each(function(){
$(this).splitbutton("destroy");
});
t.find(".tooltip-f").each(function(){
$(this).tooltip("destroy");
});
t.children("div").each(function(){
$(this)._size("unfit");
});
t.empty();
};
function _35(_36){
$(_36).panel("doLayout",true);
};
function _37(_38,_39){
var _3a=$.data(_38,"panel").options;
var _3b=$.data(_38,"panel").panel;
if(_39!=true){
if(_3a.onBeforeOpen.call(_38)==false){
return;
}
}
_3b.stop(true,true);
if($.isFunction(_3a.openAnimation)){
_3a.openAnimation.call(_38,cb);
}else{
switch(_3a.openAnimation){
case "slide":
_3b.slideDown(_3a.openDuration,cb);
break;
case "fade":
_3b.fadeIn(_3a.openDuration,cb);
break;
case "show":
_3b.show(_3a.openDuration,cb);
break;
default:
_3b.show();
cb();
}
}
function cb(){
_3a.closed=false;
_3a.minimized=false;
var _3c=_3b.children(".panel-header").find("a.panel-tool-restore");
if(_3c.length){
_3a.maximized=true;
}
_3a.onOpen.call(_38);
if(_3a.maximized==true){
_3a.maximized=false;
_3d(_38);
}
if(_3a.collapsed==true){
_3a.collapsed=false;
_3e(_38);
}
if(!_3a.collapsed){
_2b(_38);
_35(_38);
}
};
};
function _3f(_40,_41){
var _42=$.data(_40,"panel");
var _43=_42.options;
var _44=_42.panel;
if(_41!=true){
if(_43.onBeforeClose.call(_40)==false){
return;
}
}
_44.find(".tooltip-f").each(function(){
$(this).tooltip("hide");
});
_44.stop(true,true);
_44._size("unfit");
if($.isFunction(_43.closeAnimation)){
_43.closeAnimation.call(_40,cb);
}else{
switch(_43.closeAnimation){
case "slide":
_44.slideUp(_43.closeDuration,cb);
break;
case "fade":
_44.fadeOut(_43.closeDuration,cb);
break;
case "hide":
_44.hide(_43.closeDuration,cb);
break;
default:
_44.hide();
cb();
}
}
function cb(){
_43.closed=true;
_43.onClose.call(_40);
};
};
function _45(_46,_47){
var _48=$.data(_46,"panel");
var _49=_48.options;
var _4a=_48.panel;
if(_47!=true){
if(_49.onBeforeDestroy.call(_46)==false){
return;
}
}
$(_46).panel("clear").panel("clear","footer");
_1(_4a);
_49.onDestroy.call(_46);
};
function _3e(_4b,_4c){
var _4d=$.data(_4b,"panel").options;
var _4e=$.data(_4b,"panel").panel;
var _4f=_4e.children(".panel-body");
var _50=_4e.children(".panel-header");
var _51=_50.find("a.panel-tool-collapse");
if(_4d.collapsed==true){
return;
}
_4f.stop(true,true);
if(_4d.onBeforeCollapse.call(_4b)==false){
return;
}
_51.addClass("panel-tool-expand");
if(_4c==true){
if(_4d.halign=="left"||_4d.halign=="right"){
_4e.animate({width:_50._outerWidth()+_4e.children(".panel-footer")._outerWidth()},function(){
cb();
});
}else{
_4f.slideUp("normal",function(){
cb();
});
}
}else{
if(_4d.halign=="left"||_4d.halign=="right"){
_4e._outerWidth(_50._outerWidth()+_4e.children(".panel-footer")._outerWidth());
}
cb();
}
function cb(){
_4f.hide();
_4d.collapsed=true;
_4d.onCollapse.call(_4b);
};
};
function _52(_53,_54){
var _55=$.data(_53,"panel").options;
var _56=$.data(_53,"panel").panel;
var _57=_56.children(".panel-body");
var _58=_56.children(".panel-header").find("a.panel-tool-collapse");
if(_55.collapsed==false){
return;
}
_57.stop(true,true);
if(_55.onBeforeExpand.call(_53)==false){
return;
}
_58.removeClass("panel-tool-expand");
if(_54==true){
if(_55.halign=="left"||_55.halign=="right"){
_57.show();
_56.animate({width:_55.panelCssWidth},function(){
cb();
});
}else{
_57.slideDown("normal",function(){
cb();
});
}
}else{
if(_55.halign=="left"||_55.halign=="right"){
_56.css("width",_55.panelCssWidth);
}
cb();
}
function cb(){
_57.show();
_55.collapsed=false;
_55.onExpand.call(_53);
_2b(_53);
_35(_53);
};
};
function _3d(_59){
var _5a=$.data(_59,"panel").options;
var _5b=$.data(_59,"panel").panel;
var _5c=_5b.children(".panel-header").find("a.panel-tool-max");
if(_5a.maximized==true){
return;
}
_5c.addClass("panel-tool-restore");
if(!$.data(_59,"panel").original){
$.data(_59,"panel").original={width:_5a.width,height:_5a.height,left:_5a.left,top:_5a.top,fit:_5a.fit};
}
_5a.left=0;
_5a.top=0;
_5a.fit=true;
_3(_59);
_5a.minimized=false;
_5a.maximized=true;
_5a.onMaximize.call(_59);
};
function _5d(_5e){
var _5f=$.data(_5e,"panel").options;
var _60=$.data(_5e,"panel").panel;
_60._size("unfit");
_60.hide();
_5f.minimized=true;
_5f.maximized=false;
_5f.onMinimize.call(_5e);
};
function _61(_62){
var _63=$.data(_62,"panel").options;
var _64=$.data(_62,"panel").panel;
var _65=_64.children(".panel-header").find("a.panel-tool-max");
if(_63.maximized==false){
return;
}
_64.show();
_65.removeClass("panel-tool-restore");
$.extend(_63,$.data(_62,"panel").original);
_3(_62);
_63.minimized=false;
_63.maximized=false;
$.data(_62,"panel").original=null;
_63.onRestore.call(_62);
};
function _66(_67,_68){
$.data(_67,"panel").options.title=_68;
$(_67).panel("header").find("div.panel-title").html(_68);
};
var _69=null;
$(window).unbind(".panel").bind("resize.panel",function(){
if(_69){
clearTimeout(_69);
}
_69=setTimeout(function(){
var _6a=$("body.layout");
if(_6a.length){
_6a.layout("resize");
$("body").children(".easyui-fluid:visible").each(function(){
$(this).triggerHandler("_resize");
});
}else{
$("body").panel("doLayout");
}
_69=null;
},100);
});
$.fn.panel=function(_6b,_6c){
if(typeof _6b=="string"){
return $.fn.panel.methods[_6b](this,_6c);
}
_6b=_6b||{};
return this.each(function(){
var _6d=$.data(this,"panel");
var _6e;
if(_6d){
_6e=$.extend(_6d.options,_6b);
_6d.isLoaded=false;
}else{
_6e=$.extend({},$.fn.panel.defaults,$.fn.panel.parseOptions(this),_6b);
$(this).attr("title","");
_6d=$.data(this,"panel",{options:_6e,panel:_17(this),isLoaded:false});
}
_1b(this);
$(this).show();
if(_6e.doSize==true){
_6d.panel.css("display","block");
_3(this);
}
if(_6e.closed==true||_6e.minimized==true){
_6d.panel.hide();
}else{
_37(this);
}
});
};
$.fn.panel.methods={options:function(jq){
return $.data(jq[0],"panel").options;
},panel:function(jq){
return $.data(jq[0],"panel").panel;
},header:function(jq){
return $.data(jq[0],"panel").panel.children(".panel-header");
},footer:function(jq){
return jq.panel("panel").children(".panel-footer");
},body:function(jq){
return $.data(jq[0],"panel").panel.children(".panel-body");
},setTitle:function(jq,_6f){
return jq.each(function(){
_66(this,_6f);
});
},open:function(jq,_70){
return jq.each(function(){
_37(this,_70);
});
},close:function(jq,_71){
return jq.each(function(){
_3f(this,_71);
});
},destroy:function(jq,_72){
return jq.each(function(){
_45(this,_72);
});
},clear:function(jq,_73){
return jq.each(function(){
_33(_73=="footer"?$(this).panel("footer"):this);
});
},refresh:function(jq,_74){
return jq.each(function(){
var _75=$.data(this,"panel");
_75.isLoaded=false;
if(_74){
if(typeof _74=="string"){
_75.options.href=_74;
}else{
_75.options.queryParams=_74;
}
}
_2b(this);
});
},resize:function(jq,_76){
return jq.each(function(){
_3(this,_76);
});
},doLayout:function(jq,all){
return jq.each(function(){
_77(this,"body");
_77($(this).siblings(".panel-footer")[0],"footer");
function _77(_78,_79){
if(!_78){
return;
}
var _7a=_78==$("body")[0];
var s=$(_78).find("div.panel:visible,div.accordion:visible,div.tabs-container:visible,div.layout:visible,.easyui-fluid:visible").filter(function(_7b,el){
var p=$(el).parents(".panel-"+_79+":first");
return _7a?p.length==0:p[0]==_78;
});
s.each(function(){
$(this).triggerHandler("_resize",[all||false]);
});
};
});
},move:function(jq,_7c){
return jq.each(function(){
_11(this,_7c);
});
},maximize:function(jq){
return jq.each(function(){
_3d(this);
});
},minimize:function(jq){
return jq.each(function(){
_5d(this);
});
},restore:function(jq){
return jq.each(function(){
_61(this);
});
},collapse:function(jq,_7d){
return jq.each(function(){
_3e(this,_7d);
});
},expand:function(jq,_7e){
return jq.each(function(){
_52(this,_7e);
});
}};
$.fn.panel.parseOptions=function(_7f){
var t=$(_7f);
var hh=t.children(".panel-header,header");
var ff=t.children(".panel-footer,footer");
return $.extend({},$.parser.parseOptions(_7f,["id","width","height","left","top","title","iconCls","cls","headerCls","bodyCls","tools","href","method","header","footer","halign","titleDirection",{cache:"boolean",fit:"boolean",border:"boolean",noheader:"boolean"},{collapsible:"boolean",minimizable:"boolean",maximizable:"boolean"},{closable:"boolean",collapsed:"boolean",minimized:"boolean",maximized:"boolean",closed:"boolean"},"openAnimation","closeAnimation",{openDuration:"number",closeDuration:"number"},]),{loadingMessage:(t.attr("loadingMessage")!=undefined?t.attr("loadingMessage"):undefined),header:(hh.length?hh.removeClass("panel-header"):undefined),footer:(ff.length?ff.removeClass("panel-footer"):undefined)});
};
$.fn.panel.defaults={id:null,title:null,iconCls:null,width:"auto",height:"auto",left:null,top:null,cls:null,headerCls:null,bodyCls:null,style:{},href:null,cache:true,fit:false,border:true,doSize:true,noheader:false,content:null,halign:"top",titleDirection:"down",collapsible:false,minimizable:false,maximizable:false,closable:false,collapsed:false,minimized:false,maximized:false,closed:false,openAnimation:false,openDuration:400,closeAnimation:false,closeDuration:400,tools:null,footer:null,header:null,queryParams:{},method:"get",href:null,loadingMessage:"Loading...",loader:function(_80,_81,_82){
var _83=$(this).panel("options");
if(!_83.href){
return false;
}
$.ajax({type:_83.method,url:_83.href,cache:false,data:_80,dataType:"html",success:function(_84){
_81(_84);
},error:function(){
_82.apply(this,arguments);
}});
},extractor:function(_85){
var _86=/<body[^>]*>((.|[\n\r])*)<\/body>/im;
var _87=_86.exec(_85);
if(_87){
return _87[1];
}else{
return _85;
}
},onBeforeLoad:function(_88){
},onLoad:function(){
},onLoadError:function(){
},onBeforeOpen:function(){
},onOpen:function(){
},onBeforeClose:function(){
},onClose:function(){
},onBeforeDestroy:function(){
},onDestroy:function(){
},onResize:function(_89,_8a){
},onMove:function(_8b,top){
},onMaximize:function(){
},onRestore:function(){
},onMinimize:function(){
},onBeforeCollapse:function(){
},onBeforeExpand:function(){
},onCollapse:function(){
},onExpand:function(){
}};
})(jQuery);

