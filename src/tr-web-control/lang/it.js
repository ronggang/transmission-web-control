// lang file
system.lang = {
	"name":"it"
	,"system":{
		"title":"Transmission WEB Control"
		,"status":{
			"connect":"Connettendo..."
			,"connected":"Connesso"
			,"queue":"Coda:"
			,"queuefinish":"La coda di download è completata."
			,"notfinal":"Non finale"
		}
	}
	,"error":{
		"data-error":"Errore nei dati."
		,"data-post-error":"Errore nei dati post."
	}
	,"config":{
		"save-path":"Download dir"
	}
	,"toolbar":{
		"start":"Avvia"
		,"pause":"Pausa"
		,"recheck":"Ricontrolla"
		,"start-all":"Avvia tutti"
		,"pause-all":"Pausa tutti"
		,"remove":"Rimuovi"
		,"remove-all":"Rimuovi tutti"
		,"remove-data":"Rimuovi i dati"
		,"add-torrent":"Aggiungi Torrent"
		,"attribute":"Attributi"
		,"alt-speed":"Velocita alternativa"
		,"system-config":"Configurazione"
		,"system-reload":"Ricarica"
		,"about":"Circa"
		,"reload-time":"Aggiornamento:"
		,"reload-time-unit":"s/tempo"
		,"autoreload-disabled":"Disabilitato"
		,"autoreload-enabled":"Abilitato"
		,"search-prompt":"Cerca Torrent"
		,"tracker-replace":"Sostituisci i tracker"
		,"tip":{
			"start":"Avvia il torrent selezionato"
			,"pause":"Pausa il torrent selezionato"
			,"recheck":"Re il torrent selezionato"
			,"recheck-confirm":"You sure you want to re-check the selected torrents? This may take some time!"
			,"start-all":"Avvia tutti"
			,"pause-all":"Pausa tutti"
			,"remove":"Rimuovi"
			,"delete-all":"Cancella tutti"
			,"delete-data":"Cancella i dati"
			,"add-torrent":"Aggiungi torrent"
			,"attribute":"Attributi"
			,"alt-speed":"Velocita alternativa"
			,"system-config":"Configurazione"
			,"system-reload":"Ricarica"
			,"about":"Riguardo questa app"
			,"autoreload-disabled":"Disabilita l'auto aggiornamento"
			,"autoreload-enabled":"Abilita l'auto aggiornamento"
			,"tracker-replace":"Sostituisci i tracker"
			,"change-download-dir":"Imposta la cartella"
			,"ui-mobile":"Interfaccia Mobile"
			,"ui-original":"Interfaccia Originale"
			,"more-peers":"Chiedi al tracker per più peer"
		}
	}
	,"title":{
		"left":"Navigazione"
		,"list":"Torrent"
		,"attribute":"Attributi"
		,"status":"Stato"
	}
	,"tree":{
		"all":"Tutti"
		,"active":"Attivi"
		,"paused":"In Pausa"
		,"downloading":"Downloading"
		,"sending":"Sending"
		,"error":"Con Errori"
		,"warning":"Con Warning"
		,"actively":"Attivi"
		,"check":"In Check"
		,"wait":"Aspettando"
		,"search-result":"Risultati della Ricerca"
		,"status":{
			"loading":"Caricando..."
		}
		,"statistics":"Statistiche"
		,"statistics":{
			"title":"Statistiche"
			,"cumulative":"Complessive"
			,"current":"Sessione corrente"
			,"uploadedBytes":"Byte Inviati: "
			,"downloadedBytes":"Byte Ricevuti: "
			,"filesAdded":"File Aggiunti: "   
			,"sessionCount":"Conto delle Sessioni: " 
			,"secondsActive":"Secondi di Attivita: "
		}
		,"servers":"Trackers"
		,"folders":"Cartelle"
		,"toolbar":{
			"nav":{
				"folders":"Cartelle"
			}
		}
	} 
	,"statusbar":{
		"downloadspeed":"Velocita di Download:"
		,"uploadspeed":"Velocita di Upload:"
		,"version":"Versione:"
	}
	,"dialog":{
		"torrent-add":{
			"download-dir":"Cartella di Download:"
			,"torrent-url":"Torrent URL:"
			,"tip-torrent-url":"È possibile inserire più URL separati da 'Invio'"
			,"autostart":"Avvia automaticamente:"
			,"tip-autostart":""
			,"set-default-download-dir":"Imposta come cartella di default"
			,"upload-file":"File Torrent:"
			,"nosource":"Nessun file torrent o URL."
			,"tip-title":"Il caricamento per file ha precedenza su quello per URL"
		}
		,"system-config":{
			"title":"Configurazione del Server"
			,"tabs":{
				"base":"Base"
				,"network":"Rete"
				,"limit":"Limiti"
				,"alt-speed":"Schedulazione"
			}
			,"config-dir":"Cartella con i file di configurazione di Transmission:"
			,"download-dir":"Cartella di download di default:"
			,"download-dir-free-space":"Spazio libero:"
			,"incomplete-dir-enabled":"Usa una cartella diversa per i file incompleti"
			,"cache-size-mb":"Dimensione della cache su disco:"
			,"rename-partial-files":"Aggiungi '.part' ai file incompleti"
			,"start-added-torrents":"Avvia automaticamente i torrent"
			,"download-queue-enabled":"Abilita la coda di download, numero di file in coda:"
			,"seed-queue-enabled":"Abilita la coda di seed, numero di file in coda:"
			,"peer-port-random-on-start":"Usa una porta casuale"
			,"port-forwarding-enabled":"Abilita port forwarding"
			,"test-port":"Testa la porta"
			,"port-is-open-true":"La porta è aperta"
			,"port-is-open-false":"La porta è chiusa"
			,"testing":"Verifico..."
			,"encryption":"Crittografia:"
			,"encryption-type":{
				"required":"Richiesta"
				,"preferred":"Preferita"
				,"tolerated":"Tollerata"
			}
			,"utp-enabled":"Abilita µTP (UPnP)"
			,"dht-enabled":"Abilita DHT"
			,"lpd-enabled":"Abilita LPD"
			,"pex-enabled":"Abilita PEX"
			,"peer-limit-global":"Numero massimo di peers:"
			,"peer-limit-per-torrent":"Numero massimo di peers per torrent:"
			,"speed-limit-down-enabled":"Velocità massima di download:"
			,"speed-limit-up-enabled":"Velocità massima di upload:"
			,"alt-speed-enabled":"Usa le velocità alternative"
			,"alt-speed-down":"Velocità massima di download:"
			,"alt-speed-up":"Velocità massima di upload:"
			,"alt-speed-time-enabled":"Usa la schedulazione"
			,"alt-speed-time":"Orario"
			,"weekday":{
				"1":"Lunedì"
				,"2":"Martedì"
				,"3":"Mercoledì"
				,"4":"Giovedì"
				,"5":"Venerdì"
				,"6":"Sabato"
				,"0":"Domenica"
			}
			,"blocklist-enabled":"Usa la blocklist"
			,"seedRatioLimited":"La ratio di upload per i torrent:"
			,"queue-stalled-enabled":"Considera i torrent inattivi come fermi:"
			,"idle-seeding-limit-enabled":"I Torrent in seeding verranno bloccati se fermi per:"
			,"minuets":"Minuti"
			,"nochange":"Nessuna modifica"
			,"saveing":"Sto Salvando..."
		}
		,"public":{
			"button-ok":"OK"
			,"button-cancel":"Cancel"
			,"button-reload":"Ricarica"
			,"button-save":"Salva"
			,"button-close":"Chiudi"
		}
		,"about":{
			"infos":"Autore: culturist<br/>Nota:Molte delle icone usate in questo programma sono prese dalla rete, se una di questa è di vostra proprietà, contattatemi e provvederò a rimuoverle."
		}
		,"torrent-remove":{
			"title":"Conferma la rimozione"
			,"confirm-text":"Sei sicuro di voler rimuovere i torrent selezionati?"
			,"remove-data":"Cancella i dati in locale"
			,"remove-error":"Cancellazione fallita!"
		}
		,"torrent-changeDownloadDir":{
			"title":"Imposta una nuova cartella"
			,"old-download-dir":"Vecchia cartella"
			,"new-download-dir":"Nuova cartella"
			,"move-data":"Se selezionato, sposta i dati dalla precedente cartella. In caso contrario, cerca nella nuova cartella i dati."
			,"set-error":"Errore!"
		}
		,"system-replaceTracker":{
			"title":"Sostituisci i Tracker"
			,"old-tracker":"Vecchio tracker"
			,"new-tracker":"Nuovo tracker"
			,"tip":"Questa funzione cercherà <b>tutti i torrent</b> nel nuovo tracker."
			,"not-found":"Tracker non trovato."
		}
	} //here
	,"torrent":{
		"fields":{
			"id":"#"
			,"name":"Nome"
			,"hashString":"HASH"
			,"downloadDir":"Cartella di download"
			,"totalSize":"Dimensione"
			,"status":"Stato"
			,"percentDone":"% di completamento"
			,"remainingTime":"Tempo rimanante"
			,"addedDate":"Creato"
			,"completeSize":"Scaricato"
			,"rateDownload":"Velocità di download"
			,"rateUpload":"Velocità di upload"
			,"leecherCount":"Leecher"
			,"seederCount":"Seeder"
			,"uploadedEver":"Inviato"
			,"uploadRatio":"Ratio"
		}
		,"status-text":{
			"0":"In Pausa"
			,"1":"Aspettando Check"
			,"2":"In Check"
			,"3":"Aspettando il download"
			,"4":"Downloading"
			,"5":"Aspettando i seed"
			,"6":"Seeding"
		}
		,"attribute":{
			"tabs":{
				"base":"Base"
				,"servers":"Trackers"
				,"files":"File"
				,"users":"Peers"
				,"config":"Configurazione"
			}
			,"files-fields":{
				"name":"Nome"
				,"length":"Dimensione"
				,"percentDone":"% di completamento"
				,"bytesCompleted":"Scaricato"
				,"wanted":"Scaricare?"
				,"priority":"Priorità"
			}
			,"servers-fields":{
				"announce":"Announce"
				,"announceState":"Stato"
				,"lastAnnounceResult":"Informazioni"
				,"lastAnnounceSucceeded":"Successo"
				,"lastAnnounceTime":"AnnounceTime"
				,"lastAnnounceTimedOut":"Scaduto"
				,"downloadCount":"Numero di download"
				,"nextAnnounceTime":"Next announce"
			}
			,"peers-fields":{
				"address":"Indirizzo IP"
				,"clientName":"Client"
				,"flagStr":"Flag"
				,"progress":"Progresso"
				,"rateToClient":"Velocità di download"
				,"rateToPeer":"Velocità di upload"
			}
			,"status":{
				"true":"Vero"
				,"false":"Falso"
			}
			,"priority":{
				"0":"Normale"
				,"1":"Alta"
				,"-1":"Bassa"
			}
			,"label":{
				"name":"Nome:"
				,"addedDate":"Data di creazione:"
				,"totalSize":"Dimensione:"
				,"completeSize":"Scaricato:"
				,"leftUntilDone":"Da scaricare:"
				,"hashString":"HASH:"
				,"downloadDir":"Cartella di download:"
				,"status":"Stato:"
				,"rateDownload":"Velocità di download:"
				,"rateUpload":"Velocità di upload:"
				,"leecherCount":"Leecher:"
				,"seederCount":"Seeder:"
				,"uploadedEver":"Inviato:"
				,"uploadRatio":"Ratio:"
				,"creator":"Creato:"
				,"dateCreated":"Data di creazione torrent:"
				,"comment":"Commento:"
				,"errorString":"Errore:"
				,"downloadLimited":"Velocità di download massima"
				,"uploadLimited":"Velocità di upload massima"
				,"peer-limit":"Numero massimo di peer"
				,"seedRatioMode":"Ratio da utilizzare"
				,"seedIdleMode":"I Torrent in seeding verranno bloccati se fermi per"
			}
			,"tip":{
				"button-allow":"Scarica i file selezionati"
				,"button-deny":"Salta i file selezionati"
				,"button-priority":"Imposta priorità"
			}
			,"other":{
				"tracker-remove-confim":"Sei certo di voler rimuovere questi tracker?"
			}
		}
	}
	,"torrent-head":{
		"buttons":{
			"autoExpandAttribute":"Espandi automaticamante gli attributi"
		}
	}
	,"public":{
		"text-unknown":"Sconosciuto"
		,"text-drop-title":"Trrascina i file qui per aggiungerli a Transmission."
		,"text-saved":"Salvato"
		,"text-nochange":"Nessuna modifica"
		,"text-info":"Info"
		,"text-confirm":"sei sicuro?"
		,"text-browsers-not-support-features":"Il browser utilizzato non supporta questa funzione!"
		,"text-download-update":"Scarica l'aggiornamento"
		,"text-have-update":"È disponibile un aggiornamento"
	}
};