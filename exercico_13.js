//A função deve contar quantos números estão entre 5 e 15, incluindo o 5 e o 15.

function contarNumerosNointervalo(numeros, intervalo1, intervalo2) {

    let contagem = 0;

    for (let index = 0; index < numeros.length; index++) {
        
        if (numeros[index] >= intervalo1 && numeros[index] <= intervalo2) {
            contagem = contagem +1
        }
    }

    return contagem
    
}

let numeros = [3,8,12,5,20,15,2];

let resultados = contarNumerosNointervalo(numeros, 5, 15)

console.log(resultados)