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
var _3=$.data(_2,"combotreegrid");
var _4=_3.options;
$(_2).addClass("combotreegrid-f").combo($.extend({},_4,{onShowPanel:function(){
var p=$(this).combotreegrid("panel");
var _5=p.outerHeight()-p.height();
var _6=p._size("minHeight");
var _7=p._size("maxHeight");
var dg=$(this).combotreegrid("grid");
dg.treegrid("resize",{width:"100%",height:(isNaN(parseInt(_4.panelHeight))?"auto":"100%"),minHeight:(_6?_6-_5:""),maxHeight:(_7?_7-_5:"")});
var _8=dg.treegrid("getSelected");
if(_8){
dg.treegrid("scrollTo",_8[_4.idField]);
}
_4.onShowPanel.call(this);
}}));
if(!_3.grid){
var _9=$(_2).combo("panel");
_3.grid=$("<table></table>").appendTo(_9);
}
_3.grid.treegrid($.extend({},_4,{border:false,checkbox:_4.multiple,onLoadSuccess:function(_a,_b){
var _c=$(_2).combotreegrid("getValues");
if(_4.multiple){
$.map($(this).treegrid("getCheckedNodes"),function(_d){
$.easyui.addArrayItem(_c,_d[_4.idField]);
});
}
_16(_2,_c);
_4.onLoadSuccess.call(this,_a,_b);
_3.remainText=false;
},onClickRow:function(_e){
if(_4.multiple){
$(this).treegrid(_e.checked?"uncheckNode":"checkNode",_e[_4.idField]);
$(this).treegrid("unselect",_e[_4.idField]);
}else{
$(_2).combo("hidePanel");
}
_11(_2);
_4.onClickRow.call(this,_e);
},onCheckNode:function(_f,_10){
_11(_2);
_4.onCheckNode.call(this,_f,_10);
}}));
};
function _11(_12){
var _13=$.data(_12,"combotreegrid");
var _14=_13.options;
var _15=_13.grid;
var vv=[];
if(_14.multiple){
vv=$.map(_15.treegrid("getCheckedNodes"),function(row){
return row[_14.idField];
});
}else{
var row=_15.treegrid("getSelected");
if(row){
vv.push(row[_14.idField]);
}
}
vv=vv.concat(_14.unselectedValues);
_16(_12,vv);
};
function _16(_17,_18){
var _19=$.data(_17,"combotreegrid");
var _1a=_19.options;
var _1b=_19.grid;
if(!$.isArray(_18)){
_18=_18.split(_1a.separator);
}
if(!_1a.multiple){
_18=_18.length?[_18[0]]:[""];
}
var vv=$.map(_18,function(_1c){
return String(_1c);
});
vv=$.grep(vv,function(v,_1d){
return _1d===$.inArray(v,vv);
});
var _1e=_1b.treegrid("getSelected");
if(_1e){
_1b.treegrid("unselect",_1e[_1a.idField]);
}
$.map(_1b.treegrid("getCheckedNodes"),function(row){
if($.inArray(String(row[_1a.idField]),vv)==-1){
_1b.treegrid("uncheckNode",row[_1a.idField]);
}
});
var ss=[];
_1a.unselectedValues=[];
$.map(vv,function(v){
var row=_1b.treegrid("find",v);
if(row){
if(_1a.multiple){
_1b.treegrid("checkNode",v);
}else{
_1b.treegrid("select",v);
}
ss.push(_1f(row));
}else{
ss.push(_20(v,_1a.mappingRows)||v);
_1a.unselectedValues.push(v);
}
});
if(_1a.multiple){
$.map(_1b.treegrid("getCheckedNodes"),function(row){
var id=String(row[_1a.idField]);
if($.inArray(id,vv)==-1){
vv.push(id);
ss.push(_1f(row));
}
});
}
if(!_19.remainText){
var s=ss.join(_1a.separator);
if($(_17).combo("getText")!=s){
$(_17).combo("setText",s);
}
}
$(_17).combo("setValues",vv);
function _20(_21,a){
var _22=$.easyui.getArrayItem(a,_1a.idField,_21);
return _22?_1f(_22):undefined;
};
function _1f(row){
return row[_1a.textField||""]||row[_1a.treeField];
};
};
function _23(_24,q){
var _25=$.data(_24,"combotreegrid");
var _26=_25.options;
var _27=_25.grid;
_25.remainText=true;
_27.treegrid("clearSelections").treegrid("clearChecked").treegrid("highlightRow",-1);
if(_26.mode=="remote"){
$(_24).combotreegrid("clear");
_27.treegrid("load",$.extend({},_26.queryParams,{q:q}));
}else{
if(q){
var _28=_27.treegrid("getData");
var vv=[];
var qq=_26.multiple?q.split(_26.separator):[q];
$.map(qq,function(q){
q=$.trim(q);
if(q){
var v=undefined;
$.easyui.forEach(_28,true,function(row){
if(q.toLowerCase()==String(row[_26.treeField]).toLowerCase()){
v=row[_26.idField];
return false;
}else{
if(_26.filter.call(_24,q,row)){
_27.treegrid("expandTo",row[_26.idField]);
_27.treegrid("highlightRow",row[_26.idField]);
return false;
}
}
});
if(v==undefined){
$.easyui.forEach(_26.mappingRows,false,function(row){
if(q.toLowerCase()==String(row[_26.treeField])){
v=row[_26.idField];
return false;
}
});
}
if(v!=undefined){
vv.push(v);
}
}
});
_16(_24,vv);
_25.remainText=false;
}
}
};
function _29(_2a){
_11(_2a);
};
$.fn.combotreegrid=function(_2b,_2c){
if(typeof _2b=="string"){
var _2d=$.fn.combotreegrid.methods[_2b];
if(_2d){
return _2d(this,_2c);
}else{
return this.combo(_2b,_2c);
}
}
_2b=_2b||{};
return this.each(function(){
var _2e=$.data(this,"combotreegrid");
if(_2e){
$.extend(_2e.options,_2b);
}else{
_2e=$.data(this,"combotreegrid",{options:$.extend({},$.fn.combotreegrid.defaults,$.fn.combotreegrid.parseOptions(this),_2b)});
}
_1(this);
});
};
$.fn.combotreegrid.methods={options:function(jq){
var _2f=jq.combo("options");
return $.extend($.data(jq[0],"combotreegrid").options,{width:_2f.width,height:_2f.height,originalValue:_2f.originalValue,disabled:_2f.disabled,readonly:_2f.readonly});
},grid:function(jq){
return $.data(jq[0],"combotreegrid").grid;
},setValues:function(jq,_30){
return jq.each(function(){
var _31=$(this).combotreegrid("options");
if($.isArray(_30)){
_30=$.map(_30,function(_32){
if(_32&&typeof _32=="object"){
$.easyui.addArrayItem(_31.mappingRows,_31.idField,_32);
return _32[_31.idField];
}else{
return _32;
}
});
}
_16(this,_30);
});
},setValue:function(jq,_33){
return jq.each(function(){
$(this).combotreegrid("setValues",$.isArray(_33)?_33:[_33]);
});
},clear:function(jq){
return jq.each(function(){
$(this).combotreegrid("setValues",[]);
});
},reset:function(jq){
return jq.each(function(){
var _34=$(this).combotreegrid("options");
if(_34.multiple){
$(this).combotreegrid("setValues",_34.originalValue);
}else{
$(this).combotreegrid("setValue",_34.originalValue);
}
});
}};
$.fn.combotreegrid.parseOptions=function(_35){
var t=$(_35);
return $.extend({},$.fn.combo.parseOptions(_35),$.fn.treegrid.parseOptions(_35),$.parser.parseOptions(_35,["mode",{limitToGrid:"boolean"}]));
};
$.fn.combotreegrid.defaults=$.extend({},$.fn.combo.defaults,$.fn.treegrid.defaults,{editable:false,singleSelect:true,limitToGrid:false,unselectedValues:[],mappingRows:[],mode:"local",textField:null,keyHandler:{up:function(e){
},down:function(e){
},left:function(e){
},right:function(e){
},enter:function(e){
_29(this);
},query:function(q,e){
_23(this,q);
}},inputEvents:$.extend({},$.fn.combo.defaults.inputEvents,{blur:function(e){
var _36=e.data.target;
var _37=$(_36).combotreegrid("options");
if(_37.limitToGrid){
_29(_36);
}
}}),filter:function(q,row){
var _38=$(this).combotreegrid("options");
return (row[_38.treeField]||"").toLowerCase().indexOf(q.toLowerCase())>=0;
}});
})(jQuery);

