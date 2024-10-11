// Afficher / cacher le menu hamburger
document.getElementById('hamburger').addEventListener('click', () => {
    const menu = document.getElementById('menu');
    menu.classList.toggle('hidden');  // Affiche ou cache le menu
});

// Générer la liste des âges (de 18 à 99 ans)
const ageSelect = document.getElementById('age');
for (let i = 18; i <= 99; i++) {
    let option = document.createElement('option');
    option.value = i;
    option.textContent = i;
    ageSelect.appendChild(option);
}

// Générer la liste des départements (de 01 à 997)
const departmentSelect = document.getElementById('department');
for (let i = 1; i <= 997; i++) {
    let option = document.createElement('option');
    option.value = i < 10 ? `0${i}` : i; // Ajouter un 0 devant les numéros < 10
    option.textContent = option.value;
    departmentSelect.appendChild(option);
}

// Gestion de la soumission du formulaire
document.getElementById('profile-form').addEventListener('submit', (event) => {
    event.preventDefault(); // Empêche la soumission réelle du formulaire pour cet exemple

    // Récupérer les valeurs du formulaire
    const pseudo = document.getElementById('pseudo').value;
    const age = document.getElementById('age').value;
    const department = document.getElementById('department').value;
    const motoType = document.getElementById('moto-type').value;
    const drivingPreferences = document.getElementById('driving-preferences').value;
    const motoPhoto = document.getElementById('moto-photo').files[0]; // Récupère le fichier de la photo

    // Créer un objet avec les données du profil
    const profileData = {
        pseudo,
        age,
        department,
        motoType,
        drivingPreferences,
        motoPhoto
    };

    // Afficher les données du profil dans la console (remplacez cela par une vraie logique)
    console.log("Données du profil :", profileData);

    // Simuler une action après la création du profil
    alert("Profil créé avec succès !");
    // Vous pouvez rediriger vers une autre page ou effectuer d'autres actions ici
});


    // Afficher les données dans la console (à remplacer par une vraie logique d'enregistrement)
    console.log("Pseudo :", username);
    console.log("Photo de profil :", profilePicture);
    console.log("Âge :", age);
    console.log("Département :", department);
    console.log("Type de moto :", motoType);

    // Simuler une redirection après création du profil
    alert("Votre profil a été créé avec succès !");
    window.location.href = 'homepage.html';  // Redirection vers la page d'accueil

// Gestion de la déconnexion
document.getElementById('logout-btn').addEventListener('click', () => {
    // Ici, vous pouvez gérer la déconnexion (par exemple, supprimer le token de session ou rediriger)
    alert("Vous êtes déconnecté !");
    // Redirection vers la page de connexion ou la page d'accueil
    window.location.href = 'index.html'; // Remplacez par le chemin de votre page de connexion
});