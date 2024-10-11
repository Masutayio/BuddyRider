function toggleRoleFields() {
    const role = document.getElementById('role').value;
    const pilotFields = document.getElementById('pilotFields');
    const passengerFields = document.getElementById('passengerFields');

    if (role === 'pilote') {
        pilotFields.style.display = 'block';
        passengerFields.style.display = 'none';
    } else if (role === 'passager') {
        pilotFields.style.display = 'none';
        passengerFields.style.display = 'block';
    } else {
        pilotFields.style.display = 'none';
        passengerFields.style.display = 'none';
    }
}

function previewImage(event) {
    const preview = document.getElementById('preview');
    preview.style.display = 'block'; // Afficher l'aperçu
    preview.src = URL.createObjectURL(event.target.files[0]); // Créer un URL pour l'image
}
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