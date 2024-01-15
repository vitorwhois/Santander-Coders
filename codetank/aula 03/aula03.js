const prompt = require ('prompt-sync') ({sigint: true});


const contador = prompt("digite aqui um número");
for (i = 0; i < contador; i++) {
    console.log(i);
}

