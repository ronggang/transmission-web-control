if ($.fn.pagination){
	$.fn.pagination.defaults.beforePageText = 'Strona';
	$.fn.pagination.defaults.afterPageText = 'z {pages}';
	
	$.fn.pagination.defaults.displayMsg = 'Wyświetlanie {from} do {to} z {total} elementów';
}
if ($.fn.datagrid){
	$.fn.datagrid.defaults.loadMsg = 'Przetwarzanie, proszę czekać ...';
}
if ($.fn.treegrid && $.fn.datagrid){
	$.fn.treegrid.defaults.loadMsg = $.fn.datagrid.defaults.loadMsg;
}
if ($.messager){
	$.messager.defaults.ok = 'Ok';
	$.messager.defaults.cancel = 'Anuluj';
}
if ($.fn.validatebox){
	$.fn.validatebox.defaults.missingMessage = 'To pole jest wymagane.';
	$.fn.validatebox.defaults.rules.email.message = 'Proszę podać poprawny adres e-mail.';
	$.fn.validatebox.defaults.rules.url.message = 'Proszę podać poprawny link.';
	$.fn.validatebox.defaults.rules.length.message = 'Proszę podać wartość pomiędzy {0} a {1}.';
	$.fn.validatebox.defaults.rules.remote.message = 'Proszę poprawić to pole.';
}
if ($.fn.numberbox){
	$.fn.numberbox.defaults.missingMessage = 'To pole jest wymagane.';
}
if ($.fn.combobox){
	$.fn.combobox.defaults.missingMessage = 'To pole jest wymagane.';
}
if ($.fn.combotree){
	$.fn.combotree.defaults.missingMessage = 'To pole jest wymagane.';
}
if ($.fn.combogrid){
	$.fn.combogrid.defaults.missingMessage = 'To pole jest wymagane.';
}
if ($.fn.calendar){
	$.fn.calendar.defaults.weeks = ['S','M','T','W','T','F','S'];
	$.fn.calendar.defaults.months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
}
if ($.fn.datebox){
	$.fn.datebox.defaults.currentText = 'Dzisiaj';
	$.fn.datebox.defaults.closeText = 'Anuluj';
	$.fn.datebox.defaults.okText = 'Ok';
	$.fn.datebox.defaults.missingMessage = 'To pole jest wymagane.';
}
if ($.fn.datetimebox && $.fn.datebox){
	$.extend($.fn.datetimebox.defaults,{
		currentText: $.fn.datebox.defaults.currentText,
		closeText: $.fn.datebox.defaults.closeText,
		okText: $.fn.datebox.defaults.okText,
		missingMessage: $.fn.datebox.defaults.missingMessage
	});
}
