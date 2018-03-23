/*

In un array sono contenuti i nomi degli invitati alla festa del grande Gatsby, chiedi
all’utente il suo nome e comunicagli se può partecipare o no alla festa.


*/

var listaInvitati = ["Daisy Buchanan", "Nick Carraway", "Tom Buchanan",
                     "Jordan Baker", "Meyer Wolfsheim", "George WIlson",
                     "Myrtle Wilson"];

var guestName = prompt("Inserisci nome e cognome: ");
var isGuest = false;

//Regex che permette di eseguire una ricerca case-insensitive delle parole
//Se la ricerca non produrrà un risultato ritornerà -1.
var re = new RegExp("^" + guestName + "$", "i");

for (var i = 0; i < listaInvitati.length; i++) {
   if (listaInvitati[i].search(re) != -1) {
      isGuest = true;
   }
}

if(isGuest) {
   alert("Benvenuto e buona serata!");
} else {
   alert("Si, te piacerebbe...");
}
