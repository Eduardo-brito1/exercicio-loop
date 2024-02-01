const nomes = ["Ana", "Joana", "Carlos", "amanda"];


const somenteComA = []

for (let i = 0; i < nomes.length; ++i) {
    if (nomes[i].indexOf('A', 0) === 0 || nomes[i].indexOf('a', 0) === 0) {
        somenteComA.push(nomes[i])
    }
}

console.log(somenteComA);