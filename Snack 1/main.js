/* Richiesta:
Inserisci un numero, se è pari stampa il numero,
se è dispari stampa il numero successivo. */

/*------------------------------------------------*/

// Recupero gli elementi html
let inputNumElement = document.querySelector("#inputNum");
let generateBtnElement = document.querySelector("#generateBtn");
let evenNumSectionElement = document.querySelector("#evenNumSection");
let evenNumElement = document.querySelector("#evenNum");

// Creo un event listener per il bottone Genera numero pari
generateBtnElement.addEventListener("click", function(){

    // Resetto la sezione del risultato
    evenNumSectionElement.classList = "d-none";

    // Recupero l'input dell'utente
    let newNum = parseInt(inputNumElement.value);

    // Controllo che sia un numero
    if (isNaN(newNum)) {
        alert("Per favore, inserisci un numero valido!");
    } 
    
    // Se ok continuo nei calcoli
    else {
        
        // Controllo che sia pari
        if (newNum % 2 == 0) {

            // Stampo il numero inserito
            evenNumSectionElement.classList = "";
            evenNumElement.innerHTML = `${newNum}`;
        } else {

            // Cerco il numero successivo e lo stampo
            newNum = newNum + 1;
            evenNumSectionElement.classList = "";
            evenNumElement.innerHTML = `${newNum}`;
        }
    }
});