---
# Titre du projet
title: "Détecteur de fumée"
# Date utilisée uniquement pour classer les projets (le plus récent en premier), elle n'est pas affichée
date: "2025-10-15"
# Statut du projet : "en_cours" ou "termine" (exactement l'une des deux valeurs)
statut: "termine"
# Chemin de la photo, ex : /assets/images/projets/mon-projet.jpg (vide = carré gris)
photo: "/assets/images/projets/detecteur_fumee.png"
# Résumé du projet
resume: "Conception analogique d'un détecteur de fumée à base d'amplificateurs opérationnels."
---

## Description

En binôme, nous avons conçu un détecteur de fumée dans le cadre d'un projet d'électronique analogique. La consigne imposait d'intégrer plusieurs montages fondamentaux vus en cours à base d'amplificateurs opérationnels (AOP), ce qui a guidé l'architecture de notre circuit.

Le signal capté par une photodiode passe d'abord par un **trigger de Schmitt**, dont la sortie est comparée à un **montage astable** via un comparateur. Vient ensuite un **montage monostable**, dont la sortie commande à son tour un second astable. Enfin, le signal est filtré par une cellule RC couplée à un **suiveur de tension**, puis amplifié pour alimenter le buzzer (tous ces montages sont parfaitement visibles sur la photo de présentation...)

Ce projet concret a été une excellente opportunité de manipuler des montages avec AOP et de manipuler le traitement de signal analogique de bout en bout.