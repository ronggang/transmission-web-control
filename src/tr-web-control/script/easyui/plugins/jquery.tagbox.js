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
var _3=$.data(_2,"tagbox");
var _4=_3.options;
$(_2).addClass("tagbox-f").combobox($.extend({},_4,{cls:"tagbox",reversed:true,onChange:function(_5,_6){
_7();
$(this).combobox("hidePanel");
_4.onChange.call(_2,_5,_6);
},onResizing:function(_8,_9){
var _a=$(this).combobox("textbox");
var tb=$(this).data("textbox").textbox;
tb.css({height:"",paddingLeft:_a.css("marginLeft"),paddingRight:_a.css("marginRight")});
_a.css("margin",0);
tb._size({width:_4.width},$(this).parent());
_23(_2);
_12(this);
_4.onResizing.call(_2,_8,_9);
},onLoadSuccess:function(_b){
_7();
_4.onLoadSuccess.call(_2,_b);
}}));
_7();
_23(_2);
function _7(){
$(_2).next().find(".tagbox-label").remove();
var _c=$(_2).tagbox("textbox");
var ss=[];
$.map($(_2).tagbox("getValues"),function(_d,_e){
var _f=_4.finder.getRow(_2,_d);
var _10=_4.tagFormatter.call(_2,_d,_f);
var cs={};
var css=_4.tagStyler.call(_2,_d,_f)||"";
if(typeof css=="string"){
cs={s:css};
}else{
cs={c:css["class"]||"",s:css["style"]||""};
}
var _11=$("<span class=\"tagbox-label\"></span>").insertBefore(_c).html(_10);
_11.attr("tagbox-index",_e);
_11.attr("style",cs.s).addClass(cs.c);
$("<a href=\"javascript:;\" class=\"tagbox-remove\"></a>").appendTo(_11);
});
_12(_2);
$(_2).combobox("setText","");
};
};
function _12(_13,_14){
var _15=$(_13).next();
var _16=_14?$(_14):_15.find(".tagbox-label");
if(_16.length){
var _17=$(_13).tagbox("textbox");
var _18=$(_16[0]);
var _19=_18.outerHeight(true)-_18.outerHeight();
var _1a=_17.outerHeight()-_19*2;
_16.css({height:_1a+"px",lineHeight:_1a+"px"});
var _1b=_15.find(".textbox-addon").css("height","100%");
_1b.find(".textbox-icon").css("height","100%");
_15.find(".textbox-button").linkbutton("resize",{height:"100%"});
}
};
function _1c(_1d){
var _1e=$(_1d).next();
_1e.unbind(".tagbox").bind("click.tagbox",function(e){
var _1f=$(_1d).tagbox("options");
if(_1f.disabled||_1f.readonly){
return;
}
if($(e.target).hasClass("tagbox-remove")){
var _20=parseInt($(e.target).parent().attr("tagbox-index"));
var _21=$(_1d).tagbox("getValues");
if(_1f.onBeforeRemoveTag.call(_1d,_21[_20])==false){
return;
}
_1f.onRemoveTag.call(_1d,_21[_20]);
_21.splice(_20,1);
$(_1d).tagbox("setValues",_21);
}else{
var _22=$(e.target).closest(".tagbox-label");
if(_22.length){
var _20=parseInt(_22.attr("tagbox-index"));
var _21=$(_1d).tagbox("getValues");
_1f.onClickTag.call(_1d,_21[_20]);
}
}
$(this).find(".textbox-text").focus();
}).bind("keyup.tagbox",function(e){
_23(_1d);
}).bind("mouseover.tagbox",function(e){
if($(e.target).closest(".textbox-button,.textbox-addon,.tagbox-label").length){
$(this).triggerHandler("mouseleave");
}else{
$(this).find(".textbox-text").triggerHandler("mouseenter");
}
}).bind("mouseleave.tagbox",function(e){
$(this).find(".textbox-text").triggerHandler("mouseleave");
});
};
function _23(_24){
var _25=$(_24).tagbox("options");
var _26=$(_24).tagbox("textbox");
var _27=$(_24).next();
var tmp=$("<span></span>").appendTo("body");
tmp.attr("style",_26.attr("style"));
tmp.css({position:"absolute",top:-9999,left:-9999,width:"auto",fontFamily:_26.css("fontFamily"),fontSize:_26.css("fontSize"),fontWeight:_26.css("fontWeight"),whiteSpace:"nowrap"});
var _28=_29(_26.val());
var _2a=_29(_25.prompt||"");
tmp.remove();
var _2b=Math.min(Math.max(_28,_2a)+20,_27.width());
_26._outerWidth(_2b);
_27.find(".textbox-button").linkbutton("resize",{height:"100%"});
function _29(val){
var s=val.replace(/&/g,"&amp;").replace(/\s/g," ").replace(/</g,"&lt;").replace(/>/g,"&gt;");
tmp.html(s);
return tmp.outerWidth();
};
};
function _2c(_2d){
var t=$(_2d);
var _2e=t.tagbox("options");
if(_2e.limitToList){
var _2f=t.tagbox("panel");
var _30=_2f.children("div.combobox-item-hover");
if(_30.length){
_30.removeClass("combobox-item-hover");
var row=_2e.finder.getRow(_2d,_30);
var _31=row[_2e.valueField];
$(_2d).tagbox(_30.hasClass("combobox-item-selected")?"unselect":"select",_31);
}
$(_2d).tagbox("hidePanel");
}else{
var v=$.trim($(_2d).tagbox("getText"));
if(v!==""){
var _32=$(_2d).tagbox("getValues");
_32.push(v);
$(_2d).tagbox("setValues",_32);
}
}
};
function _33(_34,_35){
$(_34).combobox("setText","");
_23(_34);
$(_34).combobox("setValues",_35);
$(_34).combobox("setText","");
$(_34).tagbox("validate");
};
$.fn.tagbox=function(_36,_37){
if(typeof _36=="string"){
var _38=$.fn.tagbox.methods[_36];
if(_38){
return _38(this,_37);
}else{
return this.combobox(_36,_37);
}
}
_36=_36||{};
return this.each(function(){
var _39=$.data(this,"tagbox");
if(_39){
$.extend(_39.options,_36);
}else{
$.data(this,"tagbox",{options:$.extend({},$.fn.tagbox.defaults,$.fn.tagbox.parseOptions(this),_36)});
}
_1(this);
_1c(this);
});
};
$.fn.tagbox.methods={options:function(jq){
var _3a=jq.combobox("options");
return $.extend($.data(jq[0],"tagbox").options,{width:_3a.width,height:_3a.height,originalValue:_3a.originalValue,disabled:_3a.disabled,readonly:_3a.readonly});
},setValues:function(jq,_3b){
return jq.each(function(){
_33(this,_3b);
});
}};
$.fn.tagbox.parseOptions=function(_3c){
return $.extend({},$.fn.combobox.parseOptions(_3c),$.parser.parseOptions(_3c,[]));
};
$.fn.tagbox.defaults=$.extend({},$.fn.combobox.defaults,{hasDownArrow:false,multiple:true,reversed:true,selectOnNavigation:false,tipOptions:$.extend({},$.fn.textbox.defaults.tipOptions,{showDelay:200}),val:function(_3d){
var vv=$(_3d).parent().prev().tagbox("getValues");
if($(_3d).is(":focus")){
vv.push($(_3d).val());
}
return vv.join(",");
},inputEvents:$.extend({},$.fn.combo.defaults.inputEvents,{blur:function(e){
var _3e=e.data.target;
var _3f=$(_3e).tagbox("options");
if(_3f.limitToList){
_2c(_3e);
}
}}),keyHandler:$.extend({},$.fn.combobox.defaults.keyHandler,{enter:function(e){
_2c(this);
},query:function(q,e){
var _40=$(this).tagbox("options");
if(_40.limitToList){
$.fn.combobox.defaults.keyHandler.query.call(this,q,e);
}else{
$(this).combobox("hidePanel");
}
}}),tagFormatter:function(_41,row){
var _42=$(this).tagbox("options");
return row?row[_42.textField]:_41;
},tagStyler:function(_43,row){
return "";
},onClickTag:function(_44){
},onBeforeRemoveTag:function(_45){
},onRemoveTag:function(_46){
}});
})(jQuery);

