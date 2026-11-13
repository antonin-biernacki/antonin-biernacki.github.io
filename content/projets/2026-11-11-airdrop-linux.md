---
# Titre du projet
title: "Preuve de concept AirDrop sur Linux"
# Date utilisée uniquement pour classer les projets (le plus récent en premier), elle n'est pas affichée
date: "2026-11-11"
# Statut du projet : "en_cours" ou "termine" (exactement l'une des deux valeurs)
statut: "en_cours"
# Chemin de la photo, ex : /assets/images/projets/mon-projet.jpg (vide = carré gris)
photo: "/assets/images/projets/awdl.png"
# Résumé du projet
resume: "Faire parler AirDrop à un PC Linux : protocole Wi-Fi d'Apple, mode moniteur et contournements du firmware."
# Lien vers le dépôt GitHub du projet (vide = pas de bouton)
github: "https://github.com/antonin-biernacki/awdl-linux-poc"
---

## Description

Ce projet est une **preuve de concept** : je voulais savoir si mon PC sous Linux pouvait échanger des fichiers en **AirDrop** avec un iPhone, sans aucune application côté Apple. AirDrop ne passe pas par le réseau local. Les appareils Apple créent entre eux un réseau Wi-Fi direct, avec un protocole propriétaire appelé **AWDL** (Apple Wireless Direct Link). Pour y participer, la carte Wi-Fi doit écouter toutes les trames d'un canal (**mode moniteur**) et émettre ses propres trames (**injection**), ce que les pilotes grand public gèrent rarement.

Je m'appuie sur deux projets de recherche de la TU Darmstadt : **OWL**, qui réimplémente AWDL et crée une interface réseau, et **OpenDrop**, qui réimplémente le protocole AirDrop par-dessus. L'essentiel du travail a consisté à faire fonctionner cette chaîne sur ma carte, une **Realtek RTL8852BE**.

Rien n'a marché du premier coup. OWL refusait de démarrer, parce que la carte ne gère pas le mode moniteur « actif » qu'il demande. Une fois ce point contourné, OWL tournait mais ne voyait jamais l'iPhone. En comptant les trames reçues canal par canal avec **tcpdump**, j'ai isolé un comportement non documenté du firmware : en mode moniteur, la carte ne reçoit que sur le dernier canal où elle a travaillé, même quand on lui demande d'en changer. Pour le contourner, je lance un point d'accès éphémère sur le canal voulu, ce qui y amène le firmware, puis je repasse en mode moniteur. Avec ça, OWL a détecté l'iPhone et s'est synchronisé avec lui.

J'ai ensuite écrit un script **Bash** qui enchaîne toute la mise en place et remet toujours le Wi-Fi en état à la fin. Avec lui, l'iPhone voit le PC et s'y connecte, mais les réponses du PC n'arrivent qu'au hasard : aucun fichier n'est encore passé. Les captures désignent la carte, qui dans ce mode n'acquitte rien et n'émet chaque trame qu'une fois.

**La suite** : j'ai commandé une clé USB à puce **MediaTek MT7612U**, mieux prise en charge par Linux dans ce mode, pour refaire les mêmes essais. Le projet est en pause jusqu'à sa réception.

Le détail des essais, les contournements et le script sont sur [GitHub](https://github.com/antonin-biernacki/awdl-linux-poc).
