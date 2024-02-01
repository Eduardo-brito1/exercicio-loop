const filaDeDentro = ["Jose", "Maria", "Joao"];
const filaDeFora = ["Joana", "Roberta", "Marcos", "Felipe"];

let indice = 0

while (filaDeFora.length >= filaDeDentro.length) {
    filaDeDentro.push(filaDeFora[indice])

    indice++;
}


console.log(filaDeDentro)