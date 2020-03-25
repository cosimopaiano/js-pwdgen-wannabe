// verifica corretto import script
console.log('my js is here');

// inserimento neme utente e memorizzazione
var yourName = prompt("Qual è il tuo nome?");

console.log(yourName);

// inserimento cognome utente e memorizzazione
var yourSurname = prompt("Qual è il tuo cognome?");

console.log(yourSurname);

// inserimento colore preferito e memorizzazione
var yourColor = prompt ("Qual è il tuo colore preferito?");

console.log(yourColor);

//scrivere nella pagina: nomecognomecolorepreferito20
document.getElementById('password').innerHTML = yourName + yourSurname + yourColor + '20';
