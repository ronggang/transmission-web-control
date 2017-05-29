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
var _1=false;
function _2(_3,_4){
var _5=$.data(_3,"layout");
var _6=_5.options;
var _7=_5.panels;
var cc=$(_3);
if(_4){
$.extend(_6,{width:_4.width,height:_4.height});
}
if(_3.tagName.toLowerCase()=="body"){
cc._size("fit");
}else{
cc._size(_6);
}
var _8={top:0,left:0,width:cc.width(),height:cc.height()};
_9(_a(_7.expandNorth)?_7.expandNorth:_7.north,"n");
_9(_a(_7.expandSouth)?_7.expandSouth:_7.south,"s");
_b(_a(_7.expandEast)?_7.expandEast:_7.east,"e");
_b(_a(_7.expandWest)?_7.expandWest:_7.west,"w");
_7.center.panel("resize",_8);
function _9(pp,_c){
if(!pp.length||!_a(pp)){
return;
}
var _d=pp.panel("options");
pp.panel("resize",{width:cc.width(),height:_d.height});
var _e=pp.panel("panel").outerHeight();
pp.panel("move",{left:0,top:(_c=="n"?0:cc.height()-_e)});
_8.height-=_e;
if(_c=="n"){
_8.top+=_e;
if(!_d.split&&_d.border){
_8.top--;
}
}
if(!_d.split&&_d.border){
_8.height++;
}
};
function _b(pp,_f){
if(!pp.length||!_a(pp)){
return;
}
var _10=pp.panel("options");
pp.panel("resize",{width:_10.width,height:_8.height});
var _11=pp.panel("panel").outerWidth();
pp.panel("move",{left:(_f=="e"?cc.width()-_11:0),top:_8.top});
_8.width-=_11;
if(_f=="w"){
_8.left+=_11;
if(!_10.split&&_10.border){
_8.left--;
}
}
if(!_10.split&&_10.border){
_8.width++;
}
};
};
function _12(_13){
var cc=$(_13);
cc.addClass("layout");
function _14(el){
var _15=$.fn.layout.parsePanelOptions(el);
if("north,south,east,west,center".indexOf(_15.region)>=0){
_19(_13,_15,el);
}
};
var _16=cc.layout("options");
var _17=_16.onAdd;
_16.onAdd=function(){
};
cc.find(">div,>form>div").each(function(){
_14(this);
});
_16.onAdd=_17;
cc.append("<div class=\"layout-split-proxy-h\"></div><div class=\"layout-split-proxy-v\"></div>");
cc.bind("_resize",function(e,_18){
if($(this).hasClass("easyui-fluid")||_18){
_2(_13);
}
return false;
});
};
function _19(_1a,_1b,el){
_1b.region=_1b.region||"center";
var _1c=$.data(_1a,"layout").panels;
var cc=$(_1a);
var dir=_1b.region;
if(_1c[dir].length){
return;
}
var pp=$(el);
if(!pp.length){
pp=$("<div></div>").appendTo(cc);
}
var _1d=$.extend({},$.fn.layout.paneldefaults,{width:(pp.length?parseInt(pp[0].style.width)||pp.outerWidth():"auto"),height:(pp.length?parseInt(pp[0].style.height)||pp.outerHeight():"auto"),doSize:false,collapsible:true,onOpen:function(){
var _1e=$(this).panel("header").children("div.panel-tool");
_1e.children("a.panel-tool-collapse").hide();
var _1f={north:"up",south:"down",east:"right",west:"left"};
if(!_1f[dir]){
return;
}
var _20="layout-button-"+_1f[dir];
var t=_1e.children("a."+_20);
if(!t.length){
t=$("<a href=\"javascript:;\"></a>").addClass(_20).appendTo(_1e);
t.bind("click",{dir:dir},function(e){
_39(_1a,e.data.dir);
return false;
});
}
$(this).panel("options").collapsible?t.show():t.hide();
}},_1b,{cls:((_1b.cls||"")+" layout-panel layout-panel-"+dir),bodyCls:((_1b.bodyCls||"")+" layout-body")});
pp.panel(_1d);
_1c[dir]=pp;
var _21={north:"s",south:"n",east:"w",west:"e"};
var _22=pp.panel("panel");
if(pp.panel("options").split){
_22.addClass("layout-split-"+dir);
}
_22.resizable($.extend({},{handles:(_21[dir]||""),disabled:(!pp.panel("options").split),onStartResize:function(e){
_1=true;
if(dir=="north"||dir=="south"){
var _23=$(">div.layout-split-proxy-v",_1a);
}else{
var _23=$(">div.layout-split-proxy-h",_1a);
}
var top=0,_24=0,_25=0,_26=0;
var pos={display:"block"};
if(dir=="north"){
pos.top=parseInt(_22.css("top"))+_22.outerHeight()-_23.height();
pos.left=parseInt(_22.css("left"));
pos.width=_22.outerWidth();
pos.height=_23.height();
}else{
if(dir=="south"){
pos.top=parseInt(_22.css("top"));
pos.left=parseInt(_22.css("left"));
pos.width=_22.outerWidth();
pos.height=_23.height();
}else{
if(dir=="east"){
pos.top=parseInt(_22.css("top"))||0;
pos.left=parseInt(_22.css("left"))||0;
pos.width=_23.width();
pos.height=_22.outerHeight();
}else{
if(dir=="west"){
pos.top=parseInt(_22.css("top"))||0;
pos.left=_22.outerWidth()-_23.width();
pos.width=_23.width();
pos.height=_22.outerHeight();
}
}
}
}
_23.css(pos);
$("<div class=\"layout-mask\"></div>").css({left:0,top:0,width:cc.width(),height:cc.height()}).appendTo(cc);
},onResize:function(e){
if(dir=="north"||dir=="south"){
var _27=_28(this);
$(this).resizable("options").maxHeight=_27;
var _29=$(">div.layout-split-proxy-v",_1a);
var top=dir=="north"?e.data.height-_29.height():$(_1a).height()-e.data.height;
_29.css("top",top);
}else{
var _2a=_28(this);
$(this).resizable("options").maxWidth=_2a;
var _29=$(">div.layout-split-proxy-h",_1a);
var _2b=dir=="west"?e.data.width-_29.width():$(_1a).width()-e.data.width;
_29.css("left",_2b);
}
return false;
},onStopResize:function(e){
cc.children("div.layout-split-proxy-v,div.layout-split-proxy-h").hide();
pp.panel("resize",e.data);
_2(_1a);
_1=false;
cc.find(">div.layout-mask").remove();
}},_1b));
cc.layout("options").onAdd.call(_1a,dir);
function _28(p){
var _2c="expand"+dir.substring(0,1).toUpperCase()+dir.substring(1);
var _2d=_1c["center"];
var _2e=(dir=="north"||dir=="south")?"minHeight":"minWidth";
var _2f=(dir=="north"||dir=="south")?"maxHeight":"maxWidth";
var _30=(dir=="north"||dir=="south")?"_outerHeight":"_outerWidth";
var _31=$.parser.parseValue(_2f,_1c[dir].panel("options")[_2f],$(_1a));
var _32=$.parser.parseValue(_2e,_2d.panel("options")[_2e],$(_1a));
var _33=_2d.panel("panel")[_30]()-_32;
if(_a(_1c[_2c])){
_33+=_1c[_2c][_30]()-1;
}else{
_33+=$(p)[_30]();
}
if(_33>_31){
_33=_31;
}
return _33;
};
};
function _34(_35,_36){
var _37=$.data(_35,"layout").panels;
if(_37[_36].length){
_37[_36].panel("destroy");
_37[_36]=$();
var _38="expand"+_36.substring(0,1).toUpperCase()+_36.substring(1);
if(_37[_38]){
_37[_38].panel("destroy");
_37[_38]=undefined;
}
$(_35).layout("options").onRemove.call(_35,_36);
}
};
function _39(_3a,_3b,_3c){
if(_3c==undefined){
_3c="normal";
}
var _3d=$.data(_3a,"layout").panels;
var p=_3d[_3b];
var _3e=p.panel("options");
if(_3e.onBeforeCollapse.call(p)==false){
return;
}
var _3f="expand"+_3b.substring(0,1).toUpperCase()+_3b.substring(1);
if(!_3d[_3f]){
_3d[_3f]=_40(_3b);
var ep=_3d[_3f].panel("panel");
if(!_3e.expandMode){
ep.css("cursor","default");
}else{
ep.bind("click",function(){
if(_3e.expandMode=="dock"){
_4f(_3a,_3b);
}else{
p.panel("expand",false).panel("open");
var _41=_42();
p.panel("resize",_41.collapse);
p.panel("panel").animate(_41.expand,function(){
$(this).unbind(".layout").bind("mouseleave.layout",{region:_3b},function(e){
if(_1==true){
return;
}
if($("body>div.combo-p>div.combo-panel:visible").length){
return;
}
_39(_3a,e.data.region);
});
$(_3a).layout("options").onExpand.call(_3a,_3b);
});
}
return false;
});
}
}
var _43=_42();
if(!_a(_3d[_3f])){
_3d.center.panel("resize",_43.resizeC);
}
p.panel("panel").animate(_43.collapse,_3c,function(){
p.panel("collapse",false).panel("close");
_3d[_3f].panel("open").panel("resize",_43.expandP);
$(this).unbind(".layout");
$(_3a).layout("options").onCollapse.call(_3a,_3b);
});
function _40(dir){
var _44={"east":"left","west":"right","north":"down","south":"up"};
var _45=(_3e.region=="north"||_3e.region=="south");
var _46="layout-button-"+_44[dir];
var p=$("<div></div>").appendTo(_3a);
p.panel($.extend({},$.fn.layout.paneldefaults,{cls:("layout-expand layout-expand-"+dir),title:"&nbsp;",titleDirection:_3e.titleDirection,iconCls:(_3e.hideCollapsedContent?null:_3e.iconCls),closed:true,minWidth:0,minHeight:0,doSize:false,region:_3e.region,collapsedSize:_3e.collapsedSize,noheader:(!_45&&_3e.hideExpandTool),tools:((_45&&_3e.hideExpandTool)?null:[{iconCls:_46,handler:function(){
_4f(_3a,_3b);
return false;
}}]),onResize:function(){
var _47=$(this).children(".layout-expand-title");
if(_47.length){
_47._outerWidth($(this).height());
var _48=($(this).width()-Math.min(_47._outerWidth(),_47._outerHeight()))/2;
var top=Math.max(_47._outerWidth(),_47._outerHeight());
if(_47.hasClass("layout-expand-title-down")){
_48+=Math.min(_47._outerWidth(),_47._outerHeight());
top=0;
}
_47.css({left:(_48+"px"),top:(top+"px")});
}
}}));
if(!_3e.hideCollapsedContent){
var _49=typeof _3e.collapsedContent=="function"?_3e.collapsedContent.call(p[0],_3e.title):_3e.collapsedContent;
_45?p.panel("setTitle",_49):p.html(_49);
}
p.panel("panel").hover(function(){
$(this).addClass("layout-expand-over");
},function(){
$(this).removeClass("layout-expand-over");
});
return p;
};
function _42(){
var cc=$(_3a);
var _4a=_3d.center.panel("options");
var _4b=_3e.collapsedSize;
if(_3b=="east"){
var _4c=p.panel("panel")._outerWidth();
var _4d=_4a.width+_4c-_4b;
if(_3e.split||!_3e.border){
_4d++;
}
return {resizeC:{width:_4d},expand:{left:cc.width()-_4c},expandP:{top:_4a.top,left:cc.width()-_4b,width:_4b,height:_4a.height},collapse:{left:cc.width(),top:_4a.top,height:_4a.height}};
}else{
if(_3b=="west"){
var _4c=p.panel("panel")._outerWidth();
var _4d=_4a.width+_4c-_4b;
if(_3e.split||!_3e.border){
_4d++;
}
return {resizeC:{width:_4d,left:_4b-1},expand:{left:0},expandP:{left:0,top:_4a.top,width:_4b,height:_4a.height},collapse:{left:-_4c,top:_4a.top,height:_4a.height}};
}else{
if(_3b=="north"){
var _4e=p.panel("panel")._outerHeight();
var hh=_4a.height;
if(!_a(_3d.expandNorth)){
hh+=_4e-_4b+((_3e.split||!_3e.border)?1:0);
}
_3d.east.add(_3d.west).add(_3d.expandEast).add(_3d.expandWest).panel("resize",{top:_4b-1,height:hh});
return {resizeC:{top:_4b-1,height:hh},expand:{top:0},expandP:{top:0,left:0,width:cc.width(),height:_4b},collapse:{top:-_4e,width:cc.width()}};
}else{
if(_3b=="south"){
var _4e=p.panel("panel")._outerHeight();
var hh=_4a.height;
if(!_a(_3d.expandSouth)){
hh+=_4e-_4b+((_3e.split||!_3e.border)?1:0);
}
_3d.east.add(_3d.west).add(_3d.expandEast).add(_3d.expandWest).panel("resize",{height:hh});
return {resizeC:{height:hh},expand:{top:cc.height()-_4e},expandP:{top:cc.height()-_4b,left:0,width:cc.width(),height:_4b},collapse:{top:cc.height(),width:cc.width()}};
}
}
}
}
};
};
function _4f(_50,_51){
var _52=$.data(_50,"layout").panels;
var p=_52[_51];
var _53=p.panel("options");
if(_53.onBeforeExpand.call(p)==false){
return;
}
var _54="expand"+_51.substring(0,1).toUpperCase()+_51.substring(1);
if(_52[_54]){
_52[_54].panel("close");
p.panel("panel").stop(true,true);
p.panel("expand",false).panel("open");
var _55=_56();
p.panel("resize",_55.collapse);
p.panel("panel").animate(_55.expand,function(){
_2(_50);
$(_50).layout("options").onExpand.call(_50,_51);
});
}
function _56(){
var cc=$(_50);
var _57=_52.center.panel("options");
if(_51=="east"&&_52.expandEast){
return {collapse:{left:cc.width(),top:_57.top,height:_57.height},expand:{left:cc.width()-p.panel("panel")._outerWidth()}};
}else{
if(_51=="west"&&_52.expandWest){
return {collapse:{left:-p.panel("panel")._outerWidth(),top:_57.top,height:_57.height},expand:{left:0}};
}else{
if(_51=="north"&&_52.expandNorth){
return {collapse:{top:-p.panel("panel")._outerHeight(),width:cc.width()},expand:{top:0}};
}else{
if(_51=="south"&&_52.expandSouth){
return {collapse:{top:cc.height(),width:cc.width()},expand:{top:cc.height()-p.panel("panel")._outerHeight()}};
}
}
}
}
};
};
function _a(pp){
if(!pp){
return false;
}
if(pp.length){
return pp.panel("panel").is(":visible");
}else{
return false;
}
};
function _58(_59){
var _5a=$.data(_59,"layout");
var _5b=_5a.options;
var _5c=_5a.panels;
var _5d=_5b.onCollapse;
_5b.onCollapse=function(){
};
_5e("east");
_5e("west");
_5e("north");
_5e("south");
_5b.onCollapse=_5d;
function _5e(_5f){
var p=_5c[_5f];
if(p.length&&p.panel("options").collapsed){
_39(_59,_5f,0);
}
};
};
function _60(_61,_62,_63){
var p=$(_61).layout("panel",_62);
p.panel("options").split=_63;
var cls="layout-split-"+_62;
var _64=p.panel("panel").removeClass(cls);
if(_63){
_64.addClass(cls);
}
_64.resizable({disabled:(!_63)});
_2(_61);
};
$.fn.layout=function(_65,_66){
if(typeof _65=="string"){
return $.fn.layout.methods[_65](this,_66);
}
_65=_65||{};
return this.each(function(){
var _67=$.data(this,"layout");
if(_67){
$.extend(_67.options,_65);
}else{
var _68=$.extend({},$.fn.layout.defaults,$.fn.layout.parseOptions(this),_65);
$.data(this,"layout",{options:_68,panels:{center:$(),north:$(),south:$(),east:$(),west:$()}});
_12(this);
}
_2(this);
_58(this);
});
};
$.fn.layout.methods={options:function(jq){
return $.data(jq[0],"layout").options;
},resize:function(jq,_69){
return jq.each(function(){
_2(this,_69);
});
},panel:function(jq,_6a){
return $.data(jq[0],"layout").panels[_6a];
},collapse:function(jq,_6b){
return jq.each(function(){
_39(this,_6b);
});
},expand:function(jq,_6c){
return jq.each(function(){
_4f(this,_6c);
});
},add:function(jq,_6d){
return jq.each(function(){
_19(this,_6d);
_2(this);
if($(this).layout("panel",_6d.region).panel("options").collapsed){
_39(this,_6d.region,0);
}
});
},remove:function(jq,_6e){
return jq.each(function(){
_34(this,_6e);
_2(this);
});
},split:function(jq,_6f){
return jq.each(function(){
_60(this,_6f,true);
});
},unsplit:function(jq,_70){
return jq.each(function(){
_60(this,_70,false);
});
}};
$.fn.layout.parseOptions=function(_71){
return $.extend({},$.parser.parseOptions(_71,[{fit:"boolean"}]));
};
$.fn.layout.defaults={fit:false,onExpand:function(_72){
},onCollapse:function(_73){
},onAdd:function(_74){
},onRemove:function(_75){
}};
$.fn.layout.parsePanelOptions=function(_76){
var t=$(_76);
return $.extend({},$.fn.panel.parseOptions(_76),$.parser.parseOptions(_76,["region",{split:"boolean",collpasedSize:"number",minWidth:"number",minHeight:"number",maxWidth:"number",maxHeight:"number"}]));
};
$.fn.layout.paneldefaults=$.extend({},$.fn.panel.defaults,{region:null,split:false,collapsedSize:28,expandMode:"float",hideExpandTool:false,hideCollapsedContent:true,collapsedContent:function(_77){
var p=$(this);
var _78=p.panel("options");
if(_78.region=="north"||_78.region=="south"){
return _77;
}
var cc=[];
if(_78.iconCls){
cc.push("<div class=\"panel-icon "+_78.iconCls+"\"></div>");
}
cc.push("<div class=\"panel-title layout-expand-title");
cc.push(" layout-expand-title-"+_78.titleDirection);
cc.push(_78.iconCls?" layout-expand-with-icon":"");
cc.push("\">");
cc.push(_77);
cc.push("</div>");
return cc.join("");
},minWidth:10,minHeight:10,maxWidth:10000,maxHeight:10000});
})(jQuery);

