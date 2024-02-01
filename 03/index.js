const numeros = [54, 22, 14, 87, 10, 284];
let encotrado = false;

for (let i = 0; i < numeros.length; i++) {

    if (numeros[i] === 10) {
        encotrado = true
        console.log(numeros.indexOf(numeros[i]))
    }

}

if (!encotrado) {
    console.log('-1')
}
