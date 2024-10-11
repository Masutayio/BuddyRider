// Afficher / cacher le menu hamburger
document.getElementById('hamburger').addEventListener('click', () => {
    const menu = document.getElementById('menu');
    menu.classList.toggle('hidden');  // Affiche ou cache le menu
});

// Générer la liste des départements (de 01 à 997)
const departmentSelectPilot = document.getElementById('department-pilot');
const departmentSelectPassenger = document.getElementById('department-passenger');

for (let i = 1; i <= 997; i++) {
    let option = document.createElement('option');
    option.value = i < 10 ? `0${i}` : i; // Ajouter un 0 devant les numéros < 10
    option.textContent = option.value;
    departmentSelectPilot.appendChild(option);
    departmentSelectPassenger.appendChild(option.cloneNode(true)); // Clone pour le passager
}

// Gestion de l'affichage dynamique des champs en fonction du rôle
document.getElementById('role').addEventListener('change', (event) => {
    const selectedRole = event.target.value;
    const pilotFields = document.getElementById('pilot-fields');
    const passengerFields = document.getElementById('passenger-fields');

    if (selectedRole === 'pilot') {
        pilotFields.classList.remove('hidden');
        passengerFields.classList.add('hidden');
    } else if (selectedRole === 'passenger') {
        passengerFields.classList.remove('hidden');
        pilotFields.classList.add('hidden');
    }
});

// Gestion de la soumission du formulaire
document.getElementById('search-form').addEventListener('submit', (event) => {
    event.preventDefault(); // Empêche la soumission réelle du formulaire pour cet exemple

    // Récupérer les valeurs du formulaire
    const role = document.getElementById('role').value;
    let searchCriteria = {};

    if (role === 'pilot') {
        const motoType = document.getElementById('moto-type-pilot').value;
        const drivingStyle = document.getElementById('driving-style-pilot').value;
        const department = document.getElementById('department-pilot').value;
        searchCriteria = { role, motoType, drivingStyle, department };
    } else if (role === 'passenger') {
        const department = document.getElementById('department-passenger').value;
        const age = document.getElementById('age-passenger').value;
        const gender = document.getElementById('gender-passenger').value;
        const motoType = document.getElementById('moto-type-passenger').value;
        const drivingStyle = document.getElementById('driving-style-passenger').value;
        searchCriteria = { role, department, age, gender, motoType, drivingStyle };
    }

    // Afficher les critères de recherche dans la console (à remplacer par une vraie logique de recherche)
    console.log("Critères de recherche :", searchCriteria);

    // Simuler une action après la recherche
    alert("Recherche en cours...");
});

    // Vous pouvez rediriger vers une autre page ou afficher les résultats de la recherche ici

// Gestion de la déconnexion
document.getElementById('logout-btn').addEventListener('click', () => {
    // Ici, vous pouvez gérer la déconnexion (par exemple, supprimer le token de session ou rediriger)
    alert("Vous êtes déconnecté !");
    // Redirection vers la page de connexion ou la page d'accueil
    window.location.href = 'index.html'; // Remplacez par le chemin de votre page de connexion
});