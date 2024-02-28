/* Desafio 04
Crie um vetor (array) chamado vetor1 com valores de coordenadas x e outro
vetor vetor2 com valores de coordenadas y. Calcule o produto escalar (produto
interno) desses dois vetores usando a fórmula matemática do produto escalar. */

var vetor1 = [1, 2, 3]; // coordenadas x
var vetor2 = [4, 5, 6]; // coordenadas y

var produtoEscalar = 0;

for (var i = 0; i < vetor1.length; i++) {
    produtoEscalar += vetor1[i] * vetor2[i];
}
console.log("O produto escalar dos vetores é: " + produtoEscalar);