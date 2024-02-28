function verificarAprovacaoEmprestimo() {
    var salario = prompt("Insira o seu salário:");
    var scoreDeCredito = prompt("Insira o  seu score de crédito:");
    var idade = prompt("Insira a sua idade:");

    if (salario >= 5000 && scoreDeCredito >= 700 && idade >= 18) {
        return true;
    } else {
        return false;
    }
}