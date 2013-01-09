if ($.fn.pagination){
	$.fn.pagination.defaults.beforePageText = 'Strana';
	$.fn.pagination.defaults.afterPageText = 'z {pages}';
	$.fn.pagination.defaults.displayMsg = 'Zobrazuji {from} do {to} z {celkové} položky';
}
if ($.fn.datagrid){
	$.fn.datagrid.defaults.loadMsg = 'Zpracování, čekejte prosím ...';
}
if ($.fn.treegrid && $.fn.datagrid){
	$.fn.treegrid.defaults.loadMsg = $.fn.datagrid.defaults.loadMsg;
}
if ($.messager){
	$.messager.defaults.ok = 'Ok';
	$.messager.defaults.cancel = 'Zrušit';
}
if ($.fn.validatebox){
	$.fn.validatebox.defaults.missingMessage = 'Toto pole je vyžadováno.';
	$.fn.validatebox.defaults.rules.email.message = 'Zadejte prosím platnou e-mailovou adresu.';
	$.fn.validatebox.defaults.rules.url.message = 'Zadejte prosím platnou adresu URL.';
	$.fn.validatebox.defaults.rules.length.message = 'Prosím, zadejte hodnotu mezi {0} a {1}.';
}
if ($.fn.numberbox){
	$.fn.numberbox.defaults.missingMessage = 'Toto pole je vyžadováno.';
}
if ($.fn.combobox){
	$.fn.combobox.defaults.missingMessage = 'Toto pole je vyžadováno.';
}
if ($.fn.combotree){
	$.fn.combotree.defaults.missingMessage = 'Toto pole je vyžadováno.';
}
if ($.fn.combogrid){
	$.fn.combogrid.defaults.missingMessage = 'Toto pole je vyžadováno.';
}
if ($.fn.calendar){
	$.fn.calendar.defaults.weeks = ['S','M','T','W','T','F','S'];
	$.fn.calendar.defaults.months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
}
if ($.fn.datebox){
	$.fn.datebox.defaults.currentText = 'Dnes';
	$.fn.datebox.defaults.closeText = 'Zavřít';
	$.fn.datebox.defaults.okText = 'Ok';
	$.fn.datebox.defaults.missingMessage = 'Toto pole je vyžadováno.';
}
if ($.fn.datetimebox && $.fn.datebox){
	$.extend($.fn.datetimebox.defaults,{
		currentText: $.fn.datebox.defaults.currentText,
		closeText: $.fn.datebox.defaults.closeText,
		okText: $.fn.datebox.defaults.okText,
		missingMessage: $.fn.datebox.defaults.missingMessage
	});
}
