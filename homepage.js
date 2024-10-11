// Afficher / cacher le menu hamburger
document.getElementById('hamburger').addEventListener('click', () => {
    const menu = document.getElementById('menu');
    menu.classList.toggle('hidden');  // Affiche ou cache le menu
});

// Gestion de la déconnexion
document.getElementById('logout-btn').addEventListener('click', () => {
    // Ici, vous pouvez gérer la déconnexion (par exemple, supprimer le token de session ou rediriger)
    alert("Vous êtes déconnecté !");
    // Redirection vers la page de connexion ou la page d'accueil
    window.location.href = 'index.html'; // Remplacez par le chemin de votre page de connexion
});


