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




const listaWrapperEl = document.querySelector('.lista_wrapper')
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






