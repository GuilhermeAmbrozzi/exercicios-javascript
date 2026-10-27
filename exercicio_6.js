function verificarAprovacao(nota1, nota2, nota3){
    const soma = nota1 + nota2 + nota3
    const media = soma / 3

    if (media >= 7){
        return "Aprovado"
    }else{
        return "Reprovado"
    }
}

let resultado = verificarAprovacao(7,8,6);

console.log(resultado);