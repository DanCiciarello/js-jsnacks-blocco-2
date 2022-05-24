/* Richiesta:
Crea due array che hanno un numero di elementi diversi.
Aggiungi elementi all’array che ha meno elementi fino a
quando ne avrà tanti quanti l’altro. */

/*------------------------------------------------*/

// Recupero gli elementi dal DOM
let generateBtnElement = document.querySelector("#generateBtn");
let startStateElement = document.querySelector("#startState");
let finalStateElement = document.querySelector("#finalState");


// Creo un event listener per il bottone Genera numeri
generateBtnElement.addEventListener("click", function(){

    // Creo due array vuoti
    let firstArray = [];
    let secondArray = [];

    // Genero un primo numero casuale tra 1 e 20
    let firstIndex = Math.floor(Math.random() * 20) + 1;

    // Aggiungo elementi al primo array in base al numero creato
    for (let i = 0; i < firstIndex; i++) {
        let randomNum = Math.floor(Math.random() * 100) + 1;
        firstArray.push(randomNum);
    }

    // Genero un secondo numero casuale tra 1 e 20
    let secondIndex = Math.floor(Math.random() * 20) + 1;

    // Aggiungo elementi al secondo array in base al numero creato
    for (let i = 0; i < secondIndex; i++) {
        let randomNum = Math.floor(Math.random() * 100) + 1;
        secondArray.push(randomNum);
    }

    // Stampo lo stato iniziale degli array
    startStateElement.innerHTML =
        `Allo stato iniziale il primo array contiene ${firstArray.length} elementi, ovvero ${firstArray}.<br>
        Allo stato iniziale il secondo array contiene ${secondArray.length} elementi, ovvero ${secondArray}.`;

    // Controllo se il primo array è maggiore del secondo
    if (firstArray.length > secondArray.length) {

        // Aggiungo elementi al secondo array in base alla differenza
        for (let i = secondArray.length; i < firstArray.length; i++) {
        let randomNum = Math.floor(Math.random() * 100) + 1;
        secondArray.push(randomNum);
        }

        // Stampo lo stato finale degli array
        finalStateElement.innerHTML =
        `Allo stato finale il primo array contiene ${firstArray.length} elementi, ovvero ${firstArray}.<br>
        Allo stato finale il secondo array contiene ${secondArray.length} elementi, ovvero ${secondArray}.`;

    }

    // Altrimenti controllo se il secondo array è maggiore del primo
    else if (secondArray.length > firstArray.length) {
        
        // Aggiungo elementi al primo array in base alla differenza
        for (let i = firstArray.length; i < secondArray.length; i++) {
        let randomNum = Math.floor(Math.random() * 100) + 1;
        firstArray.push(randomNum);
        }

        // Stampo lo stato finale degli array
        finalStateElement.innerHTML =
        `Allo stato finale il primo array contiene ${firstArray.length} elementi, ovvero ${firstArray}.<br>
        Allo stato finale il secondo array contiene ${secondArray.length} elementi, ovvero ${secondArray}.`;

    }

    // Altrimenti se sono uguali
    else {

        // Stampo un messaggio di conferma
        finalStateElement.innerHTML =
        `I due array hanno un numero uguale di elementi. Non è stata necessaria nessuna operazione!`;

    }

})