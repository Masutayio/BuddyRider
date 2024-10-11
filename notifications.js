// Écouteur d'événement pour le menu hamburger
document.getElementById('hamburger-menu').addEventListener('click', function() {
    var menu = document.getElementById('menu');
    // Vérifiez si le menu est actuellement affiché
    if (menu.style.display === 'block' || menu.style.display === '') {
        menu.style.display = 'none'; // Masquer le menu
    } else {
        menu.style.display = 'block'; // Afficher le menu
    }
});

// Déconnexion
document.querySelector('.logout a').addEventListener('click', (e) => {
    e.preventDefault();
    window.location.href = "index.html"; // Redirige vers la page de connexion/inscription
});

document.getElementById('hamburger-menu').addEventListener('click', function() {
    var menu = document.getElementById('menu');
    // Vérifiez l'état de l'affichage et basculez entre 'block' et 'none'
    if (menu.style.display === 'block') {
        menu.style.display = 'none';
    } else {
        menu.style.display = 'block';
    }
});