/*
    Description: Reconstruit les liens e-mail générés par layouts/partials/email-link.html.
    L'adresse n'est pas écrite en clair dans le HTML pour limiter sa collecte par les robots.
    Sans JavaScript, le lien mène à la page du CV, qui contient l'adresse.
*/
document.querySelectorAll(".js-email").forEach(function (lien) {
    var adresse = atob(lien.dataset.u) + "@" + atob(lien.dataset.d);
    lien.href = "mailto:" + adresse;
    lien.textContent = lien.dataset.text || adresse;
});
