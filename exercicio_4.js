function verificarIdade(idade){
    if (idade <= 0 ){
        return `Número Inválido`
    }else if(idade >= 18){
         return `Maior de Idade`
    }else{
         return `Menor de Idade`
    }
}

let resultado = verificarIdade(0);

console.log(resultado);