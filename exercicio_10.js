//Ela deve retornar quais notas estão acima da média, e não a quantidade.

function encontrarNotasAcimaDaMedia(notas){
    let media = 0;
    let soma = 0;
    let notasEncontradas = [];

    for(let i = 0; i < notas.length; i++){
        soma = soma + notas[i]
    }

    media = soma / notas.length;

    for(let i = 0; i < notas.length; i++){
        if(notas[i] > media){
          notasEncontradas.push(notas[i])
        }
    }

    return notasEncontradas
}

let notas = [6, 8, 7, 9, 5];

let resultados = encontrarNotasAcimaDaMedia(notas)

console.log(resultados)