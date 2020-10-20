/*
 * Chiedere all'utente il cognome
   inserirlo in un array con altri cognomi: 'Bianchi', 'Rossi', 'Duzioni', 'Balsano', 'Giorgini'
   stampa la lista ordinata alfabeticamente
   scrivi anche la posizione "umana" della lista in cui il nuovo utente si trova
 */

 // Dati
var listaCognomi = ['Bianchi', 'Rossi', 'Duzioni', 'Balsano', 'Giorgini'];

//  Domanda all'utente
var cognomeUtente = prompt('Quale è il tuo cognome?').trim();

while (cognomeUtente === '') {
  cognomeUtente = prompt('Quale è il tuo cognome?').trim();
}

// Aggiunta dati utente
listaCognomi.push(cognomeUtente);

// Creare lista da organizzare
listaCognomiOrdinata = listaCognomi.slice();

// Ordinare alfabeticamente
listaCognomiOrdinata.sort();

// IndexOf (posizione 'umana')
var posizione = listaCognomiOrdinata.indexOf(cognomeUtente) + 1;

// print liste
console.log('Lista NON ordinata:', listaCognomi);
console.log('Lista ordinata:', listaCognomiOrdinata);
console.log('Posizione:', posizione);

// Print nell'HTML (ul)
var nomi = ''; 

// Loop for
for (var i = 0; i < listaCognomiOrdinata.length; i++) {
    nomi += '<li>' + listaCognomiOrdinata[i] + '</li>';
}

document.getElementById('lista-cognomi').innerHTML = nomi;


