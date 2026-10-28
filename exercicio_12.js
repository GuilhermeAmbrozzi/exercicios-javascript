//A função deve percorrer o vetor e somar apenas os números maiores que o limite.

function somarNumerosMaiores(numeros, limite){
    let somaNumeros = 0;

    for (let index = 0; index < numeros.length; index++) {
        if(numeros[index] > limite){
            somaNumeros = somaNumeros + numeros[index]
        }
    }

    return somaNumeros
}

let numeros = [5,12,3,18,7,20,9];

let resultados = somarNumerosMaiores(numeros, 10)

console.log(resultados)