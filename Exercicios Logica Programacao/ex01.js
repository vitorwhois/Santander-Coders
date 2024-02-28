function verificarElegibilidadeVoto() {
    var idade = prompt("Digite a sua idade:");
    var nacionalidade = prompt("Digite a  sua nacionalidade:");

    if (idade >= 16 && nacionalidade.toLowerCase() === "brasileira") {
        return true;
    } else {
        return false;
    }
}