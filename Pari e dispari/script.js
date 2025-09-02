/*Pari e Dispari
L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
Sommiamo i due numeri
Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
Dichiariamo chi ha vinto.
_____________________________________________________________________________________ */

//PASSAGGI LOGICI:


//INPUT
// Chiedi all’utente se sceglie pari o dispari
const sceltaUtente = prompt("Scegli pari o dispari?");

//Chiedi all’utente di inserire un numero da 1 a 5
const numeroUtente = parseInt(prompt("Scegli un numero da 1 a 5"));



//ELABORAZIONE
//1. generare numero per il computer
    //usare funzione che genera numero casuale tra 1 e 5
    function randomNum() {
        return Math.floor(Math.random() * 5) + 1;
    }

    // salvare il risultato in una variabile
    const numeroComputer = randomNum();


//2. somma dei numeri (Somma il numero dell’utente e quello del computer)
    const somma = numeroUtente + numeroComputer;


//3. funzione per dire se è pari o dispari
    //crea una funzione che prende un numero e restituisce "pari" se % 2 === 0, altrimenti "dispari"
    function checkPariDispari(numero) {
        if (numero % 2 === 0) {
            return "pari";
        } else {
            return "dispari";
        }
    }

    //applica la funzione alla somma
    const risultatoPariDispari = checkPariDispari(somma);

//4. stabilire chi vince
    //se il risultato è quello che ha scelto l'utente, allora vince lui
    if (risultatoPariDispari === sceltaUtente) {
        console.log("Hai vinto tu!");
        //altrimenti, vince il computer       
    } else {
        console.log("Ha vinto il computer.");        
    }

    

//OUTPUT: stampare num utente e num computer, somma e chi ha vinto
