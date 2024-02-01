const numeros = [8, 11, 4, 1];
let maior = 0
let numerom = 0

for (let i = 0; i < numeros.length; i++) {
    if (maior < numeros[i]) {
        maior = numeros[i]
    }
    if (numerom <= maior) {
        numerom = numeros[i]

    }

}

console.log(maior - numerom)
