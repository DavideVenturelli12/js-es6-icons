//debug
console.log('JS OK!');

/*
Milestone 1
Partendo dalla struttura dati fornita, visualizzare in pagina un box per ogni icona, in cui è 
presente il nome dell'icona e l'icona stessa.

Milestone 2
Ciascuna icona ha una proprietà "color": utilizzare questa proprietà per visualizzare le icone
del colore corrispondente.

Milestone 3
Aggiungere alla pagina una select in cui le options corrispondono ai vari tipi di icone 
(animal, vegetable, user). Quando l'utente seleziona un tipo dalla select, visualizzare solamente 
le icone corrispondenti.
*/


const arrayIcone = [
    {
        name: 'cat',
        prefix: 'fa-',
        type: 'animal',
        family: 'fas',
        color: 'orange'
    },
    {
        name: 'crow',
        prefix: 'fa-',
        type: 'animal',
        family: 'fas',
        color: 'orange'
    },
    {
        name: 'dog',
        prefix: 'fa-',
        type: 'animal',
        family: 'fas',
        color: 'orange'
    },
    {
        name: 'dove',
        prefix: 'fa-',
        type: 'animal',
        family: 'fas',
        color: 'orange'
    },
    {
        name: 'dragon',
        prefix: 'fa-',
        type: 'animal',
        family: 'fas',
        color: 'orange'
    },
    {
        name: 'horse',
        prefix: 'fa-',
        type: 'animal',
        family: 'fas',
        color: 'orange'
    },
    {
        name: 'hippo',
        prefix: 'fa-',
        type: 'animal',
        family: 'fas',
        color: 'orange'
    },
    {
        name: 'fish',
        prefix: 'fa-',
        type: 'animal',
        family: 'fas',
        color: 'orange'
    },
    {
        name: 'carrot',
        prefix: 'fa-',
        type: 'vegetable',
        family: 'fas',
        color: 'green'
    },
    {
        name: 'apple-alt',
        prefix: 'fa-',
        type: 'vegetable',
        family: 'fas',
        color: 'green'
    },
    {
        name: 'lemon',
        prefix: 'fa-',
        type: 'vegetable',
        family: 'fas',
        color: 'green'
    },
    {
        name: 'pepper-hot',
        prefix: 'fa-',
        type: 'vegetable',
        family: 'fas',
        color: 'green'
    },
    {
        name: 'user-astronaut',
        prefix: 'fa-',
        type: 'user',
        family: 'fas',
        color: 'blue'
    },
    {
        name: 'user-graduate',
        prefix: 'fa-',
        type: 'user',
        family: 'fas',
        color: 'blue'
    },
    {
        name: 'user-ninja',
        prefix: 'fa-',
        type: 'user',
        family: 'fas',
        color: 'blue'
    },
    {
        name: 'user-secret',
        prefix: 'fa-',
        type: 'user',
        family: 'fas',
        color: 'blue'
    }
];

console.table(arrayIcone);

//Milestone 1
//Partendo dalla struttura dati fornita, visualizzare in pagina un box per ogni icona, in cui è
//presente il nome dell'icona e l'icona stessa.


//Milestone 2
//Ciascuna icona ha una proprietà "color": utilizzare questa proprietà per visualizzare le icone
//del colore corrispondente.

//recupero l'icons-container dall'HTML
const containerIcone = document.querySelector('.icons-container');

//eseguo un ciclo forEach per ciclare gli object nell'array
arrayIcone.forEach((elemento) => {
    elementoCreato(elemento);
})

//per ogni object eseguo una funzione che crea uan cella
function elementoCreato(arrayIcone) {

    const cellaElemento = document.createElement('div');
    cellaElemento.classList.add('col-2', 'text-center', 'border', 'py-3', 'cella',);

    //inserisco all'interno della cella le proprietà dell'object
    cellaElemento.innerHTML = `
    <i class="${arrayIcone.family} ${arrayIcone.prefix}${arrayIcone.name} ${arrayIcone.color} "></i>
    <p>${arrayIcone.name}</p>`

    //inserisco la cella creata nell'HTML
    containerIcone.appendChild(cellaElemento);
}

//Milestone 3
//Aggiungere alla pagina una select in cui le options corrispondono ai vari tipi di icone
//(animal, vegetable, user).Quando l'utente seleziona un tipo dalla select, visualizzare solamente 
//le icone corrispondenti.

//recupero il select dall'HTML
const select = document.getElementById('select-icons');

//aggiungio un evento al select
select.addEventListener('change', (event) => {
    //svuoto prima di tutto il conteainer di icone
    containerIcone.innerHTML = '';

    //eseguo dei cicli if a seconda del type dell'object 
    //e inserendolo nell'HTML
    if (event.target.value === 'animals') { //preso dal value nell'HTML
        arrayIcone.filter((elemento) => {

            if (elemento.type === 'animal') { //preso dal type nell'object
                elementoCreato(elemento);
            }
        })
    } else if (event.target.value === 'vegetables') { //preso dal value nell'HTML
        arrayIcone.filter((elemento) => {

            if (elemento.type === 'vegetable') { //preso dal type nell'object
                elementoCreato(elemento);
            }
        })
    } else if (event.target.value === 'user') { //preso dal value nell'HTML
        arrayIcone.filter((elemento) => {

            if (elemento.type === 'user') { //preso dal type nell'object
                elementoCreato(elemento);
            }
        })
    } else if (event.target.value === 'all') { //preso dal value nell'HTML
        arrayIcone.forEach((elemento) => {
            elementoCreato(elemento);
        })
    }
})
