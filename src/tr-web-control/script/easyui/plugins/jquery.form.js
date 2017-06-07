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
var _4=$.data(_2,"form").options;
$.extend(_4,_3||{});
var _5=$.extend({},_4.queryParams);
if(_4.onSubmit.call(_2,_5)==false){
return;
}
var _6=$(_2).find(".textbox-text:focus");
_6.triggerHandler("blur");
_6.focus();
var _7=null;
if(_4.dirty){
var ff=[];
$.map(_4.dirtyFields,function(f){
if($(f).hasClass("textbox-f")){
$(f).next().find(".textbox-value").each(function(){
ff.push(this);
});
}else{
ff.push(f);
}
});
_7=$(_2).find("input[name]:enabled,textarea[name]:enabled,select[name]:enabled").filter(function(){
return $.inArray(this,ff)==-1;
});
_7.attr("disabled","disabled");
}
if(_4.ajax){
if(_4.iframe){
_8(_2,_5);
}else{
if(window.FormData!==undefined){
_9(_2,_5);
}else{
_8(_2,_5);
}
}
}else{
$(_2).submit();
}
if(_4.dirty){
_7.removeAttr("disabled");
}
};
function _8(_a,_b){
var _c=$.data(_a,"form").options;
var _d="easyui_frame_"+(new Date().getTime());
var _e=$("<iframe id="+_d+" name="+_d+"></iframe>").appendTo("body");
_e.attr("src",window.ActiveXObject?"javascript:false":"about:blank");
_e.css({position:"absolute",top:-1000,left:-1000});
_e.bind("load",cb);
_f(_b);
function _f(_10){
var _11=$(_a);
if(_c.url){
_11.attr("action",_c.url);
}
var t=_11.attr("target"),a=_11.attr("action");
_11.attr("target",_d);
var _12=$();
try{
for(var n in _10){
var _13=$("<input type=\"hidden\" name=\""+n+"\">").val(_10[n]).appendTo(_11);
_12=_12.add(_13);
}
_14();
_11[0].submit();
}
finally{
_11.attr("action",a);
t?_11.attr("target",t):_11.removeAttr("target");
_12.remove();
}
};
function _14(){
var f=$("#"+_d);
if(!f.length){
return;
}
try{
var s=f.contents()[0].readyState;
if(s&&s.toLowerCase()=="uninitialized"){
setTimeout(_14,100);
}
}
catch(e){
cb();
}
};
var _15=10;
function cb(){
var f=$("#"+_d);
if(!f.length){
return;
}
f.unbind();
var _16="";
try{
var _17=f.contents().find("body");
_16=_17.html();
if(_16==""){
if(--_15){
setTimeout(cb,100);
return;
}
}
var ta=_17.find(">textarea");
if(ta.length){
_16=ta.val();
}else{
var pre=_17.find(">pre");
if(pre.length){
_16=pre.html();
}
}
}
catch(e){
}
_c.success.call(_a,_16);
setTimeout(function(){
f.unbind();
f.remove();
},100);
};
};
function _9(_18,_19){
var _1a=$.data(_18,"form").options;
var _1b=new FormData($(_18)[0]);
for(var _1c in _19){
_1b.append(_1c,_19[_1c]);
}
$.ajax({url:_1a.url,type:"post",xhr:function(){
var xhr=$.ajaxSettings.xhr();
if(xhr.upload){
xhr.upload.addEventListener("progress",function(e){
if(e.lengthComputable){
var _1d=e.total;
var _1e=e.loaded||e.position;
var _1f=Math.ceil(_1e*100/_1d);
_1a.onProgress.call(_18,_1f);
}
},false);
}
return xhr;
},data:_1b,dataType:"html",cache:false,contentType:false,processData:false,complete:function(res){
_1a.success.call(_18,res.responseText);
}});
};
function _20(_21,_22){
var _23=$.data(_21,"form").options;
if(typeof _22=="string"){
var _24={};
if(_23.onBeforeLoad.call(_21,_24)==false){
return;
}
$.ajax({url:_22,data:_24,dataType:"json",success:function(_25){
_26(_25);
},error:function(){
_23.onLoadError.apply(_21,arguments);
}});
}else{
_26(_22);
}
function _26(_27){
var _28=$(_21);
for(var _29 in _27){
var val=_27[_29];
if(!_2a(_29,val)){
if(!_2b(_29,val)){
_28.find("input[name=\""+_29+"\"]").val(val);
_28.find("textarea[name=\""+_29+"\"]").val(val);
_28.find("select[name=\""+_29+"\"]").val(val);
}
}
}
_23.onLoadSuccess.call(_21,_27);
_28.form("validate");
};
function _2a(_2c,val){
var cc=$(_21).find("[switchbuttonName=\""+_2c+"\"]");
if(cc.length){
cc.switchbutton("uncheck");
cc.each(function(){
if(_2d($(this).switchbutton("options").value,val)){
$(this).switchbutton("check");
}
});
return true;
}
cc=$(_21).find("input[name=\""+_2c+"\"][type=radio], input[name=\""+_2c+"\"][type=checkbox]");
if(cc.length){
cc._propAttr("checked",false);
cc.each(function(){
if(_2d($(this).val(),val)){
$(this)._propAttr("checked",true);
}
});
return true;
}
return false;
};
function _2d(v,val){
if(v==String(val)||$.inArray(v,$.isArray(val)?val:[val])>=0){
return true;
}else{
return false;
}
};
function _2b(_2e,val){
var _2f=$(_21).find("[textboxName=\""+_2e+"\"],[sliderName=\""+_2e+"\"]");
if(_2f.length){
for(var i=0;i<_23.fieldTypes.length;i++){
var _30=_23.fieldTypes[i];
var _31=_2f.data(_30);
if(_31){
if(_31.options.multiple||_31.options.range){
_2f[_30]("setValues",val);
}else{
_2f[_30]("setValue",val);
}
return true;
}
}
}
return false;
};
};
function _32(_33){
$("input,select,textarea",_33).each(function(){
if($(this).hasClass("textbox-value")){
return;
}
var t=this.type,tag=this.tagName.toLowerCase();
if(t=="text"||t=="hidden"||t=="password"||tag=="textarea"){
this.value="";
}else{
if(t=="file"){
var _34=$(this);
if(!_34.hasClass("textbox-value")){
var _35=_34.clone().val("");
_35.insertAfter(_34);
if(_34.data("validatebox")){
_34.validatebox("destroy");
_35.validatebox();
}else{
_34.remove();
}
}
}else{
if(t=="checkbox"||t=="radio"){
this.checked=false;
}else{
if(tag=="select"){
this.selectedIndex=-1;
}
}
}
}
});
var tmp=$();
var _36=$(_33);
var _37=$.data(_33,"form").options;
for(var i=0;i<_37.fieldTypes.length;i++){
var _38=_37.fieldTypes[i];
var _39=_36.find("."+_38+"-f").not(tmp);
if(_39.length&&_39[_38]){
_39[_38]("clear");
tmp=tmp.add(_39);
}
}
_36.form("validate");
};
function _3a(_3b){
_3b.reset();
var _3c=$(_3b);
var _3d=$.data(_3b,"form").options;
for(var i=_3d.fieldTypes.length-1;i>=0;i--){
var _3e=_3d.fieldTypes[i];
var _3f=_3c.find("."+_3e+"-f");
if(_3f.length&&_3f[_3e]){
_3f[_3e]("reset");
}
}
_3c.form("validate");
};
function _40(_41){
var _42=$.data(_41,"form").options;
$(_41).unbind(".form");
if(_42.ajax){
$(_41).bind("submit.form",function(){
setTimeout(function(){
_1(_41,_42);
},0);
return false;
});
}
$(_41).bind("_change.form",function(e,t){
if($.inArray(t,_42.dirtyFields)==-1){
_42.dirtyFields.push(t);
}
_42.onChange.call(this,t);
}).bind("change.form",function(e){
var t=e.target;
if(!$(t).hasClass("textbox-text")){
if($.inArray(t,_42.dirtyFields)==-1){
_42.dirtyFields.push(t);
}
_42.onChange.call(this,t);
}
});
_43(_41,_42.novalidate);
};
function _44(_45,_46){
_46=_46||{};
var _47=$.data(_45,"form");
if(_47){
$.extend(_47.options,_46);
}else{
$.data(_45,"form",{options:$.extend({},$.fn.form.defaults,$.fn.form.parseOptions(_45),_46)});
}
};
function _48(_49){
if($.fn.validatebox){
var t=$(_49);
t.find(".validatebox-text:not(:disabled)").validatebox("validate");
var _4a=t.find(".validatebox-invalid");
_4a.filter(":not(:disabled):first").focus();
return _4a.length==0;
}
return true;
};
function _43(_4b,_4c){
var _4d=$.data(_4b,"form").options;
_4d.novalidate=_4c;
$(_4b).find(".validatebox-text:not(:disabled)").validatebox(_4c?"disableValidation":"enableValidation");
};
$.fn.form=function(_4e,_4f){
if(typeof _4e=="string"){
this.each(function(){
_44(this);
});
return $.fn.form.methods[_4e](this,_4f);
}
return this.each(function(){
_44(this,_4e);
_40(this);
});
};
$.fn.form.methods={options:function(jq){
return $.data(jq[0],"form").options;
},submit:function(jq,_50){
return jq.each(function(){
_1(this,_50);
});
},load:function(jq,_51){
return jq.each(function(){
_20(this,_51);
});
},clear:function(jq){
return jq.each(function(){
_32(this);
});
},reset:function(jq){
return jq.each(function(){
_3a(this);
});
},validate:function(jq){
return _48(jq[0]);
},disableValidation:function(jq){
return jq.each(function(){
_43(this,true);
});
},enableValidation:function(jq){
return jq.each(function(){
_43(this,false);
});
},resetValidation:function(jq){
return jq.each(function(){
$(this).find(".validatebox-text:not(:disabled)").validatebox("resetValidation");
});
},resetDirty:function(jq){
return jq.each(function(){
$(this).form("options").dirtyFields=[];
});
}};
$.fn.form.parseOptions=function(_52){
var t=$(_52);
return $.extend({},$.parser.parseOptions(_52,[{ajax:"boolean",dirty:"boolean"}]),{url:(t.attr("action")?t.attr("action"):undefined)});
};
$.fn.form.defaults={fieldTypes:["combobox","combotree","combogrid","combotreegrid","datetimebox","datebox","combo","datetimespinner","timespinner","numberspinner","spinner","slider","searchbox","numberbox","passwordbox","filebox","textbox","switchbutton"],novalidate:false,ajax:true,iframe:true,dirty:false,dirtyFields:[],url:null,queryParams:{},onSubmit:function(_53){
return $(this).form("validate");
},onProgress:function(_54){
},success:function(_55){
},onBeforeLoad:function(_56){
},onLoadSuccess:function(_57){
},onLoadError:function(){
},onChange:function(_58){
}};
})(jQuery);

