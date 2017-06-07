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
var _3=$.data(_2,"combogrid");
var _4=_3.options;
var _5=_3.grid;
$(_2).addClass("combogrid-f").combo($.extend({},_4,{onShowPanel:function(){
_20(this,$(this).combogrid("getValues"),true);
var p=$(this).combogrid("panel");
var _6=p.outerHeight()-p.height();
var _7=p._size("minHeight");
var _8=p._size("maxHeight");
var dg=$(this).combogrid("grid");
dg.datagrid("resize",{width:"100%",height:(isNaN(parseInt(_4.panelHeight))?"auto":"100%"),minHeight:(_7?_7-_6:""),maxHeight:(_8?_8-_6:"")});
var _9=dg.datagrid("getSelected");
if(_9){
dg.datagrid("scrollTo",dg.datagrid("getRowIndex",_9));
}
_4.onShowPanel.call(this);
}}));
var _a=$(_2).combo("panel");
if(!_5){
_5=$("<table></table>").appendTo(_a);
_3.grid=_5;
}
_5.datagrid($.extend({},_4,{border:false,singleSelect:(!_4.multiple),onLoadSuccess:_b,onClickRow:_c,onSelect:_d("onSelect"),onUnselect:_d("onUnselect"),onSelectAll:_d("onSelectAll"),onUnselectAll:_d("onUnselectAll")}));
function _e(dg){
return $(dg).closest(".combo-panel").panel("options").comboTarget||_2;
};
function _b(_f){
var _10=_e(this);
var _11=$(_10).data("combogrid");
var _12=_11.options;
var _13=$(_10).combo("getValues");
_20(_10,_13,_11.remainText);
_12.onLoadSuccess.call(this,_f);
};
function _c(_14,row){
var _15=_e(this);
var _16=$(_15).data("combogrid");
var _17=_16.options;
_16.remainText=false;
_18.call(this);
if(!_17.multiple){
$(_15).combo("hidePanel");
}
_17.onClickRow.call(this,_14,row);
};
function _d(_19){
return function(_1a,row){
var _1b=_e(this);
var _1c=$(_1b).combogrid("options");
if(_19=="onUnselectAll"){
if(_1c.multiple){
_18.call(this);
}
}else{
_18.call(this);
}
_1c[_19].call(this,_1a,row);
};
};
function _18(){
var dg=$(this);
var _1d=_e(dg);
var _1e=$(_1d).data("combogrid");
var _1f=_1e.options;
var vv=$.map(dg.datagrid("getSelections"),function(row){
return row[_1f.idField];
});
vv=vv.concat(_1f.unselectedValues);
_20(_1d,vv,_1e.remainText);
};
};
function nav(_21,dir){
var _22=$.data(_21,"combogrid");
var _23=_22.options;
var _24=_22.grid;
var _25=_24.datagrid("getRows").length;
if(!_25){
return;
}
var tr=_23.finder.getTr(_24[0],null,"highlight");
if(!tr.length){
tr=_23.finder.getTr(_24[0],null,"selected");
}
var _26;
if(!tr.length){
_26=(dir=="next"?0:_25-1);
}else{
var _26=parseInt(tr.attr("datagrid-row-index"));
_26+=(dir=="next"?1:-1);
if(_26<0){
_26=_25-1;
}
if(_26>=_25){
_26=0;
}
}
_24.datagrid("highlightRow",_26);
if(_23.selectOnNavigation){
_22.remainText=false;
_24.datagrid("selectRow",_26);
}
};
function _20(_27,_28,_29){
var _2a=$.data(_27,"combogrid");
var _2b=_2a.options;
var _2c=_2a.grid;
var _2d=$(_27).combo("getValues");
var _2e=$(_27).combo("options");
var _2f=_2e.onChange;
_2e.onChange=function(){
};
var _30=_2c.datagrid("options");
var _31=_30.onSelect;
var _32=_30.onUnselectAll;
_30.onSelect=_30.onUnselectAll=function(){
};
if(!$.isArray(_28)){
_28=_28.split(_2b.separator);
}
if(!_2b.multiple){
_28=_28.length?[_28[0]]:[""];
}
var vv=$.map(_28,function(_33){
return String(_33);
});
vv=$.grep(vv,function(v,_34){
return _34===$.inArray(v,vv);
});
var _35=$.grep(_2c.datagrid("getSelections"),function(row,_36){
return $.inArray(String(row[_2b.idField]),vv)>=0;
});
_2c.datagrid("clearSelections");
_2c.data("datagrid").selectedRows=_35;
var ss=[];
_2b.unselectedValues=[];
$.map(vv,function(v){
var _37=_2c.datagrid("getRowIndex",v);
if(_37>=0){
_2c.datagrid("selectRow",_37);
}else{
_2b.unselectedValues.push(v);
}
ss.push(_38(v,_2c.datagrid("getRows"))||_38(v,_35)||_38(v,_2b.mappingRows)||v);
});
$(_27).combo("setValues",_2d);
_2e.onChange=_2f;
_30.onSelect=_31;
_30.onUnselectAll=_32;
if(!_29){
var s=ss.join(_2b.separator);
if($(_27).combo("getText")!=s){
$(_27).combo("setText",s);
}
}
$(_27).combo("setValues",_28);
function _38(_39,a){
var _3a=$.easyui.getArrayItem(a,_2b.idField,_39);
return _3a?_3a[_2b.textField]:undefined;
};
};
function _3b(_3c,q){
var _3d=$.data(_3c,"combogrid");
var _3e=_3d.options;
var _3f=_3d.grid;
_3d.remainText=true;
var qq=_3e.multiple?q.split(_3e.separator):[q];
qq=$.grep(qq,function(q){
return $.trim(q)!="";
});
if(_3e.mode=="remote"){
_40(qq);
_3f.datagrid("load",$.extend({},_3e.queryParams,{q:q}));
}else{
_3f.datagrid("highlightRow",-1);
var _41=_3f.datagrid("getRows");
var vv=[];
$.map(qq,function(q){
q=$.trim(q);
var _42=q;
_43(_3e.mappingRows,q);
_43(_3f.datagrid("getSelections"),q);
var _44=_43(_41,q);
if(_44>=0){
if(_3e.reversed){
_3f.datagrid("highlightRow",_44);
}
}else{
$.map(_41,function(row,i){
if(_3e.filter.call(_3c,q,row)){
_3f.datagrid("highlightRow",i);
}
});
}
});
_40(vv);
}
function _43(_45,q){
for(var i=0;i<_45.length;i++){
var row=_45[i];
if((row[_3e.textField]||"").toLowerCase()==q.toLowerCase()){
vv.push(row[_3e.idField]);
return i;
}
}
return -1;
};
function _40(vv){
if(!_3e.reversed){
_20(_3c,vv,true);
}
};
};
function _46(_47){
var _48=$.data(_47,"combogrid");
var _49=_48.options;
var _4a=_48.grid;
var tr=_49.finder.getTr(_4a[0],null,"highlight");
_48.remainText=false;
if(tr.length){
var _4b=parseInt(tr.attr("datagrid-row-index"));
if(_49.multiple){
if(tr.hasClass("datagrid-row-selected")){
_4a.datagrid("unselectRow",_4b);
}else{
_4a.datagrid("selectRow",_4b);
}
}else{
_4a.datagrid("selectRow",_4b);
}
}
var vv=[];
$.map(_4a.datagrid("getSelections"),function(row){
vv.push(row[_49.idField]);
});
$.map(_49.unselectedValues,function(v){
if($.easyui.indexOfArray(_49.mappingRows,_49.idField,v)>=0){
$.easyui.addArrayItem(vv,v);
}
});
$(_47).combogrid("setValues",vv);
if(!_49.multiple){
$(_47).combogrid("hidePanel");
}
};
$.fn.combogrid=function(_4c,_4d){
if(typeof _4c=="string"){
var _4e=$.fn.combogrid.methods[_4c];
if(_4e){
return _4e(this,_4d);
}else{
return this.combo(_4c,_4d);
}
}
_4c=_4c||{};
return this.each(function(){
var _4f=$.data(this,"combogrid");
if(_4f){
$.extend(_4f.options,_4c);
}else{
_4f=$.data(this,"combogrid",{options:$.extend({},$.fn.combogrid.defaults,$.fn.combogrid.parseOptions(this),_4c)});
}
_1(this);
});
};
$.fn.combogrid.methods={options:function(jq){
var _50=jq.combo("options");
return $.extend($.data(jq[0],"combogrid").options,{width:_50.width,height:_50.height,originalValue:_50.originalValue,disabled:_50.disabled,readonly:_50.readonly});
},cloneFrom:function(jq,_51){
return jq.each(function(){
$(this).combo("cloneFrom",_51);
$.data(this,"combogrid",{options:$.extend(true,{cloned:true},$(_51).combogrid("options")),combo:$(this).next(),panel:$(_51).combo("panel"),grid:$(_51).combogrid("grid")});
});
},grid:function(jq){
return $.data(jq[0],"combogrid").grid;
},setValues:function(jq,_52){
return jq.each(function(){
var _53=$(this).combogrid("options");
if($.isArray(_52)){
_52=$.map(_52,function(_54){
if(_54&&typeof _54=="object"){
$.easyui.addArrayItem(_53.mappingRows,_53.idField,_54);
return _54[_53.idField];
}else{
return _54;
}
});
}
_20(this,_52);
});
},setValue:function(jq,_55){
return jq.each(function(){
$(this).combogrid("setValues",$.isArray(_55)?_55:[_55]);
});
},clear:function(jq){
return jq.each(function(){
$(this).combogrid("setValues",[]);
});
},reset:function(jq){
return jq.each(function(){
var _56=$(this).combogrid("options");
if(_56.multiple){
$(this).combogrid("setValues",_56.originalValue);
}else{
$(this).combogrid("setValue",_56.originalValue);
}
});
}};
$.fn.combogrid.parseOptions=function(_57){
var t=$(_57);
return $.extend({},$.fn.combo.parseOptions(_57),$.fn.datagrid.parseOptions(_57),$.parser.parseOptions(_57,["idField","textField","mode"]));
};
$.fn.combogrid.defaults=$.extend({},$.fn.combo.defaults,$.fn.datagrid.defaults,{loadMsg:null,idField:null,textField:null,unselectedValues:[],mappingRows:[],mode:"local",keyHandler:{up:function(e){
nav(this,"prev");
e.preventDefault();
},down:function(e){
nav(this,"next");
e.preventDefault();
},left:function(e){
},right:function(e){
},enter:function(e){
_46(this);
},query:function(q,e){
_3b(this,q);
}},inputEvents:$.extend({},$.fn.combo.defaults.inputEvents,{blur:function(e){
var _58=e.data.target;
var _59=$(_58).combogrid("options");
if(_59.reversed){
$(_58).combogrid("setValues",$(_58).combogrid("getValues"));
}
}}),filter:function(q,row){
var _5a=$(this).combogrid("options");
return (row[_5a.textField]||"").toLowerCase().indexOf(q.toLowerCase())>=0;
}});
})(jQuery);

