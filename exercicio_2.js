let numero = [4, 9, 2 ,15, 7, 11];

let maiorNumero = numero[0]
let menorNumero = numero[0]
let soma = 0;

for (let i = 0; i < numero.length; i++) {
    
    soma = soma + numero[i]

    if(numero[i] > maiorNumero){

        maiorNumero = numero[i]

    }else if(numero[i] < menorNumero){
        
        menorNumero = numero[i]

    }
    
}

console.log(maiorNumero)
console.log(menorNumero)
console.log(soma)