/* Scrivi una funzione che accetti un array di nomi e restituisca nuovo un array con le iniziali di ogni parola dell'array fornito */

const names = ["Anna", "Luca", "Marco", "Adele", "Giovanni", "Alessandra"];

// Dichiara la funzione qui.

function firstLetter (names){
    const letter=[];
    for (let i= 0; i < names.length; i++){
        letter.push(names[i][0])
    }
    return letter;
    
}

// Invoca la funzione qui e stampa il risultato in console

const letter= firstLetter(names)
console.log(letter)

//Risultato atteso: ["A", "L", "M", "A", "G", "A"]


