/* Richiesta:
Crea un array di numeri interi e fai la somma di tutti gli elementi
che sono in posizione (indice) dispari. */

/*------------------------------------------------*/

// Recupero gli elementi dall'html
let generateBtnElement = document.querySelector("#generateBtn");
let numListSectionElement = document.querySelector("#numListSection");
let numListElement = document.querySelector("#numList");
let sumNumSectionElement = document.querySelector("#sumNumSection");
let sumNumElement = document.querySelector("#sumNum");

// Creo un event listener per il bottone Genera numeri
generateBtnElement.addEventListener("click", function(){

    // Creo un array vuoto
    let numArray = [];

    // Creo una variabile per sommare i numeri
    let sumNum = 0;

    // Creo un ciclo di 20 iterazioni
    for (let i = 0; i < 20; i++) {

        // Genero un numero casuale intero tra 0 e 100
        let randomNum = Math.floor(Math.random() * 101);

        // Aggiungo il numero all'array
        numArray.push(randomNum);

        // Stampo il numero in pagina
        numListElement.innerHTML += `${randomNum}<br>`

        // Controllo l'indice se dispari e sommo il numero
        if (i % 2 !== 0) {
            sumNum += randomNum;
        }

        // Stampo la somma totale dei numeri con indice dispari
        sumNumElement.innerHTML = `${sumNum}`;

        // Mostro la sezione dei risultati
        numListSectionElement.classList = "";
        sumNumSectionElement.classList = "pt-4";

    }

});