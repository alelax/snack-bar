/*

Fai inserire un numero, che chiameremo N, all’utente. Genera N array, ognuno
formato da 10 numeri casuali da 1 a 100. Al termine della generazione, stampa
l’array la cui somma degli elementi è la maggiore.

*/
var N = parseInt( prompt("Digita un numero per generare N array:") );

var arrContainer = new Array();
var arrTotalValue = new Array();

for (var i = 0; i < N; i++) {
   var temp = randomNumber(1, 100, 10);
   arrContainer.unshift(temp);
   arrTotalValue.unshift(sumArrElement(temp));
}

console.log(arrContainer);
console.log(arrTotalValue);

console.log("------");
var ind = findMax(arrTotalValue); //Trovo l'indice dell'array i cui elementi hanno somma maggiore rispetto agli altri
console.log(ind);
console.log("------");
console.log("L'array maggiore è: " + arrContainer[ind] );


//Funzione che riceve un array, ne determina l'elemento massimo e restituisce
//l'indice della posizione in cui si trova l'elemento massimo
function findMax(arr) {
   var max = arr[0];
   var indexMax = 0;
   for (var i = 1; i < arr.length; i++) {
      if ( max <= arr[i]) {
         max = arr[i];
         indexMax = i;
      }
   }
   return indexMax;
}

//Funzione che genera howMany numeri casuali compresi tra l'estremo inferiore start
//e l'estremo superiore end, inclusi.
function randomNumber(start, end, howMany) {
   var a = new Array();
   for (var i = 0; i < howMany; i++) {
      var rand = Math.floor(Math.random() * (end - start + 1)) + start;
      a.push(rand);
   }
   return a;
}

//Funzione che calcola e ritorna la somma tutti gli elementi contenuti nell'array
// passato come parametro
function sumArrElement(arr) {
   var sum = 0;
   for (var i = 0; i < arr.length; i++) {
      sum += arr[i];
   }
   return sum;
}
