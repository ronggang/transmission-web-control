// lang file
system.lang = {
	"name":"fr"
	,"system":{
		"title":"Interface Web Transmission"
		,"status":{
			"connect":"Connexion..."
			,"connected":"Connecté"
			,"queue":"File d'attente:"
			,"queuefinish":"La file d'attente est terminée."
			,"notfinal":"Non terminée"
		}
	}
	,"error":{
		"data-error":"Erreur de données."
		,"data-post-error":"Erreur lors de l'envoi de données."
	}
	,"config":{
		"save-path":"Dossier de téléchargement"
	}
	,"toolbar":{
		"start":"Démarrer"
		,"pause":"Pause"
		,"recheck":"Revérification"
		,"start-all":"Tout démarrer"
		,"pause-all":"Tout en pause"
		,"remove":"Supprimer"
		,"remove-all":"Tout supprimer"
		,"remove-data":"Supprimer les données"
		,"add-torrent":"Ajouter Torrent"
		,"attribute":"Attributs"
		,"alt-speed":"Vitesse alternative"
		,"system-config":"Configuration"
		,"system-reload":"Recharger"
		,"about":"A propos"
		,"reload-time":"Rafraîchissement auto:"
		,"reload-time-unit":"/s"
		,"autoreload-disabled":"Désactivé"
		,"autoreload-enabled":"Activé"
		,"search-prompt":"Chercher torrents"
		,"tracker-replace":"Changer tracker"
		,"queue":"File d'attente"
		,"ui-mobile":"Interface Mobile"
		,"ui-original":"Interface originale"
		,"ui-computer":"Interface bureau"
		,"plugin":"Extensions/plugins"
		,"tip":{
			"start":"Démarre les torrents sélectionnés"
			,"pause":"Met en pause les torrents sélectionnés"
			,"recheck":"Vérifie les torrents sélectionnés"
			,"recheck-confirm":"Etes-vous sûr de vouloir vérifier les torrents sélectionnés? Cela peut être long!"
			,"start-all":"Tout démarrer"
			,"pause-all":"Tout mettre en pause"
			,"remove":"Supprimer"
			,"delete-all":"Tout supprimer"
			,"delete-data":"Supprimer les données"
			,"add-torrent":"Ajouter torrent(s)"
			,"attribute":"Attributs"
			,"alt-speed":"Vitesse alternative"
			,"system-config":"Configuration"
			,"system-reload":"Recharger"
			,"about":"A propos de cette app"
			,"autoreload-disabled":"Désactiver rafraîchissement auto"
			,"autoreload-enabled":"Activer rafraîchissement auto"
			,"tracker-replace":"Changer de trackers"
			,"change-download-dir":"Définir dossier de téléchargement"
			,"ui-mobile":"Interface Mobile"
			,"ui-original":"Interface originale"
			,"more-peers":"Interroger tracker pour plus de peers"
		}
	}
	,"menus":{
		"queue":{
			"move-top":"Placer en haut"
			,"move-up":"Remonter"
			,"move-down":"Reculer d'un cran"
			,"move-bottom":"Placer en bas"
		}
		,"plugin": {
			"auto-match-data-folder": "Correspondance auto des dossiers de données"
		}
	}
	,"title":{
		"left":"Navigation"
		,"list":"Torrents"
		,"attribute":"Attributs"
		,"status":"Statut"
	}
	,"tree":{
		"all":"Tous"
		,"active":"Actifs"
		,"paused":"Mis en pause"
		,"downloading":"Téléchargement"
		,"sending":"Envoi"
		,"error":"Erreur"
		,"warning":"Attention"
		,"actively":"Actifs"
		,"check":"Vérification"
		,"wait":"En attente"
		,"search-result":"Résultats de recherche"
		,"status":{
			"loading":"Chargement..."
		}
		,"statistics":"Statistiques"
		,"statistics":{
			"title":"Statistiques"
			,"cumulative":"Cumulatives"
			,"current":"Actuelles"
			,"uploadedBytes":"Envoyé: "
			,"downloadedBytes":"Téléchargé: "
			,"filesAdded":"FichiersAjoutés: "   
			,"sessionCount":"NombreDeSessions: " 
			,"secondsActive":"ActifDepuis: "
		}
		,"servers":"Trackers"
		,"folders":"Dossiers"
		,"toolbar":{
			"nav":{
				"folders":"Dossiers"
			}
		}
	}
	,"statusbar":{
		"downloadspeed":"Vitesse de téléchargement:"
		,"uploadspeed":"Vitesse d'envoi:"
		,"version":"Version:"
	}
	,"dialog":{
		"torrent-add":{
			"download-dir":"Dossier de téléchargement:"
			,"torrent-url":"URL du torrent:"
			,"tip-torrent-url":"Astuce：Séparer les URLs avec une virgule \",\""
			,"autostart":"Démarrage auto:"
			,"tip-autostart":""
			,"set-default-download-dir":"Définir comme dossier de téléchargement par défaut"
			,"upload-file":"Fichier(s) torrents:"
			,"nosource":"Aucun torrent ou URL."
			,"tip-title":"Le fichier torrent a la priorité sur les URLs si les deux sont présents"
		}
		,"system-config":{
			"title":"Configuration serveur"
			,"tabs":{
				"base":"Base"
				,"network":"Réseau"
				,"limit":"Limites"
				,"alt-speed":"Plannificateur"
				,"dictionary-folders":"Dictionnaire de dossiers"
			}
			,"config-dir":"Emplacement du dossier de configuration de transmission:"
			,"download-dir":"Chemin par défaut de téléchargement:"
			,"download-dir-free-space":"Espace libre:"
			,"incomplete-dir-enabled":"Utiliser le dossier \"incomplete\""
			,"cache-size-mb":"Taille du cache de disque:"
			,"rename-partial-files":"Ajouter '.part' aux fichiers incomplets"
			,"start-added-torrents":"Démarrer automatiquement le torrent"
			,"download-queue-enabled":"Activer la file d'attente \"téléchargement\", nombre max de fichiers en file d'attente:"
			,"seed-queue-enabled":"Activer la file d'attente \"seed\", nombre max de fichiers en file d'attente:"
			,"peer-port-random-on-start":"Utiliser un port aléatoire au démarrage"
			,"port-forwarding-enabled":"Activer la redirection de port"
			,"test-port":"Tester le port"
			,"port-is-open-true":"Le port est ouvert"
			,"port-is-open-false":"Le port est fermé"
			,"testing":"En test..."
			,"encryption":"Cryptage:"
			,"encryption-type":{
				"required":"Requis"
				,"preferred":"Préféré"
				,"tolerated":"Toléré"
			}
			,"utp-enabled":"Activer µTP (UPnP)"
			,"dht-enabled":"Activer DHT"
			,"lpd-enabled":"Activer LPD"
			,"pex-enabled":"Activer PEX"
			,"peer-limit-global":"Nombre maximum de peers total:"
			,"peer-limit-per-torrent":"Nombre maximum de peers par torrent:"
			,"speed-limit-down-enabled":"Limiter la vitesse de téléchargement:"
			,"speed-limit-up-enabled":"Limiter la vitesse d'envoi:"
			,"alt-speed-enabled":"Utiliser les vitesses alternatives"
			,"alt-speed-down":"Limiter la vitesse de téléchargement:"
			,"alt-speed-up":"Limiter la vitesse d'envoi:"
			,"alt-speed-time-enabled":"Utiliser plannificateur"
			,"alt-speed-time":"Horaires："
			,"weekday":{
				"1":"Lundi"
				,"2":"Mardi"
				,"3":"Mercredi"
				,"4":"Jeudi"
				,"5":"Vendredi"
				,"6":"Samedi"
				,"0":"Dimanche"
			}
			,"blocklist-enabled":"Utiliser la liste de blocage"
			,"blocklist-size":"La liste de blocage possède %n règles."
			,"seedRatioLimited":"Le ratio de partage des torrents par défaut:"
			,"queue-stalled-enabled":"Durée d'inactivité après laquelle le torrent est considéré comme bloqué:"
			,"idle-seeding-limit-enabled":"Durée d'inactivité après laquelle le torrent en seed est stoppé :"
			,"minutes":"Minutes"
			,"nochange":"Pas de changement"
			,"saving":"Sauvegarde..."
		}
		,"public":{
			"button-ok":"OK"
			,"button-cancel":"Annuler"
			,"button-reload":"Recharger"
			,"button-save":"Sauvegarder"
			,"button-close":"Fermer"
			,"button-update":"Mise à jour"
			,"button-config":"Configuration"
		}
		,"about":{
			"infos":"Auteur：culturist<br/>Statement：La plupart des icônes utilisées proviennent d'internet, toutefois, si vous constatez une violation de vos droits, contactez moi !"
			,"check-update":"Rechercher mise à jour"
		}
		,"torrent-remove":{
			"title":"Confirmer la suppression"
			,"confirm-text":"Etes-vous sûr de vouloir supprimer ce(s) torrent(s)?"
			,"remove-data":"Supprimer les données"
			,"remove-error":"Echec de la suppression!"
		}
		,"torrent-changeDownloadDir":{
			"title":"Définir nouveau dossier"
			,"old-download-dir":"Ancien dossier:"
			,"new-download-dir":"Nouveau dossier:"
			,"move-data":"Si coché, déplace les données vers le nouveau dossier. Sinon, scan du nouveau dossier pour de nouveaux fichiers."
			,"set-error":"Erreur!"
			,"recheck-data":"Vérifier les données."
		}
		,"system-replaceTracker":{
			"title":"Changer de Trackers"
			,"old-tracker":"Ancientracker:"
			,"new-tracker":"Nouveau tracker:"
			,"tip":"Cette fonction trouvera <b>tous les torrents</b> Tracker."
			,"not-found":"Le tracker n'a pas été trouvé."
		}
		,"auto-match-data-folder":{
			"title":"Correspondance auto des dossiers de données"
			,"torrent-count":"Nombre de torrents:"
			,"folder-count":"Nombre de dossiers:"
			,"dictionary":"Dictionnaire de dossiers"
			,"time-begin":"Heure de début:"
			,"time-now":"Maintenant:"
			,"status":"Statut:"
			,"ignore":"Ignorer"
			,"working-close-confirm":"Est en fonctionnement, êtes-vous sûr de vouloir fermer?"
			,"time-interval":"Intervalle (secondes):"
			,"work-mode-title":"Mode:"
			,"work-mode":{
				"1":"Correspondance par torrent"
				,"2":"Correspondance par dossier"
			}
		}
	}
	,"torrent":{
		"fields":{
			"id":"#"
			,"name":"Nom"
			,"hashString":"HASH"
			,"downloadDir":"Dossier de téléchargement"
			,"totalSize":"Taille totale"
			,"status":"Statut"
			,"percentDone":"Avancement"
			,"remainingTime":"Temps restant"
			,"addedDate":"Date d'ajout"
			,"completeSize":"Téléchargé"
			,"rateDownload":"Vitesse de téléchargement"
			,"rateUpload":"Vitesse d'envoi"
			,"leecherCount":"Leecher"
			,"seederCount":"Seeder"
			,"uploadedEver":"Envoyé"
			,"uploadRatio":"Ratio"
		}
		,"status-text":{
			"0":"En pause"
			,"1":"En attente de vérification"
			,"2":"Vérification"
			,"3":"En attente de téléchargement"
			,"4":"Téléchargment"
			,"5":"En attende d'envoi"
			,"6":"Envoie"
		}
		,"attribute":{
			"tabs":{
				"base":"Base"
				,"servers":"Trackers"
				,"files":"Fichiers"
				,"users":"Peers"
				,"config":"Configuration"
			}
			,"files-fields":{
				"name":"Nom"
				,"length":"Taille"
				,"percentDone":"Pourcentage effectué"
				,"bytesCompleted":"Taille totale"
				,"wanted":"Wanted"
				,"priority":"Priorité"
			}
			,"servers-fields":{
				"announce":"Annonce"
				,"announceState":"Statut"
				,"lastAnnounceResult":"Infos"
				,"lastAnnounceSucceeded":"Réussie"
				,"lastAnnounceTime":"Temps d'annonce"
				,"lastAnnounceTimedOut":"Durée dépassée"
				,"downloadCount":"Nombre de téléchargement"
				,"nextAnnounceTime":"Prochaine annonce"
			}
			,"peers-fields":{
				"address":"Adresse IP"
				,"clientName":"Client"
				,"flagStr":"Drapeau"
				,"progress":"Progression"
				,"rateToClient":"Taux client"
				,"rateToPeer":"Taux peer"
			}
			,"status":{
				"true":"Vrai"
				,"false":"Faux"
			}
			,"priority":{
				"0":"Normale"
				,"1":"Haute"
				,"-1":"Basse"
			}
			,"label":{
				"name":"Nom:"
				,"addedDate":"Date d'ajout:"
				,"totalSize":"Taille totale:"
				,"completeSize":"Taille complétée:"
				,"leftUntilDone":"Restant:"
				,"hashString":"HASH:"
				,"downloadDir":"Dossier de téléchargement:"
				,"status":"Statut:"
				,"rateDownload":"Taux de téléchargement:"
				,"rateUpload":"Taux d'envoi:"
				,"leecherCount":"Leecher:"
				,"seederCount":"Seeder:"
				,"uploadedEver":"Envoyé:"
				,"uploadRatio":"Ratio d'envoi:"
				,"creator":"Créateur:"
				,"dateCreated":"Date de création:"
				,"comment":"Commentaire:"
				,"errorString":"Error string:"
				,"downloadLimited":"Vitesse limite de téléchargement："
				,"uploadLimited":"Vitesse limite d'envoie："
				,"peer-limit":"Nombre de peers maximum："
				,"seedRatioMode":"Ratio de seed："
				,"seedIdleMode":"Stopper le torrent après une période d'inactivité de："
			}
			,"tip":{
				"button-allow":"Télécharger le(s) fichier(s) sélectionné(s)"
				,"button-deny":"Passer le(s) fichier(s) sélectionné(s)"
				,"button-priority":"Définir la priorité"
			}
			,"other":{
				"tracker-remove-confim":"Etes-vous sûr de vouloir supprimer ce tracker?"
			}
		}
	}
	,"torrent-head":{
		"buttons":{
			"autoExpandAttribute":"Affichage infos torrents"
		}
	}
	,"public":{
		"text-unknown":"Inconnu"
		,"text-drop-title":"Glisser déposer le fichier dans la zone pour l'ajouter à Transmission."
		,"text-saved":"Sauvegardé"
		,"text-nochange":"Pas de changement"
		,"text-info":"Infos"
		,"text-confirm":"Etes-vous sûr?"
		,"text-browsers-not-support-features":"Votre navigateur ne supporte pas cette fonctionnalité!"
		,"text-download-update":"Télécharger cette mise à jour"
		,"text-have-update":"Une mise à jour est disponible"
	}
};
