/* Desafio 07
Dado um array idades, encontre o índice do primeiro elemento que seja maior ou
igual a 18.
const idades = [15, 22, 17, 20, 30, 12]; */

const idades = [15, 22, 17, 20, 30, 12];

const indice = idades.findIndex(idade => idade >= 18);

console.log("O índice do primeiro elemento que seja maior ou igual a 18 é: " + indice);
