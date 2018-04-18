// lang file
system.lang = {
	"name":"uk"
	,"system":{
		"title":"Transmission WEB Control"
		,"status":{
			"connect":"З&#39;єднання..."
			,"connected":"З&#39;єднане"
			,"queue":"Чергу:"
			,"queuefinish":"Черга завантаження завершена."
			,"notfinal":"Не завершена"
		}
	}
	,"error":{
		"data-error":"Помилка даних."
		,"data-post-error":"Помилка відсилання даних."
	}
	,"config":{
		"save-path":"Директорія для завантаження"
	}
	,"toolbar":{
		"start":"Старт"
		,"pause":"Пауза"
		,"recheck":"Перевірити"
		,"start-all":"Почати все"
		,"pause-all":"Пауза всі"
		,"remove":"Видалити"
		,"remove-all":"Видалити всі"
		,"remove-data":"Видалити дані"
		,"add-torrent":"Додати торрент"
		,"attribute":"Атрибут"
		,"alt-speed":"Альтернативна швидкість"
		,"system-config":"Налаштування"
		,"system-reload":"Оновити"
		,"about":"Про програму"
		,"reload-time":"Авто-оновлення:"
		,"reload-time-unit":"с/раз"
		,"autoreload-disabled":"Вимкнено"
		,"autoreload-enabled":"Включено"
		,"search-prompt":"Пошук по торрентів"
		,"tracker-replace":"Замінити трекери"
		,"queue":"Чергу"
		,"ui-mobile":"Мобільний UI"
		,"ui-original":"Оригінальний UI"
		,"ui-computer":"Стандартний UI"
		,"plugin":"Плагіни"
		,"tip":{
			"start":"Запустити вибрані торренти"
			,"pause":"Призупинити вибрані торренти"
			,"recheck":"Перевірити вибрані торренти"
			,"recheck-confirm":"Ви впевнені, що необхідно перевірити вибрані торренти? Це займе деякий час!"
			,"start-all":"Запустити всі"
			,"pause-all":"Призупинити всі"
			,"remove":"Видалити вибрані торренти"
			,"delete-all":"Видалити всі"
			,"delete-data":"Видалити дані"
			,"add-torrent":"Додати торрент"
			,"attribute":"Атрибут"
			,"alt-speed":"Альтернативна швидкість"
			,"system-config":"Налаштування"
			,"system-reload":"Оновити"
			,"about":"Про програму"
			,"autoreload-disabled":"Відключити авто-оновлення"
			,"autoreload-enabled":"Включити авто-оновлення"
			,"tracker-replace":"Замінити трекери"
			,"change-download-dir":"Змінити директорію завантаження"
			,"ui-mobile":"Мобільний UI"
			,"ui-original":"Оригінальний UI"
			,"more-peers":"Запитати у трекера більше бенкетів"
		}
	}
	,"menus":{
		"queue":{
			"move-top":"Зрушити вгору"
			,"move-up":"Зрушити вище"
			,"move-down":"Зрушити нижче"
			,"move-bottom":"Зрушити вниз"
		}
		,"plugin": {
			"auto-match-data-folder": "Авто-зіставлення шляхів"
		}
	}
	,"title":{
		"left":"Навігація"
		,"list":"Торренти"
		,"attribute":"Атрибути"
		,"status":"Стан"
	}
	,"tree":{
		"all":"Всі"
		,"active":"Активні"
		,"paused":"Припинені"
		,"downloading":"Завантажуються"
		,"sending":"Роздаються"
		,"error":"З помилкою"
		,"warning":"З попередженням"
		,"actively":"Активні"
		,"check":"Перевіряються"
		,"wait":"Очікування"
		,"search-result":"Результати пошуку"
		,"status":{
			"loading":"Завантаження..."
		}
		,"statistics":{
			"title":"Статистика"
			,"cumulative":"Загальна"
			,"current":"Поточна"
			,"uploadedBytes":"Все віддано: "
			,"downloadedBytes":"Всього завантажено: "
			,"filesAdded":"Файлів: "
			,"sessionCount":"Сесій: "
			,"secondsActive":"Час роботи: "
		}
		,"servers":"Трекери"
		,"folders":"Директорії"
		,"toolbar":{
			"nav":{
				"folders":"Директорії"
			}
		}
	}
	,"statusbar":{
		"downloadspeed":"Швидкість завантаження:"
		,"uploadspeed":"Швидкість віддачі:"
		,"version":"Версія:"
	}
	,"dialog":{
		"torrent-add":{
			"download-dir":"Директорія завантаження:"
			,"torrent-url":"Посилання на .torrent або magnet:"
			,"tip-torrent-url":"Нове посилання з нового рядка"
			,"autostart":"Розпочати завантаження:"
			,"tip-autostart":""
			,"set-default-download-dir":"Вибрати як директорію за замовчуванням"
			,"upload-file":"Файли .torrent:"
			,"nosource":"Вказане джерело не є файлом .torrent."
			,"tip-title":"Пріоритет для завантажень зазначених через URL"
		}
		,"system-config":{
			"title":"Налаштування сервера"
			,"tabs":{
				"base":"Базові"
				,"network":"Мережа"
				,"limit":"Обмеження"
				,"alt-speed":"Планувальник"
				,"dictionary-folders":"Список шляхів"
			}
			,"config-dir":"Директорія конфігурації transmission:"
			,"download-dir":"Директорія для завантаження за замовчуванням:"
			,"download-dir-free-space":"Вільно місця: "
			,"incomplete-dir-enabled":"Використовувати директорію для незавершених файлів"
			,"cache-size-mb":"Розмір дискового кешу:"
			,"rename-partial-files":"Завантажувати файл &#39;.part&#39; незавершені файли"
			,"start-added-torrents":"Автостарт доданих торрентів"
			,"download-queue-enabled":"Включити чергу завантаження, одночасно:"
			,"seed-queue-enabled":"Включити чергу віддачі, одночасно:"
			,"peer-port-random-on-start":"Використовувати випадковий порт при запуску"
			,"port-forwarding-enabled":"Включити порт-forwarding (UPnP)"
			,"test-port":"Перевірити"
			,"port-is-open-true":"Порт відкритий"
			,"port-is-open-false":"Порт закритий"
			,"testing":"Тестую..."
			,"encryption":"Шифрування:"
			,"encryption-type":{
				"required":"Потрібно"
				,"preferred":"Включено"
				,"tolerated":"Вимкнено"
			}
			,"utp-enabled":"Увімкнути µTP (UPnP)"
			,"dht-enabled":"Увімкнути DHT"
			,"lpd-enabled":"Увімкнути Local Peer Discovery"
			,"pex-enabled":"Увімкнути обмен пирами"
			,"peer-limit-global":"Максимум пірів на всі торренти:"
			,"peer-limit-per-torrent":"Максимум пірів на торрент:"
			,"speed-limit-down-enabled":"Максимальна швидкість завантаження:"
			,"speed-limit-up-enabled":"Максимальна швидкість віддачі:"
			,"alt-speed-enabled":"Включити альтернативні швидкості"
			,"alt-speed-down":"Альтернативна швидкість завантаження:"
			,"alt-speed-up":"Альтернативна швидкість віддачі:"
			,"alt-speed-time-enabled":"Використовувати планувальник"
			,"alt-speed-time":"Час:"
			,"weekday":{
				"1":"Понеділок"
				,"2":"Вівторок"
				,"3":"Середа"
				,"4":"Четвер"
				,"5":"П&#39;ятниця"
				,"6":"Субота"
				,"0":"Неділя"
			}
			,"blocklist-enabled":"Використовувати чорний список"
			,"blocklist-size":"Чорний список містить %n правил."
			,"seedRatioLimited":"Роздача буде зупинена на рейтингу:"
			,"queue-stalled-enabled":"Вважати торренти завислими, якщо немає активності:"
			,"idle-seeding-limit-enabled":"Роздача буде зупинена якщо немає активності:"
			,"minutes":"Хвилин"
			,"nochange":"Без змін"
			,"saving":"Збереження..."
		}
		,"public":{
			"button-ok":"OK"
			,"button-cancel":"Скасування"
			,"button-reload":"Перевантажити"
			,"button-save":"Зберегти"
			,"button-close":"Закрити"
			,"button-update":"Оновити"
			,"button-config":"Налаштування"
		}
		,"about":{
			"infos":"Автор: culturist<br/>Дискеймер: Більшість використовуваних зображень знайдені в мережі, якщо вони порушують ваші авторські права, повідомте автора для видалення."
			,"check-update":"Перевірити оновлення"
		}
		,"torrent-remove":{
			"title":"Видалити торрент"
			,"confirm-text":"Ви згодні видалити вибрані торренти?"
			,"remove-data":"Видалити дані"
			,"remove-error":"Видалення пройшло невдало!"
		}
		,"torrent-changeDownloadDir":{
			"title":"Змінити директорію завантаження"
			,"old-download-dir":"Стара:"
			,"new-download-dir":"Нова:"
			,"move-data":"Перенести дані зі старої директорії в нову"
			,"set-error":"помилка!"
			,"recheck-data":"Перевірити дані"
		}
		,"system-replaceTracker":{
			"title":"Замінити трекери"
			,"old-tracker":"Старий трекер:"
			,"new-tracker":"Новий трекер:"
			,"tip":"Ця функція буде шукати трекер <b>у всіх торрентах</b>."
			,"not-found":"Трекер не знайдено."
		}
		,"auto-match-data-folder":{
			"title":"Автоматичне співставлення шляхів"
			,"torrent-count":"Кількість торрентів:"
			,"folder-count":"Кількість директорій:"
			,"dictionary":"Список шляхів"
			,"time-begin":"Час початку:"
			,"time-now":"Поточний час:"
			,"status":"Статус:"
			,"ignore":"Ігнорувати"
			,"working-close-confirm":"Робота виконується, завершити?"
			,"time-interval":"Інтервал (секунд):"
			,"work-mode-title":"Режим:"
			,"work-mode":{
				"1":"Збіг по торренту"
				,"2":"Збіг за директорією"
			}
		}
	}
	,"torrent":{
		"fields":{
			"id":"#"
			,"name":"Назва"
			,"hashString":"Хеш"
			,"downloadDir":"Директорія"
			,"totalSize":"Розмір"
			,"status":"Стан"
			,"percentDone":"%"
			,"remainingTime":"Залишилося"
			,"addedDate":"Додано"
			,"completeSize":"Завантажено"
			,"rateDownload":"Завантаження"
			,"rateUpload":"Віддача"
			,"leecherCount":"Лічі"
			,"seederCount":"Сіди"
			,"uploadedEver":"Віддано"
			,"uploadRatio":"Рейтинг"
		}
		,"status-text":{
			"0":"Пауза"
			,"1":"Очікує перевірки"
			,"2":"Перевірка"
			,"3":"Очікує завантаження"
			,"4":"Завантаження"
			,"5":"Очікує роздачу"
			,"6":"Роздача"
		}
		,"attribute":{
			"tabs":{
				"base":"Загальні"
				,"servers":"Трекери"
				,"files":"Файли"
				,"users":"Піри"
				,"config":"Конфіг"
			}
			,"files-fields":{
				"name":"Назва"
				,"length":"Обсяг"
				,"percentDone":"Завантажено %"
				,"bytesCompleted":"Завантажено"
				,"wanted":"Завантажувати"
				,"priority":"Пріоритет"
			}
			,"servers-fields":{
				"announce":"Анонс"
				,"announceState":"Стан"
				,"lastAnnounceResult":"Результат"
				,"lastAnnounceSucceeded":"Успішно"
				,"lastAnnounceTime":"Час анонсу"
				,"lastAnnounceTimedOut":"Тайм-аут"
				,"downloadCount":"Кількість завантажень"
				,"nextAnnounceTime":"Наступний анонс"
			}
			,"peers-fields":{
				"address":"IP адреса"
				,"clientName":"Клієнт"
				,"flagStr":"Країна"
				,"progress":"Прогрес"
				,"rateToClient":"Швидкість прийому"
				,"rateToPeer":"Швидкість віддачі"
			}
			,"status":{
				"true":"Так"
				,"false":"Немає"
			}
			,"priority":{
				"0":"Нормальний"
				,"1":"Високий"
				,"-1":"Низький"
			}
			,"label":{
				"name":"Назва:"
				,"addedDate":"Додано:"
				,"totalSize":"Загальний обсяг:"
				,"completeSize":"Завантажено:"
				,"leftUntilDone":"Залишилося:"
				,"hashString":"Хеш:"
				,"downloadDir":"Директорія:"
				,"status":"Стан:"
				,"rateDownload":"Швидкість завантаження:"
				,"rateUpload":"Швидкість віддачі:"
				,"leecherCount":"Лічери:"
				,"seederCount":"Сідери:"
				,"uploadedEver":"Віддано всього:"
				,"uploadRatio":"Рейтинг отдачи:"
				,"creator":"Автор:"
				,"dateCreated":"Створений:"
				,"comment":"Коментар:"
				,"errorString":"Помилка:"
				,"downloadLimited":"Максимальна швидкість завантаження: "
				,"uploadLimited":"Максимальна швидкість віддачі: "
				,"peer-limit":"Максимум пірів на торрент: "
				,"seedRatioMode":"Роздача буде зупинена на рейтингу: "
				,"seedIdleMode":"Роздача буде зупинена якщо немає активності: "
			}
			,"tip":{
				"button-allow":"Завантажити вибрані файли"
				,"button-deny":"Пропустити вибрані файли"
				,"button-priority":"Встановити пріоритет"
			}
			,"other":{
				"tracker-remove-confim":"Ви впевнені, що хочете видалити цей трекер?"
			}
		}
	}
	,"torrent-head":{
		"buttons":{
			"autoExpandAttribute":"Відображати атрибути"
		}
	}
	,"public":{
		"text-unknown":"Неизвестно"
		,"text-drop-title":"Перетягніть .torrent файл область \"Завантаження\" щоб додати завдання."
		,"text-saved":"Збережено"
		,"text-nochange":"Без змін"
		,"text-info":"Інформація"
		,"text-confirm":"Ви впевнені?"
		,"text-browsers-not-support-features":"Поточний браузер не підтримує цей функціонал!"
		,"text-download-update":"Завантажити це оновлення"
		,"text-have-update":"Доступно нове оновлення"
	}
};
