// Il computer deve generare 16 numeri casuali tra 1 e 100. I numeri non possono essere duplicati.
// In seguito deve chiedere all’utente (100 - 16) volte di inserire un numero alla volta, sempre compreso tra 1 e 100. L’utente non può inserire più volte lo stesso numero.
// Se il numero è presente nella lista dei numeri generati, la partita termina, altrimenti si continua chiedendo all’utente un altro numero. La partita termina quando il giocatore inserisce un numero “vietato” o raggiunge il numero massimo possibile di numeri consentiti.
// Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha inserito un numero consentito.


var numPc = [];



while (numPc.length < 16) {
    var numRan = (randomNumb(1,100));
    if (!numPc.includes(numRan)) {
        numPc.push(numRan); 
    }
    
}
console.log(numPc);

// i=0
// while (i< (100-16)){
//     var utente = parseInt(prompt('inserisci un numero da 1 a 100'));
//     if (utente !== 0 && utente <100 && utente !== numPc) {
//         console.log(utente + 'continua');
//     }else
//      console.log('boom')



// }





function randomNumb(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
  }