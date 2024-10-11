console.log("Le fichier JS est chargé correctement.");

// Afficher le formulaire de connexion
document.getElementById('login-btn').addEventListener('click', () => {
    console.log("Connexion cliquée.");
    document.getElementById('signup-form').classList.add('hidden');
    document.getElementById('login-form').classList.remove('hidden');
});

// Afficher le formulaire d'inscription
document.getElementById('signup-btn').addEventListener('click', () => {
    console.log("Inscription cliquée.");
    document.getElementById('login-form').classList.add('hidden');
    document.getElementById('signup-form').classList.remove('hidden');
});

// Lien pour basculer vers la connexion
document.getElementById('show-login').addEventListener('click', (e) => {
    e.preventDefault();
    console.log("Lien vers Connexion cliqué.");
    document.getElementById('signup-form').classList.add('hidden');
    document.getElementById('login-form').classList.remove('hidden');
});

// Lien pour basculer vers l'inscription
document.getElementById('show-signup').addEventListener('click', (e) => {
    e.preventDefault();
    console.log("Lien vers Inscription cliqué.");
    document.getElementById('login-form').classList.add('hidden');
    document.getElementById('signup-form').classList.remove('hidden');
});
