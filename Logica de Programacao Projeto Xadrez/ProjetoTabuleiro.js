var tabuleiro = [
    [' ', ' ', ' '],
    [' ', ' ', ' '],
    [' ', ' ', ' ']
];

var jogadorAtual = 'X';

function fazerJogada(linha, coluna) {
    if (tabuleiro[linha][coluna] === ' ') {
        tabuleiro[linha][coluna] = jogadorAtual;
        jogadorAtual = jogadorAtual === 'X' ? 'O' : 'X';
        return true;
    } else {
        return false;
    }
}

function verificarVencedor() {
    for (var i = 0; i < 3; i++) {
        if (tabuleiro[i][0] !== ' ' && tabuleiro[i][0] === tabuleiro[i][1] && tabuleiro[i][0] === tabuleiro[i][2]) {
            return tabuleiro[i][0];
        }
        if (tabuleiro[0][i] !== ' ' && tabuleiro[0][i] === tabuleiro[1][i] && tabuleiro[0][i] === tabuleiro[2][i]) {
            return tabuleiro[0][i];
        }
    }
    if (tabuleiro[0][0] !== ' ' && tabuleiro[0][0] === tabuleiro[1][1] && tabuleiro[0][0] === tabuleiro[2][2]) {
        return tabuleiro[0][0];
    }
    if (tabuleiro[0][2] !== ' ' && tabuleiro[0][2] === tabuleiro[1][1] && tabuleiro[0][2] === tabuleiro[2][0]) {
        return tabuleiro[0][2];
    }
    return null;
}