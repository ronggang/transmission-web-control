if ($.fn.pagination){
	$.fn.pagination.defaults.beforePageText = 'Seite';
	$.fn.pagination.defaults.afterPageText = 'von {pages}';
	$.fn.pagination.defaults.displayMsg = 'Angezeigte {from} zu {to} von {total} Artikel';
}
if ($.fn.datagrid){
	$.fn.datagrid.defaults.loadMsg = 'Processing, bitte warten ...';
}
if ($.fn.treegrid && $.fn.datagrid){
	$.fn.treegrid.defaults.loadMsg = $.fn.datagrid.defaults.loadMsg;
}
if ($.messager){
	$.messager.defaults.ok = 'OK';
	$.messager.defaults.cancel = 'Stornieren';
}
if ($.fn.validatebox){
	$.fn.validatebox.defaults.missingMessage = 'Dieses Feld ist obligatorisch.';
	$.fn.validatebox.defaults.rules.email.message = 'Bitte geben Sie eine gültige E-Mail-Adresse.';
	$.fn.validatebox.defaults.rules.url.message = 'Bitte geben Sie eine gültige URL.';
	$.fn.validatebox.defaults.rules.length.message = 'Bitte geben Sie einen Wert zwischen {0} und {1}.';
}
if ($.fn.numberbox){
	$.fn.numberbox.defaults.missingMessage = 'Dieses Feld ist obligatorisch.';
}
if ($.fn.combobox){
	$.fn.combobox.defaults.missingMessage = 'Dieses Feld ist obligatorisch.';
}
if ($.fn.combotree){
	$.fn.combotree.defaults.missingMessage = 'Dieses Feld ist obligatorisch.';
}
if ($.fn.combogrid){
	$.fn.combogrid.defaults.missingMessage = 'Dieses Feld ist obligatorisch.';
}
if ($.fn.calendar){
	$.fn.calendar.defaults.weeks = ['S','M','T','W','T','F','S'];
	$.fn.calendar.defaults.months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
}
if ($.fn.datebox){
	$.fn.datebox.defaults.currentText = 'Heute';
	$.fn.datebox.defaults.closeText = 'Schließen';
	$.fn.datebox.defaults.okText = 'OK';
	$.fn.datebox.defaults.missingMessage = 'Dieses Feld ist obligatorisch.';
}
if ($.fn.datetimebox && $.fn.datebox){
	$.extend($.fn.datetimebox.defaults,{
		currentText: $.fn.datebox.defaults.currentText,
		closeText: $.fn.datebox.defaults.closeText,
		okText: $.fn.datebox.defaults.okText,
		missingMessage: $.fn.datebox.defaults.missingMessage
	});
}
