---
# Titre du projet
title: "Codage d'un ordonnanceur minimal en C"
# Date utilisée uniquement pour classer les projets (le plus récent en premier), elle n'est pas affichée
date: "2025-10-30"
# Statut du projet : "en_cours" ou "termine" (exactement l'une des deux valeurs)
statut: "termine"
# Chemin de la photo, ex : /assets/images/projets/mon-projet.jpg (vide = carré gris)
photo: "/assets/images/projets/ordonnanceur.png"
# Résumé du projet
resume: "Ordonnanceur Round-Robin gérant une dizaine de tâches avec seulement 2 Ko de RAM."
---

## Description

J'ai réalisé une carte électronique via KiCad autour d'un microcontrôleur de type ATmega, mais l'intérêt principal de ce projet réside dans la programmation d'un ordonnanceur minimal en C. Cet ordonnanceur fonctionne selon un algorithme **Round-Robin**, c'est-à-dire qu'il passe en boucle d'une tâche à une autre. 

Pour y parvenir, nous avons découpé la pile entre les différents processus et géré directement en **assembleur** la sauvegarde et la restauration du contexte. Les processus disposaient de différents états et pouvaient ainsi être mis en pause, supprimés ou ajoutés dynamiquement. De plus, nous avons développé des pilotes bas niveau afin de gérer la communication USART et le bus SPI. Au final, nous étions capables de faire tourner une dizaine de tâches simultanément sur cet ordonnanceur.

Ce projet nous a permis d'approfondir considérablement nos connaissances en systèmes bas niveau. Même si le résultat visuel reste simple (les tâches se contentent de faire clignoter des LED ou d'afficher un compteur sur un afficheur 7 segments), la complexité technique et les compétences acquises sont, elles, bien réelles et très formatrices.