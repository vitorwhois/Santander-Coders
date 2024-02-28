/* Desafio 09
Dado um array notas, calcule a média aritmética das notas, mas ignore a nota
mais baixa e a nota mais alta do conjunto.
const notas = [8, 9, 7, 5, 10, 6]; */


const notas = [8, 9, 7, 5, 10, 6];

notas.sort((a, b) => a - b);

notas.pop();
notas.shift();

const soma = notas.reduce((a, b) => a + b, 0);
const media = soma / notas.length;

console.log("A média das notas, ignorando a nota mais baixa e a nota mais alta, é: " + media);
