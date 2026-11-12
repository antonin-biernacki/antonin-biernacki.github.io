---
# Titre du projet
title: "Jeu vidéo Space Invaders"
# Date utilisée uniquement pour classer les projets (le plus récent en premier), elle n'est pas affichée
date: "2024-02-06"
# Statut du projet : "en_cours" ou "termine" (exactement l'une des deux valeurs)
statut: "termine"
# Chemin de la photo, ex : /assets/images/projets/mon-projet.jpg (vide = carré gris)
photo: "/assets/images/projets/invader_monstre1_1.png"
# Résumé du projet
resume: "Développement d'un jeu Space Invaders en C."
# Lien vers le dépôt GitHub du projet (vide = pas de bouton)
github: "https://github.com/antonin-biernacki/space_invaders"
---

## Description

Le premier projet que j'ai choisi de présenter est un jeu vidéo, car l'envie de coder commence souvent par là. J'ai reproduit le jeu d'arcade **Space Invaders**, entièrement développé en **C** avec une interface graphique en **SDL 1.2**. Il a fallu gérer la logique complète : les collisions entre les différents objets (missiles, bombes, boucliers, envahisseurs et joueur) ainsi que l'adaptation dynamique des déplacements au fil de la partie, les envahisseurs avançant latéralement et descendant à chaque bord atteint. Tous ces éléments sont stockés dans des **listes chaînées**, et le jeu comprend des bombes lâchées au hasard, un délai de recharge entre deux tirs, des vies, une pause et des écrans de victoire et de défaite.

Ce projet aurait pu être réalisé dans un autre langage, mais ma spécialisation en systèmes embarqués m'a poussé à choisir le C afin de bien prendre en main ce langage et d'accroître mes connaissances.

Si ce projet vous intéresse, vous pouvez consulter le code complet et les instructions de compilation sur [GitHub](https://github.com/antonin-biernacki/space_invaders).