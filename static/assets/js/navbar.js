/**
 * JS: Gère la barre de navigation mobile (bouton hamburger).
 * Usage: layouts/_default/baseof.html
 *
 * Comportement :
 *   - Le bouton hamburger ouvre/ferme le menu sur mobile.
 *   - Si un élément est absent, le script s'arrête proprement.
 */

document.addEventListener('DOMContentLoaded', () => {

    const hamburger = document.getElementById('hamburger');
    const navMenu   = document.getElementById('nav-menu');

    if (!hamburger || !navMenu) {
        console.warn('navbar.js: éléments de navigation introuvables.');
        return;
    }

    hamburger.addEventListener('click', () => {
        const isOpen = navMenu.classList.toggle('open');
        hamburger.classList.toggle('open', isOpen);

        // Garde les lecteurs d'écran synchronisés avec l'état visible.
        hamburger.setAttribute('aria-expanded', isOpen);
    });

});
