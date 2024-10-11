document.addEventListener('DOMContentLoaded', function() {
    const loginBtn = document.getElementById('login-btn');
    const signupBtn = document.getElementById('signup-btn');
    const loginForm = document.getElementById('login-form');
    const signupForm = document.getElementById('signup-form');

    // Afficher le formulaire de connexion et masquer l'inscription
    loginBtn.addEventListener('click', () => {
        loginForm.style.display = 'block';
        signupForm.style.display = 'none';
    });

    // Afficher le formulaire d'inscription et masquer la connexion
    signupBtn.addEventListener('click', () => {
        signupForm.style.display = 'block';
        loginForm.style.display = 'none';
    });

    // Simuler la soumission de connexion
    document.getElementById('submit-login').addEventListener('click', (e) => {
        e.preventDefault();  // Empêche le rafraîchissement de la page
       
        
        // Rediriger vers la page d'accueil
        window.location.href = "accueil.html"; // Redirige vers accueil.html
    });

    // Simuler la soumission d'inscription
    document.getElementById('submit-signup').addEventListener('click', (e) => {
        e.preventDefault();  // Empêche le rafraîchissement de la page
        alert("Inscription réussie !");
        
        // Rediriger vers la page d'accueil après inscription
        window.location.href = "accueil.html"; // Redirige vers accueil.html
    });
});
