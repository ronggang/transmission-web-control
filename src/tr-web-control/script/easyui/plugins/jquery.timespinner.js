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
var _3=$.data(_2,"timespinner").options;
$(_2).addClass("timespinner-f").spinner(_3);
var _4=_3.formatter.call(_2,_3.parser.call(_2,_3.value));
$(_2).timespinner("initValue",_4);
};
function _5(e){
var _6=e.data.target;
var _7=$.data(_6,"timespinner").options;
var _8=$(_6).timespinner("getSelectionStart");
for(var i=0;i<_7.selections.length;i++){
var _9=_7.selections[i];
if(_8>=_9[0]&&_8<=_9[1]){
_a(_6,i);
return;
}
}
};
function _a(_b,_c){
var _d=$.data(_b,"timespinner").options;
if(_c!=undefined){
_d.highlight=_c;
}
var _e=_d.selections[_d.highlight];
if(_e){
var tb=$(_b).timespinner("textbox");
$(_b).timespinner("setSelectionRange",{start:_e[0],end:_e[1]});
tb.focus();
}
};
function _f(_10,_11){
var _12=$.data(_10,"timespinner").options;
var _11=_12.parser.call(_10,_11);
var _13=_12.formatter.call(_10,_11);
$(_10).spinner("setValue",_13);
};
function _14(_15,_16){
var _17=$.data(_15,"timespinner").options;
var s=$(_15).timespinner("getValue");
var _18=_17.selections[_17.highlight];
var s1=s.substring(0,_18[0]);
var s2=s.substring(_18[0],_18[1]);
var s3=s.substring(_18[1]);
var v=s1+((parseInt(s2,10)||0)+_17.increment*(_16?-1:1))+s3;
$(_15).timespinner("setValue",v);
_a(_15);
};
$.fn.timespinner=function(_19,_1a){
if(typeof _19=="string"){
var _1b=$.fn.timespinner.methods[_19];
if(_1b){
return _1b(this,_1a);
}else{
return this.spinner(_19,_1a);
}
}
_19=_19||{};
return this.each(function(){
var _1c=$.data(this,"timespinner");
if(_1c){
$.extend(_1c.options,_19);
}else{
$.data(this,"timespinner",{options:$.extend({},$.fn.timespinner.defaults,$.fn.timespinner.parseOptions(this),_19)});
}
_1(this);
});
};
$.fn.timespinner.methods={options:function(jq){
var _1d=jq.data("spinner")?jq.spinner("options"):{};
return $.extend($.data(jq[0],"timespinner").options,{width:_1d.width,value:_1d.value,originalValue:_1d.originalValue,disabled:_1d.disabled,readonly:_1d.readonly});
},setValue:function(jq,_1e){
return jq.each(function(){
_f(this,_1e);
});
},getHours:function(jq){
var _1f=$.data(jq[0],"timespinner").options;
var vv=jq.timespinner("getValue").split(_1f.separator);
return parseInt(vv[0],10);
},getMinutes:function(jq){
var _20=$.data(jq[0],"timespinner").options;
var vv=jq.timespinner("getValue").split(_20.separator);
return parseInt(vv[1],10);
},getSeconds:function(jq){
var _21=$.data(jq[0],"timespinner").options;
var vv=jq.timespinner("getValue").split(_21.separator);
return parseInt(vv[2],10)||0;
}};
$.fn.timespinner.parseOptions=function(_22){
return $.extend({},$.fn.spinner.parseOptions(_22),$.parser.parseOptions(_22,["separator",{showSeconds:"boolean",highlight:"number"}]));
};
$.fn.timespinner.defaults=$.extend({},$.fn.spinner.defaults,{inputEvents:$.extend({},$.fn.spinner.defaults.inputEvents,{click:function(e){
_5.call(this,e);
},blur:function(e){
var t=$(e.data.target);
t.timespinner("setValue",t.timespinner("getText"));
},keydown:function(e){
if(e.keyCode==13){
var t=$(e.data.target);
t.timespinner("setValue",t.timespinner("getText"));
}
}}),formatter:function(_23){
if(!_23){
return "";
}
var _24=$(this).timespinner("options");
var tt=[_25(_23.getHours()),_25(_23.getMinutes())];
if(_24.showSeconds){
tt.push(_25(_23.getSeconds()));
}
return tt.join(_24.separator);
function _25(_26){
return (_26<10?"0":"")+_26;
};
},parser:function(s){
var _27=$(this).timespinner("options");
var _28=_29(s);
if(_28){
var min=_29(_27.min);
var max=_29(_27.max);
if(min&&min>_28){
_28=min;
}
if(max&&max<_28){
_28=max;
}
}
return _28;
function _29(s){
if(!s){
return null;
}
var tt=s.split(_27.separator);
return new Date(1900,0,0,parseInt(tt[0],10)||0,parseInt(tt[1],10)||0,parseInt(tt[2],10)||0);
};
},selections:[[0,2],[3,5],[6,8]],separator:":",showSeconds:false,highlight:0,spin:function(_2a){
_14(this,_2a);
}});
})(jQuery);

