document.addEventListener('DOMContentLoaded', function() {
    
    const hamburgerMenu = document.getElementById('hamburger-menu');
    const menu = document.getElementById('menu');

    // Toggle Menu hamburger
    hamburgerMenu.addEventListener('click', () => {
        if (menu.style.display === 'block') {
            menu.style.display = 'none';
        } else {
            menu.style.display = 'block';
        }
    });

    // Déconnexion (tu peux ajouter la redirection ici si tu as une page de login)
    document.querySelector('.logout a').addEventListener('click', (e) => {
        e.preventDefault();
        window.location.href = "index.html"; // Redirige vers la page de connexion/inscription
    });
});
