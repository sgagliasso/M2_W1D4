/* 1 - Elenca e descirvi i principali datatype in Javascript. Spiegandoli
Risposta: 
i datatype in JS sono: 
- String: rappresenta una serie di caratteri che viene utilizzata per memorizzare del testo. 
  Esempio let nome = "Mario";
- Number: Rappresenta sia i numeri interi che quelli decimali(con la virgola)
  Esempio: let eta = 25; let prezzo = 9.90;
- Bigint: Al pari del number ma riesce a gestire numeri interi molto grandi  o dei numeri seriali molto lunghi
          e si crea aggiungendo una n alla fine del numero
  Esempio: let numeroGrande = 9007199254740991n;
- Boolean (Booleano): Rappresenta un valore logico e può avere solo due stati: true (vero) o false (falso).
  Esempio: let isLoggedIn = true;

- Undefined: È il valore assegnato automaticamente a una variabile che è stata appena dichiarata ma a cui non è stato ancora associato un valore.
  Esempio: let utente; console.log(utente); // Stampa undefined

- Null: Rappresenta l'assenza intenzionale di qualsiasi valore o oggetto. Viene assegnato volontariamente dal programmatore per indicare che una variabile non contine nulla o per "svuotare una variabile" a cui si era precedentemente assegnato un valore.
  Esempio: let risultato = null;

- Symbol: Rappresenta un valore unico e immutabile. Viene spesso usato come chiave nascosta o univoca per le proprietà degli oggetti per evitare che vadano in conflitto con altre chiavi.
  Esempio: let id = Symbol('id');

Object (Oggetto): A differenza dei tipi primitivi, un oggetto può contenere collezioni di dati più complesse strutturate in coppie di chiave-valore.

  Esempio di oggetto:

    let persona = {
    nome: "Anna",
    eta: 30
    };


array (lista): collezziona una serie di dati solitamente dello stesso tipo

  let colori = ["rosso", "verde", "blu"];

2 Scrivi il codice per effettuare una somma dei numeri 12 e 20 salvando il risultato in una variabile*/
let a = 12 
let b = 20
let somma = a + b
console.log(somma);

/* 3 Crea una variabile di nome "x" e assegna ad essa il valore 12. */

let x
x = 12
console.log(x);

/* 4 Crea una variabile nome e assegna ad essa il tuo nome. */
 let name = "Simone"
console.log(name);

/* 5 Esegui una sottrazione tra i numeri 4 e la variabile "x" */

let y = 4
let sottrazione = x-y;
console.log(sottrazione);

/* 6 Crea un Oggetto che mi rappresenti come (nome, cognome, eta e hobby)*/

let myCaratteristic = {
    nome: "Simone",
    cognome: "Gagliasso",
    eta: 32,
    hobby: "Palestra"
}

console.log(myCaratteristic)

/* 7 Crea due Variabili: name1 e name2 assegna a name1 la stringa "john" e assegna a name2 la stringa "John" Verifica che name1 sia diversa da name2. Infine verifica che la loro uguaglianza divinti true se vengono entrambe trasformate con lowecase (senza cambiare il valore di name2)*/

let name1 = "john"
let name2 = "John"
let verifyName = name1 === name2
console.log(verifyName)
let verifyNameLowerCase = name1.toLowerCase() === name2.toLocaleLowerCase()
console.log(verifyNameLowerCase)