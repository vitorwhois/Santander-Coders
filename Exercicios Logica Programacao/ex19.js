/* Desafio 05
Crie um objeto chamado pessoa com as propriedades nome, idade, e cidade.
Verifique se a pessoa tem 18 anos ou mais (Exibir apenas true ou false)
Verifique se a pessoa não é de uma cidade chamada "São Paulo" (True ou False) */


var pessoa = {
    nome: "Lucas",
    idade: 29,
    cidade: "Bahia"
};

var maiorDeIdade = pessoa.idade >= 18;
console.log(maiorDeIdade);

var naoEhDeSaoPaulo = pessoa.cidade !== "São Paulo";
console.log(naoEhDeSaoPaulo); 