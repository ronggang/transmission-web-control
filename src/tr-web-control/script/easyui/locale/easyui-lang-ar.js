if ($.fn.pagination){
	$.fn.pagination.defaults.beforePageText = 'صفحة';
	$.fn.pagination.defaults.afterPageText = 'من {pages}';
	$.fn.pagination.defaults.displayMsg = 'عرض {from} إلى {to} من {total} عنصر';
}
if ($.fn.datagrid){
	$.fn.datagrid.defaults.loadMsg = 'معالجة, الرجاء الإنتظار ...';
}
if ($.fn.treegrid && $.fn.datagrid){
	$.fn.treegrid.defaults.loadMsg = $.fn.datagrid.defaults.loadMsg;
}
if ($.messager){
	$.messager.defaults.ok = 'موافق';
	$.messager.defaults.cancel = 'إلغاء';
}
if ($.fn.validatebox){
	$.fn.validatebox.defaults.missingMessage = 'هذا الحقل مطلوب.';
	$.fn.validatebox.defaults.rules.email.message = 'الرجاء إدخال بريد إلكتروني صحيح.';
	$.fn.validatebox.defaults.rules.url.message = 'الرجاء إدخال رابط صحيح.';
	$.fn.validatebox.defaults.rules.length.message = 'الرجاء إدخال قيمة بين {0} و {1}.';
	$.fn.validatebox.defaults.rules.remote.message = 'الرجاء التأكد من الحقل.';
}
if ($.fn.numberbox){
	$.fn.numberbox.defaults.missingMessage = 'هذا الحقل مطلوب.';
}
if ($.fn.combobox){
	$.fn.combobox.defaults.missingMessage = 'هذا الحقل مطلوب.';
}
if ($.fn.combotree){
	$.fn.combotree.defaults.missingMessage = 'هذا الحقل مطلوب.';
}
if ($.fn.combogrid){
	$.fn.combogrid.defaults.missingMessage = 'هذا الحقل مطلوب.';
}
if ($.fn.calendar){
	$.fn.calendar.defaults.weeks = ['S','M','T','W','T','F','S'];
	$.fn.calendar.defaults.months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
}
if ($.fn.datebox){
	$.fn.datebox.defaults.currentText = 'اليوم';
	$.fn.datebox.defaults.closeText = 'إغلاق';
	$.fn.datebox.defaults.okText = 'موافق';
	$.fn.datebox.defaults.missingMessage = 'هذا الحقل مطلوب.';
}
if ($.fn.datetimebox && $.fn.datebox){
	$.extend($.fn.datetimebox.defaults,{
		currentText: $.fn.datebox.defaults.currentText,
		closeText: $.fn.datebox.defaults.closeText,
		okText: $.fn.datebox.defaults.okText,
		missingMessage: $.fn.datebox.defaults.missingMessage
	});
}
