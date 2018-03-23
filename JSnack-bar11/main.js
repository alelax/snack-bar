/*

Il software una volta avviato deve mostrare quanti secondi sono passati dal giorno
della vostra nascita (qui vale cercare su internet :)

*/


var myBirth = new Date("October 13, 1991 04:00:00");
var todayIs = new Date();

var secondsBy = (todayIs.getTime() - myBirth.getTime()) / 1000;
console.log(secondsBy);
