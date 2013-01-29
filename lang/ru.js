// lang file
system.lang = {
	"name":"ru"
	,"system":{
		"title":"Transmission WEB Control"
		,"status":{
			"connect":"Соединение..."
			,"connected":"Соединен"
			,"queue":"Очередь:"
			,"queuefinish":"Очередь загрузки завершена."
			,"notfinal":"Не завершена"
		}
	}
	,"error":{
		"data-error":"Ошибка данных."
		,"data-post-error":"Ошибка отправки данных."
	}
	,"config":{
		"save-path":"Каталог для загрузки"
	}
	,"toolbar":{
		"start":"Старт"
		,"pause":"Пауза"
		,"recheck":"Перепроверить"
		,"start-all":"Начать все"
		,"pause-all":"Пауза все"
		,"remove":"Удалить"
		,"remove-all":"Удалить все"
		,"remove-data":"Удалить данные"
		,"add-torrent":"Добавить торрент"
		,"attribute":"Атрибут"
		,"alt-speed":"Поделить скорость"
		,"system-config":"Настройки"
		,"system-reload":"Перезагрузить"
		,"about":"О программе"
		,"reload-time":"Авто обновление:"
		,"reload-time-unit":"с/раз"
		,"autoreload-disabled":"Отключено"
		,"autoreload-enabled":"Включено"
		,"search-prompt":"Поиск по торрентам"
		,"tracker-replace":"Заменить трекеры"
		,"tip":{
			"start":"Загрузить выбранные торренты"
			,"pause":"Приостановить выбранные торренты"
			,"recheck":"Перепроверить выбранные торренты"
			,"recheck-confirm":"Вы уверены что необходимо перепроверить выбранные загрузки? Это займет некоторое время!"
			,"start-all":"Начать все"
			,"pause-all":"Пауза все"
			,"remove":"Удалить"
			,"delete-all":"Удалить все"
			,"delete-data":"Удалить данные"
			,"add-torrent":"Добавить торренты"
			,"attribute":"Отрибут"
			,"alt-speed":"Разделить скорость"
			,"system-config":"Настройки"
			,"system-reload":"Перезагрузить"
			,"about":"О программе"
			,"autoreload-disabled":"Отключить авто-обновление"
			,"autoreload-enabled":"Включить авто-обновление"
			,"tracker-replace":"Заменить трекеры"
		}
	}
	,"title":{
		"left":"Навигация"
		,"list":"Загрузки"
		,"attribute":"Информация"
		,"status":"Статус"
	}
	,"tree":{
		"all":"Все"
		,"active":"Активные"
		,"paused":"Приостановленны"
		,"downloading":"Загружаются"
		,"sending":"Раздаются"
		,"error":"Ошибка"
		,"warning":"Предупреждение"
		,"actively":"Активны"
		,"check":"Проверка"
		,"wait":"Ожидание"
		,"search-result":"Результаты поискаt"
		,"status":{
			"loading":"Загрузка..."
		}
		,"statistics":{
			"title":"Статистика"
			,"cumulative":"Общая"
			,"current":"Текущая"
			,"uploadedBytes":"Всего отдано: "
			,"downloadedBytes":"Всего принято: "
			,"filesAdded":"Файлы: "
			,"sessionCount":"Сессии: "
			,"secondsActive":"Время работы: "
		}
		,"servers":"Трекеры"
		,"folders":"папки"
		,"toolbar":{
			"nav":{
				"folders":"папки"
			}
		}
	}
	,"statusbar":{
		"downloadspeed":"Скорость загрузки:"
		,"uploadspeed":"Скорость отдачи:"
		,"version":"Версия:"
	}
	,"dialog":{
		"torrent-add":{
			"download-dir":"Каталог загрузки:"
			,"torrent-url":"Ссылка на .torrent или magnet:"
			,"tip-torrent-url":"Новая ссылка с новой строки"
			,"autostart":"Начать загрузку:"
			,"tip-autostart":""
			,"set-default-download-dir":"Выбрать как каталог по-умолчанию"
			,"upload-file":"Файлы .torrent:"
			,"nosource":"Указаный источник не является файлом .torrent."
			,"tip-title":"Приоритет для загрузок указанных через URL"
		}
		,"system-config":{
			"title":"Настройка сервера"
			,"tabs":{
				"base":"Базовые"
				,"network":"Сеть"
				,"limit":"Ограничения"
				,"alt-speed":"Рассписание"
			}
			,"config-dir":"Location of transmission's configuration directory:"
			,"download-dir":"каталог для загрузки по-умолчанию:"
			,"download-dir-free-space":"Свободно места:"
			,"incomplete-dir-enabled":"Использовать каталог для незавершенных"
			,"cache-size-mb":"Размер кэша на диске:"
			,"rename-partial-files":"Догружать в файл '.part' незавершенные файлы"
			,"start-added-torrents":"Автостарт для добавленных торрентов"
			,"download-queue-enabled":"Включить очередь загрузки, одновременно:"
			,"seed-queue-enabled":"Включить очередь отдачи, одновременно:"
			,"peer-port-random-on-start":"Использовать случайный порт при запуске"
			,"port-forwarding-enabled":"Включить перенаправление"
			,"test-port":"Проверить"
			,"port-is-open-true":"Порт закрыт"
			,"port-is-open-false":"Порт открыт"
			,"testing":"Тестирую..."
			,"encryption":"Шифрование:"
			,"encryption-type":{
				"required":"Required"
				,"preferred":"Preferred"
				,"tolerated":"Tolerated"
			}
			,"utp-enabled":"Включить uTP(UPnP)"
			,"dht-enabled":"Включить DHT"
			,"lpd-enabled":"Включить LPD"
			,"pex-enabled":"Включить PEX"
			,"peer-limit-global":"Максимум пиров на все загрузки:"
			,"peer-limit-per-torrent":"Максимум пиров на загрузку:"
			,"speed-limit-down-enabled":"Максимальная скорость загрузки:"
			,"speed-limit-up-enabled":"Максимальная скорость отдачи:"
			,"alt-speed-enabled":"Использовать разделение скорости"
			,"alt-speed-down":"Максимальная скорость загрузки:"
			,"alt-speed-up":"Максимальная скорость отдачи:"
			,"alt-speed-time-enabled":"Использовать расписание"
			,"alt-speed-time":"Время："
			,"weekday":{
				"1":"Понедельник"
				,"2":"Вторник"
				,"3":"Среда"
				,"4":"Четверг"
				,"5":"Пятница"
				,"6":"Суббота"
				,"0":"Воскресенье"
			}
			,"blocklist-enabled":"Использовать черный список"
			,"seedRatioLimited":"Рейтинг сида для загрузки:"
			,"queue-stalled-enabled":"Отображать зависшие загрузки:"
			,"idle-seeding-limit-enabled":"Раздача будут отключена если никто не качает:"
			,"minuets":"Минуты"
			,"nochange":"Без изменений"
			,"saveing":"Сохранение..."
		}
		,"public":{
			"button-ok":"OK"
			,"button-cancel":"Отмена"
			,"button-reload":"Перезагрузить"
			,"button-save":"Сохранить"
			,"button-close":"Закрыть"
		}
		,"about":{
			"infos":"Автор：culturist<br/>Дискеймер：Большинство используемых изображений найдены в сети, если они нарушают ваши авторские права, сообщите автору для удаления."
		}
		,"torrent-remove":{
			"title":"Удалить"
			,"confirm-text":"Вы согласны удалить выбранные торренты?"
			,"remove-data":"Удалить данные"
			,"remove-error":"Удаление прошло неудачно!"
		}
		,"torrent-changeDownloadDir":{
			"title":"Указать новый каталог"
			,"old-download-dir":"Старый каталог:"
			,"new-download-dir":"Новый каталог:"
			,"move-data":"Если выбрано перенести данные из старого каталога в новый."
			,"set-error":"ошибка!"
		}
		,"system-replaceTracker":{
			"title":"Заменить трекеры"
			,"old-tracker":"Cтарый трекер:"
			,"new-tracker":"Новой трекер："
			,"tip":"This function will find <b>all torrents</b> Tracker."
			,"not-found":"Tracker не найден."
		}
	}
	,"torrent":{
		"fields":{
			"id":"#"
			,"name":"Название"
			,"hashString":"Хэщ"
			,"downloadDir":"Каталог"
			,"totalSize":"Объем"
			,"status":"Статус"
			,"percentDone":"%"
			,"addedDate":"Добавлено"
			,"completeSize":"Загружено"
			,"rateDownload":"Прием"
			,"rateUpload":"Отдача"
			,"leecherCount":"Личи"
			,"seederCount":"Сиды"
			,"uploadedEver":"Отдано"
			,"uploadRatio":"Рейтинг"
		}
		,"status-text":{
			"0":"Пауза"
			,"1":"Ожидает проверки"
			,"2":"Првоерка"
			,"3":"Ожидает загрузку"
			,"4":"Загрузка"
			,"5":"Ожидает раздачу"
			,"6":"Раздает"
		}
		,"attribute":{
			"tabs":{
				"base":"Общие"
				,"servers":"Трекеры"
				,"files":"Файлы"
				,"users":"Пиры"
				,"config":"Конфиг"
			}
			,"files-fields":{
				"name":"Название"
				,"length":"Объем"
				,"percentDone":"Загружено %"
				,"bytesCompleted":"Загружено"
				,"wanted":"Загружать"
				,"priority":"Приоритет"
			}
			,"servers-fields":{
				"announce":"Анонс"
				,"announceState":"Статус"
				,"lastAnnounceResult":"Информация"
				,"lastAnnounceSucceeded":"Успешно"
				,"lastAnnounceTime":"Время анонса"
				,"lastAnnounceTimedOut":"Тайм-аут"
				,"downloadCount":"Количество загрузок"
				,"nextAnnounceTime":"Далее анонса"
			}
			,"peers-fields":{
				"address":"IP адрес"
				,"clientName":"Клиент"
				,"flagStr":"Страна"
				,"progress":"Прогресс"
				,"rateToClient":"Скорость приема"
				,"rateToPeer":"Скорость отдачи"
			}
			,"status":{
				"true":"Загружать"
				,"false":"Пропустить"
			}
			,"priority":{
				"0":"Обычный"
				,"1":"Высокий"
				,"-1":"Низкий"
			}
			,"label":{
				"name":"Название:"
				,"addedDate":"Добавлено:"
				,"totalSize":"Общий объем:"
				,"completeSize":"Загружено:"
				,"leftUntilDone":"Осталось:"
				,"hashString":"Хэш:"
				,"downloadDir":"Каталог:"
				,"status":"Статус:"
				,"rateDownload":"Скорость загрузки:"
				,"rateUpload":"Скорость отдачи:"
				,"leecherCount":"Личеры:"
				,"seederCount":"Сидеры:"
				,"uploadedEver":"Отдано всего:"
				,"uploadRatio":"Рейтинг отдачи:"
				,"creator":"Создатель:"
				,"dateCreated":"Создан:"
				,"comment":"Комментарий:"
				,"errorString":"Ошибка:"
				,"downloadLimited":"Максимальная скорость приема："
				,"uploadLimited":"Максимальная скорость отдачи："
				,"peer-limit":"Количество пиров на торрент："
				,"seedRatioMode":"Колличество сидов на торрент："
				,"seedIdleMode":"Торрент на раздаче будет остановлен если никто не загружает раздачу："
			}
			,"tip":{
				"button-allow":"Загрузить выбранные файлы"
				,"button-deny":"Пропустить проверенные файлы"
				,"button-priority":"Установить приоритет"
			}
			,"other":{
				"tracker-remove-confim":"Вы уверены, что хотите удалить этот \"Tracker\"?"
			}
		}
	}
	,"public":{
		"text-unknown":"Неизвестно"
		,"text-drop-title":"Перетащите .torrent файл в область \"Загрузки\" чтобы добавить задачу."
		,"text-saved":"Сохранено"
		,"text-nochange":"Без изменений"
		,"text-info":"Информация"
		,"text-confirm":"Вы уверены?"
	}
};