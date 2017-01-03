// lang file
system.lang = {
        "name":"ru"
        ,"system":{
                "title":"Transmission WEB Control"
                ,"status":{
                        "connect":"Соединение..."
                        ,"connected":"Соединено"
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
                ,"alt-speed":"Альтернативная скорость"
                ,"system-config":"Настройки"
                ,"system-reload":"Обновить"
                ,"about":"О программе"
                ,"reload-time":"Авто-обновление:"
                ,"reload-time-unit":"с/раз"
                ,"autoreload-disabled":"Отключено"
                ,"autoreload-enabled":"Включено"
                ,"search-prompt":"Поиск по торрентам"
                ,"tracker-replace":"Заменить трекеры"
                ,"queue":"Очередь"
                ,"ui-mobile":"Мобильный UI"
                ,"ui-original":"Оригинальный UI"
                ,"ui-computer":"Стандартный UI"
                ,"plugin":"Плагины"
                ,"tip":{
                        "start":"Запустить выбранные торренты"
                        ,"pause":"Приостановить выбранные торренты"
                        ,"recheck":"Перепроверить выбранные торренты"
                        ,"recheck-confirm":"Вы уверены что необходимо перепроверить выбранные торренты? Это займет некоторое время!"
                        ,"start-all":"Запустить все"
                        ,"pause-all":"Приостановить все"
                        ,"remove":"Удалить выбранные торренты"
                        ,"delete-all":"Удалить все"
                        ,"delete-data":"Удалить данные"
                        ,"add-torrent":"Добавить торрент"
                        ,"attribute":"Атрибут"
                        ,"alt-speed":"Альтернативная скорость"
                        ,"system-config":"Настройки"
                        ,"system-reload":"Обновить"
                        ,"about":"О программе"
                        ,"autoreload-disabled":"Отключить авто-обновление"
                        ,"autoreload-enabled":"Включить авто-обновление"
                        ,"tracker-replace":"Заменить трекеры"
                        ,"change-download-dir":"Изменить каталог загрузки"
                        ,"ui-mobile":"Мобильный UI"
                        ,"ui-original":"Оригинальный UI"
                        ,"more-peers":"Запросить у трекера больше пиров"
                }
        }
        ,"menus":{
                "queue":{
                        "move-top":"Сдвинуть вверх"
                        ,"move-up":"Сдвинуть выше"
                        ,"move-down":"Сдвинуть ниже"
                        ,"move-bottom":"Сдвинуть вниз"
                }
                ,"plugin": {
                        "auto-match-data-folder": "Авто-сопоставление путей"
                }
        }
        ,"title":{
                "left":"Навигация"
                ,"list":"Торренты"
                ,"attribute":"Атрибуты"
                ,"status":"Статус"
        }
        ,"tree":{
                "all":"Все"
                ,"active":"Активные"
                ,"paused":"Приостановлены"
                ,"downloading":"Загружаются"
                ,"sending":"Раздаются"
                ,"error":"С ошибкой"
                ,"warning":"С предупреждением"
                ,"actively":"Активные"
                ,"check":"Проверяются"
                ,"wait":"Ожидание"
                ,"search-result":"Результаты поиска"
                ,"status":{
                        "loading":"Загрузка..."
                }
                ,"statistics":"Статистика"
                ,"statistics":{
                        "title":"Статистика"
                        ,"cumulative":"Общая"
                        ,"current":"Текущая"
                        ,"uploadedBytes":"Всего отдано: "
                        ,"downloadedBytes":"Всего загружено: "
                        ,"filesAdded":"Файлов: "
                        ,"sessionCount":"Сессий: "
                        ,"secondsActive":"Время работы: "
                }
                ,"servers":"Трекеры"
                ,"folders":"Каталоги"
                ,"toolbar":{
                        "nav":{
                                "folders":"Каталоги"
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
                                ,"alt-speed":"Планировщик"
                                ,"dictionary-folders":"Список путей"
                        }
                        ,"config-dir":"Каталог конфигурации transmission-а:"
                        ,"download-dir":"Каталог для загрузки по-умолчанию:"
                        ,"download-dir-free-space":"Свободно места: "
                        ,"incomplete-dir-enabled":"Использовать каталог для незавершенных файлов"
                        ,"cache-size-mb":"Размер дискового кеша:"
                        ,"rename-partial-files":"Загружать в файл '.part' незавершенные файлы"
                        ,"start-added-torrents":"Автостарт для добавленных торрентов"
                        ,"download-queue-enabled":"Включить очередь загрузки, одновременно:"
                        ,"seed-queue-enabled":"Включить очередь отдачи, одновременно:"
                        ,"peer-port-random-on-start":"Использовать случайный порт при запуске"
                        ,"port-forwarding-enabled":"Включить проброс портов (UPnP)"
                        ,"test-port":"Проверить"
                        ,"port-is-open-true":"Порт открыт"
                        ,"port-is-open-false":"Порт закрыт"
                        ,"testing":"Тестирую..."
                        ,"encryption":"Шифрование:"
                        ,"encryption-type":{
                                "required":"Требуется"
                                ,"preferred":"Включено"
                                ,"tolerated":"Отключено"
                        }
                        ,"utp-enabled":"Включить uTP"
                        ,"dht-enabled":"Включить DHT"
                        ,"lpd-enabled":"Включить Local Peer Discovery"
                        ,"pex-enabled":"Включить обмен пирами"
                        ,"peer-limit-global":"Максимум пиров на все торренты:"
                        ,"peer-limit-per-torrent":"Максимум пиров на торрент:"
                        ,"speed-limit-down-enabled":"Максимальная скорость загрузки:"
                        ,"speed-limit-up-enabled":"Максимальная скорость отдачи:"
                        ,"alt-speed-enabled":"Включить альтернативные скорости"
                        ,"alt-speed-down":"Альтернативная скорость загрузки:"
                        ,"alt-speed-up":"Альтернативная скорость отдачи:"
                        ,"alt-speed-time-enabled":"Использовать планировщик"
                        ,"alt-speed-time":"Время:"
                        ,"weekday":{
                                "1":"Понед."
                                ,"2":"Вторник"
                                ,"3":"Среда"
                                ,"4":"Четверг"
                                ,"5":"Пятница"
                                ,"6":"Суббота"
                                ,"0":"Воскр."
                        }
                        ,"blocklist-enabled":"Использовать черный список"
                        ,"blocklist-size":"Черный список содержит %n правил."
                        ,"seedRatioLimited":"Раздача будет остановлена на рейтинге:"
                        ,"queue-stalled-enabled":"Считать торренты зависшими, если нет активности:"
                        ,"idle-seeding-limit-enabled":"Раздача будет остановлена если нет активности:"
                        ,"minuets":"Минут"
                        ,"nochange":"Без изменений"
                        ,"saveing":"Сохранение..."
                }
                ,"public":{
                        "button-ok":"OK"
                        ,"button-cancel":"Отмена"
                        ,"button-reload":"Перегрузить"
                        ,"button-save":"Сохранить"
                        ,"button-close":"Закрыть"
                        ,"button-update":"Обновить"
                        ,"button-config":"Настройка"
                }
                ,"about":{
                        "infos":"Автор: culturist<br/>Дискеймер: Большинство используемых изображений найдены в сети, если они нарушают ваши авторские права, сообщите автору для удаления."
                        ,"check-update":"Проверить обновления"
                }
                ,"torrent-remove":{
                        "title":"Удалить торрент"
                        ,"confirm-text":"Вы согласны удалить выбранные торренты?"
                        ,"remove-data":"Удалить данные"
                        ,"remove-error":"Удаление прошло неудачно!"
                }
                ,"torrent-changeDownloadDir":{
                        "title":"Изменить каталог загрузки"
                        ,"old-download-dir":"Старый:"
                        ,"new-download-dir":"Новый:"
                        ,"move-data":"Перенести данные из старого каталога в новый."
                        ,"set-error":"ошибка!"
                        ,"recheck-data":"Перепроверить данные."
                }
                ,"system-replaceTracker":{
                        "title":"Заменить трекеры"
                        ,"old-tracker":"Cтарый трекер:"
                        ,"new-tracker":"Новой трекер:"
                        ,"tip":"Эта функция будет искать трекер <b>во всех торрентах</b>."
                        ,"not-found":"Трекер не найден."
                }
                ,"auto-match-data-folder":{
                        "title":"Автоматическое сопоставление путей"
                        ,"torrent-count":"Кол-во торрентов:"
                        ,"folder-count":"Кол-во каталогов:"
                        ,"dictionary":"Список путей"
                        ,"time-begin":"Время начала:"
                        ,"time-now":"Текущее время:"
                        ,"status":"Статус:"
                        ,"ignore":"Игнорировать"
                        ,"working-close-confirm":"Работа выполняется, закрыть?"
                        ,"time-interval":"Интервал (секунд):"
                        ,"work-mode-title":"Режим:"
                        ,"work-mode":{
                                "1":"Individually matched by torrent"
                                ,"2":"Individually matched by folder"
                        }
                }
        }
        ,"torrent":{
                "fields":{
                        "id":"#"
                        ,"name":"Название"
                        ,"hashString":"Хэш"
                        ,"downloadDir":"Каталог"
                        ,"totalSize":"Размер"
                        ,"status":"Состояние"
                        ,"percentDone":"%"
                        ,"remainingTime":"Осталось"
                        ,"addedDate":"Добавлен"
                        ,"completeSize":"Загружено"
                        ,"rateDownload":"Загрузка"
                        ,"rateUpload":"Отдача"
                        ,"leecherCount":"Личи"
                        ,"seederCount":"Сиды"
                        ,"uploadedEver":"Отдано"
                        ,"uploadRatio":"Рейтинг"
                }
                ,"status-text":{
                        "0":"Пауза"
                        ,"1":"Ожидает проверки"
                        ,"2":"Проверка"
                        ,"3":"Ожидает загрузку"
                        ,"4":"Загрузка"
                        ,"5":"Ожидает раздачу"
                        ,"6":"Раздача"
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
                                ,"lastAnnounceResult":"Результат"
                                ,"lastAnnounceSucceeded":"Успешно"
                                ,"lastAnnounceTime":"Время анонса"
                                ,"lastAnnounceTimedOut":"Тайм-аут"
                                ,"downloadCount":"Количество загрузок"
                                ,"nextAnnounceTime":"Следующий анонс"
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
                                "true":"Да"
                                ,"false":"Нет"
                        }
                        ,"priority":{
                                "0":"Нормальный"
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
                                ,"creator":"Автор:"
                                ,"dateCreated":"Создан:"
                                ,"comment":"Комментарий:"
                                ,"errorString":"Ошибка:"
                                ,"downloadLimited":"Максимальная скорость приема: "
                                ,"uploadLimited":"Максимальная скорость отдачи: "
                                ,"peer-limit":"Максимум пиров на торрент: "
                                ,"seedRatioMode":"Раздача будет остановлена на рейтинге: "
                                ,"seedIdleMode":"Раздача будет остановлена если нет активности: "
                        }
                        ,"tip":{
                                "button-allow":"Загрузить выбранные файлы"
                                ,"button-deny":"Пропустить выбранные файлы"
                                ,"button-priority":"Установить приоритет"
                        }
                        ,"other":{
                                "tracker-remove-confim":"Вы уверены, что хотите удалить этот Трекер?"
                        }
                }
        }
        ,"torrent-head":{
                "buttons":{
                        "autoExpandAttribute":"Отображать атрибуты"
                }
        }
        ,"public":{
                "text-unknown":"Неизвестно"
                ,"text-drop-title":"Перетащите .torrent файл в область \"Загрузки\" чтобы добавить задачу."
                ,"text-saved":"Сохранено"
                ,"text-nochange":"Без изменений"
                ,"text-info":"Информация"
                ,"text-confirm":"Вы уверены?"
                ,"text-browsers-not-support-features":"Текущий браузер не поддерживает этот функционал!"
                ,"text-download-update":"Загрузить это обновление"
                ,"text-have-update":"Доступно новое обновление"
        }
};
