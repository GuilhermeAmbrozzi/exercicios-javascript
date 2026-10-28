// A função deve:
// 1. calcular a média de todas as notas;
// 2. depois verificar quantas notas estão acima da média;
// 3. retornar essa quantidade.

function contarAcimaDaMedia(notas){
    let media = 0
    let soma = 0;
    let notasAcimaDaMedia = 0;

    for(let i = 0; i < notas.length; i++ ){
        soma = soma + notas[i]
    }

    media = soma / notas.length;

    for( let i =0; i < notas.length; i++){
        if(notas[i] > media)
            notasAcimaDaMedia = notasAcimaDaMedia +1
    }

    return notasAcimaDaMedia
    
}

let notas = [6,8,7,9,5]

let resultados = contarAcimaDaMedia(notas)

console.log(resultados)