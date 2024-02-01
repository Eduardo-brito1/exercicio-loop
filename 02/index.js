const letras = ["A", "a", "B", "C",]
let somaE = 0
let encotrado = false


for (let i = 0; i < letras.length; i++) {
    if (letras[i] === 'e' || letras[i] === 'E') {
        encotrado = true
        somaE++
    }

}

if (!encotrado) {
    console.log('Nenhuma letra "E" ou "e" foi encontrada.')
} else {
    console.log(`Foram encontradas ${somaE} letras "E" ou "e".
    `)
}