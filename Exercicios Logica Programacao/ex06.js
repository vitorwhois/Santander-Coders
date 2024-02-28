/*Desafio 02
Crie um vetor (array) chamado notas com as notas de um aluno em três
disciplinas. Em seguida, calcule a média das notas usando a fórmula matemática
da média aritmética. */

var notas = [5, 10, 6];

var soma = notas[0] + notas[1] + notas[2];

var media = soma / notas.length;

console.log("A média das notas é: " + media);