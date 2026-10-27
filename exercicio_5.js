function calcularMedia(nota1, nota2, nota3){
    let soma = nota1 + nota2 + nota3
    let media = soma / 3

    return media
}

let resultado = calcularMedia(7, 8, 9);

console.log(resultado)