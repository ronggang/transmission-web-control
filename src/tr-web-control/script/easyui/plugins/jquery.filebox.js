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
var _1=0;
function _2(_3){
var _4=$.data(_3,"filebox");
var _5=_4.options;
_5.fileboxId="filebox_file_id_"+(++_1);
$(_3).addClass("filebox-f").textbox(_5);
$(_3).textbox("textbox").attr("readonly","readonly");
_4.filebox=$(_3).next().addClass("filebox");
var _6=_7(_3);
var _8=$(_3).filebox("button");
if(_8.length){
$("<label class=\"filebox-label\" for=\""+_5.fileboxId+"\"></label>").appendTo(_8);
if(_8.linkbutton("options").disabled){
_6.attr("disabled","disabled");
}else{
_6.removeAttr("disabled");
}
}
};
function _7(_9){
var _a=$.data(_9,"filebox");
var _b=_a.options;
_a.filebox.find(".textbox-value").remove();
_b.oldValue="";
var _c=$("<input type=\"file\" class=\"textbox-value\">").appendTo(_a.filebox);
_c.attr("id",_b.fileboxId).attr("name",$(_9).attr("textboxName")||"");
_c.attr("accept",_b.accept);
_c.attr("capture",_b.capture);
if(_b.multiple){
_c.attr("multiple","multiple");
}
_c.change(function(){
var _d=this.value;
if(this.files){
_d=$.map(this.files,function(_e){
return _e.name;
}).join(_b.separator);
}
$(_9).filebox("setText",_d);
_b.onChange.call(_9,_d,_b.oldValue);
_b.oldValue=_d;
});
return _c;
};
$.fn.filebox=function(_f,_10){
if(typeof _f=="string"){
var _11=$.fn.filebox.methods[_f];
if(_11){
return _11(this,_10);
}else{
return this.textbox(_f,_10);
}
}
_f=_f||{};
return this.each(function(){
var _12=$.data(this,"filebox");
if(_12){
$.extend(_12.options,_f);
}else{
$.data(this,"filebox",{options:$.extend({},$.fn.filebox.defaults,$.fn.filebox.parseOptions(this),_f)});
}
_2(this);
});
};
$.fn.filebox.methods={options:function(jq){
var _13=jq.textbox("options");
return $.extend($.data(jq[0],"filebox").options,{width:_13.width,value:_13.value,originalValue:_13.originalValue,disabled:_13.disabled,readonly:_13.readonly});
},clear:function(jq){
return jq.each(function(){
$(this).textbox("clear");
_7(this);
});
},reset:function(jq){
return jq.each(function(){
$(this).filebox("clear");
});
},setValue:function(jq){
return jq;
},setValues:function(jq){
return jq;
}};
$.fn.filebox.parseOptions=function(_14){
var t=$(_14);
return $.extend({},$.fn.textbox.parseOptions(_14),$.parser.parseOptions(_14,["accept","capture","separator"]),{multiple:(t.attr("multiple")?true:undefined)});
};
$.fn.filebox.defaults=$.extend({},$.fn.textbox.defaults,{buttonIcon:null,buttonText:"Choose File",buttonAlign:"right",inputEvents:{},accept:"",capture:"",separator:",",multiple:false});
})(jQuery);

