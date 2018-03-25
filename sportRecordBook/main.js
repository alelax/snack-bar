/*

*** Sport Record Book ***

Il software deve generare casualmente le statistiche di gioco di 100 giocatori di basket per
una giornata di campionato.
In particolare vanno generate per ogni giocatore le seguenti informazioni, facendo
attenzione che il numero generato abbia senso:

- Codice Giocatore Univoco (formato da 3 lettere maiuscole casuali e 3 numeri)
- Numero di punti fatti
- Numero di rimbalzi
- Falli
- Percentuale di successo per tiri da 2 punti
- Percentuale di successo per da 3 punti

Una volta generato il “database”, il programma deve chiedere all’utente di inserire un Codice
Giocatore e il programma restituisce le statistiche.
BONUS: Dopo la generazione di dati casuali, il programma chiederà quale operazione vuole
fare l’utente che potrà scegliere tra le seguenti opzioni:

   ● L’utente inserisce 0: il programma termina
   ● L’utente inserisce 1: L’utente deve inserire il codice giocatore univoco per avere le
     informazioni su quel giocatore (“come prima”)
   ● L’utente inserisce 2: L’utente deve inserire il nome di una statistica (numero punti
     fatti, falli, etc) e il programma restituirà la media di quella statistica calcolata su tutti i
     giocatori.

*/

var db = new Array();

//Generazione delle statistiche di gioco per 100 giocatori
for (var i = 0; i < 100; i++) {
   var playerScore = genPlayerScore();
   var twoPoint = twoPointsScored(playerScore);
   var threePoint = threePointsScored(playerScore, twoPoint);
   var player = { "id" : genCode(), "punti_fatti" : genPlayerScore(), "falli_commessi" : genPlayerFouls(),
                  "tiri_2punti" : getScoredPercent(playerScore, twoPoint), "tiri_3punti" : getScoredPercent(playerScore, threePoint) };
   db.push(player);
}

for (var i = 0; i < db.length; i++) {
   console.log("i: " + i + " " + db[i].id);
}



var idPosition = insertId();
printStat( db[idPosition] );

do {
   var usrChoiche = parseInt( prompt("Scegli la prossima operazione da eseguire: \n[0] Termina programma \n[1] Visualizza statistiche giocatore \n[2] scegli e visualizza una statistica") );
} while ( (usrChoiche != 0) && (usrChoiche != 1) && (usrChoiche != 2) );

switch (usrChoiche) {
   case 0:
      break;
   case 1:
      idPosition = insertId();
      printStat( db[idPosition] );
      break;
   case 2:
      var prop = statChoiche(db);
      var media = statMedia(db, prop);
      alert("La media della statistica " + prop + " è: " + media);
      break;
}


console.log("codice giocatore:");
console.log(genCode());
console.log("-----------------");

console.log("punti giocatore:");
var playerScoreTest = genPlayerScore();
console.log(playerScoreTest);
console.log("-----------------");

console.log("Falli commessi:");
console.log(genPlayerFouls());
console.log("-----------------");

console.log("percentuale tiri da due punti");
var twoPointTest = twoPointsScored(playerScoreTest);
console.log(getScoredPercent(playerScoreTest, twoPointTest));
console.log("-----------------");


console.log("percentuale tiri da tre punti");
var threePointTest = threePointsScored(playerScoreTest, twoPointTest);
console.log(getScoredPercent(playerScoreTest, threePointTest));
console.log("-----------------");

console.log("ricerca id");
// var codeRequest = prompt("Inserisci un codice giocatore per visualizzare le statistiche: ");
// console.log(searchId(db, codeRequest));
console.log("-----------------");

console.log("media statistica");
// var prop = statChoiche(db);
// console.log(statMedia(db, prop));
console.log("-----------------");






