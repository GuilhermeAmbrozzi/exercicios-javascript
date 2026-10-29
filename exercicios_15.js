//A função deve contar quantos números são pares e quantos são ímpares. No final, deve retornar um objeto.

function analisarNumeros(numeros){

    let quantidadePares = 0;
    let quantidadeImpares = 0;

    for (let index = 0; index < numeros.length; index++) {
        
        if(numeros[index] % 2 === 0){
            quantidadePares = quantidadePares + 1;
        }else{
            quantidadeImpares = quantidadeImpares + 1
        }
        
    }

    return {
       quantidadePares: quantidadePares,
       quantidadeImpares: quantidadeImpares
    }

}

let numeros = [4,7,10,3,8];

let resultados = analisarNumeros(numeros)

console.log(resultados.quantidadePares)
console.log(resultados.quantidadeImpares)

