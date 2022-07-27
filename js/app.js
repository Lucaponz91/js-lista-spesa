console.log('ciao')
// CREO L'ARRAY DEGLI OGGETTI DA COMPRARE
const lista = [
    'banane',
    'mele',
    'yogurt',
    'nitroglicerina',
    'uranio'
]
// CREO L'ARRAY DEGLI OGGETTI COMPRATI
// const spesaFatta = []




const listaWrapperEl = document.querySelectorAll('.lista_wrapper')
// LO SVUOTO
// listaWrapperEl.innerHTML = ""

// CICLO FOR
for (let i = 0; i < lista.length; i++) {
    // CREO IL LI
    const li = document.createElement('li');

    // INSERISCO IL CONTENUTO DEL LI
    li.innerHTML = lista[i];

    // AGGIUNGO IL LI CREATO ALL UL
    listaWrapperEl[0].append(li);
}

// CICLO WHILE
let index = 0;

while (index < lista.length) {
    // CREO IL LI
    const li = document.createElement('li');

    // INSERISCO IL CONTENUTO DEL LI
    li.innerHTML = lista[index];

    // APPENDO IL CONTENUTO NELL' UL
    listaWrapperEl[1].append(li);

    // AUMENTO L'INDICE
    index++;

}




