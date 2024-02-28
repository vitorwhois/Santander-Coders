function verificarDesconto() {
    var idade = prompt("Insira sua idade:");
    var compraMinima = prompt("Insira o valor mínimo de compra:");
    var isNewClient = prompt("Você é um novo cliente? (Se for um cliente novo responta 'true' caso contrario 'false' para cliente antigo.)");

    if (idade >= 60 && compraMinima >= 100 && isNewClient.toLowerCase() === 'false') {
        return true;
    } else {
        return false;
    }
}