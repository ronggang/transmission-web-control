// lang file
system.lang = {
	"name":"es"
	,"system":{
		"title":"Transmission WEB Control"
		,"status":{
			"connect":"Conectando..."
			,"connected":"Conectado"
			,"queue":"Cola:"
			,"queuefinish":"Cola(s) finalizada(s)."
			,"notfinal":"No final"
		}
	}
	,"error":{
		"data-error":"Error de datos."
		,"data-post-error":"Error enviando datos."
	}
	,"config":{
		"save-path":"Carpeta descargas"
	}
	,"toolbar":{
		"start":"Iniciar"
		,"pause":"Pausar"
		,"recheck":"Comprobar"
		,"start-all":"Iniciar todos"
		,"pause-all":"Pausar todos"
		,"remove":"Eliminar"
		,"remove-all":"Eliminar todos"
		,"remove-data":"Eliminar datos"
		,"add-torrent":"Añadir torrent"
		,"attribute":"Atributorrrr"
		,"alt-speed":"Velocidad alternativa"
		,"system-config":"Configuración del servidor"
		,"system-reload":"Actualizar"
		,"about":"Acerca"
		,"reload-time":"Actualizar cada:"
		,"reload-time-unit":"segundos"
		,"autoreload-disabled":"Desactivado"
		,"autoreload-enabled":"Activado"
		,"search-prompt":"Búsqueda local"
		,"tracker-replace":"Reemplazar trackers"
		,"tip":{
			"start":"Iniciar torrents seleccionados"
			,"pause":"Pausar torrents seleccionados"
			,"recheck":"Comprobar torrents seleccionados"
			,"recheck-confirm":"¿Seguro que deseas comprobar los torrents seleccionado? ¡Podría tardar bastante tiempo!"
			,"start-all":"Iniciar todos los torrents"
			,"pause-all":"Pausar todos los torrents"
			,"remove":"Eliminar torrents seleccionados"
			,"delete-all":"Eliminar todos"
			,"delete-data":"Eliminar datos"
			,"add-torrent":"Añadir torrent(s)"
			,"attribute":"Atributo"
			,"alt-speed":"Velocidad alternativa"
			,"system-config":"Configuración del servidor"
			,"system-reload":"Recargar"
			,"about":"Acerca de"
			,"autoreload-disabled":"Desactivar actualización automática"
			,"autoreload-enabled":"Activar actualización automática"
			,"tracker-replace":"Reemplazar trackers"
			,"change-download-dir":"Establecer ubicación"
			,"ui-mobile":"UI Móviles"
			,"ui-original":"Original UI"
			,"more-peers":"Solicitar más peers al trackers "
		}
	}
	,"title":{
		"left":"Navegación"
		,"list":"Torrents"
		,"attribute":"Parámetros del torrent"
		,"status":"Estado"
	}
	,"tree":{
		"all":"Todos"
		,"active":"Activos"
		,"paused":"Pausados"
		,"downloading":"Descargando"
		,"sending":"Subiendo"
		,"error":"Errores"
		,"warning":"Avisos"
		,"actively":"Activos"
		,"check":"Comprobando"
		,"wait":"Esperando"
		,"search-result":"Búsqueda"
		,"status":{
			"loading":"Cargando..."
		}
		,"statistics":"Estadísticas"
		,"statistics":{
			"title":"Estadísticas"
			,"cumulative":"Acumuladas"
			,"current":"Sesión actual"
			,"uploadedBytes":"Subido: "
			,"downloadedBytes":"Descargado: "
			,"filesAdded":"Archivos: "   
			,"sessionCount":"Sesiones: " 
			,"secondsActive":"Tiempo activo: "
		}
		,"servers":"Trackers"
		,"folders":"Carpetas"
		,"toolbar":{
			"nav":{
				"folders":"Carpetas"
			}
		}
	}
	,"statusbar":{
		"downloadspeed":"Vel. descarga:"
		,"uploadspeed":"Vel. subida:"
		,"version":"Versión:"
	}
	,"dialog":{
		"torrent-add":{
			"download-dir":"Carpeta descarga:"
			,"torrent-url":"URL(s):"
			,"tip-torrent-url":"Consejo：Puedes introducir más de un archivo usando varias líneas"
			,"autostart":"Iniciar descarga:"
			,"tip-autostart":""
			,"set-default-download-dir":"Establecer como carpeta predeterminada"
			,"upload-file":"Archivos(s) torrent:"
			,"nosource":"Sin torrent o URL."
			,"tip-title":"Los archivos subidos tienen prioridad sobre las URL's"
		}
		,"system-config":{
			"title":"Configuración del servidor"
			,"tabs":{
				"base":"Básica"
				,"network":"Red"
				,"limit":"Límites"
				,"alt-speed":"Vel. alternativa"
			}
			,"config-dir":"Carpeta de configuración de Transmission:"
			,"download-dir":"Carpeta de descarga por defecto:"
			,"download-dir-free-space":"Espacio libre:"
			,"incomplete-dir-enabled":"Usar carpeta 'En progreso'"
			,"cache-size-mb":"Tamaño del cache en disco:"
			,"rename-partial-files":"Añadir '.part' a los archivos en progreso"
			,"start-added-torrents":"Inicio automático de torrents añadidos"
			,"download-queue-enabled":"Cola de descarga activada, elementos máximos:"
			,"seed-queue-enabled":"Cola de subida activada, elementos máximos:"
			,"peer-port-random-on-start":"Usar puerto aleatorio al iniciar"
			,"port-forwarding-enabled":"Forwarding activado"
			,"test-port":"Comprobar"
			,"port-is-open-true":"El puerto está abierto"
			,"port-is-open-false":"El puerto está cerrado"
			,"testing":"Probando..."
			,"encryption":"Cifrado:"
			,"encryption-type":{
				"required":"Requerido"
				,"preferred":"Preferido"
				,"tolerated":"Aceptado"
			}
			,"utp-enabled":"uTP(UPnP) activado"
			,"dht-enabled":"DHT activado"
			,"lpd-enabled":"LPD activado"
			,"pex-enabled":"PEX activado"
			,"peer-limit-global":"Número máximo de peers global:"
			,"peer-limit-per-torrent":"Número máximo de peers por torrent:"
			,"speed-limit-down-enabled":"Velocidad máxima de descarga:"
			,"speed-limit-up-enabled":"Velocidad máxima de subida:"
			,"alt-speed-enabled":"Usar velocidad alternativa"
			,"alt-speed-down":"Velocidad máxima de descarga:"
			,"alt-speed-up":"Velocidad máxima de subida:"
			,"alt-speed-time-enabled":"Usar programación"
			,"alt-speed-time":"Hora："
			,"weekday":{
				"1":"Lunes"
				,"2":"Martes"
				,"3":"Miércoles"
				,"4":"Jueves"
				,"5":"Viernes"
				,"6":"Sábado"
				,"0":"Domingo"
			}
			,"blocklist-enabled":"Usar blocklist"
			,"seedRatioLimited":"Ratio de compartición máx. por torrent:"
			,"queue-stalled-enabled":"Considerar o no los torrents inactivos como parados:"
			,"idle-seeding-limit-enabled":"Los torrents compartiendo se detendrán si se encuentran inactivos más de:"
			,"minuets":"Minutos"
			,"nochange":"Sin cambio"
			,"saveing":"Guardando..."
		}
		,"public":{
			"button-ok":"Aceptar"
			,"button-cancel":"Cancelar"
			,"button-reload":"Actualizar"
			,"button-save":"Guardar"
			,"button-close":"Cerrar"
		}
		,"about":{
			"infos":"Autor：culturist<br/>Declaración：Most of the icons used in this program from the network, if any violation of your rights, please contact me delete."
		}
		,"torrent-remove":{
			"title":"Confirmar eliminar"
			,"confirm-text":"¿Desea eliminar los torrents seleccionados?"
			,"remove-data":"Borrar datos locales"
			,"remove-error":"¡Borrado fallido!"
		}
		,"torrent-changeDownloadDir":{
			"title":"Establecer nueva carpeta"
			,"old-download-dir":"Carpeta antigua:"
			,"new-download-dir":"Carpeta nueva:"
			,"move-data":"Si se activa se moverán desde la ubicación anterior, en caso contrario busca archivos en 'Carpeta nueva'."
			,"set-error":"¡Error al establecer la carpeta!"
		}
		,"system-replaceTracker":{
			"title":"Reemplazar Trackers"
			,"old-tracker":"Antiguo tracker："
			,"new-tracker":"Nuevo tracker："
			,"tip":"Esta función buscará trackers en <b>todos los torrents</b>."
			,"not-found":"Tracker no encontrado."
		}
	}
	,"torrent":{
		"fields":{
			"id":"#"
			,"name":"Nombre"
			,"hashString":"HASH"
			,"downloadDir":"Carpeta desc."
			,"totalSize":"Tamaño"
			,"status":"Estado"
			,"percentDone":"Progreso"
			,"remainingTime":"Remaining time"
			,"addedDate":"Añadido"
			,"completeSize":"Descargado"
			,"rateDownload":"Veloc. desc."
			,"rateUpload":"Veloc. sub."
			,"leecherCount":"Leechers"
			,"seederCount":"Seeders"
			,"uploadedEver":"Subido"
			,"uploadRatio":"Ratio"
		}
		,"status-text":{
			"0":"Pausado"
			,"1":"Espera comprob."
			,"2":"Comprobando"
			,"3":"Espera descarga"
			,"4":"Descargando"
			,"5":"Espera subida"
			,"6":"Subiendo"
		}
		,"attribute":{
			"tabs":{
				"base":"Básico"
				,"servers":"Trackers"
				,"files":"Archivos"
				,"users":"Peers"
				,"config":"Config."
			}
			,"files-fields":{
				"name":"Nombre"
				,"length":"Tamaño"
				,"percentDone":"Progreso"
				,"bytesCompleted":"Completado"
				,"wanted":"Descargar"
				,"priority":"Prioridad"
			}
			,"servers-fields":{
				"announce":"Anuncio"
				,"announceState":"Estado"
				,"lastAnnounceResult":"Resultado"
				,"lastAnnounceSucceeded":"Exitoso"
				,"lastAnnounceTime":"Hora"
				,"lastAnnounceTimedOut":"T. agotado"
				,"downloadCount":"Descargas"
				,"nextAnnounceTime":"Próximo anuncio"
			}
			,"peers-fields":{
				"address":"Dirección IP"
				,"clientName":"Cliente"
				,"flagStr":"Bandera"
				,"progress":"Progreso"
				,"rateToClient":"Tasa a cliente"
				,"rateToPeer":"Tasa a peer"
			}
			,"status":{
				"true":"Sí"
				,"false":"No"
			}
			,"priority":{
				"0":"Normal"
				,"1":"Alta"
				,"-1":"Baja"
			}
			,"label":{
				"name":"Nombre:"
				,"addedDate":"Añadido:"
				,"totalSize":"Tamaño:"
				,"completeSize":"Completado:"
				,"leftUntilDone":"Restante:"
				,"hashString":"HASH:"
				,"downloadDir":"Destino:"
				,"status":"Estado:"
				,"rateDownload":"Vel. descarga:"
				,"rateUpload":"Vel. subida:"
				,"leecherCount":"Leechers:"
				,"seederCount":"Seeders:"
				,"uploadedEver":"Subido:"
				,"uploadRatio":"Ratio subida:"
				,"creator":"Creador:"
				,"dateCreated":"Fecha creación:"
				,"comment":"Comentario:"
				,"errorString":"Desc. error:"
				,"downloadLimited":"Vel. máxima descarga："
				,"uploadLimited":"Vel. subida máxima："
				,"peer-limit":"Número máximo de peers por torrent："
				,"seedRatioMode":"Ratio de subida por torrent："
				,"seedIdleMode":"Detener compartidos inactivos tras："
			}
			,"tip":{
				"button-allow":"Descargar archivos(s) marcados"
				,"button-deny":"Omitir archivo(s) marcados"
				,"button-priority":"Establecer prioridad"
			}
			,"other":{
				"tracker-remove-confim":"¿Está seguro de que desea eliminar este tracker?"
			}
		}
	}
	,"public":{
		"text-unknown":"Desconocido"
		,"text-drop-title":"Arrastre y suelte el archivo en la región para añadir a Transmission."
		,"text-saved":"Guardado"
		,"text-nochange":"No guardado"
		,"text-info":"Información"
		,"text-confirm":"¿Está seguro?"
		,"text-browsers-not-support-features":"El navegador actual no soporta esta función!"
	}
};