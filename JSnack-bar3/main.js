/*

Fizz Buzz test: Scrivi un programma che stampi i numeri da 1 a 100 ma per i multipli
di 3 stampi “Fizz” al posto del numero e per i multipli di 5 stampi Buzz. Per i numeri
che sono sia multipli di 3 che di 5 stampi FizzBuzz.

*/

for (var i = 1; i <= 100; i++) {
   if( is3Multipler(i) && is5Multipler(i) ) {
      console.log("FizzBuzz");
   } else if ( is5Multipler(i) ) {
      console.log("Buzz");
   } else if ( is3Multipler(i) ) {
      console.log("Fizz");
   } else {
      console.log(i);
   }
}


//Funzione che riceve un numero e controlla se è un multiplo di 3. Restituisce false
//per esito negativo
function is3Multipler(num) {
   var resto = num % 3;
   var isMultipler = false;
   if (resto == 0) {
      isMultipler = true;
   }
   return isMultipler;
}

//Funzione che riceve un numero e controlla se è un multiplo di 5. Restituisce false
//per esito negativo
function is5Multipler(num) {
   var resto = num % 5;
   var isMultipler = false;
   if (resto == 0) {
      isMultipler = true;
   }
   return isMultipler;
}
