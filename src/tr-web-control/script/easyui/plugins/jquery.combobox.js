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
var _4=$.data(_2,"combobox");
return $.easyui.indexOfArray(_4.data,_4.options.valueField,_3);
};
function _5(_6,_7){
var _8=$.data(_6,"combobox").options;
var _9=$(_6).combo("panel");
var _a=_8.finder.getEl(_6,_7);
if(_a.length){
if(_a.position().top<=0){
var h=_9.scrollTop()+_a.position().top;
_9.scrollTop(h);
}else{
if(_a.position().top+_a.outerHeight()>_9.height()){
var h=_9.scrollTop()+_a.position().top+_a.outerHeight()-_9.height();
_9.scrollTop(h);
}
}
}
_9.triggerHandler("scroll");
};
function _b(_c,_d){
var _e=$.data(_c,"combobox").options;
var _f=$(_c).combobox("panel");
var _10=_f.children("div.combobox-item-hover");
if(!_10.length){
_10=_f.children("div.combobox-item-selected");
}
_10.removeClass("combobox-item-hover");
var _11="div.combobox-item:visible:not(.combobox-item-disabled):first";
var _12="div.combobox-item:visible:not(.combobox-item-disabled):last";
if(!_10.length){
_10=_f.children(_d=="next"?_11:_12);
}else{
if(_d=="next"){
_10=_10.nextAll(_11);
if(!_10.length){
_10=_f.children(_11);
}
}else{
_10=_10.prevAll(_11);
if(!_10.length){
_10=_f.children(_12);
}
}
}
if(_10.length){
_10.addClass("combobox-item-hover");
var row=_e.finder.getRow(_c,_10);
if(row){
$(_c).combobox("scrollTo",row[_e.valueField]);
if(_e.selectOnNavigation){
_13(_c,row[_e.valueField]);
}
}
}
};
function _13(_14,_15,_16){
var _17=$.data(_14,"combobox").options;
var _18=$(_14).combo("getValues");
if($.inArray(_15+"",_18)==-1){
if(_17.multiple){
_18.push(_15);
}else{
_18=[_15];
}
_19(_14,_18,_16);
}
};
function _1a(_1b,_1c){
var _1d=$.data(_1b,"combobox").options;
var _1e=$(_1b).combo("getValues");
var _1f=$.inArray(_1c+"",_1e);
if(_1f>=0){
_1e.splice(_1f,1);
_19(_1b,_1e);
}
};
function _19(_20,_21,_22){
var _23=$.data(_20,"combobox").options;
var _24=$(_20).combo("panel");
if(!$.isArray(_21)){
_21=_21.split(_23.separator);
}
if(!_23.multiple){
_21=_21.length?[_21[0]]:[""];
}
var _25=$(_20).combo("getValues");
if(_24.is(":visible")){
_24.find(".combobox-item-selected").each(function(){
var row=_23.finder.getRow(_20,$(this));
if(row){
if($.easyui.indexOfArray(_25,row[_23.valueField])==-1){
$(this).removeClass("combobox-item-selected");
}
}
});
}
$.map(_25,function(v){
if($.easyui.indexOfArray(_21,v)==-1){
var el=_23.finder.getEl(_20,v);
if(el.hasClass("combobox-item-selected")){
el.removeClass("combobox-item-selected");
_23.onUnselect.call(_20,_23.finder.getRow(_20,v));
}
}
});
var _26=null;
var vv=[],ss=[];
for(var i=0;i<_21.length;i++){
var v=_21[i];
var s=v;
var row=_23.finder.getRow(_20,v);
if(row){
s=row[_23.textField];
_26=row;
var el=_23.finder.getEl(_20,v);
if(!el.hasClass("combobox-item-selected")){
el.addClass("combobox-item-selected");
_23.onSelect.call(_20,row);
}
}
vv.push(v);
ss.push(s);
}
if(!_22){
$(_20).combo("setText",ss.join(_23.separator));
}
if(_23.showItemIcon){
var tb=$(_20).combobox("textbox");
tb.removeClass("textbox-bgicon "+_23.textboxIconCls);
if(_26&&_26.iconCls){
tb.addClass("textbox-bgicon "+_26.iconCls);
_23.textboxIconCls=_26.iconCls;
}
}
$(_20).combo("setValues",vv);
_24.triggerHandler("scroll");
};
function _27(_28,_29,_2a){
var _2b=$.data(_28,"combobox");
var _2c=_2b.options;
_2b.data=_2c.loadFilter.call(_28,_29);
_2c.view.render.call(_2c.view,_28,$(_28).combo("panel"),_2b.data);
var vv=$(_28).combobox("getValues");
$.easyui.forEach(_2b.data,false,function(row){
if(row["selected"]){
$.easyui.addArrayItem(vv,row[_2c.valueField]+"");
}
});
if(_2c.multiple){
_19(_28,vv,_2a);
}else{
_19(_28,vv.length?[vv[vv.length-1]]:[],_2a);
}
_2c.onLoadSuccess.call(_28,_29);
};
function _2d(_2e,url,_2f,_30){
var _31=$.data(_2e,"combobox").options;
if(url){
_31.url=url;
}
_2f=$.extend({},_31.queryParams,_2f||{});
if(_31.onBeforeLoad.call(_2e,_2f)==false){
return;
}
_31.loader.call(_2e,_2f,function(_32){
_27(_2e,_32,_30);
},function(){
_31.onLoadError.apply(this,arguments);
});
};
function _33(_34,q){
var _35=$.data(_34,"combobox");
var _36=_35.options;
var _37=$();
var qq=_36.multiple?q.split(_36.separator):[q];
if(_36.mode=="remote"){
_38(qq);
_2d(_34,null,{q:q},true);
}else{
var _39=$(_34).combo("panel");
_39.find(".combobox-item-hover").removeClass("combobox-item-hover");
_39.find(".combobox-item,.combobox-group").hide();
var _3a=_35.data;
var vv=[];
$.map(qq,function(q){
q=$.trim(q);
var _3b=q;
var _3c=undefined;
_37=$();
for(var i=0;i<_3a.length;i++){
var row=_3a[i];
if(_36.filter.call(_34,q,row)){
var v=row[_36.valueField];
var s=row[_36.textField];
var g=row[_36.groupField];
var _3d=_36.finder.getEl(_34,v).show();
if(s.toLowerCase()==q.toLowerCase()){
_3b=v;
if(_36.reversed){
_37=_3d;
}else{
_13(_34,v,true);
}
}
if(_36.groupField&&_3c!=g){
_36.finder.getGroupEl(_34,g).show();
_3c=g;
}
}
}
vv.push(_3b);
});
_38(vv);
}
function _38(vv){
if(_36.reversed){
_37.addClass("combobox-item-hover");
}else{
_19(_34,_36.multiple?(q?vv:[]):vv,true);
}
};
};
function _3e(_3f){
var t=$(_3f);
var _40=t.combobox("options");
var _41=t.combobox("panel");
var _42=_41.children("div.combobox-item-hover");
if(_42.length){
_42.removeClass("combobox-item-hover");
var row=_40.finder.getRow(_3f,_42);
var _43=row[_40.valueField];
if(_40.multiple){
if(_42.hasClass("combobox-item-selected")){
t.combobox("unselect",_43);
}else{
t.combobox("select",_43);
}
}else{
t.combobox("select",_43);
}
}
var vv=[];
$.map(t.combobox("getValues"),function(v){
if(_1(_3f,v)>=0){
vv.push(v);
}
});
t.combobox("setValues",vv);
if(!_40.multiple){
t.combobox("hidePanel");
}
};
function _44(_45){
var _46=$.data(_45,"combobox");
var _47=_46.options;
$(_45).addClass("combobox-f");
$(_45).combo($.extend({},_47,{onShowPanel:function(){
$(this).combo("panel").find("div.combobox-item:hidden,div.combobox-group:hidden").show();
_19(this,$(this).combobox("getValues"),true);
$(this).combobox("scrollTo",$(this).combobox("getValue"));
_47.onShowPanel.call(this);
}}));
var p=$(_45).combo("panel");
p.unbind(".combobox");
for(var _48 in _47.panelEvents){
p.bind(_48+".combobox",{target:_45},_47.panelEvents[_48]);
}
};
function _49(e){
$(this).children("div.combobox-item-hover").removeClass("combobox-item-hover");
var _4a=$(e.target).closest("div.combobox-item");
if(!_4a.hasClass("combobox-item-disabled")){
_4a.addClass("combobox-item-hover");
}
e.stopPropagation();
};
function _4b(e){
$(e.target).closest("div.combobox-item").removeClass("combobox-item-hover");
e.stopPropagation();
};
function _4c(e){
var _4d=$(this).panel("options").comboTarget;
if(!_4d){
return;
}
var _4e=$(_4d).combobox("options");
var _4f=$(e.target).closest("div.combobox-item");
if(!_4f.length||_4f.hasClass("combobox-item-disabled")){
return;
}
var row=_4e.finder.getRow(_4d,_4f);
if(!row){
return;
}
if(_4e.blurTimer){
clearTimeout(_4e.blurTimer);
_4e.blurTimer=null;
}
_4e.onClick.call(_4d,row);
var _50=row[_4e.valueField];
if(_4e.multiple){
if(_4f.hasClass("combobox-item-selected")){
_1a(_4d,_50);
}else{
_13(_4d,_50);
}
}else{
$(_4d).combobox("setValue",_50).combobox("hidePanel");
}
e.stopPropagation();
};
function _51(e){
var _52=$(this).panel("options").comboTarget;
if(!_52){
return;
}
var _53=$(_52).combobox("options");
if(_53.groupPosition=="sticky"){
var _54=$(this).children(".combobox-stick");
if(!_54.length){
_54=$("<div class=\"combobox-stick\"></div>").appendTo(this);
}
_54.hide();
var _55=$(_52).data("combobox");
$(this).children(".combobox-group:visible").each(function(){
var g=$(this);
var _56=_53.finder.getGroup(_52,g);
var _57=_55.data[_56.startIndex+_56.count-1];
var _58=_53.finder.getEl(_52,_57[_53.valueField]);
if(g.position().top<0&&_58.position().top>0){
_54.show().html(g.html());
return false;
}
});
}
};
$.fn.combobox=function(_59,_5a){
if(typeof _59=="string"){
var _5b=$.fn.combobox.methods[_59];
if(_5b){
return _5b(this,_5a);
}else{
return this.combo(_59,_5a);
}
}
_59=_59||{};
return this.each(function(){
var _5c=$.data(this,"combobox");
if(_5c){
$.extend(_5c.options,_59);
}else{
_5c=$.data(this,"combobox",{options:$.extend({},$.fn.combobox.defaults,$.fn.combobox.parseOptions(this),_59),data:[]});
}
_44(this);
if(_5c.options.data){
_27(this,_5c.options.data);
}else{
var _5d=$.fn.combobox.parseData(this);
if(_5d.length){
_27(this,_5d);
}
}
_2d(this);
});
};
$.fn.combobox.methods={options:function(jq){
var _5e=jq.combo("options");
return $.extend($.data(jq[0],"combobox").options,{width:_5e.width,height:_5e.height,originalValue:_5e.originalValue,disabled:_5e.disabled,readonly:_5e.readonly});
},cloneFrom:function(jq,_5f){
return jq.each(function(){
$(this).combo("cloneFrom",_5f);
$.data(this,"combobox",$(_5f).data("combobox"));
$(this).addClass("combobox-f").attr("comboboxName",$(this).attr("textboxName"));
});
},getData:function(jq){
return $.data(jq[0],"combobox").data;
},setValues:function(jq,_60){
return jq.each(function(){
_19(this,_60);
});
},setValue:function(jq,_61){
return jq.each(function(){
_19(this,$.isArray(_61)?_61:[_61]);
});
},clear:function(jq){
return jq.each(function(){
_19(this,[]);
});
},reset:function(jq){
return jq.each(function(){
var _62=$(this).combobox("options");
if(_62.multiple){
$(this).combobox("setValues",_62.originalValue);
}else{
$(this).combobox("setValue",_62.originalValue);
}
});
},loadData:function(jq,_63){
return jq.each(function(){
_27(this,_63);
});
},reload:function(jq,url){
return jq.each(function(){
if(typeof url=="string"){
_2d(this,url);
}else{
if(url){
var _64=$(this).combobox("options");
_64.queryParams=url;
}
_2d(this);
}
});
},select:function(jq,_65){
return jq.each(function(){
_13(this,_65);
});
},unselect:function(jq,_66){
return jq.each(function(){
_1a(this,_66);
});
},scrollTo:function(jq,_67){
return jq.each(function(){
_5(this,_67);
});
}};
$.fn.combobox.parseOptions=function(_68){
var t=$(_68);
return $.extend({},$.fn.combo.parseOptions(_68),$.parser.parseOptions(_68,["valueField","textField","groupField","groupPosition","mode","method","url",{showItemIcon:"boolean",limitToList:"boolean"}]));
};
$.fn.combobox.parseData=function(_69){
var _6a=[];
var _6b=$(_69).combobox("options");
$(_69).children().each(function(){
if(this.tagName.toLowerCase()=="optgroup"){
var _6c=$(this).attr("label");
$(this).children().each(function(){
_6d(this,_6c);
});
}else{
_6d(this);
}
});
return _6a;
function _6d(el,_6e){
var t=$(el);
var row={};
row[_6b.valueField]=t.attr("value")!=undefined?t.attr("value"):t.text();
row[_6b.textField]=t.text();
row["selected"]=t.is(":selected");
row["disabled"]=t.is(":disabled");
if(_6e){
_6b.groupField=_6b.groupField||"group";
row[_6b.groupField]=_6e;
}
_6a.push(row);
};
};
var _6f=0;
var _70={render:function(_71,_72,_73){
var _74=$.data(_71,"combobox");
var _75=_74.options;
_6f++;
_74.itemIdPrefix="_easyui_combobox_i"+_6f;
_74.groupIdPrefix="_easyui_combobox_g"+_6f;
_74.groups=[];
var dd=[];
var _76=undefined;
for(var i=0;i<_73.length;i++){
var row=_73[i];
var v=row[_75.valueField]+"";
var s=row[_75.textField];
var g=row[_75.groupField];
if(g){
if(_76!=g){
_76=g;
_74.groups.push({value:g,startIndex:i,count:1});
dd.push("<div id=\""+(_74.groupIdPrefix+"_"+(_74.groups.length-1))+"\" class=\"combobox-group\">");
dd.push(_75.groupFormatter?_75.groupFormatter.call(_71,g):g);
dd.push("</div>");
}else{
_74.groups[_74.groups.length-1].count++;
}
}else{
_76=undefined;
}
var cls="combobox-item"+(row.disabled?" combobox-item-disabled":"")+(g?" combobox-gitem":"");
dd.push("<div id=\""+(_74.itemIdPrefix+"_"+i)+"\" class=\""+cls+"\">");
if(_75.showItemIcon&&row.iconCls){
dd.push("<span class=\"combobox-icon "+row.iconCls+"\"></span>");
}
dd.push(_75.formatter?_75.formatter.call(_71,row):s);
dd.push("</div>");
}
$(_72).html(dd.join(""));
}};
$.fn.combobox.defaults=$.extend({},$.fn.combo.defaults,{valueField:"value",textField:"text",groupPosition:"static",groupField:null,groupFormatter:function(_77){
return _77;
},mode:"local",method:"post",url:null,data:null,queryParams:{},showItemIcon:false,limitToList:false,view:_70,keyHandler:{up:function(e){
_b(this,"prev");
e.preventDefault();
},down:function(e){
_b(this,"next");
e.preventDefault();
},left:function(e){
},right:function(e){
},enter:function(e){
_3e(this);
},query:function(q,e){
_33(this,q);
}},inputEvents:$.extend({},$.fn.combo.defaults.inputEvents,{blur:function(e){
var _78=e.data.target;
var _79=$(_78).combobox("options");
if(_79.reversed||_79.limitToList){
if(_79.blurTimer){
clearTimeout(_79.blurTimer);
}
_79.blurTimer=setTimeout(function(){
var _7a=$(_78).parent().length;
if(_7a){
if(_79.reversed){
$(_78).combobox("setValues",$(_78).combobox("getValues"));
}else{
if(_79.limitToList){
_3e(_78);
}
}
_79.blurTimer=null;
}
},50);
}
}}),panelEvents:{mouseover:_49,mouseout:_4b,click:_4c,scroll:_51},filter:function(q,row){
var _7b=$(this).combobox("options");
return row[_7b.textField].toLowerCase().indexOf(q.toLowerCase())>=0;
},formatter:function(row){
var _7c=$(this).combobox("options");
return row[_7c.textField];
},loader:function(_7d,_7e,_7f){
var _80=$(this).combobox("options");
if(!_80.url){
return false;
}
$.ajax({type:_80.method,url:_80.url,data:_7d,dataType:"json",success:function(_81){
_7e(_81);
},error:function(){
_7f.apply(this,arguments);
}});
},loadFilter:function(_82){
return _82;
},finder:{getEl:function(_83,_84){
var _85=_1(_83,_84);
var id=$.data(_83,"combobox").itemIdPrefix+"_"+_85;
return $("#"+id);
},getGroupEl:function(_86,_87){
var _88=$.data(_86,"combobox");
var _89=$.easyui.indexOfArray(_88.groups,"value",_87);
var id=_88.groupIdPrefix+"_"+_89;
return $("#"+id);
},getGroup:function(_8a,p){
var _8b=$.data(_8a,"combobox");
var _8c=p.attr("id").substr(_8b.groupIdPrefix.length+1);
return _8b.groups[parseInt(_8c)];
},getRow:function(_8d,p){
var _8e=$.data(_8d,"combobox");
var _8f=(p instanceof $)?p.attr("id").substr(_8e.itemIdPrefix.length+1):_1(_8d,p);
return _8e.data[parseInt(_8f)];
}},onBeforeLoad:function(_90){
},onLoadSuccess:function(_91){
},onLoadError:function(){
},onSelect:function(_92){
},onUnselect:function(_93){
},onClick:function(_94){
}});
})(jQuery);

