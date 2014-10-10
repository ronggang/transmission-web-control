if ($.fn.pagination){
    $.fn.pagination.defaults.beforePageText = 'Sayfa';
    $.fn.pagination.defaults.afterPageText = ' / {pages}';
    $.fn.pagination.defaults.displayMsg = '{from} ile {to} arası gösteriliyor, toplam {total} kayıt';
}
if ($.fn.datagrid){
    $.fn.panel.defaults.loadingMessage = "Yükleniyor...";
}

if ($.fn.datagrid){
    $.fn.datagrid.defaults.loadingMessage = "Yükleniyor...";
    $.fn.datagrid.defaults.loadMsg = 'İşleminiz Yapılıyor, lütfen bekleyin ...';
}
if ($.fn.treegrid && $.fn.datagrid){
    $.fn.treegrid.defaults.loadMsg = $.fn.datagrid.defaults.loadMsg;
}
if ($.messager){
    $.messager.defaults.ok = 'Tamam';
    $.messager.defaults.cancel = 'İptal';
}
if ($.fn.validatebox){
    $.fn.validatebox.defaults.missingMessage = 'Bu alan zorunludur.';
    $.fn.validatebox.defaults.rules.email.message = 'Lütfen geçerli bir email adresi giriniz.';
    $.fn.validatebox.defaults.rules.url.message = 'Lütfen geçerli bir URL giriniz.';
    $.fn.validatebox.defaults.rules.length.message = 'Lütfen {0} ile {1} arasında bir değer giriniz.';
    $.fn.validatebox.defaults.rules.remote.message = 'Lütfen bu alanı düzeltiniz.';
}
if ($.fn.numberbox){
    $.fn.numberbox.defaults.missingMessage = 'Bu alan zorunludur.';
}
if ($.fn.combobox){
    $.fn.combobox.defaults.missingMessage = 'Bu alan zorunludur.';
}
if ($.fn.combotree){
    $.fn.combotree.defaults.missingMessage = 'Bu alan zorunludur.';
}
if ($.fn.combogrid){
    $.fn.combogrid.defaults.missingMessage = 'Bu alan zorunludur.';
}
if ($.fn.calendar){
    $.fn.calendar.defaults.weeks = ['Pz','Pt','Sa','Ça','Pe','Cu','Ct'];
    $.fn.calendar.defaults.months = ['Oca', 'Şub', 'Mar', 'Nis', 'May', 'Haz', 'Tem', 'Ağu', 'Eyl', 'Eki', 'Kas', 'Ara'];
}
if ($.fn.datebox){
    $.fn.datebox.defaults.currentText = 'Bugün';
    $.fn.datebox.defaults.closeText = 'Kapat';
    $.fn.datebox.defaults.okText = 'Tamam';
    $.fn.datebox.defaults.missingMessage = 'Bu alan zorunludur.';
}
if ($.fn.datetimebox && $.fn.datebox){
    $.extend($.fn.datetimebox.defaults,{
        currentText: $.fn.datebox.defaults.currentText,
        closeText: $.fn.datebox.defaults.closeText,
        okText: $.fn.datebox.defaults.okText,
        missingMessage: $.fn.datebox.defaults.missingMessage
    });
    
    $.fn.datebox.defaults.formatter=function(date){
        var y=date.getFullYear();
        var m=date.getMonth()+1;
        var d=date.getDate();
        if(m<10){m="0"+m;}
        if(d<10){d="0"+d;}
        return d+"."+m+"."+y;
    };
}
