function verificarCompatibilidade() {
    var navegador = prompt("Qual o seu navegador?");
    var sistemaOperacional = prompt("Qual o seu sistema operacional?");

    if ((navegador === "Chrome" || navegador === "Firefox") && (sistemaOperacional === "Windows" || sistemaOperacional === "Mac")) {
        return true;
    } else {
        return false;
    }
}