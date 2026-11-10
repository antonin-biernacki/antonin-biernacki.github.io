---
# Titre du projet
title: "Conception et codage d'une carte réseau"
# Date utilisée uniquement pour classer les projets (le plus récent en premier), elle n'est pas affichée
date: "2025-10-24"
# Statut du projet : "en_cours" ou "termine" (exactement l'une des deux valeurs)
statut: "termine"
# Chemin de la photo, ex : /assets/images/projets/mon-projet.jpg (vide = carré gris)
photo: "/assets/images/projets/carte_reseau.png"
# Résumé du projet
resume: "Conception sur KiCad d'une carte réseau puis code basé sur la bibliothèque LUFA."
---

## Description

J'ai conçu et codé une carte réseau dans le cadre d'un projet sur les pico-ordinateurs. Le travail étant conséquent, la réalisation des différents composants a été répartie entre plusieurs binômes. Le mien a pris en charge la conception d'une carte réseau sous **KiCad**, censée permettre à une carte mère de lire, écrire et lister des fichiers sur un PC.

Cette carte s'articule autour d'un microcontrôleur **ATmega**, d'un programmateur, d'une connexion USB et de divers connecteurs (LED d'état, MAX232 avec DB9 et DB25, broches libres pour la réutiliser dans d'autres projets). Une fois les circuits reçus, nous avons soudé manuellement l'ensemble des composants.

La seconde partie du projet consistait à développer le code embarqué. Nous avons utilisé la bibliothèque **LUFA**, et plus particulièrement la pile **RNDIS**, ce qui nous a permis de gérer facilement les protocoles réseau classiques (IP, ICMP, TCP, UDP, ARP et DHCP). Notre carte est ainsi reconnue par le PC comme une interface Ethernet : elle répond au `ping`, reçoit des paquets UDP et en envoie.

Pour répondre au cahier des charges du projet global, nous avons conçu un protocole applicatif personnalisé, le **ProtocolAntique**, transporté en UDP et permettant de lister, lire et écrire des fichiers. Ce protocole a été testé à l'aide d'un serveur en C simulant les besoins de la carte mère. L'utilisation de **Wireshark** nous a été indispensable pour analyser les trames, comprendre les échanges et déboguer notre code en direct. Faute de temps, la carte n'a toutefois pas pu être reliée à la carte mère, et le traitement des requêtes par la carte elle-même n'a pas été terminé.

Ce projet m'a permis de lier la théorie et la pratique à travers trois domaines complémentaires : l'électronique (conception de PCB et soudure), le développement embarqué et les réseaux informatiques. De plus, j'ai appris à utiliser des logiciels ou bibliothèques que je ne maîtrisais pas encore.

Si ce projet vous intéresse, vous pouvez consulter le code, les fichiers KiCad et la description du protocole sur [GitHub](https://github.com/antonin-biernacki/carte_reseau).