/* Richiesta:
Generatore di “nomi cognomi” casuali: il Grande Gatsby ha
una lista di nomi e una lista di cognomi, e da queste vuole
generare una falsa lista di invitati con nome e cognome. */

/*------------------------------------------------*/

// Recupero gli elementi dall'html
let generateBtnElement = document.querySelector("#generateBtn");
let guestListSectionElement = document.querySelector("#guestListSection");
let guestListElement = document.querySelector("#guestList");

// Creo il primo array con i nomi
let nameList = ["John", "Olivia", "Jack", "Paul", "Emma", "Steve", "Charlotte", "Madison", "Linda", "Ethan"];

// Creo il secondo array con i cognomi
let surnameList = ["Smith", "Jones", "Williams", "Brown", "Roberts", "Miller", "Davies", "Rodriguez", "Thomas", "Taylor"];

// Creo una variabile vuota per un numero casuale
let randomNum = 0;

// Creo un event listener per il tasto Genera lista invitati
generateBtnElement.addEventListener("click", function(){

    // Resetto la sezione della lista
    guestListSectionElement.classList = "d-none";
    guestListElement.innerHTML = "";

    // Creo un ciclo di 10 iterazioni
    for (let i = 0; i < 10; i++) {

        // Genero un numero casuale da 0 a 9
        randomNum = Math.floor(Math.random() * 10);
        console.log(randomNum);

        // Seleziono un nome casuale
        let name = nameList[randomNum];
        console.log(name);

        // Genero un secondo numero casuale da 0 a 9
        randomNum = Math.floor(Math.random() * 10);
        console.log(randomNum);

        // Seleziono un cognome casuale
        let surname = surnameList[randomNum];
        console.log(surname);

        // Stampo il risultato
        guestListSectionElement.classList = "";
        guestListElement.innerHTML += `${name} ${surname} <br>`;

    }

});