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
		,"reload-time":"Auto-verversen:"
		,"reload-time-unit":"sec"
		,"autoreload-disabled":"Uitgeschakeld"
		,"autoreload-enabled":"Ingeschakeld"
		,"search-prompt":"Zoek Lokale Torrents"
		,"tracker-replace":"Vervang trackers"
		,"tip":{
			"start":"Start de geselecteerde torrents"
			,"pause":"Pauzeer de geselecteerde torrents"
			,"recheck":"Verifi&euml;ren"
			,"recheck-confirm":"Weet je zeker dat je de geselecteerde torrents wilt Verifi&euml;ren? Dit kan enige tijd duren!"
			,"start-all":"Start alles"
			,"pause-all":"Pauzeer alles"
			,"remove":"Verwijderen"
			,"delete-all":"Torrent en data verwijderen"
			,"delete-data":"Delete-data"
			,"add-torrent":"Torrent(s) toevoegen"
			,"attribute":"Attribute"
			,"alt-speed":"Alt-snelheid"
			,"system-config":"Instellingen"
			,"system-reload":"Opnieuw laden"
			,"about":"Over deze app"
			,"autoreload-disabled":"Auto-verversen uitzetten"
			,"autoreload-enabled":"Auto-verversen aanzetten"
			,"tracker-replace":"Vervang trackers"
			,"change-download-dir":"Locatie instellen"
			,"ui-mobile":"Mobiele UI"
			,"ui-original":"Originele UI"
			,"more-peers":"Tracker om meer peers vragen"
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
				"folders":"Toon mappen"
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
			"download-dir":"Downloadmap:"
			,"torrent-url":"Torrent URL:"
			,"tip-torrent-url":"Tip: je kunt meerdere torrents scheiden met 'Enter'"
			,"autostart":"Direct starten:"
			,"tip-autostart":"Start direct met downloaden"
			,"set-default-download-dir":"Instellen als standaardmap"
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
			,"start-added-torrents":"Start toegevoegde torrent automatisch"
			,"download-queue-enabled":"Aantal gelijktijdige downloads:"
			,"seed-queue-enabled":"Aantal gelijktijdige uploads:"
			,"peer-port-random-on-start":"Neem een willekeurige poort als daemon opstart"
			,"port-forwarding-enabled":"Portforwarding ingeschakeld"
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
			,"utp-enabled":"Gebruik µTP (UPnP)"
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
			,"alt-speed-time-enabled":"Gebruik tijdschema"
			,"alt-speed-time":"Tijdbestek"
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
			,"queue-stalled-enabled":"Of inactieve torrents als opgehouden moeten worden behandeld:"
			,"idle-seeding-limit-enabled":"Stop seeden wanneer inactief gedurende:"
			,"minuets":"Minuten"
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
			"infos":"Auteur: culturist <br/> Verklaring: De meeste van de pictogrammen in dit programma komen ergens van internet. Schend dit uw rechten? Neem dan contact met mij op om deze te verwijderen."
		}
		,"torrent-remove":{
			"title":"Verwijderen bevestigen"
			,"confirm-text":"Weet je zeker dat je de gemarkeerde torrent(s) wilt verwijderen?"
			,"remove-data":"Verwijder lokale data (data op schijf)"
			,"remove-error":"Verwijderen is mislukt!"
		}
		,"torrent-changeDownloadDir":{
			"title":"Locatie instellen"
			,"old-download-dir":"Oude locatie:"
			,"new-download-dir":"Nieuwe locatie:"
			,"move-data":"Indien aangevinkt, verplaatsen van de vorige locatie. Zo niet, gebruik 'Nieuwe locatie' voor bestanden."
			,"set-error":"Locatie instellen mislukt!"
		}
		,"system-replaceTracker":{
			"title":"Vervang Trackers"
			,"old-tracker":"Oude tracker:"
			,"new-tracker":"Nieuwe tracker:"
			,"tip":"Deze functie vindt <b>alle torrent</b> trackers"
			,"not-found":"Tracker is niet gevonden."
		}
	}
	,"torrent":{
		"fields":{
			"id":"#"
			,"name":"Naam"
			,"hashString":"HASH"
			,"downloadDir":"Downloadmap"
			,"totalSize":"Totale grootte"
			,"status":"Status"
			,"percentDone":"Gereed"
			,"remainingTime":"Resterende tijd"
			,"addedDate":"Toegevoegd op"
			,"completeSize":"Grootte voltooid"
			,"rateDownload":"Download snelheid"
			,"rateUpload":"Upload snelheid"
			,"leecherCount":"Leecher"
			,"seederCount":"Seeder"
			,"uploadedEver":"Ge&uuml;pload"
			,"uploadRatio":"Ratio"
		}
		,"status-text":{
			"0":"Gepauzeerd"
			,"1":"Wacht op check"
			,"2":"Verifi&euml;ren"
			,"3":"In wachtrij"
			,"4":"Downloaden"
			,"5":"Seeding-wachtwrij"
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
				,"lastAnnounceTime":"Tijd van aankondiging"
				,"lastAnnounceTimedOut":"Time-out"
				,"downloadCount":"Aantal downloads"
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
				,"leftUntilDone":"Over tot voltooid:"
				,"hashString":"HASH:"
				,"downloadDir":"Download dir:"
				,"status":"Status:"
				,"rateDownload":"Downloadsnelheid:"
				,"rateUpload":"Uploadsnelheid:"
				,"leecherCount":"Leecher:"
				,"seederCount":"Seeder:"
				,"uploadedEver":"Ge&uuml;pload:"
				,"uploadRatio":"Upload Ratio:"
				,"creator":"Maker:"
				,"dateCreated":"Gemaakt op:"
				,"comment":"Commentaar:"
				,"errorString":"Foutmelding(en):"
				,"downloadLimited":"Maximum algemene download snelheid"
				,"uploadLimited":"Maximum algemene upload snelheid"
				,"peer-limit":"Maximum aantal peers per torrent:"
				,"seedRatioMode":"Seed ratio:"
				,"seedIdleMode":"Stop seeden wanneer inactief gedurende:"
			}
			,"tip":{
				"button-allow":"Download gemarkeerd(e) bestand(en)"
				,"button-deny":"Gemarkeerd(e) bestand(en) overslaan"
				,"button-priority":"Ingestelde prioriteit"
			}
			,"other":{
				"tracker-remove-confim":"Weet je zeker dat je deze tracker wilt verwijderen?"
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
		,"text-drop-title":"Bestand Slepen en neerzetten in dit vlak om aan Transmission toe te voegen."
		,"text-saved":"Opgeslagen"
		,"text-nochange":"Geen verandering"
		,"text-info":"Info"
		,"text-confirm":"Weet je het zeker?"
		,"text-browsers-not-support-features":"Jouw browser ondersteunt deze functie niet!"
		,"text-download-update":"Download deze update"
		,"text-have-update":"Er is een update beschikbaar"
	}
};
