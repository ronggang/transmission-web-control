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
var _3=$(_2);
_3.addClass("tree");
return _3;
};
function _4(_5){
var _6=$.data(_5,"tree").options;
$(_5).unbind().bind("mouseover",function(e){
var tt=$(e.target);
var _7=tt.closest("div.tree-node");
if(!_7.length){
return;
}
_7.addClass("tree-node-hover");
if(tt.hasClass("tree-hit")){
if(tt.hasClass("tree-expanded")){
tt.addClass("tree-expanded-hover");
}else{
tt.addClass("tree-collapsed-hover");
}
}
e.stopPropagation();
}).bind("mouseout",function(e){
var tt=$(e.target);
var _8=tt.closest("div.tree-node");
if(!_8.length){
return;
}
_8.removeClass("tree-node-hover");
if(tt.hasClass("tree-hit")){
if(tt.hasClass("tree-expanded")){
tt.removeClass("tree-expanded-hover");
}else{
tt.removeClass("tree-collapsed-hover");
}
}
e.stopPropagation();
}).bind("click",function(e){
var tt=$(e.target);
var _9=tt.closest("div.tree-node");
if(!_9.length){
return;
}
if(tt.hasClass("tree-hit")){
_85(_5,_9[0]);
return false;
}else{
if(tt.hasClass("tree-checkbox")){
_34(_5,_9[0]);
return false;
}else{
_d9(_5,_9[0]);
_6.onClick.call(_5,_c(_5,_9[0]));
}
}
e.stopPropagation();
}).bind("dblclick",function(e){
var _a=$(e.target).closest("div.tree-node");
if(!_a.length){
return;
}
_d9(_5,_a[0]);
_6.onDblClick.call(_5,_c(_5,_a[0]));
e.stopPropagation();
}).bind("contextmenu",function(e){
var _b=$(e.target).closest("div.tree-node");
if(!_b.length){
return;
}
_6.onContextMenu.call(_5,e,_c(_5,_b[0]));
e.stopPropagation();
});
};
function _d(_e){
var _f=$.data(_e,"tree").options;
_f.dnd=false;
var _10=$(_e).find("div.tree-node");
_10.draggable("disable");
_10.css("cursor","pointer");
};
function _11(_12){
var _13=$.data(_12,"tree");
var _14=_13.options;
var _15=_13.tree;
_13.disabledNodes=[];
_14.dnd=true;
_15.find("div.tree-node").draggable({disabled:false,revert:true,cursor:"pointer",proxy:function(_16){
var p=$("<div class=\"tree-node-proxy\"></div>").appendTo("body");
p.html("<span class=\"tree-dnd-icon tree-dnd-no\">&nbsp;</span>"+$(_16).find(".tree-title").html());
p.hide();
return p;
},deltaX:15,deltaY:15,onBeforeDrag:function(e){
if(_14.onBeforeDrag.call(_12,_c(_12,this))==false){
return false;
}
if($(e.target).hasClass("tree-hit")||$(e.target).hasClass("tree-checkbox")){
return false;
}
if(e.which!=1){
return false;
}
var _17=$(this).find("span.tree-indent");
if(_17.length){
e.data.offsetWidth-=_17.length*_17.width();
}
},onStartDrag:function(e){
$(this).next("ul").find("div.tree-node").each(function(){
$(this).droppable("disable");
_13.disabledNodes.push(this);
});
$(this).draggable("proxy").css({left:-10000,top:-10000});
_14.onStartDrag.call(_12,_c(_12,this));
var _18=_c(_12,this);
if(_18.id==undefined){
_18.id="easyui_tree_node_id_temp";
_60(_12,_18);
}
_13.draggingNodeId=_18.id;
},onDrag:function(e){
var x1=e.pageX,y1=e.pageY,x2=e.data.startX,y2=e.data.startY;
var d=Math.sqrt((x1-x2)*(x1-x2)+(y1-y2)*(y1-y2));
if(d>3){
$(this).draggable("proxy").show();
}
this.pageY=e.pageY;
},onStopDrag:function(){
for(var i=0;i<_13.disabledNodes.length;i++){
$(_13.disabledNodes[i]).droppable("enable");
}
_13.disabledNodes=[];
var _19=_d0(_12,_13.draggingNodeId);
if(_19&&_19.id=="easyui_tree_node_id_temp"){
_19.id="";
_60(_12,_19);
}
_14.onStopDrag.call(_12,_19);
}}).droppable({accept:"div.tree-node",onDragEnter:function(e,_1a){
if(_14.onDragEnter.call(_12,this,_1b(_1a))==false){
_1c(_1a,false);
$(this).removeClass("tree-node-append tree-node-top tree-node-bottom");
$(this).droppable("disable");
_13.disabledNodes.push(this);
}
},onDragOver:function(e,_1d){
if($(this).droppable("options").disabled){
return;
}
var _1e=_1d.pageY;
var top=$(this).offset().top;
var _1f=top+$(this).outerHeight();
_1c(_1d,true);
$(this).removeClass("tree-node-append tree-node-top tree-node-bottom");
if(_1e>top+(_1f-top)/2){
if(_1f-_1e<5){
$(this).addClass("tree-node-bottom");
}else{
$(this).addClass("tree-node-append");
}
}else{
if(_1e-top<5){
$(this).addClass("tree-node-top");
}else{
$(this).addClass("tree-node-append");
}
}
if(_14.onDragOver.call(_12,this,_1b(_1d))==false){
_1c(_1d,false);
$(this).removeClass("tree-node-append tree-node-top tree-node-bottom");
$(this).droppable("disable");
_13.disabledNodes.push(this);
}
},onDragLeave:function(e,_20){
_1c(_20,false);
$(this).removeClass("tree-node-append tree-node-top tree-node-bottom");
_14.onDragLeave.call(_12,this,_1b(_20));
},onDrop:function(e,_21){
var _22=this;
var _23,_24;
if($(this).hasClass("tree-node-append")){
_23=_25;
_24="append";
}else{
_23=_26;
_24=$(this).hasClass("tree-node-top")?"top":"bottom";
}
if(_14.onBeforeDrop.call(_12,_22,_1b(_21),_24)==false){
$(this).removeClass("tree-node-append tree-node-top tree-node-bottom");
return;
}
_23(_21,_22,_24);
$(this).removeClass("tree-node-append tree-node-top tree-node-bottom");
}});
function _1b(_27,pop){
return $(_27).closest("ul.tree").tree(pop?"pop":"getData",_27);
};
function _1c(_28,_29){
var _2a=$(_28).draggable("proxy").find("span.tree-dnd-icon");
_2a.removeClass("tree-dnd-yes tree-dnd-no").addClass(_29?"tree-dnd-yes":"tree-dnd-no");
};
function _25(_2b,_2c){
if(_c(_12,_2c).state=="closed"){
_79(_12,_2c,function(){
_2d();
});
}else{
_2d();
}
function _2d(){
var _2e=_1b(_2b,true);
$(_12).tree("append",{parent:_2c,data:[_2e]});
_14.onDrop.call(_12,_2c,_2e,"append");
};
};
function _26(_2f,_30,_31){
var _32={};
if(_31=="top"){
_32.before=_30;
}else{
_32.after=_30;
}
var _33=_1b(_2f,true);
_32.data=_33;
$(_12).tree("insert",_32);
_14.onDrop.call(_12,_30,_33,_31);
};
};
function _34(_35,_36,_37,_38){
var _39=$.data(_35,"tree");
var _3a=_39.options;
if(!_3a.checkbox){
return;
}
var _3b=_c(_35,_36);
if(!_3b.checkState){
return;
}
var ck=$(_36).find(".tree-checkbox");
if(_37==undefined){
if(ck.hasClass("tree-checkbox1")){
_37=false;
}else{
if(ck.hasClass("tree-checkbox0")){
_37=true;
}else{
if(_3b._checked==undefined){
_3b._checked=$(_36).find(".tree-checkbox").hasClass("tree-checkbox1");
}
_37=!_3b._checked;
}
}
}
_3b._checked=_37;
if(_37){
if(ck.hasClass("tree-checkbox1")){
return;
}
}else{
if(ck.hasClass("tree-checkbox0")){
return;
}
}
if(!_38){
if(_3a.onBeforeCheck.call(_35,_3b,_37)==false){
return;
}
}
if(_3a.cascadeCheck){
_3c(_35,_3b,_37);
_3d(_35,_3b);
}else{
_3e(_35,_3b,_37?"1":"0");
}
if(!_38){
_3a.onCheck.call(_35,_3b,_37);
}
};
function _3c(_3f,_40,_41){
var _42=$.data(_3f,"tree").options;
var _43=_41?1:0;
_3e(_3f,_40,_43);
if(_42.deepCheck){
$.easyui.forEach(_40.children||[],true,function(n){
_3e(_3f,n,_43);
});
}else{
var _44=[];
if(_40.children&&_40.children.length){
_44.push(_40);
}
$.easyui.forEach(_40.children||[],true,function(n){
if(!n.hidden){
_3e(_3f,n,_43);
if(n.children&&n.children.length){
_44.push(n);
}
}
});
for(var i=_44.length-1;i>=0;i--){
var _45=_44[i];
_3e(_3f,_45,_46(_45));
}
}
};
function _3e(_47,_48,_49){
var _4a=$.data(_47,"tree").options;
if(!_48.checkState||_49==undefined){
return;
}
if(_48.hidden&&!_4a.deepCheck){
return;
}
var ck=$("#"+_48.domId).find(".tree-checkbox");
_48.checkState=["unchecked","checked","indeterminate"][_49];
_48.checked=(_48.checkState=="checked");
ck.removeClass("tree-checkbox0 tree-checkbox1 tree-checkbox2");
ck.addClass("tree-checkbox"+_49);
};
function _3d(_4b,_4c){
var pd=_4d(_4b,$("#"+_4c.domId)[0]);
if(pd){
_3e(_4b,pd,_46(pd));
_3d(_4b,pd);
}
};
function _46(row){
var c0=0;
var c1=0;
var len=0;
$.easyui.forEach(row.children||[],false,function(r){
if(r.checkState){
len++;
if(r.checkState=="checked"){
c1++;
}else{
if(r.checkState=="unchecked"){
c0++;
}
}
}
});
if(len==0){
return undefined;
}
var _4e=0;
if(c0==len){
_4e=0;
}else{
if(c1==len){
_4e=1;
}else{
_4e=2;
}
}
return _4e;
};
function _4f(_50,_51){
var _52=$.data(_50,"tree").options;
if(!_52.checkbox){
return;
}
var _53=$(_51);
var ck=_53.find(".tree-checkbox");
var _54=_c(_50,_51);
if(_52.view.hasCheckbox(_50,_54)){
if(!ck.length){
_54.checkState=_54.checkState||"unchecked";
$("<span class=\"tree-checkbox\"></span>").insertBefore(_53.find(".tree-title"));
}
if(_54.checkState=="checked"){
_34(_50,_51,true,true);
}else{
if(_54.checkState=="unchecked"){
_34(_50,_51,false,true);
}else{
var _55=_46(_54);
if(_55===0){
_34(_50,_51,false,true);
}else{
if(_55===1){
_34(_50,_51,true,true);
}
}
}
}
}else{
ck.remove();
_54.checkState=undefined;
_54.checked=undefined;
_3d(_50,_54);
}
};
function _56(_57,ul,_58,_59,_5a){
var _5b=$.data(_57,"tree");
var _5c=_5b.options;
var _5d=$(ul).prevAll("div.tree-node:first");
_58=_5c.loadFilter.call(_57,_58,_5d[0]);
var _5e=_5f(_57,"domId",_5d.attr("id"));
if(!_59){
_5e?_5e.children=_58:_5b.data=_58;
$(ul).empty();
}else{
if(_5e){
_5e.children?_5e.children=_5e.children.concat(_58):_5e.children=_58;
}else{
_5b.data=_5b.data.concat(_58);
}
}
_5c.view.render.call(_5c.view,_57,ul,_58);
if(_5c.dnd){
_11(_57);
}
if(_5e){
_60(_57,_5e);
}
for(var i=0;i<_5b.tmpIds.length;i++){
_34(_57,$("#"+_5b.tmpIds[i])[0],true,true);
}
_5b.tmpIds=[];
setTimeout(function(){
_61(_57,_57);
},0);
if(!_5a){
_5c.onLoadSuccess.call(_57,_5e,_58);
}
};
function _61(_62,ul,_63){
var _64=$.data(_62,"tree").options;
if(_64.lines){
$(_62).addClass("tree-lines");
}else{
$(_62).removeClass("tree-lines");
return;
}
if(!_63){
_63=true;
$(_62).find("span.tree-indent").removeClass("tree-line tree-join tree-joinbottom");
$(_62).find("div.tree-node").removeClass("tree-node-last tree-root-first tree-root-one");
var _65=$(_62).tree("getRoots");
if(_65.length>1){
$(_65[0].target).addClass("tree-root-first");
}else{
if(_65.length==1){
$(_65[0].target).addClass("tree-root-one");
}
}
}
$(ul).children("li").each(function(){
var _66=$(this).children("div.tree-node");
var ul=_66.next("ul");
if(ul.length){
if($(this).next().length){
_67(_66);
}
_61(_62,ul,_63);
}else{
_68(_66);
}
});
var _69=$(ul).children("li:last").children("div.tree-node").addClass("tree-node-last");
_69.children("span.tree-join").removeClass("tree-join").addClass("tree-joinbottom");
function _68(_6a,_6b){
var _6c=_6a.find("span.tree-icon");
_6c.prev("span.tree-indent").addClass("tree-join");
};
function _67(_6d){
var _6e=_6d.find("span.tree-indent, span.tree-hit").length;
_6d.next().find("div.tree-node").each(function(){
$(this).children("span:eq("+(_6e-1)+")").addClass("tree-line");
});
};
};
function _6f(_70,ul,_71,_72){
var _73=$.data(_70,"tree").options;
_71=$.extend({},_73.queryParams,_71||{});
var _74=null;
if(_70!=ul){
var _75=$(ul).prev();
_74=_c(_70,_75[0]);
}
if(_73.onBeforeLoad.call(_70,_74,_71)==false){
return;
}
var _76=$(ul).prev().children("span.tree-folder");
_76.addClass("tree-loading");
var _77=_73.loader.call(_70,_71,function(_78){
_76.removeClass("tree-loading");
_56(_70,ul,_78);
if(_72){
_72();
}
},function(){
_76.removeClass("tree-loading");
_73.onLoadError.apply(_70,arguments);
if(_72){
_72();
}
});
if(_77==false){
_76.removeClass("tree-loading");
}
};
function _79(_7a,_7b,_7c){
var _7d=$.data(_7a,"tree").options;
var hit=$(_7b).children("span.tree-hit");
if(hit.length==0){
return;
}
if(hit.hasClass("tree-expanded")){
return;
}
var _7e=_c(_7a,_7b);
if(_7d.onBeforeExpand.call(_7a,_7e)==false){
return;
}
hit.removeClass("tree-collapsed tree-collapsed-hover").addClass("tree-expanded");
hit.next().addClass("tree-folder-open");
var ul=$(_7b).next();
if(ul.length){
if(_7d.animate){
ul.slideDown("normal",function(){
_7e.state="open";
_7d.onExpand.call(_7a,_7e);
if(_7c){
_7c();
}
});
}else{
ul.css("display","block");
_7e.state="open";
_7d.onExpand.call(_7a,_7e);
if(_7c){
_7c();
}
}
}else{
var _7f=$("<ul style=\"display:none\"></ul>").insertAfter(_7b);
_6f(_7a,_7f[0],{id:_7e.id},function(){
if(_7f.is(":empty")){
_7f.remove();
}
if(_7d.animate){
_7f.slideDown("normal",function(){
_7e.state="open";
_7d.onExpand.call(_7a,_7e);
if(_7c){
_7c();
}
});
}else{
_7f.css("display","block");
_7e.state="open";
_7d.onExpand.call(_7a,_7e);
if(_7c){
_7c();
}
}
});
}
};
function _80(_81,_82){
var _83=$.data(_81,"tree").options;
var hit=$(_82).children("span.tree-hit");
if(hit.length==0){
return;
}
if(hit.hasClass("tree-collapsed")){
return;
}
var _84=_c(_81,_82);
if(_83.onBeforeCollapse.call(_81,_84)==false){
return;
}
hit.removeClass("tree-expanded tree-expanded-hover").addClass("tree-collapsed");
hit.next().removeClass("tree-folder-open");
var ul=$(_82).next();
if(_83.animate){
ul.slideUp("normal",function(){
_84.state="closed";
_83.onCollapse.call(_81,_84);
});
}else{
ul.css("display","none");
_84.state="closed";
_83.onCollapse.call(_81,_84);
}
};
function _85(_86,_87){
var hit=$(_87).children("span.tree-hit");
if(hit.length==0){
return;
}
if(hit.hasClass("tree-expanded")){
_80(_86,_87);
}else{
_79(_86,_87);
}
};
function _88(_89,_8a){
var _8b=_8c(_89,_8a);
if(_8a){
_8b.unshift(_c(_89,_8a));
}
for(var i=0;i<_8b.length;i++){
_79(_89,_8b[i].target);
}
};
function _8d(_8e,_8f){
var _90=[];
var p=_4d(_8e,_8f);
while(p){
_90.unshift(p);
p=_4d(_8e,p.target);
}
for(var i=0;i<_90.length;i++){
_79(_8e,_90[i].target);
}
};
function _91(_92,_93){
var c=$(_92).parent();
while(c[0].tagName!="BODY"&&c.css("overflow-y")!="auto"){
c=c.parent();
}
var n=$(_93);
var _94=n.offset().top;
if(c[0].tagName!="BODY"){
var _95=c.offset().top;
if(_94<_95){
c.scrollTop(c.scrollTop()+_94-_95);
}else{
if(_94+n.outerHeight()>_95+c.outerHeight()-18){
c.scrollTop(c.scrollTop()+_94+n.outerHeight()-_95-c.outerHeight()+18);
}
}
}else{
c.scrollTop(_94);
}
};
function _96(_97,_98){
var _99=_8c(_97,_98);
if(_98){
_99.unshift(_c(_97,_98));
}
for(var i=0;i<_99.length;i++){
_80(_97,_99[i].target);
}
};
function _9a(_9b,_9c){
var _9d=$(_9c.parent);
var _9e=_9c.data;
if(!_9e){
return;
}
_9e=$.isArray(_9e)?_9e:[_9e];
if(!_9e.length){
return;
}
var ul;
if(_9d.length==0){
ul=$(_9b);
}else{
if(_9f(_9b,_9d[0])){
var _a0=_9d.find("span.tree-icon");
_a0.removeClass("tree-file").addClass("tree-folder tree-folder-open");
var hit=$("<span class=\"tree-hit tree-expanded\"></span>").insertBefore(_a0);
if(hit.prev().length){
hit.prev().remove();
}
}
ul=_9d.next();
if(!ul.length){
ul=$("<ul></ul>").insertAfter(_9d);
}
}
_56(_9b,ul[0],_9e,true,true);
};
function _a1(_a2,_a3){
var ref=_a3.before||_a3.after;
var _a4=_4d(_a2,ref);
var _a5=_a3.data;
if(!_a5){
return;
}
_a5=$.isArray(_a5)?_a5:[_a5];
if(!_a5.length){
return;
}
_9a(_a2,{parent:(_a4?_a4.target:null),data:_a5});
var _a6=_a4?_a4.children:$(_a2).tree("getRoots");
for(var i=0;i<_a6.length;i++){
if(_a6[i].domId==$(ref).attr("id")){
for(var j=_a5.length-1;j>=0;j--){
_a6.splice((_a3.before?i:(i+1)),0,_a5[j]);
}
_a6.splice(_a6.length-_a5.length,_a5.length);
break;
}
}
var li=$();
for(var i=0;i<_a5.length;i++){
li=li.add($("#"+_a5[i].domId).parent());
}
if(_a3.before){
li.insertBefore($(ref).parent());
}else{
li.insertAfter($(ref).parent());
}
};
function _a7(_a8,_a9){
var _aa=del(_a9);
$(_a9).parent().remove();
if(_aa){
if(!_aa.children||!_aa.children.length){
var _ab=$(_aa.target);
_ab.find(".tree-icon").removeClass("tree-folder").addClass("tree-file");
_ab.find(".tree-hit").remove();
$("<span class=\"tree-indent\"></span>").prependTo(_ab);
_ab.next().remove();
}
_60(_a8,_aa);
}
_61(_a8,_a8);
function del(_ac){
var id=$(_ac).attr("id");
var _ad=_4d(_a8,_ac);
var cc=_ad?_ad.children:$.data(_a8,"tree").data;
for(var i=0;i<cc.length;i++){
if(cc[i].domId==id){
cc.splice(i,1);
break;
}
}
return _ad;
};
};
function _60(_ae,_af){
var _b0=$.data(_ae,"tree").options;
var _b1=$(_af.target);
var _b2=_c(_ae,_af.target);
if(_b2.iconCls){
_b1.find(".tree-icon").removeClass(_b2.iconCls);
}
$.extend(_b2,_af);
_b1.find(".tree-title").html(_b0.formatter.call(_ae,_b2));
if(_b2.iconCls){
_b1.find(".tree-icon").addClass(_b2.iconCls);
}
_4f(_ae,_af.target);
};
function _b3(_b4,_b5){
if(_b5){
var p=_4d(_b4,_b5);
while(p){
_b5=p.target;
p=_4d(_b4,_b5);
}
return _c(_b4,_b5);
}else{
var _b6=_b7(_b4);
return _b6.length?_b6[0]:null;
}
};
function _b7(_b8){
var _b9=$.data(_b8,"tree").data;
for(var i=0;i<_b9.length;i++){
_ba(_b9[i]);
}
return _b9;
};
function _8c(_bb,_bc){
var _bd=[];
var n=_c(_bb,_bc);
var _be=n?(n.children||[]):$.data(_bb,"tree").data;
$.easyui.forEach(_be,true,function(_bf){
_bd.push(_ba(_bf));
});
return _bd;
};
function _4d(_c0,_c1){
var p=$(_c1).closest("ul").prevAll("div.tree-node:first");
return _c(_c0,p[0]);
};
function _c2(_c3,_c4){
_c4=_c4||"checked";
if(!$.isArray(_c4)){
_c4=[_c4];
}
var _c5=[];
$.easyui.forEach($.data(_c3,"tree").data,true,function(n){
if(n.checkState&&$.easyui.indexOfArray(_c4,n.checkState)!=-1){
_c5.push(_ba(n));
}
});
return _c5;
};
function _c6(_c7){
var _c8=$(_c7).find("div.tree-node-selected");
return _c8.length?_c(_c7,_c8[0]):null;
};
function _c9(_ca,_cb){
var _cc=_c(_ca,_cb);
if(_cc&&_cc.children){
$.easyui.forEach(_cc.children,true,function(_cd){
_ba(_cd);
});
}
return _cc;
};
function _c(_ce,_cf){
return _5f(_ce,"domId",$(_cf).attr("id"));
};
function _d0(_d1,id){
return _5f(_d1,"id",id);
};
function _5f(_d2,_d3,_d4){
var _d5=$.data(_d2,"tree").data;
var _d6=null;
$.easyui.forEach(_d5,true,function(_d7){
if(_d7[_d3]==_d4){
_d6=_ba(_d7);
return false;
}
});
return _d6;
};
function _ba(_d8){
_d8.target=$("#"+_d8.domId)[0];
return _d8;
};
function _d9(_da,_db){
var _dc=$.data(_da,"tree").options;
var _dd=_c(_da,_db);
if(_dc.onBeforeSelect.call(_da,_dd)==false){
return;
}
$(_da).find("div.tree-node-selected").removeClass("tree-node-selected");
$(_db).addClass("tree-node-selected");
_dc.onSelect.call(_da,_dd);
};
function _9f(_de,_df){
return $(_df).children("span.tree-hit").length==0;
};
function _e0(_e1,_e2){
var _e3=$.data(_e1,"tree").options;
var _e4=_c(_e1,_e2);
if(_e3.onBeforeEdit.call(_e1,_e4)==false){
return;
}
$(_e2).css("position","relative");
var nt=$(_e2).find(".tree-title");
var _e5=nt.outerWidth();
nt.empty();
var _e6=$("<input class=\"tree-editor\">").appendTo(nt);
_e6.val(_e4.text).focus();
_e6.width(_e5+20);
_e6._outerHeight(18);
_e6.bind("click",function(e){
return false;
}).bind("mousedown",function(e){
e.stopPropagation();
}).bind("mousemove",function(e){
e.stopPropagation();
}).bind("keydown",function(e){
if(e.keyCode==13){
_e7(_e1,_e2);
return false;
}else{
if(e.keyCode==27){
_ed(_e1,_e2);
return false;
}
}
}).bind("blur",function(e){
e.stopPropagation();
_e7(_e1,_e2);
});
};
function _e7(_e8,_e9){
var _ea=$.data(_e8,"tree").options;
$(_e9).css("position","");
var _eb=$(_e9).find("input.tree-editor");
var val=_eb.val();
_eb.remove();
var _ec=_c(_e8,_e9);
_ec.text=val;
_60(_e8,_ec);
_ea.onAfterEdit.call(_e8,_ec);
};
function _ed(_ee,_ef){
var _f0=$.data(_ee,"tree").options;
$(_ef).css("position","");
$(_ef).find("input.tree-editor").remove();
var _f1=_c(_ee,_ef);
_60(_ee,_f1);
_f0.onCancelEdit.call(_ee,_f1);
};
function _f2(_f3,q){
var _f4=$.data(_f3,"tree");
var _f5=_f4.options;
var ids={};
$.easyui.forEach(_f4.data,true,function(_f6){
if(_f5.filter.call(_f3,q,_f6)){
$("#"+_f6.domId).removeClass("tree-node-hidden");
ids[_f6.domId]=1;
_f6.hidden=false;
}else{
$("#"+_f6.domId).addClass("tree-node-hidden");
_f6.hidden=true;
}
});
for(var id in ids){
_f7(id);
}
function _f7(_f8){
var p=$(_f3).tree("getParent",$("#"+_f8)[0]);
while(p){
$(p.target).removeClass("tree-node-hidden");
p.hidden=false;
p=$(_f3).tree("getParent",p.target);
}
};
};
$.fn.tree=function(_f9,_fa){
if(typeof _f9=="string"){
return $.fn.tree.methods[_f9](this,_fa);
}
var _f9=_f9||{};
return this.each(function(){
var _fb=$.data(this,"tree");
var _fc;
if(_fb){
_fc=$.extend(_fb.options,_f9);
_fb.options=_fc;
}else{
_fc=$.extend({},$.fn.tree.defaults,$.fn.tree.parseOptions(this),_f9);
$.data(this,"tree",{options:_fc,tree:_1(this),data:[],tmpIds:[]});
var _fd=$.fn.tree.parseData(this);
if(_fd.length){
_56(this,this,_fd);
}
}
_4(this);
if(_fc.data){
_56(this,this,$.extend(true,[],_fc.data));
}
_6f(this,this);
});
};
$.fn.tree.methods={options:function(jq){
return $.data(jq[0],"tree").options;
},loadData:function(jq,_fe){
return jq.each(function(){
_56(this,this,_fe);
});
},getNode:function(jq,_ff){
return _c(jq[0],_ff);
},getData:function(jq,_100){
return _c9(jq[0],_100);
},reload:function(jq,_101){
return jq.each(function(){
if(_101){
var node=$(_101);
var hit=node.children("span.tree-hit");
hit.removeClass("tree-expanded tree-expanded-hover").addClass("tree-collapsed");
node.next().remove();
_79(this,_101);
}else{
$(this).empty();
_6f(this,this);
}
});
},getRoot:function(jq,_102){
return _b3(jq[0],_102);
},getRoots:function(jq){
return _b7(jq[0]);
},getParent:function(jq,_103){
return _4d(jq[0],_103);
},getChildren:function(jq,_104){
return _8c(jq[0],_104);
},getChecked:function(jq,_105){
return _c2(jq[0],_105);
},getSelected:function(jq){
return _c6(jq[0]);
},isLeaf:function(jq,_106){
return _9f(jq[0],_106);
},find:function(jq,id){
return _d0(jq[0],id);
},select:function(jq,_107){
return jq.each(function(){
_d9(this,_107);
});
},check:function(jq,_108){
return jq.each(function(){
_34(this,_108,true);
});
},uncheck:function(jq,_109){
return jq.each(function(){
_34(this,_109,false);
});
},collapse:function(jq,_10a){
return jq.each(function(){
_80(this,_10a);
});
},expand:function(jq,_10b){
return jq.each(function(){
_79(this,_10b);
});
},collapseAll:function(jq,_10c){
return jq.each(function(){
_96(this,_10c);
});
},expandAll:function(jq,_10d){
return jq.each(function(){
_88(this,_10d);
});
},expandTo:function(jq,_10e){
return jq.each(function(){
_8d(this,_10e);
});
},scrollTo:function(jq,_10f){
return jq.each(function(){
_91(this,_10f);
});
},toggle:function(jq,_110){
return jq.each(function(){
_85(this,_110);
});
},append:function(jq,_111){
return jq.each(function(){
_9a(this,_111);
});
},insert:function(jq,_112){
return jq.each(function(){
_a1(this,_112);
});
},remove:function(jq,_113){
return jq.each(function(){
_a7(this,_113);
});
},pop:function(jq,_114){
var node=jq.tree("getData",_114);
jq.tree("remove",_114);
return node;
},update:function(jq,_115){
return jq.each(function(){
_60(this,$.extend({},_115,{checkState:_115.checked?"checked":(_115.checked===false?"unchecked":undefined)}));
});
},enableDnd:function(jq){
return jq.each(function(){
_11(this);
});
},disableDnd:function(jq){
return jq.each(function(){
_d(this);
});
},beginEdit:function(jq,_116){
return jq.each(function(){
_e0(this,_116);
});
},endEdit:function(jq,_117){
return jq.each(function(){
_e7(this,_117);
});
},cancelEdit:function(jq,_118){
return jq.each(function(){
_ed(this,_118);
});
},doFilter:function(jq,q){
return jq.each(function(){
_f2(this,q);
});
}};
$.fn.tree.parseOptions=function(_119){
var t=$(_119);
return $.extend({},$.parser.parseOptions(_119,["url","method",{checkbox:"boolean",cascadeCheck:"boolean",onlyLeafCheck:"boolean"},{animate:"boolean",lines:"boolean",dnd:"boolean"}]));
};
$.fn.tree.parseData=function(_11a){
var data=[];
_11b(data,$(_11a));
return data;
function _11b(aa,tree){
tree.children("li").each(function(){
var node=$(this);
var item=$.extend({},$.parser.parseOptions(this,["id","iconCls","state"]),{checked:(node.attr("checked")?true:undefined)});
item.text=node.children("span").html();
if(!item.text){
item.text=node.html();
}
var _11c=node.children("ul");
if(_11c.length){
item.children=[];
_11b(item.children,_11c);
}
aa.push(item);
});
};
};
var _11d=1;
var _11e={render:function(_11f,ul,data){
var _120=$.data(_11f,"tree");
var opts=_120.options;
var _121=$(ul).prev(".tree-node");
var _122=_121.length?$(_11f).tree("getNode",_121[0]):null;
var _123=_121.find("span.tree-indent, span.tree-hit").length;
var cc=_124.call(this,_123,data);
$(ul).append(cc.join(""));
function _124(_125,_126){
var cc=[];
for(var i=0;i<_126.length;i++){
var item=_126[i];
if(item.state!="open"&&item.state!="closed"){
item.state="open";
}
item.domId="_easyui_tree_"+_11d++;
cc.push("<li>");
cc.push("<div id=\""+item.domId+"\" class=\"tree-node\">");
for(var j=0;j<_125;j++){
cc.push("<span class=\"tree-indent\"></span>");
}
if(item.state=="closed"){
cc.push("<span class=\"tree-hit tree-collapsed\"></span>");
cc.push("<span class=\"tree-icon tree-folder "+(item.iconCls?item.iconCls:"")+"\"></span>");
}else{
if(item.children&&item.children.length){
cc.push("<span class=\"tree-hit tree-expanded\"></span>");
cc.push("<span class=\"tree-icon tree-folder tree-folder-open "+(item.iconCls?item.iconCls:"")+"\"></span>");
}else{
cc.push("<span class=\"tree-indent\"></span>");
cc.push("<span class=\"tree-icon tree-file "+(item.iconCls?item.iconCls:"")+"\"></span>");
}
}
if(this.hasCheckbox(_11f,item)){
var flag=0;
if(_122&&_122.checkState=="checked"&&opts.cascadeCheck){
flag=1;
item.checked=true;
}else{
if(item.checked){
$.easyui.addArrayItem(_120.tmpIds,item.domId);
}
}
item.checkState=flag?"checked":"unchecked";
cc.push("<span class=\"tree-checkbox tree-checkbox"+flag+"\"></span>");
}else{
item.checkState=undefined;
item.checked=undefined;
}
cc.push("<span class=\"tree-title\">"+opts.formatter.call(_11f,item)+"</span>");
cc.push("</div>");
if(item.children&&item.children.length){
var tmp=_124.call(this,_125+1,item.children);
cc.push("<ul style=\"display:"+(item.state=="closed"?"none":"block")+"\">");
cc=cc.concat(tmp);
cc.push("</ul>");
}
cc.push("</li>");
}
return cc;
};
},hasCheckbox:function(_127,item){
var _128=$.data(_127,"tree");
var opts=_128.options;
if(opts.checkbox){
if($.isFunction(opts.checkbox)){
if(opts.checkbox.call(_127,item)){
return true;
}else{
return false;
}
}else{
if(opts.onlyLeafCheck){
if(item.state=="open"&&!(item.children&&item.children.length)){
return true;
}
}else{
return true;
}
}
}
return false;
}};
$.fn.tree.defaults={url:null,method:"post",animate:false,checkbox:false,cascadeCheck:true,onlyLeafCheck:false,lines:false,dnd:false,data:null,queryParams:{},formatter:function(node){
return node.text;
},filter:function(q,node){
var qq=[];
$.map($.isArray(q)?q:[q],function(q){
q=$.trim(q);
if(q){
qq.push(q);
}
});
for(var i=0;i<qq.length;i++){
var _129=node.text.toLowerCase().indexOf(qq[i].toLowerCase());
if(_129>=0){
return true;
}
}
return !qq.length;
},loader:function(_12a,_12b,_12c){
var opts=$(this).tree("options");
if(!opts.url){
return false;
}
$.ajax({type:opts.method,url:opts.url,data:_12a,dataType:"json",success:function(data){
_12b(data);
},error:function(){
_12c.apply(this,arguments);
}});
},loadFilter:function(data,_12d){
return data;
},view:_11e,onBeforeLoad:function(node,_12e){
},onLoadSuccess:function(node,data){
},onLoadError:function(){
},onClick:function(node){
},onDblClick:function(node){
},onBeforeExpand:function(node){
},onExpand:function(node){
},onBeforeCollapse:function(node){
},onCollapse:function(node){
},onBeforeCheck:function(node,_12f){
},onCheck:function(node,_130){
},onBeforeSelect:function(node){
},onSelect:function(node){
},onContextMenu:function(e,node){
},onBeforeDrag:function(node){
},onStartDrag:function(node){
},onStopDrag:function(node){
},onDragEnter:function(_131,_132){
},onDragOver:function(_133,_134){
},onDragLeave:function(_135,_136){
},onBeforeDrop:function(_137,_138,_139){
},onDrop:function(_13a,_13b,_13c){
},onBeforeEdit:function(node){
},onAfterEdit:function(node){
},onCancelEdit:function(node){
}};
})(jQuery);

