let numeros = [3, 8, 12, 5, 7, 10, 4];

let pares = 0;
let impar = 0;
let somaPares = 0;

for(let i = 0; i < numeros.length; i++){

    if(numeros[i] % 2 === 0 ){
        pares = pares + 1

        somaPares = somaPares + numeros[i]
    }else{
        impar = impar + 1
    }
}

console.log(pares)
console.log(impar)
console.log(somaPares)
