/*
- Deverá criar uma funcao criarItemDoMenu que recebe 3 parametros nome, preco, ingredientes

- Deverá criar uma funcao adicionarAoPedido que recebe 3 parametros pedido, item, quantidade

- Deverá criar uma funcao calcularTotalDoPedido que recebe 1 parametro pedido
*/

const menu = [
    { nome: "Feijão Tropeiro", preco: 25, ingredientes: "feijão, tempero, amor e sazon" },
    { nome: "Stroganoff", preco: 18, ingredientes: "Arroz, filé, batata palha e felicidade" },
    { nome: "feijoada", preco: 15, ingredientes: "feijao, arroz, couve" }
];

const pedido = 'Stroganoff';
const quantidade = 2;


function criarItemDoMenu(nome, preco, ingredientes) {
    const novoItem = {
        nome: nome,
        preco: preco,
        ingredientes: ingredientes
    };
    menu.push(novoItem);
    console.log(nome, preco, ingredientes);
}

const novoMenu = [];



  function adicionarAoPedido(pedido, quantidade, menu){
        if(pedido) {
            const item = menu.find((item) => item.nome === pedido)
            console.log(`Ola, gostaria de ${quantidade}x ${pedido}`)
            console.log(`Preço: R$ ${quantidade * item.preco}`)
        } 
  }
  


for (let i = 0; i < menu.length; i++) {
    const item = menu[i];
    criarItemDoMenu(item.nome, item.preco, item.ingredientes);
    novoMenu.push(item);
}
