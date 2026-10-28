// A função deve percorrer o vetor e retornar quantos números pares existem.

function contarPares(numeros) {
    
    let somaNumerosPares = 0;

    for( let i = 0; i < numeros.length; i++){

        if(numeros[i] % 2 === 0){

            somaNumerosPares = somaNumerosPares + 1

        }
    }
    return somaNumerosPares
}

let numeros = [4,7,10,3,8,11];

let resultados = contarPares(numeros)

console.log(resultados)