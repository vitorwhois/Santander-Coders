/* Desafio 05
Dado um array numeros, crie um novo array que contenha apenas os números pares
do array original.
const numeros = [3, 8, 15, 21, 30, 37, 42]; */

const numeros = [3, 8, 15, 21, 30, 37, 42];

const numerosPares = numeros.filter(numero => numero % 2 === 0);

console.log(numerosPares); 