//A função deve percorrer o vetor e retornar um novo vetor apenas com os números pares.

function filtrarNumerosPares(numeros){
    let numerosPares = []

    for (let index = 0; index < numeros.length; index++) {
        if(numeros[index] % 2 === 0){
            numerosPares.push(numeros[index])
        }
    }
    return numerosPares
}

let numeros = [3,8,11,14,7,20];

let resultados = filtrarNumerosPares(numeros)

console.log(resultados)