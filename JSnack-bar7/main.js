/*

Gatsby vuole sapere la composizione dei suoi invitati. Prendendo il suo array di
invitati, in cui ogni elemento un “nome cognome”, vuole sapere la percentuale di
invitati uomini e invitati donne. Per aiutarsi, si è creato due array di appoggio con
nomi tipicamente da uomo e da donna.

*/


var listaInvitati = [ {"nome" : "Daisy", "cognome" : "Buchanan"},
                      {"nome" : "Nick", "cognome" : "Carraway"},
                      {"nome" : "Tom", "cognome" : "Buchanan"},
                      {"nome" : "Jordan", "cognome" : "Baker"},
                      {"nome" : "Meyer", "cognome" : "Wolfsheim"},
                      {"nome" : "George", "cognome" : "Wilson"},
                      {"nome" : "Myrtle", "cognome" : "Wilson"},
                    ];

//Liste generiche di nomi femminili e maschili
var listaNomiF = ["Daisy", "Myrtle", "Jordan", "Mary", "Samantha", "Louise", "Aurora" ];
var listaNomiM = ["Nick", "Tom", "Meyer", "George", "Liam", "Jhon", "Alex", "Gary"];

//variabili che contengono quanti maschi e quante femmine risultano invitati
var howManyF = 0;
var howManyM = 0;

for (var i = 0; i < listaInvitati.length; i++) {
   if ( listaNomiF.includes(listaInvitati[i].nome) ) {
      console.log(listaInvitati[i]);
      howManyF++;
   } else {
      howManyM++;
   }
}

var percentualeFemmine = getPercentage(listaInvitati, howManyF);
var percentualeMaschi = getPercentage(listaInvitati, howManyM);

alert( "Gli invitati sono:\n " + percentualeMaschi + " maschi \ne  \n" + percentualeFemmine + " femmine" );

//F unzione che rapporta il num passato come parametro al numero degli elementi dell'Carraway
//restituisce il valore in percentuale
function getPercentage(arr, num) {
   var r = ((num / arr.length) * 100).toFixed(2);
   return r + " %";
}
