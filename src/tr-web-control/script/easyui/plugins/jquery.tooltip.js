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
$(_2).addClass("tooltip-f");
};
function _3(_4){
var _5=$.data(_4,"tooltip").options;
$(_4).unbind(".tooltip").bind(_5.showEvent+".tooltip",function(e){
$(_4).tooltip("show",e);
}).bind(_5.hideEvent+".tooltip",function(e){
$(_4).tooltip("hide",e);
}).bind("mousemove.tooltip",function(e){
if(_5.trackMouse){
_5.trackMouseX=e.pageX;
_5.trackMouseY=e.pageY;
$(_4).tooltip("reposition");
}
});
};
function _6(_7){
var _8=$.data(_7,"tooltip");
if(_8.showTimer){
clearTimeout(_8.showTimer);
_8.showTimer=null;
}
if(_8.hideTimer){
clearTimeout(_8.hideTimer);
_8.hideTimer=null;
}
};
function _9(_a){
var _b=$.data(_a,"tooltip");
if(!_b||!_b.tip){
return;
}
var _c=_b.options;
var _d=_b.tip;
var _e={left:-100000,top:-100000};
if($(_a).is(":visible")){
_e=_f(_c.position);
if(_c.position=="top"&&_e.top<0){
_e=_f("bottom");
}else{
if((_c.position=="bottom")&&(_e.top+_d._outerHeight()>$(window)._outerHeight()+$(document).scrollTop())){
_e=_f("top");
}
}
if(_e.left<0){
if(_c.position=="left"){
_e=_f("right");
}else{
$(_a).tooltip("arrow").css("left",_d._outerWidth()/2+_e.left);
_e.left=0;
}
}else{
if(_e.left+_d._outerWidth()>$(window)._outerWidth()+$(document)._scrollLeft()){
if(_c.position=="right"){
_e=_f("left");
}else{
var _10=_e.left;
_e.left=$(window)._outerWidth()+$(document)._scrollLeft()-_d._outerWidth();
$(_a).tooltip("arrow").css("left",_d._outerWidth()/2-(_e.left-_10));
}
}
}
}
_d.css({left:_e.left,top:_e.top,zIndex:(_c.zIndex!=undefined?_c.zIndex:($.fn.window?$.fn.window.defaults.zIndex++:""))});
_c.onPosition.call(_a,_e.left,_e.top);
function _f(_11){
_c.position=_11||"bottom";
_d.removeClass("tooltip-top tooltip-bottom tooltip-left tooltip-right").addClass("tooltip-"+_c.position);
var _12,top;
var _13=$.isFunction(_c.deltaX)?_c.deltaX.call(_a,_c.position):_c.deltaX;
var _14=$.isFunction(_c.deltaY)?_c.deltaY.call(_a,_c.position):_c.deltaY;
if(_c.trackMouse){
t=$();
_12=_c.trackMouseX+_13;
top=_c.trackMouseY+_14;
}else{
var t=$(_a);
_12=t.offset().left+_13;
top=t.offset().top+_14;
}
switch(_c.position){
case "right":
_12+=t._outerWidth()+12+(_c.trackMouse?12:0);
top-=(_d._outerHeight()-t._outerHeight())/2;
break;
case "left":
_12-=_d._outerWidth()+12+(_c.trackMouse?12:0);
top-=(_d._outerHeight()-t._outerHeight())/2;
break;
case "top":
_12-=(_d._outerWidth()-t._outerWidth())/2;
top-=_d._outerHeight()+12+(_c.trackMouse?12:0);
break;
case "bottom":
_12-=(_d._outerWidth()-t._outerWidth())/2;
top+=t._outerHeight()+12+(_c.trackMouse?12:0);
break;
}
return {left:_12,top:top};
};
};
function _15(_16,e){
var _17=$.data(_16,"tooltip");
var _18=_17.options;
var tip=_17.tip;
if(!tip){
tip=$("<div tabindex=\"-1\" class=\"tooltip\">"+"<div class=\"tooltip-content\"></div>"+"<div class=\"tooltip-arrow-outer\"></div>"+"<div class=\"tooltip-arrow\"></div>"+"</div>").appendTo("body");
_17.tip=tip;
_19(_16);
}
_6(_16);
_17.showTimer=setTimeout(function(){
$(_16).tooltip("reposition");
tip.show();
_18.onShow.call(_16,e);
var _1a=tip.children(".tooltip-arrow-outer");
var _1b=tip.children(".tooltip-arrow");
var bc="border-"+_18.position+"-color";
_1a.add(_1b).css({borderTopColor:"",borderBottomColor:"",borderLeftColor:"",borderRightColor:""});
_1a.css(bc,tip.css(bc));
_1b.css(bc,tip.css("backgroundColor"));
},_18.showDelay);
};
function _1c(_1d,e){
var _1e=$.data(_1d,"tooltip");
if(_1e&&_1e.tip){
_6(_1d);
_1e.hideTimer=setTimeout(function(){
_1e.tip.hide();
_1e.options.onHide.call(_1d,e);
},_1e.options.hideDelay);
}
};
function _19(_1f,_20){
var _21=$.data(_1f,"tooltip");
var _22=_21.options;
if(_20){
_22.content=_20;
}
if(!_21.tip){
return;
}
var cc=typeof _22.content=="function"?_22.content.call(_1f):_22.content;
_21.tip.children(".tooltip-content").html(cc);
_22.onUpdate.call(_1f,cc);
};
function _23(_24){
var _25=$.data(_24,"tooltip");
if(_25){
_6(_24);
var _26=_25.options;
if(_25.tip){
_25.tip.remove();
}
if(_26._title){
$(_24).attr("title",_26._title);
}
$.removeData(_24,"tooltip");
$(_24).unbind(".tooltip").removeClass("tooltip-f");
_26.onDestroy.call(_24);
}
};
$.fn.tooltip=function(_27,_28){
if(typeof _27=="string"){
return $.fn.tooltip.methods[_27](this,_28);
}
_27=_27||{};
return this.each(function(){
var _29=$.data(this,"tooltip");
if(_29){
$.extend(_29.options,_27);
}else{
$.data(this,"tooltip",{options:$.extend({},$.fn.tooltip.defaults,$.fn.tooltip.parseOptions(this),_27)});
_1(this);
}
_3(this);
_19(this);
});
};
$.fn.tooltip.methods={options:function(jq){
return $.data(jq[0],"tooltip").options;
},tip:function(jq){
return $.data(jq[0],"tooltip").tip;
},arrow:function(jq){
return jq.tooltip("tip").children(".tooltip-arrow-outer,.tooltip-arrow");
},show:function(jq,e){
return jq.each(function(){
_15(this,e);
});
},hide:function(jq,e){
return jq.each(function(){
_1c(this,e);
});
},update:function(jq,_2a){
return jq.each(function(){
_19(this,_2a);
});
},reposition:function(jq){
return jq.each(function(){
_9(this);
});
},destroy:function(jq){
return jq.each(function(){
_23(this);
});
}};
$.fn.tooltip.parseOptions=function(_2b){
var t=$(_2b);
var _2c=$.extend({},$.parser.parseOptions(_2b,["position","showEvent","hideEvent","content",{trackMouse:"boolean",deltaX:"number",deltaY:"number",showDelay:"number",hideDelay:"number"}]),{_title:t.attr("title")});
t.attr("title","");
if(!_2c.content){
_2c.content=_2c._title;
}
return _2c;
};
$.fn.tooltip.defaults={position:"bottom",content:null,trackMouse:false,deltaX:0,deltaY:0,showEvent:"mouseenter",hideEvent:"mouseleave",showDelay:200,hideDelay:100,onShow:function(e){
},onHide:function(e){
},onUpdate:function(_2d){
},onPosition:function(_2e,top){
},onDestroy:function(){
}};
})(jQuery);

