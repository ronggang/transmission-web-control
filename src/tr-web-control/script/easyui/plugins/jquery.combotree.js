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
var _3=$.data(_2,"combotree");
var _4=_3.options;
var _5=_3.tree;
$(_2).addClass("combotree-f");
$(_2).combo($.extend({},_4,{onShowPanel:function(){
if(_4.editable){
_5.tree("doFilter","");
}
_4.onShowPanel.call(this);
}}));
var _6=$(_2).combo("panel");
if(!_5){
_5=$("<ul></ul>").appendTo(_6);
_3.tree=_5;
}
_5.tree($.extend({},_4,{checkbox:_4.multiple,onLoadSuccess:function(_7,_8){
var _9=$(_2).combotree("getValues");
if(_4.multiple){
$.map(_5.tree("getChecked"),function(_a){
$.easyui.addArrayItem(_9,_a.id);
});
}
_15(_2,_9,_3.remainText);
_4.onLoadSuccess.call(this,_7,_8);
},onClick:function(_b){
if(_4.multiple){
$(this).tree(_b.checked?"uncheck":"check",_b.target);
}else{
$(_2).combo("hidePanel");
}
_3.remainText=false;
_e(_2);
_4.onClick.call(this,_b);
},onCheck:function(_c,_d){
_3.remainText=false;
_e(_2);
_4.onCheck.call(this,_c,_d);
}}));
};
function _e(_f){
var _10=$.data(_f,"combotree");
var _11=_10.options;
var _12=_10.tree;
var vv=[];
if(_11.multiple){
vv=$.map(_12.tree("getChecked"),function(_13){
return _13.id;
});
}else{
var _14=_12.tree("getSelected");
if(_14){
vv.push(_14.id);
}
}
vv=vv.concat(_11.unselectedValues);
_15(_f,vv,_10.remainText);
};
function _15(_16,_17,_18){
var _19=$.data(_16,"combotree");
var _1a=_19.options;
var _1b=_19.tree;
var _1c=_1b.tree("options");
var _1d=_1c.onBeforeCheck;
var _1e=_1c.onCheck;
var _1f=_1c.onSelect;
_1c.onBeforeCheck=_1c.onCheck=_1c.onSelect=function(){
};
if(!$.isArray(_17)){
_17=_17.split(_1a.separator);
}
if(!_1a.multiple){
_17=_17.length?[_17[0]]:[""];
}
var vv=$.map(_17,function(_20){
return String(_20);
});
_1b.find("div.tree-node-selected").removeClass("tree-node-selected");
$.map(_1b.tree("getChecked"),function(_21){
if($.inArray(String(_21.id),vv)==-1){
_1b.tree("uncheck",_21.target);
}
});
var ss=[];
_1a.unselectedValues=[];
$.map(vv,function(v){
var _22=_1b.tree("find",v);
if(_22){
_1b.tree("check",_22.target).tree("select",_22.target);
ss.push(_23(_22));
}else{
ss.push(_24(v,_1a.mappingRows)||v);
_1a.unselectedValues.push(v);
}
});
if(_1a.multiple){
$.map(_1b.tree("getChecked"),function(_25){
var id=String(_25.id);
if($.inArray(id,vv)==-1){
vv.push(id);
ss.push(_23(_25));
}
});
}
_1c.onBeforeCheck=_1d;
_1c.onCheck=_1e;
_1c.onSelect=_1f;
if(!_18){
var s=ss.join(_1a.separator);
if($(_16).combo("getText")!=s){
$(_16).combo("setText",s);
}
}
$(_16).combo("setValues",vv);
function _24(_26,a){
var _27=$.easyui.getArrayItem(a,"id",_26);
return _27?_23(_27):undefined;
};
function _23(_28){
return _28[_1a.textField||""]||_28.text;
};
};
function _29(_2a,q){
var _2b=$.data(_2a,"combotree");
var _2c=_2b.options;
var _2d=_2b.tree;
_2b.remainText=true;
_2d.tree("doFilter",_2c.multiple?q.split(_2c.separator):q);
};
function _2e(_2f){
var _30=$.data(_2f,"combotree");
_30.remainText=false;
$(_2f).combotree("setValues",$(_2f).combotree("getValues"));
$(_2f).combotree("hidePanel");
};
$.fn.combotree=function(_31,_32){
if(typeof _31=="string"){
var _33=$.fn.combotree.methods[_31];
if(_33){
return _33(this,_32);
}else{
return this.combo(_31,_32);
}
}
_31=_31||{};
return this.each(function(){
var _34=$.data(this,"combotree");
if(_34){
$.extend(_34.options,_31);
}else{
$.data(this,"combotree",{options:$.extend({},$.fn.combotree.defaults,$.fn.combotree.parseOptions(this),_31)});
}
_1(this);
});
};
$.fn.combotree.methods={options:function(jq){
var _35=jq.combo("options");
return $.extend($.data(jq[0],"combotree").options,{width:_35.width,height:_35.height,originalValue:_35.originalValue,disabled:_35.disabled,readonly:_35.readonly});
},clone:function(jq,_36){
var t=jq.combo("clone",_36);
t.data("combotree",{options:$.extend(true,{},jq.combotree("options")),tree:jq.combotree("tree")});
return t;
},tree:function(jq){
return $.data(jq[0],"combotree").tree;
},loadData:function(jq,_37){
return jq.each(function(){
var _38=$.data(this,"combotree").options;
_38.data=_37;
var _39=$.data(this,"combotree").tree;
_39.tree("loadData",_37);
});
},reload:function(jq,url){
return jq.each(function(){
var _3a=$.data(this,"combotree").options;
var _3b=$.data(this,"combotree").tree;
if(url){
_3a.url=url;
}
_3b.tree({url:_3a.url});
});
},setValues:function(jq,_3c){
return jq.each(function(){
var _3d=$(this).combotree("options");
if($.isArray(_3c)){
_3c=$.map(_3c,function(_3e){
if(_3e&&typeof _3e=="object"){
$.easyui.addArrayItem(_3d.mappingRows,"id",_3e);
return _3e.id;
}else{
return _3e;
}
});
}
_15(this,_3c);
});
},setValue:function(jq,_3f){
return jq.each(function(){
$(this).combotree("setValues",$.isArray(_3f)?_3f:[_3f]);
});
},clear:function(jq){
return jq.each(function(){
$(this).combotree("setValues",[]);
});
},reset:function(jq){
return jq.each(function(){
var _40=$(this).combotree("options");
if(_40.multiple){
$(this).combotree("setValues",_40.originalValue);
}else{
$(this).combotree("setValue",_40.originalValue);
}
});
}};
$.fn.combotree.parseOptions=function(_41){
return $.extend({},$.fn.combo.parseOptions(_41),$.fn.tree.parseOptions(_41));
};
$.fn.combotree.defaults=$.extend({},$.fn.combo.defaults,$.fn.tree.defaults,{editable:false,textField:null,unselectedValues:[],mappingRows:[],keyHandler:{up:function(e){
},down:function(e){
},left:function(e){
},right:function(e){
},enter:function(e){
_2e(this);
},query:function(q,e){
_29(this,q);
}}});
})(jQuery);

