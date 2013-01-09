if ($.fn.pagination){
	$.fn.pagination.defaults.beforePageText = 'Pagina';
	$.fn.pagination.defaults.afterPageText = 'van {pages}';
	$.fn.pagination.defaults.displayMsg = 'Tonen van {from} tot {to} van de {totale} items';
}
if ($.fn.datagrid){
	$.fn.datagrid.defaults.loadMsg = 'Verwerking, even geduld ...';
}
if ($.fn.treegrid && $.fn.datagrid){
	$.fn.treegrid.defaults.loadMsg = $.fn.datagrid.defaults.loadMsg;
}
if ($.messager){
	$.messager.defaults.ok = 'Okee';
	$.messager.defaults.cancel = 'Annuleren';
}
if ($.fn.validatebox){
	$.fn.validatebox.defaults.missingMessage = 'Dit veld is verplicht.';
	$.fn.validatebox.defaults.rules.email.message = 'Geef een geldig e-mailadres.';
	$.fn.validatebox.defaults.rules.url.message = 'Vul een geldige URL.';
	$.fn.validatebox.defaults.rules.length.message = 'Voer een waarde tussen {0} en {1}.';
}
if ($.fn.numberbox){
	$.fn.numberbox.defaults.missingMessage = 'Dit veld is verplicht.';
}
if ($.fn.combobox){
	$.fn.combobox.defaults.missingMessage = 'Dit veld is verplicht.';
}
if ($.fn.combotree){
	$.fn.combotree.defaults.missingMessage = 'Dit veld is verplicht.';
}
if ($.fn.combogrid){
	$.fn.combogrid.defaults.missingMessage = 'Dit veld is verplicht.';
}
if ($.fn.calendar){
	$.fn.calendar.defaults.weeks = ['S','M','T','W','T','F','S'];
	$.fn.calendar.defaults.months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
}
if ($.fn.datebox){
	$.fn.datebox.defaults.currentText = 'Vandaag';
	$.fn.datebox.defaults.closeText = 'Dicht';
	$.fn.datebox.defaults.okText = 'Okee';
	$.fn.datebox.defaults.missingMessage = 'Dit veld is verplicht.';
}
if ($.fn.datetimebox && $.fn.datebox){
	$.extend($.fn.datetimebox.defaults,{
		currentText: $.fn.datebox.defaults.currentText,
		closeText: $.fn.datebox.defaults.closeText,
		okText: $.fn.datebox.defaults.okText,
		missingMessage: $.fn.datebox.defaults.missingMessage
	});
}
