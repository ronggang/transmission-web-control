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
var _4=$.data(_2,"accordion");
var _5=_4.options;
var _6=_4.panels;
var cc=$(_2);
var _7=(_5.halign=="left"||_5.halign=="right");
cc.children(".panel-last").removeClass("panel-last");
cc.children(".panel:last").addClass("panel-last");
if(_3){
$.extend(_5,{width:_3.width,height:_3.height});
}
cc._size(_5);
var _8=0;
var _9="auto";
var _a=cc.find(">.panel>.accordion-header");
if(_a.length){
if(_7){
$(_6[0]).panel("resize",{width:cc.width(),height:cc.height()});
_8=$(_a[0])._outerWidth();
}else{
_8=$(_a[0]).css("height","")._outerHeight();
}
}
if(!isNaN(parseInt(_5.height))){
if(_7){
_9=cc.width()-_8*_a.length;
}else{
_9=cc.height()-_8*_a.length;
}
}
_b(true,_9-_b(false));
function _b(_c,_d){
var _e=0;
for(var i=0;i<_6.length;i++){
var p=_6[i];
if(_7){
var h=p.panel("header")._outerWidth(_8);
}else{
var h=p.panel("header")._outerHeight(_8);
}
if(p.panel("options").collapsible==_c){
var _f=isNaN(_d)?undefined:(_d+_8*h.length);
if(_7){
p.panel("resize",{height:cc.height(),width:(_c?_f:undefined)});
_e+=p.panel("panel")._outerWidth()-_8*h.length;
}else{
p.panel("resize",{width:cc.width(),height:(_c?_f:undefined)});
_e+=p.panel("panel").outerHeight()-_8*h.length;
}
}
}
return _e;
};
};
function _10(_11,_12,_13,all){
var _14=$.data(_11,"accordion").panels;
var pp=[];
for(var i=0;i<_14.length;i++){
var p=_14[i];
if(_12){
if(p.panel("options")[_12]==_13){
pp.push(p);
}
}else{
if(p[0]==$(_13)[0]){
return i;
}
}
}
if(_12){
return all?pp:(pp.length?pp[0]:null);
}else{
return -1;
}
};
function _15(_16){
return _10(_16,"collapsed",false,true);
};
function _17(_18){
var pp=_15(_18);
return pp.length?pp[0]:null;
};
function _19(_1a,_1b){
return _10(_1a,null,_1b);
};
function _1c(_1d,_1e){
var _1f=$.data(_1d,"accordion").panels;
if(typeof _1e=="number"){
if(_1e<0||_1e>=_1f.length){
return null;
}else{
return _1f[_1e];
}
}
return _10(_1d,"title",_1e);
};
function _20(_21){
var _22=$.data(_21,"accordion").options;
var cc=$(_21);
if(_22.border){
cc.removeClass("accordion-noborder");
}else{
cc.addClass("accordion-noborder");
}
};
function _23(_24){
var _25=$.data(_24,"accordion");
var cc=$(_24);
cc.addClass("accordion");
_25.panels=[];
cc.children("div").each(function(){
var _26=$.extend({},$.parser.parseOptions(this),{selected:($(this).attr("selected")?true:undefined)});
var pp=$(this);
_25.panels.push(pp);
_28(_24,pp,_26);
});
cc.bind("_resize",function(e,_27){
if($(this).hasClass("easyui-fluid")||_27){
_1(_24);
}
return false;
});
};
function _28(_29,pp,_2a){
var _2b=$.data(_29,"accordion").options;
pp.panel($.extend({},{collapsible:true,minimizable:false,maximizable:false,closable:false,doSize:false,collapsed:true,headerCls:"accordion-header",bodyCls:"accordion-body",halign:_2b.halign},_2a,{onBeforeExpand:function(){
if(_2a.onBeforeExpand){
if(_2a.onBeforeExpand.call(this)==false){
return false;
}
}
if(!_2b.multiple){
var all=$.grep(_15(_29),function(p){
return p.panel("options").collapsible;
});
for(var i=0;i<all.length;i++){
_34(_29,_19(_29,all[i]));
}
}
var _2c=$(this).panel("header");
_2c.addClass("accordion-header-selected");
_2c.find(".accordion-collapse").removeClass("accordion-expand");
},onExpand:function(){
$(_29).find(">.panel-last>.accordion-header").removeClass("accordion-header-border");
if(_2a.onExpand){
_2a.onExpand.call(this);
}
_2b.onSelect.call(_29,$(this).panel("options").title,_19(_29,this));
},onBeforeCollapse:function(){
if(_2a.onBeforeCollapse){
if(_2a.onBeforeCollapse.call(this)==false){
return false;
}
}
$(_29).find(">.panel-last>.accordion-header").addClass("accordion-header-border");
var _2d=$(this).panel("header");
_2d.removeClass("accordion-header-selected");
_2d.find(".accordion-collapse").addClass("accordion-expand");
},onCollapse:function(){
if(isNaN(parseInt(_2b.height))){
$(_29).find(">.panel-last>.accordion-header").removeClass("accordion-header-border");
}
if(_2a.onCollapse){
_2a.onCollapse.call(this);
}
_2b.onUnselect.call(_29,$(this).panel("options").title,_19(_29,this));
}}));
var _2e=pp.panel("header");
var _2f=_2e.children("div.panel-tool");
_2f.children("a.panel-tool-collapse").hide();
var t=$("<a href=\"javascript:;\"></a>").addClass("accordion-collapse accordion-expand").appendTo(_2f);
t.bind("click",function(){
_30(pp);
return false;
});
pp.panel("options").collapsible?t.show():t.hide();
if(_2b.halign=="left"||_2b.halign=="right"){
t.hide();
}
_2e.click(function(){
_30(pp);
return false;
});
function _30(p){
var _31=p.panel("options");
if(_31.collapsible){
var _32=_19(_29,p);
if(_31.collapsed){
_33(_29,_32);
}else{
_34(_29,_32);
}
}
};
};
function _33(_35,_36){
var p=_1c(_35,_36);
if(!p){
return;
}
_37(_35);
var _38=$.data(_35,"accordion").options;
p.panel("expand",_38.animate);
};
function _34(_39,_3a){
var p=_1c(_39,_3a);
if(!p){
return;
}
_37(_39);
var _3b=$.data(_39,"accordion").options;
p.panel("collapse",_3b.animate);
};
function _3c(_3d){
var _3e=$.data(_3d,"accordion").options;
$(_3d).find(">.panel-last>.accordion-header").addClass("accordion-header-border");
var p=_10(_3d,"selected",true);
if(p){
_3f(_19(_3d,p));
}else{
_3f(_3e.selected);
}
function _3f(_40){
var _41=_3e.animate;
_3e.animate=false;
_33(_3d,_40);
_3e.animate=_41;
};
};
function _37(_42){
var _43=$.data(_42,"accordion").panels;
for(var i=0;i<_43.length;i++){
_43[i].stop(true,true);
}
};
function add(_44,_45){
var _46=$.data(_44,"accordion");
var _47=_46.options;
var _48=_46.panels;
if(_45.selected==undefined){
_45.selected=true;
}
_37(_44);
var pp=$("<div></div>").appendTo(_44);
_48.push(pp);
_28(_44,pp,_45);
_1(_44);
_47.onAdd.call(_44,_45.title,_48.length-1);
if(_45.selected){
_33(_44,_48.length-1);
}
};
function _49(_4a,_4b){
var _4c=$.data(_4a,"accordion");
var _4d=_4c.options;
var _4e=_4c.panels;
_37(_4a);
var _4f=_1c(_4a,_4b);
var _50=_4f.panel("options").title;
var _51=_19(_4a,_4f);
if(!_4f){
return;
}
if(_4d.onBeforeRemove.call(_4a,_50,_51)==false){
return;
}
_4e.splice(_51,1);
_4f.panel("destroy");
if(_4e.length){
_1(_4a);
var _52=_17(_4a);
if(!_52){
_33(_4a,0);
}
}
_4d.onRemove.call(_4a,_50,_51);
};
$.fn.accordion=function(_53,_54){
if(typeof _53=="string"){
return $.fn.accordion.methods[_53](this,_54);
}
_53=_53||{};
return this.each(function(){
var _55=$.data(this,"accordion");
if(_55){
$.extend(_55.options,_53);
}else{
$.data(this,"accordion",{options:$.extend({},$.fn.accordion.defaults,$.fn.accordion.parseOptions(this),_53),accordion:$(this).addClass("accordion"),panels:[]});
_23(this);
}
_20(this);
_1(this);
_3c(this);
});
};
$.fn.accordion.methods={options:function(jq){
return $.data(jq[0],"accordion").options;
},panels:function(jq){
return $.data(jq[0],"accordion").panels;
},resize:function(jq,_56){
return jq.each(function(){
_1(this,_56);
});
},getSelections:function(jq){
return _15(jq[0]);
},getSelected:function(jq){
return _17(jq[0]);
},getPanel:function(jq,_57){
return _1c(jq[0],_57);
},getPanelIndex:function(jq,_58){
return _19(jq[0],_58);
},select:function(jq,_59){
return jq.each(function(){
_33(this,_59);
});
},unselect:function(jq,_5a){
return jq.each(function(){
_34(this,_5a);
});
},add:function(jq,_5b){
return jq.each(function(){
add(this,_5b);
});
},remove:function(jq,_5c){
return jq.each(function(){
_49(this,_5c);
});
}};
$.fn.accordion.parseOptions=function(_5d){
var t=$(_5d);
return $.extend({},$.parser.parseOptions(_5d,["width","height","halign",{fit:"boolean",border:"boolean",animate:"boolean",multiple:"boolean",selected:"number"}]));
};
$.fn.accordion.defaults={width:"auto",height:"auto",fit:false,border:true,animate:true,multiple:false,selected:0,halign:"top",onSelect:function(_5e,_5f){
},onUnselect:function(_60,_61){
},onAdd:function(_62,_63){
},onBeforeRemove:function(_64,_65){
},onRemove:function(_66,_67){
}};
})(jQuery);

