if ($.fn.pagination){
	$.fn.pagination.defaults.beforePageText = 'Σελίδα';
	$.fn.pagination.defaults.afterPageText = 'από {pages}';
	$.fn.pagination.defaults.displayMsg = 'Εμφάνιση {from} εώς {to} από {total} αντικείμενα';
}
if ($.fn.datagrid){
	$.fn.datagrid.defaults.loadMsg = 'Γίνεται Επεξεργασία, Παρακαλώ Περιμένετε ...';
}
if ($.fn.treegrid && $.fn.datagrid){
	$.fn.treegrid.defaults.loadMsg = $.fn.datagrid.defaults.loadMsg;
}
if ($.messager){
	$.messager.defaults.ok = 'Εντάξει';
	$.messager.defaults.cancel = 'Άκυρο';
}
if ($.fn.validatebox){
	$.fn.validatebox.defaults.missingMessage = 'Το πεδίο είναι υποχρεωτικό.';
	$.fn.validatebox.defaults.rules.email.message = 'Παρακαλώ εισάγετε σωστή Ηλ.Διεύθυνση.';
	$.fn.validatebox.defaults.rules.url.message = 'Παρακαλώ εισάγετε σωστό σύνδεσμο.';
	$.fn.validatebox.defaults.rules.length.message = 'Παρακαλώ εισάγετε τιμή μεταξύ {0} και {1}.';
	$.fn.validatebox.defaults.rules.remote.message = 'Παρακαλώ διορθώστε αυτό το πεδίο.';
}
if ($.fn.numberbox){
	$.fn.numberbox.defaults.missingMessage = 'Το πεδίο είναι υποχρεωτικό.';
}
if ($.fn.combobox){
	$.fn.combobox.defaults.missingMessage = 'Το πεδίο είναι υποχρεωτικό.';
}
if ($.fn.combotree){
	$.fn.combotree.defaults.missingMessage = 'Το πεδίο είναι υποχρεωτικό.';
}
if ($.fn.combogrid){
	$.fn.combogrid.defaults.missingMessage = 'Το πεδίο είναι υποχρεωτικό.';
}
if ($.fn.calendar){
	$.fn.calendar.defaults.weeks = ['Κυρ','Δευ','Τρι','Τετ','Πεμ','Παρ','Σαβ'];
	$.fn.calendar.defaults.months = ['Ιαν', 'Φεβ', 'Μαρ', 'Απρ', 'Μαϊ', 'Ιου', 'Ιου', 'Αυγ', 'Σεπ', 'Οκτ', 'Νοε', 'Δεκ'];
}
if ($.fn.datebox){
	$.fn.datebox.defaults.currentText = 'Σήμερα';
	$.fn.datebox.defaults.closeText = 'Κλείσιμο';
	$.fn.datebox.defaults.okText = 'Εντάξει';
	$.fn.datebox.defaults.missingMessage = 'Το πεδίο είναι υποχρεωτικό.';
}
if ($.fn.datetimebox && $.fn.datebox){
	$.extend($.fn.datetimebox.defaults,{
		currentText: $.fn.datebox.defaults.currentText,
		closeText: $.fn.datebox.defaults.closeText,
		okText: $.fn.datebox.defaults.okText,
		missingMessage: $.fn.datebox.defaults.missingMessage
	});
}
