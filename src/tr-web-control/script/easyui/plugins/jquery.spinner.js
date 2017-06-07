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
var _3=$.data(_2,"spinner");
var _4=_3.options;
var _5=$.extend(true,[],_4.icons);
if(_4.spinAlign=="left"||_4.spinAlign=="right"){
_4.spinArrow=true;
_4.iconAlign=_4.spinAlign;
var _6={iconCls:"spinner-arrow",handler:function(e){
var _7=$(e.target).closest(".spinner-arrow-up,.spinner-arrow-down");
_13(e.data.target,_7.hasClass("spinner-arrow-down"));
}};
if(_4.spinAlign=="left"){
_5.unshift(_6);
}else{
_5.push(_6);
}
}else{
_4.spinArrow=false;
if(_4.spinAlign=="vertical"){
if(_4.buttonAlign!="top"){
_4.buttonAlign="bottom";
}
_4.clsLeft="textbox-button-bottom";
_4.clsRight="textbox-button-top";
}else{
_4.clsLeft="textbox-button-left";
_4.clsRight="textbox-button-right";
}
}
$(_2).addClass("spinner-f").textbox($.extend({},_4,{icons:_5,doSize:false,onResize:function(_8,_9){
if(!_4.spinArrow){
var _a=$(this).next();
var _b=_a.find(".textbox-button:not(.spinner-button)");
if(_b.length){
var _c=_b.outerWidth();
var _d=_b.outerHeight();
var _e=_a.find(".spinner-button."+_4.clsLeft);
var _f=_a.find(".spinner-button."+_4.clsRight);
if(_4.buttonAlign=="right"){
_f.css("marginRight",_c+"px");
}else{
if(_4.buttonAlign=="left"){
_e.css("marginLeft",_c+"px");
}else{
if(_4.buttonAlign=="top"){
_f.css("marginTop",_d+"px");
}else{
_e.css("marginBottom",_d+"px");
}
}
}
}
}
_4.onResize.call(this,_8,_9);
}}));
$(_2).attr("spinnerName",$(_2).attr("textboxName"));
_3.spinner=$(_2).next();
_3.spinner.addClass("spinner");
if(_4.spinArrow){
var _10=_3.spinner.find(".spinner-arrow");
_10.append("<a href=\"javascript:;\" class=\"spinner-arrow-up\" tabindex=\"-1\"></a>");
_10.append("<a href=\"javascript:;\" class=\"spinner-arrow-down\" tabindex=\"-1\"></a>");
}else{
var _11=$("<a href=\"javascript:;\" class=\"textbox-button spinner-button\"></a>").addClass(_4.clsLeft).appendTo(_3.spinner);
var _12=$("<a href=\"javascript:;\" class=\"textbox-button spinner-button\"></a>").addClass(_4.clsRight).appendTo(_3.spinner);
_11.linkbutton({iconCls:_4.reversed?"spinner-button-up":"spinner-button-down",onClick:function(){
_13(_2,!_4.reversed);
}});
_12.linkbutton({iconCls:_4.reversed?"spinner-button-down":"spinner-button-up",onClick:function(){
_13(_2,_4.reversed);
}});
if(_4.disabled){
$(_2).spinner("disable");
}
if(_4.readonly){
$(_2).spinner("readonly");
}
}
$(_2).spinner("resize");
};
function _13(_14,_15){
var _16=$(_14).spinner("options");
_16.spin.call(_14,_15);
_16[_15?"onSpinDown":"onSpinUp"].call(_14);
$(_14).spinner("validate");
};
$.fn.spinner=function(_17,_18){
if(typeof _17=="string"){
var _19=$.fn.spinner.methods[_17];
if(_19){
return _19(this,_18);
}else{
return this.textbox(_17,_18);
}
}
_17=_17||{};
return this.each(function(){
var _1a=$.data(this,"spinner");
if(_1a){
$.extend(_1a.options,_17);
}else{
_1a=$.data(this,"spinner",{options:$.extend({},$.fn.spinner.defaults,$.fn.spinner.parseOptions(this),_17)});
}
_1(this);
});
};
$.fn.spinner.methods={options:function(jq){
var _1b=jq.textbox("options");
return $.extend($.data(jq[0],"spinner").options,{width:_1b.width,value:_1b.value,originalValue:_1b.originalValue,disabled:_1b.disabled,readonly:_1b.readonly});
}};
$.fn.spinner.parseOptions=function(_1c){
return $.extend({},$.fn.textbox.parseOptions(_1c),$.parser.parseOptions(_1c,["min","max","spinAlign",{increment:"number",reversed:"boolean"}]));
};
$.fn.spinner.defaults=$.extend({},$.fn.textbox.defaults,{min:null,max:null,increment:1,spinAlign:"right",reversed:false,spin:function(_1d){
},onSpinUp:function(){
},onSpinDown:function(){
}});
})(jQuery);

