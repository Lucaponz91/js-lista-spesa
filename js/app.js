console.log('ciao')
// CREO L'ARRAY DEGLI OGGETTI DA COMPRARE
const lista = [
    'banane',
    'mele',
    'yogurt',
    'nitroglicerina',
    'uranio'
]

const listaWrapperEl = document.getElementById('lista_wrapper')
const listaWrapper2El = document.getElementById('lista_wrapper2')


// CICLO FOR
for (let i = 0; i < lista.length; i++) {
    // CREO IL LI
    const li = document.createElement('li');

    // INSERISCO IL CONTENUTO DEL LI
    li.innerHTML = lista[i];
    // listaWrapperEl.innerHTML += '<li>${prodotto}</li>'

    // AGGIUNGO IL LI CREATO ALL UL
    listaWrapperEl.append(li) ;
}

// CICLO WHILE
let index = 0;

while (index < lista.length) {
    // CREO IL LI
    const li = document.createElement('li');

    // INSERISCO IL CONTENUTO DEL LI
    li.innerHTML = lista[index];

    // APPENDO IL CONTENUTO NELL' UL
    listaWrapper2El.append(li);

    // AUMENTO L'INDICE
    index++;

}




