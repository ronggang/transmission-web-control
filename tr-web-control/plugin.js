system.plugin = {
	exec: function(key)
	{
		switch (key)
		{
			// 替换 Tracker
			case "replace-tracker":
				system.openDialogFromTemplate({
					id: "dialog-system-replaceTracker",
					options: {
						title: system.lang.dialog["system-replaceTracker"].title,  
						width: 600,
						height: 220
					}
				});
				break;

			// 自动匹配数据目录
			case "auto-match-data-folder":
				var rows = system.control.torrentlist.datagrid("getChecked");
				var ids = new Array();
				for (var i in rows)
				{
					ids.push(rows[i].id);
				}
				if (ids.length==0) return;

				system.openDialogFromTemplate({
					id: "dialog-auto-match-data-folder",
					options: {
						title: system.lang.dialog["auto-match-data-folder"].title,  
						width: 530,
						height: 280
					},
					datas: {
						"ids": ids
					}
				});
				break;
		}
	}
};