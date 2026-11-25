---
# Titre du projet
title: "Preuve de concept AirDrop sur Linux"
# Date utilisée uniquement pour classer les projets (le plus récent en premier), elle n'est pas affichée
date: "2026-11-11"
# Statut du projet : "en_cours" ou "termine" (exactement l'une des deux valeurs)
statut: "termine"
# Chemin de la photo, ex : /assets/images/projets/mon-projet.jpg (vide = carré gris)
photo: "/assets/images/projets/awdl.png"
# Résumé du projet
resume: "Un PC Linux qui échange des fichiers en AirDrop avec un iPhone et un iPad, dans les deux sens."
# Lien vers le dépôt GitHub du projet (vide = pas de bouton)
github: "https://github.com/antonin-biernacki/awdl-linux-poc"
---

## Description

Ce projet est une **preuve de concept** : je voulais savoir si mon PC sous Linux pouvait échanger des fichiers en **AirDrop** avec un iPhone, sans aucune application côté Apple. AirDrop ne passe pas par le réseau local. Les appareils Apple créent entre eux un réseau Wi-Fi direct, avec un protocole propriétaire appelé **AWDL**. Pour y participer, la carte Wi-Fi doit écouter tout ce qui passe sur un canal et émettre ses propres trames, ce que les pilotes grand public gèrent rarement.

Je m'appuie sur deux projets de recherche de la TU Darmstadt : **OWL**, qui réimplémente AWDL, et **OpenDrop**, qui réimplémente AirDrop par-dessus. Avec la carte intégrée de mon PC, une **Realtek**, il a fallu deux contournements de son firmware pour que l'iPhone voie le PC. Mais aucun fichier ne passait : la carte était en cause.

Avec une clé USB **MediaTek MT7612U**, les échanges ont enfin abouti. Il restait à suivre les évolutions d'iOS depuis la fin d'OpenDrop : un nouveau format d'envoi, que j'ai décodé à partir des captures, et des détails qui font, par exemple, réapparaître le PC à chaque partage ou recevoir photos et vidéos dans leur format d'origine.

Dans l'autre sens, l'iPhone ne se rend visible qu'après une annonce **Bluetooth**, qu'OpenDrop ne savait pas émettre. Une fois ce verrou levé, j'ai doublé la vitesse d'envoi en corrigeant le débit radio fixé dans OWL, puis validé le tout sur un **iPad**, qui demandait une connexion un peu différente.

**Le résultat** : mon PC échange des fichiers avec un iPhone et un iPad, dans les deux sens, à environ 1,2 Mo/s, sans toucher au Wi-Fi habituel du PC. Seules les Live Photos arrivent encore sans leur partie vidéo. Au total, 46 essais, documentés un par un, et huit correctifs pour OWL et OpenDrop.

Ce projet est un travail d'étude personnel, fait pour l'interopérabilité entre mes propres appareils. Il n'est ni affilié à Apple Inc. ni approuvé par Apple.

Le détail des essais, les correctifs et le script sont sur [GitHub](https://github.com/antonin-biernacki/awdl-linux-poc).
