// Il computer deve generare 16 numeri casuali tra 1 e 100. I numeri non possono essere duplicati.
// In seguito deve chiedere all’utente (100 - 16) volte di inserire un numero alla volta, sempre compreso tra 1 e 100. L’utente non può inserire più volte lo stesso numero.
// Se il numero è presente nella lista dei numeri generati, la partita termina, altrimenti si continua chiedendo all’utente un altro numero. La partita termina quando il giocatore inserisce un numero “vietato” o raggiunge il numero massimo possibile di numeri consentiti.
// Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha inserito un numero consentito.

document.getElementById("start").addEventListener("click", function(){


    var numPc = [];
    var difficolta = parseInt(prompt('Seleziona una difficoltà da 0 a 2'))
    
     document.getElementById('difficolta').innerHTML =
     difficolta;
    
    while (difficolta < 0 || difficolta > 2 || isNaN(difficolta)){
        alert('Inserire un numero tra 0 e 2')
        var difficolta = parseInt(prompt('Seleziona una difficoltà da 0 a 2'))
    }

    while (numPc.length < 16 && difficolta == 0) {
        var numRan = (randomNumb(1,100));
        if (!numPc.includes(numRan)) {
            numPc.push(numRan); 
        }
    }
    while (numPc.length < 16 && difficolta == 1) {
        var numRan = (randomNumb(1,80));
        if (!numPc.includes(numRan)) {
            numPc.push(numRan); 
        }
    }
    while (numPc.length < 16 && difficolta == 2) {
        var numRan = (randomNumb(1,50));
        if (!numPc.includes(numRan)) {
            numPc.push(numRan); 
        }
    }
    console.log(numPc);
    
    var listaUtente =[];
    
    var semaforo = true;
    i=0
    
    while (i< (100-16) && semaforo){
        var NumUtente = parseInt(prompt('inserisci un numero da 1 a 100'));
        
        if (listaUtente.includes(NumUtente)){
            semaforo = false;
            console.log('BOOM hai inserito due volte lo stesso numero');
            console.log('Hai totalizzato ' + i + ' Punti' );
            document.getElementById('punteggio').innerHTML = i;
            document.getElementById('risultato').innerHTML = 'BOOM hai inserito due volte lo stesso numero';
        }
    
        if (NumUtente > 0 && NumUtente != 0 && NumUtente <100 && !numPc.includes(NumUtente)) {
            console.log(NumUtente);
            listaUtente.push(NumUtente);
            
            
    
        }else{
            semaforo = false;
            console.log('BOOM');
            console.log('Hai totalizzato ' + i + ' Punti' )
            document.getElementById('punteggio').innerHTML = i;
            document.getElementById('risultato').innerHTML = 'BOOM hai colpito una bomba';
        }
    
        i++;
    }
    
    
    
    
    
    
    
    function randomNumb(min, max) {
        return Math.floor(Math.random() * (max - min + 1) ) + min;
      }

});