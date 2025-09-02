/*Palidroma
Chiedere all’utente di inserire una parola
Creare una funzione per capire se la parola inserita è palindroma
_______________________________________________________________________*/

//PASSAGGI LOGICI:

//INPUT: chiedere all'utente di inserire una parola
const word = (prompt("Inserisci una parola"));

//ELABORAZIONE
//Creare una funzione per capire se la parola inserita è palindroma
function reverseWord(word) {
    //variabile di stringa revertata
    let revertedWord = "";

    //ciclo la stringa
    for (let i = word.length - 1; i >=0; i--) {
       
        //estraggo la lettere alla posizione i
        let letteraIesima = word [i];

        revertedWord += letteraIesima;

    }
    return revertedWord;
}

//invoco la funzione
const reversed = reverseWord(word);


//OUTPUT: La parola X è palindroma” oppure “La parola X non è palindroma”
if (word.toLowerCase() === reversed.toLowerCase()) {
    console.log(("La parola inserita è palindroma"));

    } else {
        console.log(("La parola inserita NON è palindroma"));
        
    }
