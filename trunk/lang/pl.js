// lang file
system.lang = {
	"name":"pl"
	,"system":{
		"title":"Transmission WEB Control"
		,"status":{
			"connect":"Łączenie..."
			,"connected":"Połączony"
			,"queue":"Kolejka:"
			,"queuefinish":"Kolejkę zakończono."
			,"notfinal":"Nie ukończone"
		}
	}
	,"error":{
		"data-error":"Błąd danych."
		,"data-post-error":"Błąd danych."
	}
	,"config":{
		"save-path":"Katalog pobierania"
	}
	,"toolbar":{
		"start":"Start"
		,"pause":"Wstrzymaj"
		,"start-all":"Pobieraj wszystkie"
		,"pause-all":"Wstrzymaj wszystkie"
		,"remove":"Usuń"
		,"remove-all":"Usuń wszystkie"
		,"remove-data":"Usuń dane"
		,"add-torrent":"Dodaj torrenta"
		,"attribute":"Szczegóły"
		,"alt-speed":"Alt-Speed"
		,"system-config":"Panel konfiguracyjny Transmission"
		,"system-reload":"Odśwież"
		,"about":"O webgui"
		,"reload-time":"Auto odświeżanie:"
		,"reload-time-unit":"sekund"
		,"autoreload-disabled":"Wyłączone"
		,"autoreload-enabled":"Włączone"
		,"search-prompt":"Szukaj w dodanych torrentach"
		,"tip":{
			"start":"Pobieraj sprawdzone torrenty"
			,"pause":"Wstrzymaj sprawdzone torrenty"
			,"recheck":"Sprawdź ponownie sprawdzone torrenty"
			,"recheck-confirm":"Czy jesteś pewien,że na pewno chcesz ponownie sprawdzić wybrane torrenty? To może zająć trochę czasu!"
			,"start-all":"Pobieraj wszystkie"
			,"pause-all":"Wstrzymaj wszystkie"
			,"remove":"Usuń"
			,"delete-all":"Usuń wszystkie"
			,"delete-data":"Usuń dane"
			,"add-torrent":"Dodaj torrenta"
			,"attribute":"Szczegóły"
			,"alt-speed":"Limituj prędkość pobierania i wysyłania"
			,"system-config":"Panel konfiguracyjny Transmission"
			,"system-reload":"Odśwież"
			,"about":"O tej aplikacji"
			,"autoreload-disabled":"Wyłącz auto-odświeżanie"
			,"autoreload-enabled":"Włącz auto-odświeżanie"
		}
	}
	,"title":{
		"left":"Nawigacja"
		,"list":"Torrenty"
		,"attribute":"Szczegóły"
		,"status":"Status"
	}
	,"tree":{
		"all":"Wszystkie torrenty"
		,"active":"Aktywne"
		,"paused":"Wstrzymane"
		,"downloading":"Pobierane"
		,"sending":"Wysyłane"
		,"error":"Błędy"
		,"warning":"Ostrzeżenia"
		,"actively":"Aktywne"
		,"check":"Sprawdzane"
		,"wait":"Oczekiwanie"
		,"search-result":"Wyniki wyszukiwania"
		,"status":{
			"loading":"Ładowanie..."
		}
		,"statistics":"Statystyki"
		,"statistics":{
			"title":"Statystyki"
			,"cumulative":"Łączne"
			,"current":"Bieżące"
			,"uploadedBytes":"Wysłane dane: "
			,"downloadedBytes":"Pobrane dane: "
			,"filesAdded":"Dodane pliki: "   
			,"sessionCount":"Licznik sesji: " 
			,"secondsActive":"Czas aktywności: "
}
		,"server":"Trackery"
		,"folders":"Katalogi"
		,"toolbar":{
			"nav":{
				"folders":"Katalogi"
			}
		}
	}
	,"statusbar":{
		"downloadspeed":"Prędkość pobierania:"
		,"uploadspeed":"Prędkość wysyłania:"
		,"version":"Wersja:"
	}
	,"dialog":{
		"torrent-add":{
			"download-dir":"Katalog pobierania:"
			,"torrent-url":"Link do torrenta:"
			,"tip-torrent-url":"Wskazówka: jeżeli chcesz dodać wiele linków na raz,dodawaj je po oddzieleniu klawiszem ENTER,który ma wystąpić po każdym dodanym linku"
			,"autostart":"Automatyczny start pobierania:"
			,"tip-autostart":""
			,"set-default-download-dir":"Zapisz jako katalog domyślny"
			,"upload-file":"Pliki torrent:"
			,"nosource":"Brak pliku torrent bądź linka."
			,"tip-title":"Dodaj plik torrent i rozpocznij pobieranie"
		}
		,"system-config":{
			"title":"Konfiguracja serwera"
			,"tabs":{
				"base":"Ogólne"
				,"network":"Sieć"
				,"limit":"Limitowanie prędkości"
				,"alt-speed":"Harmonogram"
			}
			,"config-dir":"Lokalizacja katalogu z konfiguracją Transmission:"
			,"download-dir":"Domyślna lokalizacja do pobierania torrentów:"
			,"download-dir-free-space":"Wolne miejsce na dysku: "
			,"incomplete-dir-enabled":"Użyj katalogu dla niedokończonych pobrań"
			,"cache-size-mb":"Wielkość cache'u dysku:"
			,"rename-partial-files":"Dodaj rozszerzenie '.part' do nieukończonych pobrań"
			,"start-added-torrents":"Automatycznie rozpoczynaj pobieranie dodawanych torrentów"
			,"download-queue-enabled":"Włącz kolejkę pobierania, maksymalna ilość kolejek:"
			,"seed-queue-enabled":"Włącz kolejkę wysyłania, maksymalna ilość kolejek:"
			,"peer-port-random-on-start":"Użyj losowego portu podczas uruchamiania"
			,"port-forwarding-enabled":"Włącz przekierowywanie portów"
			,"test-port":"Testuj port"
			,"port-is-open-true":"Port jest otwart"
			,"port-is-open-false":"Port jest zamknięty"
			,"testing":"Testowanie..."
			,"encryption":"Szyfrowanie:"
			,"encryption-type":{
				"required":"Wymagane"
				,"preferred":"Preferowane"
				,"tolerated":"Tolerowane"
			}
			,"utp-enabled":"Włącz uTP(UPnP)"
			,"dht-enabled":"Włącz DHT"
			,"lpd-enabled":"Włącz LPD"
			,"pex-enabled":"Włącz PEX"
			,"peer-limit-global":"Maksymalna ogólna ilość peerów:"
			,"peer-limit-per-torrent":"Maksymalna ilość peerów na torrent:"
			,"speed-limit-down-enabled":"Maksymalna prędkość pobierania:"
			,"speed-limit-up-enabled":"Maksymalna prędkość wysyłania:"
			,"alt-speed-enabled":"Używaj ograniczenia prędkości"
			,"alt-speed-down":"Maksymalna prędkość pobierania:"
			,"alt-speed-up":"Maksymalna prędkość wysyłania:"
			,"alt-speed-time-enabled":"Użyj harmonogramu"
			,"alt-speed-time":"Godziny："
			,"weekday":{
				"1":"Poniedziałek"
				,"2":"Wtorek"
				,"3":"Środa"
				,"4":"Czwartek"
				,"5":"Piątek"
				,"6":"Sobota"
				,"0":"Niedziela"
			}
			,"blocklist-enabled":"Używaj blocklist'y(czarna lista z adresami IP organizacji antypirackich)"
			,"seedRatioLimited":"Domyślne ratio dla torrentów:"
			,"queue-stalled-enabled":"Bezczynne torrenty będą blokowane po czasie :"
			,"idle-seeding-limit-enabled":"Torrenty ze statusem 'wysyłane' zostaną całkowicie zatrzymane,jeżeli nikt nie będzie ich pobierał w czasie:"
			,"minuets":"Minut"
			,"nochange":"Nie dokonano zmian"
			,"saveing":"Zapisywanie..."
		}
		,"public":{
			"button-ok":"OK"
			,"button-cancel":"Anuluj"
			,"button-reload":"Odśwież"
			,"button-save":"Zapisz"
			,"button-close":"Zamknij"
		}
		,"about":{
			"infos":"Autor：culturist , MODed by Simplydan [PL] openrouter.info forum user.<br/>Zmiany: spolszczenie oraz modyfikacja interfejsu."
		}
		,"torrent-remove":{
			"title":"Potwierdź"
			,"confirm-text":"Czy na pewno chcesz usunąć wybrane torrenty?"
			,"remove-data":"Usuń lokalne dane"
			,"remove-error":"Usuwanie nie powiodło się!"
		}
		,"torrent-changeDownloadDir":{
			"title":"Ustaw nowy katalog pobierania dla tego torrenta"
			,"old-download-dir":"Stary katalog:"
			,"new-download-dir":"Nowy katalog:"
			,"move-data":"Jeżeli sprawdzono,przenieś dane ze starej lokalizacji do nowej.Teraz  pobieranych torrentów szukaj w nowej lokalizacji"
			,"set-error":"Błąd!"
		}
	}
	,"torrent":{
		"fields":{
			"id":"ID"
			,"name":"Nazwa"
			,"hashString":"HASH"
			,"downloadDir":"Katalog pobierania"
			,"totalSize":"Całkowity rozmiar"
			,"status":"Status"
			,"percentDone":"% ukończenia"
			,"remainingTime":"Remaining time"
			,"addedDate":"Data dodania"
			,"completeSize":"Pobrano"
			,"rateDownload":"Prędkość pobierania"
			,"rateUpload":"Prędkość wysyłania"
			,"leecherCount":"Pobierających"
			,"seederCount":"Wysyłających"
			,"uploadedEver":"Wysłano łącznie"
			,"uploadRatio":"Ratio"
		}
		,"status-text":{
			"0":"Wstrzymano"
			,"1":"Sprawdzanie"
			,"2":"Sprawdzanie"
			,"3":"Oczekiwanie"
			,"4":"Pobieranie"
			,"5":"Oczekiwanie"
			,"6":"Wysyłanie"
		}
		,"attribute":{
			"tabs":{
				"base":"Ogólne"
				,"servers":"Trackery"
				,"files":"Pliki"
				,"users":"Peery"
				,"config":"Konf."
			}
			,"files-fields":{
				"name":"Nazwa"
				,"length":"Rozmiar"
				,"percentDone":"% ukończenia"
				,"bytesCompleted":"Pobrano"
				,"wanted":"Status"
				,"priority":"Priorytet"
			}
			,"servers-fields":{
				"announce":"Dane trackera"
				,"announceState":"Status"
				,"lastAnnounceResult":"Status połączenia z trackerem"
				,"lastAnnounceSucceeded":"Udane połączenie"
				,"lastAnnounceTime":"Godzina połączenia"
				,"lastAnnounceTimedOut":"Timeout"
				,"downloadCount":"Licznik pobrań"
			}
			,"peers-fields":{
				"address":"Adres IP"
				,"clientName":"Klienci"
				,"flagStr":"Flaga"
				,"progress":"Postęp"
				,"rateToClient":"Prędkość pobierania"
				,"rateToPeer":"Prędkość wysyłania"
			}
			,"status":{
				"true":"OK"
				,"false":" - "
			}
			,"priority":{
				"0":"Normalny"
				,"1":"Wysoki"
				,"-1":"średni"
			}
			,"label":{
				"name":"Nazwa:"
				,"addedDate":"Data dodania:"
				,"totalSize":"Rozmiar:"
				,"completeSize":"Pobrano:"
				,"leftUntilDone":"Pozostało do pobrania:"
				,"hashString":"HASH:"
				,"downloadDir":"Katalog pobierania:"
				,"status":"Status:"
				,"rateDownload":"Prędkość pobierania :"
				,"rateUpload":"Prędkość wysyłania :"
				,"leecherCount":"Ilość pobierających:"
				,"seederCount":"Ilość wysyłających:"
				,"uploadedEver":"Wysłano ogólnie:"
				,"uploadRatio":"Ratio wysyłania:"
				,"creator":"Autor:"
				,"dateCreated":"Data utworzenia:"
				,"comment":"Komentarz:"
				,"errorString":"Błąd:"
				,"downloadLimited":"Maksymalna prędkość pobierania："
				,"uploadLimited":"Maksymalna prędkość wysyłania："
				,"peer-limit":"Maksymalna ilość peerów na torrent："
				,"seedRatioMode":"Ratio do wyseedowania dla tego torrenta："
				,"seedIdleMode":"Torrent ze statusem 'wysyłany' zostanie całkowicie zatrzymany,jeżeli nikt nie będzie go pobierał w czasie(minuty):"
			}
			,"tip":{
				"button-allow":"Pobierz sprawdzone pliki"
				,"button-deny":"Pomiń sprawdzone pliki"
				,"button-priority":"Ustaw priorytet"
			}
		}
	}
	,"public":{
		"text-unknown":"Nieznany"
		,"text-drop-title":"Przerzuć z komputera plik o rozszerzeniu *.torrent metodą 'przeciągnij i upuść'(drag&drop) w podświetlony obszar jakgdybyś kopiował pliki pomiędzy katalogami na komputerze "
		,"text-saved":"Zapisano"
		,"text-nochange":"Nie dokonano zmian"
		,"text-info":"Informacje"
	}
};