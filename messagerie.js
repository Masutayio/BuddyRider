// Afficher / cacher le menu hamburger
document.getElementById('hamburger').addEventListener('click', () => {
    const menu = document.getElementById('menu');
    menu.classList.toggle('hidden');  // Affiche ou cache le menu
});

// Exemple de JavaScript pour la messagerie
const messageList = document.getElementById('message-list');
const messageInput = document.getElementById('message-input');
const sendButton = document.getElementById('send-button');

let messages = [];

// Fonction pour ajouter un message à la liste
function addMessage(message) {
    messages.push(message);
    renderMessages();
}

// Fonction pour afficher les messages dans la liste
function renderMessages() {
    messageList.innerHTML = ''; // Réinitialiser la liste

    messages.forEach((msg, index) => {
        const div = document.createElement('div');
        div.textContent = msg;
        messageList.appendChild(div);
    });

    // Faire défiler vers le bas pour afficher le dernier message
    messageList.scrollTop = messageList.scrollHeight;
}

// Événement pour l'envoi de messages
sendButton.addEventListener('click', () => {
    const messageText = messageInput.value.trim();
    if (messageText) {
        addMessage(messageText); // Ajouter le message
        messageInput.value = ''; // Réinitialiser le champ de saisie
    }
});

// Simuler l'envoi de quelques messages pour le test
addMessage("Salut ! Je suis intéressé par une balade.");
addMessage("Bonjour, comment ça va ?");
