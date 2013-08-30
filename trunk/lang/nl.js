// lang file
system.lang = {
	"name":"nl"
	,"system":{
		"title":"Transmission WEB Control"
		,"status":{
			"connect":"Verbinden..."
			,"connected":"Verbonden"
			,"queue":"Wachtrij:"
			,"queuefinish":"De wachtrij(en) zijn gereed."
			,"notfinal":"Not final"
		}
	}
	,"error":{
		"data-error":"Data error."
		,"data-post-error":"Data post error."
	}
	,"config":{
		"save-path":"Download dir"
	}
	,"toolbar":{
		"start":"Start"
		,"pause":"Pauze"
		,"recheck":"Verifi&euml;ren"
		,"start-all":"Start alles"
		,"pause-all":"Pauzeer alles"
		,"remove":"Verwijder"
		,"remove-all":"Verwijder Alles"
		,"remove-data":"Verwijder data"
		,"add-torrent":"Toevoegen"
		,"attribute":"Attribute"
		,"alt-speed":"Alt-Snelheid"
		,"system-config":"Instellingen"
		,"system-reload":"Opnieuw laden"
		,"about":"Over"
		,"reload-time":"Automatisch verversen:"
		,"reload-time-unit":"s/tijd"
		,"autoreload-disabled":"Uitgeschakeld"
		,"autoreload-enabled":"Ingeschakeld"
		,"search-prompt":"Zoek Locale Torrents"
		,"tracker-replace":"Vervang trackers"
		,"tip":{
			"start":"Start de geselecteerde torrents"
			,"pause":"Pauzeer de geselecteerde torrents"
			,"recheck":"Verifi&euml;ren"
			,"recheck-confirm":"Weet u zeker dat u de geselecteerde torrents wilt Verifi&euml;ren? Dit kan enige tijd duren!"
			,"start-all":"Start alles"
			,"pause-all":"Pauzeer alles"
			,"remove":"Verwijderen"
			,"delete-all":"Torrent en data verwijderen"
			,"delete-data":"Delete-data"
			,"add-torrent":"Toevoegen torrent(s)"
			,"attribute":"Attribute"
			,"alt-speed":"Alt-snelheid"
			,"system-config":"Instellingen"
			,"system-reload":"Opnieuw laden"
			,"about":"Over deze app"
			,"autoreload-disabled":"Automatisch Verversen uit zetten"
			,"autoreload-enabled":"Automatisch verversen aan zetten"
			,"tracker-replace":"Vervang trackers"
			,"change-download-dir":"Locatie instellen"
			,"ui-mobile":"Mobiele UI"
			,"ui-original":"Originele UI"
			,"more-peers":"Tracker voor meer peers vragen"
		}
	}
	,"title":{
		"left":"Navigatie"
		,"list":"Torrents"
		,"attribute":"Kenmerken"
		,"status":"Status"
	}
	,"tree":{
		"all":"Alles"
		,"active":"Actief"
		,"paused":"Gepauzeerd"
		,"downloading":"Downloaden"
		,"sending":"Uploaden"
		,"error":"Fout"
		,"warning":"Waarschuwing"
		,"actively":"Actief"
		,"check":"Controleren"
		,"wait":"Wachten"
		,"search-result":"Zoekresultaat"
		,"status":{
			"loading":"Bezig met laden..."
		}
		,"statistics":"Statistieken"
		,"statistics":{
			"title":"Statistieken"
			,"cumulative":"Cumulatief"
			,"current":"Huidig"
			,"uploadedBytes":"Ge&uuml;pload: "
			,"downloadedBytes":"Gedownload: "
			,"filesAdded":"Bestanden die zijn toegevoegd: "   
			,"sessionCount":"Sessie teller: " 
			,"secondsActive":"Actief: "
		}
		,"servers":"Trackers"
		,"folders":"Mappen"
		,"toolbar":{
			"nav":{
				"folders":"Mappen"
			}
		}
	}
	,"statusbar":{
		"downloadspeed":"Download snelheid:"
		,"uploadspeed":"Upload snelheid:"
		,"version":"Versie:"
	}
	,"dialog":{
		"torrent-add":{
			"download-dir":"Download Dir:"
			,"torrent-url":"Torrent URL:"
			,"tip-torrent-url":"Tip：scheid meerdere torrents met 'Enter'"
			,"autostart":"Auto Start:"
			,"tip-autostart":""
			,"set-default-download-dir":"Instellen als standaard dir"
			,"upload-file":"Torrent bestand(en):"
			,"nosource":"Geen torrent bestand of URL."
			,"tip-title":"Uploaden van het torrent-bestand heeft voorrang boven de URL van de torrent"
		}
		,"system-config":{
			"title":"Server Instellingen"
			,"tabs":{
				"base":"Algemeen"
				,"network":"Netwerk"
				,"limit":"Begrenzen"
				,"alt-speed":"Gepland"
			}
			,"config-dir":"Locatie van de configuratie directory:"
			,"download-dir":"Standaardpad voor downloaden:"
			,"download-dir-free-space":"Vrije ruimte:"
			,"incomplete-dir-enabled":"Locatie voor onvoltooide bestanden"
			,"cache-size-mb":"Schijf cache grootte:"
			,"rename-partial-files":"Voeg de '.part' extensie toe aan onvoltooide bestanden"
			,"start-added-torrents":"Automatisch starten toegevoegde torrents"
			,"download-queue-enabled":"Download wachtrij grootte:"
			,"seed-queue-enabled":"Upload wachtrij grootte:"
			,"peer-port-random-on-start":"Neem een willekeurige poort als daemon opstart"
			,"port-forwarding-enabled":"Poort forwarding ingeschakeld"
			,"test-port":"Test de poort"
			,"port-is-open-true":"De poort is open"
			,"port-is-open-false":"De poort is gesloten"
			,"testing":"Testen..."
			,"encryption":"Encryptie:"
			,"encryption-type":{
				"required":"Encryptie vereist"
				,"preferred":"Encryptie aan"
				,"tolerated":"Encryptie uit"
			}
			,"utp-enabled":"Enabled uTP(UPnP)"
			,"dht-enabled":"Distributed Hash Table (DHT)"
			,"lpd-enabled":"Local Peer Discovery (LPD)"
			,"pex-enabled":"Peer uitwisseling"
			,"peer-limit-global":"Maximum aantal peers:"
			,"peer-limit-per-torrent":"Maximum aantal peers per torrent:"
			,"speed-limit-down-enabled":"Maximum download snelheid:"
			,"speed-limit-up-enabled":"Maximum upload snelheid:"
			,"alt-speed-enabled":"Gebruik alternatieve bandbreedte instellingen"
			,"alt-speed-down":"Maximum download snelheid:"
			,"alt-speed-up":"Maximum upload snelheid:"
			,"alt-speed-time-enabled":"Gebruik planner"
			,"alt-speed-time":"Tijd："
			,"weekday":{
				"1":"Maandag"
				,"2":"Dinsdag"
				,"3":"Woensdag"
				,"4":"Donderdag"
				,"5":"Vrijdag"
				,"6":"Zaterdag"
				,"0":"Zondag"
			}
			,"blocklist-enabled":"Blocklist gebruiken"
			,"seedRatioLimited":"Seed ratio:"
			,"queue-stalled-enabled":"Whether or not to consider idle torrents as stalled:"
			,"idle-seeding-limit-enabled":"Stop seeden wanneer inactief gedurende:"
			,"minuets":"Minuets"
			,"nochange":"Geen wijzigingen"
			,"saveing":"Verwerken..."
		}
		,"public":{
			"button-ok":"OK"
			,"button-cancel":"Annuleren"
			,"button-reload":"Opnieuw laden"
			,"button-save":"Opslaan"
			,"button-close":"Sluiten"
		}
		,"about":{
			"infos":"Auteur: culturist <br/> Verklaring: De meeste van de pictogrammen in dit programma komen vanaf het netwerk, als dit uw rechten schend, neem dan contact met mij op om deze te verwijderen."
		}
		,"torrent-remove":{
			"title":"Verwijderen bevestigen"
			,"confirm-text":"Weet je zeker dat je de gemarkeerde torrent(s) wilt verwijderen?"
			,"remove-data":"Verwijder locale data"
			,"remove-error":"Verwijderen is mislukt!"
		}
		,"torrent-changeDownloadDir":{
			"title":"Locatie instellen"
			,"old-download-dir":"Oude locatie:"
			,"new-download-dir":"Nieuwe locatie:"
			,"move-data":"Indien aangevinkt, verplaatsen van de vorige locatie. anders, zoeken 'Nieuwe locatie' voor bestanden."
			,"set-error":"Locatie instellen mislukt!"
		}
		,"system-replaceTracker":{
			"title":"Vervang Trackers"
			,"old-tracker":"Oude tracker："
			,"new-tracker":"Nieuwe tracker："
			,"tip":"Deze functie vindt <b>alle torrent</b> Trackers"
			,"not-found":"Tracker is niet gevonden."
		}
	}
	,"torrent":{
		"fields":{
			"id":"#"
			,"name":"Naam"
			,"hashString":"HASH"
			,"downloadDir":"Download Dir"
			,"totalSize":"Totale grootte"
			,"status":"Status"
			,"percentDone":"Gereed"
			,"remainingTime":"Resterende tijd"
			,"addedDate":"Toegevoegd op"
			,"completeSize":"Grootte voltooid"
			,"rateDownload":"Rate download"
			,"rateUpload":"Rate upload"
			,"leecherCount":"Leecher"
			,"seederCount":"Seeder"
			,"uploadedEver":"Ge&uuml;pload"
			,"uploadRatio":"Ratio"
		}
		,"status-text":{
			"0":"Gepauzeerd"
			,"1":"Wacht check"
			,"2":"Verifi&euml;ren"
			,"3":"Wacht download"
			,"4":"Downloaden"
			,"5":"Wacht seed"
			,"6":"Seeding"
		}
		,"attribute":{
			"tabs":{
				"base":"Algemeen"
				,"servers":"Trackers"
				,"files":"Bestanden"
				,"users":"Peers"
				,"config":"Instellingen"
			}
			,"files-fields":{
				"name":"Naam"
				,"length":"Totale grootte"
				,"percentDone":"Gereed"
				,"bytesCompleted":"Voltooid"
				,"wanted":"Gewenst"
				,"priority":"Prioriteit"
			}
			,"servers-fields":{
				"announce":"Aangekondigd bij"
				,"announceState":"Status"
				,"lastAnnounceResult":"Info"
				,"lastAnnounceSucceeded":"Geslaagd"
				,"lastAnnounceTime":"Tid van aankondiging"
				,"lastAnnounceTimedOut":"Time-out"
				,"downloadCount":"Aantal Downloads"
				,"nextAnnounceTime":"Volgende aankondiging"
			}
			,"peers-fields":{
				"address":"IP adres"
				,"clientName":"Client"
				,"flagStr":"Flag"
				,"progress":"Voortgang"
				,"rateToClient":"RateToClient"
				,"rateToPeer":"RateToPeer"
			}
			,"status":{
				"true":"Ja"
				,"false":"Nee"
			}
			,"priority":{
				"0":"Normaal"
				,"1":"Hoog"
				,"-1":"Laag"
			}
			,"label":{
				"name":"Naam:"
				,"addedDate":"Toegevoegd op:"
				,"totalSize":"Totale grootte:"
				,"completeSize":"Groote voltooid:"
				,"leftUntilDone":"Ovet tot voltooid:"
				,"hashString":"HASH:"
				,"downloadDir":"Download dir:"
				,"status":"Status:"
				,"rateDownload":"Rate download:"
				,"rateUpload":"Rate upload:"
				,"leecherCount":"Leecher:"
				,"seederCount":"Seeder:"
				,"uploadedEver":"Ge&uuml;pload:"
				,"uploadRatio":"Upload Ratio:"
				,"creator":"Maker:"
				,"dateCreated":"Gemaakt op:"
				,"comment":"Commentaar:"
				,"errorString":"foutreeks:"
				,"downloadLimited":"Maximum algemene download snelheid"
				,"uploadLimited":"Maximum algemene upload snelheid"
				,"peer-limit":"Maximum aantal peers per torrent："
				,"seedRatioMode":"Seed ratio："
				,"seedIdleMode":"Stop seeden wanneer inactief gedurende："
			}
			,"tip":{
				"button-allow":"Download gemarkeerd(e) bestand(en)"
				,"button-deny":"Gemarkeerd(e) bestand(en) overslaan"
				,"button-priority":"Ingestelde prioriteit"
			}
			,"other":{
				"tracker-remove-confim":"Bent u er zeker van dat u deze Tracker wilt verwijderen?"
			}
		}
	}
	,"torrent-head":{
		"buttons":{
			"autoExpandAttribute":"Automatisch uitvouwen kenmerken"
		}
	}
	,"public":{
		"text-unknown":"Onbekend"
		,"text-drop-title":"Bestand Slepen en neerzetten in de regio om aan Transmission toe te voegen ."
		,"text-saved":"Opgeslagen"
		,"text-nochange":"Geen verandering"
		,"text-info":"Info"
		,"text-confirm":"Weet u het zeker?"
		,"text-browsers-not-support-features":"De huidige browser ondersteunt deze functie niet!"
		,"text-download-update":"Download deze update"
		,"text-have-update":"Er is een update beschikbaar"
	}
};