function calcularMediaNotas(notas){

    let soma = 0;
    let media = 0

    for( let i = 0; i < notas.length; i++){

        soma = soma + notas[i]
    }

    media = soma / notas.length
    return media

}

let notas = [7,8,6,9];

let resultado = calcularMediaNotas(notas);

console.log(resultado)