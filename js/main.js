/*
 * Chiedere all'utente il cognome
   inserirlo in un array con altri cognomi: 'Bianchi', 'Rossi', 'Duzioni', 'Balsano', 'Giorgini'
   stampa la lista ordinata alfabeticamente
   scrivi anche la posizione "umana" della lista in cui il nuovo utente si trova
 */

//  Domanda all'utente
var user = prompt('Quale è il tuo cognome?');
var list = ['Bianchi', 'Rossi', 'Duzioni', 'Balsano', 'Giorgini', 'Ambrogio'];

// lista ordinata alfabeticamente
list.sort();

// Loop for
var items = '';

for (i = 0; i < list.length; i++) {
    var item = list[i];

     items += '<li>' + item + '</li>';  
}
document.getElementById('list-last-name').innerHTML = items;

// IndexOf (posizone "umana")
var index = list.indexOf('Ambrogio') + 1;
