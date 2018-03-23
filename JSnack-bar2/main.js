/*

L’utente inserisce due parole in successione, con due prompt. Il software stampa
prima la parola più corta, poi la parola più lunga.


*/

var str1 = prompt("inserisci una parola: ");
var str2 = prompt("inserisci un'altra parola: ");

if ( str1.length > str2.length ) {
   alert("La parola piu lunga è: " + str1);
} else if( str1.length < str2.length ){
   alert("La parola piu lunga è: " + str2);
} else {
   alert("SEI UN SALAME!");
}
