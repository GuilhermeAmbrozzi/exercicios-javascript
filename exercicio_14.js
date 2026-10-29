// A função deve retornar dois vetores: um com números positivos; outro com números negativos. O 0 não entra em nenhum dos dois.

function separadorPositivoNegativo(numeros) {
  let positivos = [];
  let negativos = [];

  for (let index = 0; index < numeros.length; index++) {
    if (numeros[index] > 0) {
      positivos.push(numeros[index]);
    } else if (numeros[index] < 0) {
      negativos.push(numeros[index]);
    }
  }

  // return `Positivos: ${positivos} \nNegativos: ${negativos}`

  // Posso retornar em forma de objetos levando em concideração que esses valores posa ser usado ao longo do funcionamento e ficaria assim.

  return {
    positivos: positivos,
    negativos: negativos,
  };
}

let numeros = [5, -3, 8, -1, 0, 12, -7];

let resultados = separadorPositivoNegativo(numeros);

console.log(resultados);
console.log(resultados.positivos);
console.log(resultados.negativos);
