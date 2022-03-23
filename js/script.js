//Chiedi il nome all'utente
let firstName = prompt('Inserisci il tuo nome');
console.log(firstName);

//Chiedi il cognome all'utente
let lastName = prompt('Inserisci il tuo cognome');
console.log(lastName);

//Chiedi il suo colore preferito 
let favoriteColor = prompt('Inserisci il tuo colore preferito');
console.log(favoriteColor);

//Genera password, non molto sicura ma meglio di niente
let passwordSicura = firstName + lastName + favoriteColor + '21';
console.log(passwordSicura);
document.getElementById('safepassword').innerHTML += passwordSicura + '!'