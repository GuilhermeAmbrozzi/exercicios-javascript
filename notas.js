let notas = [7, 5, 10, 8, 6];

let maiorNota = notas[0];
let menorNota = notas[0];
let media = 0;
let soma = 0;

for (let i = 0; i < notas.length; i++) {
   
    soma = soma + notas[i];

    if (notas[i] > maiorNota){

        maiorNota = notas[i]

    }

    if (notas[i] < menorNota) {
        menorNota = notas[i]
    }

    media = soma / notas[i]

}

console.log(maiorNota)
console.log(menorNota)
console.log(media)


// da forma que fiz a media fica errada por que deveria colocar o calculo da media fora do for e tambem usar notas.length pois ele puxa a quantidade de elementos no vetor. Assim (media = soma / notas.length)