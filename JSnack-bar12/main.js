/*

Il software deve fare un countdown dei secondi che mancano al vostro compleanno
(ipotizzando che manchino 1000 secondi, dovrà scrivere su console 1000, dopo un
secondo 999, dopo un secondo 998 e così via)

*/


var myNextBirth = new Date("October 13, 2018 04:00:00");
var todayIs = new Date();

var secondsBy = ( myNextBirth.getTime() - todayIs.getTime() ) / 1000;

window.setInterval(function(){
   console.log(secondsBy);
   secondsBy--;
}, 1000); 
