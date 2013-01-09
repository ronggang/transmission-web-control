if ($.fn.pagination){
	$.fn.pagination.defaults.beforePageText = 'Pagina';
	$.fn.pagination.defaults.afterPageText = 'di {pages}';
	$.fn.pagination.defaults.displayMsg = 'Visualizzazione {from} a {to} di {total} elementi';
}
if ($.fn.datagrid){
	$.fn.datagrid.defaults.loadMsg = 'In lavorazione, attendere ...';
}
if ($.fn.treegrid && $.fn.datagrid){
	$.fn.treegrid.defaults.loadMsg = $.fn.datagrid.defaults.loadMsg;
}
if ($.messager){
	$.messager.defaults.ok = 'Ok';
	$.messager.defaults.cancel = 'Annulla';
}
if ($.fn.validatebox){
	$.fn.validatebox.defaults.missingMessage = 'Questo campo è richiesto.';
	$.fn.validatebox.defaults.rules.email.message = 'Inserisci un indirizzo email valido.';
	$.fn.validatebox.defaults.rules.url.message = 'Inserisci un URL valido.';
	$.fn.validatebox.defaults.rules.length.message = 'Inserisci un valore tra {0} e {1}.';
	$.fn.validatebox.defaults.rules.remote.message = 'Aggiusta questo campo.';
}
if ($.fn.numberbox){
	$.fn.numberbox.defaults.missingMessage = 'Questo campo è richiesto.';
}
if ($.fn.combobox){
	$.fn.combobox.defaults.missingMessage = 'Questo campo è richiesto.';
}
if ($.fn.combotree){
	$.fn.combotree.defaults.missingMessage = 'Questo campo è richiesto.';
}
if ($.fn.combogrid){
	$.fn.combogrid.defaults.missingMessage = 'Questo campo è richiesto.';
}
if ($.fn.calendar){
	$.fn.calendar.defaults.weeks = ['S','M','T','W','T','F','S'];
	$.fn.calendar.defaults.months = ['Gen', 'Feb', 'Mar', 'Apr', 'Mag', 'Giu', 'Lug', 'Ago', 'Set', 'Ott', 'Nov', 'Dic'];
}
if ($.fn.datebox){
	$.fn.datebox.defaults.currentText = 'Oggi';
	$.fn.datebox.defaults.closeText = 'Chiudi';
	$.fn.datebox.defaults.okText = 'Ok';
	$.fn.datebox.defaults.missingMessage = 'Questo campo è richiesto.';
}
if ($.fn.datetimebox && $.fn.datebox){
	$.extend($.fn.datetimebox.defaults,{
		currentText: $.fn.datebox.defaults.currentText,
		closeText: $.fn.datebox.defaults.closeText,
		okText: $.fn.datebox.defaults.okText,
		missingMessage: $.fn.datebox.defaults.missingMessage
	});
}