//Funzione che genera un codice casuale formato da tre lettere maiuscole e tre numeri:
//Il primo ciclo genera un numero casuale tra 0 e la lunghezza della stringa maiusc-1. Tale
//numero verrà utilizzato come indice per prendere quel carattere presente in quella posizione della stringa
//Il secondo ciclo genera 3 numeri casuali da 0 a 9 e li concatenta
//Le tre lettere e i tre numeri verranno concatenati insieme e restituiti come codice.
function genCode() {
   var maiusc = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
   var literal = "";
   var number = "";
   var code = "";
   for (var i = 0; i < 3; i++) {
      literal += maiusc.charAt(randomNumber( 0, (maiusc.length-1) ) );
   }
   for (var i = 0; i < 3; i++) {
      number += randomNumber(0, 9);
   }
   code = literal + number;
   return code;
}

//Funzione che genera un numero casuale compreso tra l'estremo inferiore start
//e l'estremo superiore end, inclusi.
function randomNumber(start, end) {
   return Math.floor(Math.random() * (end - start + 1)) + start;
}

//Funzione che genera i punti fatti da un giocatore in una partita
function genPlayerScore() {
   return randomNumber(0, 40);
}

//Funzione che genera i falli fatti da un giocatore in una partita
function genPlayerFouls() {
   return randomNumber(0, 15);
}

//Funzione che genera la percentuale di tiri da 2 punti fatti da un giocatore in una partita
function twoPointsScored(maxPointScored) {
   return randomNumber(0, maxPointScored);
}

//Funzione che genera la percentuale di tiri da 3 punti fatti da un giocatore in una partita
function threePointsScored(maxPointScored, twoPoint) {
   var maxPossible = maxPointScored - twoPoint;
   return randomNumber(0, maxPossible);
}

//Funzione che calcola la percentuale dei tiri da 2 o 3 punti rispetto ai punti totali
function getScoredPercent(maxPointScored, score) {
   if(maxPointScored == 0){
      return 0 + " %";
   } else {
      return (score / maxPointScored * 100) + " %";
   }
}

//Funzione che cerca nel db se l'id inserito è presente; ritorna la posizione dell'id altrimenti -1
function searchId(db, idRequested) {
   index = -1;
   for (var i = 0; i < db.length; i++) {
      if (db[i].id == idRequested) {
         index = i;
      }
   }
   return index;
}

//Funzione che riceve un oggetto e ne stampa le proprietà
function printStat(obj) {
   alert("STATISTICHE GIOCATORE: " + obj.id  + "\n" +
                  "punti_fatti: " + obj.punti_fatti + "\n" +
                  "falli_commessi: " + obj.falli_commessi + "\n" +
                  "tiri_2punti: " + obj.tiri_2punti + "\n" +
                  "tiri_3punti: " + obj.tiri_3punti);
}

//Funzione che chiede all'utente di inserire il codice identificativo di un giocatore
function insertId(){
   do {
      var codeRequest = prompt("Inserisci un codice giocatore per visualizzare le statistiche: ");
      var idPosition = searchId(db, codeRequest);
   } while ( idPosition == -1 );
   return idPosition;
}

//Funzione che richiede all'utente di scegliere la statistica
function statChoiche(db) {
   do {
      var property = prompt("Quale statistica vuoi visualizzare?\npunti_fatti,\nfalli_commessi,\ntiri_2punti,\ntiri_3punti");
   } while ( (property != "punti_fatti") && (property != "falli_commessi") && (property != "tiri_2punti") && (property != "tiri_3punti")  );
   return property;
}

//FUnzione che prende in input l'array e la statistica della quale calcolerà la media
function statMedia(db, property){
   var totalSum = 0;
   for (var i = 0; i < db.length; i++) {
      if (property == "punti_fatti") {
         totalSum += db[i].punti_fatti;
      } else if(property == "falli_commessi") {
         totalSum += db[i].falli_commessi;
      } else if (property == "tiri_2punti") {
         totalSum += db[i].tiri_2punti;
      } else {
         totalSum += db[i].tiri_3punti;
      }
   }
   return totalSum / db.length;
}
