---
# Titre du projet
title: "Square packing problem"
# Date utilisée uniquement pour classer les projets (le plus récent en premier), elle n'est pas affichée
date: "2026-11-02"
# Statut du projet : "en_cours" ou "termine" (exactement l'une des deux valeurs)
statut: "en_cours"
# Chemin de la photo, ex : /assets/images/projets/mon-projet.jpg (vide = carré gris)
photo: "/assets/images/projets/square_packing.png"
# Résumé du projet
resume: "Évaluation et comparaison de solveurs généralistes open source pour concurrencer le solveur dédié du Square Packing Problem."
---

Ce projet est actuellement en cours. Il s'intéresse au *consecutive square packing problem* : étant donné un entier N, l'objectif est de ranger tous les carrés de tailles 1 à N dans un rectangle d'aire minimale, sans chevauchement.

Voici ce que nous prévoyons de faire pour mener ce projet à bien :

* **Validation des modèles :** Valider nos approches en retrouvant d'abord les optima connus pour les valeurs de N ≤ 32.
* **Comparaison des performances :** Comparer les solveurs open source généralistes face au solveur de référence de Huang et Korf pour N = 15 à 33, en analysant le temps de calcul, le nombre de retours arrière et la capacité à passer à l'échelle.
* **Parallélisation et objectif ambitieux :** Exploiter la parallélisation naturelle des instances de faisabilité indépendantes avec pour ambition de fermer le cas N = 33 ou d'établir l'infaisabilité de certains rectangles candidats.