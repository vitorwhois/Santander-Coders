/* Desafio 08
Dado um array idades, encontre o índice do último elemento que sejam maior ou
igual a 18.
const idades = [15, 22, 17, 20, 30, 12];  */

const idades = [15, 22, 17, 20, 30, 12];

let indice = -1;
for (let i = 0; i < idades.length; i++) {
    if (idades[i] >= 18) {
        indice = i;
    }
}

console.log("O índice do último elemento que seja maior ou igual a 18 é: " + indice);