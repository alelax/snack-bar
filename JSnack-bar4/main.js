/*

Il software deve chiedere per 5 volte volte all’utente di inserire un numero. Il
programma stampa la somma di tutti i numeri inseriti. Esegui questo programma in
due versioni, con il for e con il do..while

*/

var inserimento = ["primo", "secondo", "terzo", "quarto", "quinto"];
var sum = 0;

/* FOR VERSION */
for (var i = 0; i < inserimento.length; i++) {
   do {
      var num = parseInt(prompt("Inserisci il " + inserimento[i] + " numero: "));
      console.log(num);
   } while (isNaN(num));
   sum += num;
}

/* DO-WHILE VERSION */
// var i = 0;
// do {
//    do {
//       var num = parseInt(prompt("Inserisci il " + inserimento[i] + " numero: "));
//       console.log(num);
//    } while (isNaN(num));
//
//    sum += num;
//    i++;
// } while (i < inserimento.length);

alert("La somma dei numeri inseriti è: " + sum);
