/*

Generatore di “nomi cognomi” casuali, prendendo una lista di nomi e una lista di
cognomi, Gatsby vuole generare una falsa lista di invitati


*/


var namesList = ["Brent", "Dexter", "Sandford", "Arnold", "Benedict", "Lynn", "Micah", "Rian"];
var surnamesList =  ["Josephson", "Dickson", "Ayers", "Clark", "Salamon", "Blanchard", "Kemp", "Raynerson"];

var usrInput = parseInt( prompt("Quanti nomi vuoi generare? ") );

var newList = new Array();

//Il ciclo genera ad ogni iterazione due numeri casuali compresi tra 0 e la lunghezza di ogni array -1.
//gli indici servono per andare a pescare un elemento casuale dall'array di nomi e da quello dei cognomi.
//gli elementi verranno concatenati ed inseriti in un nuovo array che conterrà la lista dei nuovi nomi
for (var i = 0; i < usrInput; i++) {
   var randIndexName = randomNumber(0, (namesList.length-1) );
   var randIndexSurname = randomNumber(0, (surnamesList.length-1) );
   newList.push(namesList[randIndexName] + " " + surnamesList[randIndexSurname]);
}

console.log(newList);

//Funzione che genera un numero casuale compreso tra l'estremo inferiore start
//e l'estremo superiore end, inclusi.
function randomNumber(start, end) {
   return Math.floor(Math.random() * (end - start + 1)) + start;
}
