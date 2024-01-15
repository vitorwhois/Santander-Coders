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
  
  const pedido = [];
  
  function criarItemDoMenu(nome, preco, ingredientes) {
    const novoItem = {
      nome: nome,
      preco: preco,
      ingredientes: ingredientes
    };
    menu.push(novoItem);
    console.log(nome, preco, ingredientes);
  }
  
  function adicionarAoPedido(pedido, item, quantidade) {
    const itemNoMenu = menu.find((menuItem) => menuItem.nome === item);
  
    if (itemNoMenu) {
      const totalPedido = quantidade * itemNoMenu.preco;
  
      const novoPedido = {
        nome: item,
        quantidade: quantidade,
        total: totalPedido
      };
  
      // Adiciona o novo pedido ao array 'pedido' fornecido como parâmetro
      pedido.push(novoPedido);
  
      console.log(`Pedido atualizado:`);
      console.log(pedido);
    } else {
      console.log(`Item ${item} não encontrado no menu.`);
    }
  }

  function calcularTotalDoPedido(pedido) {
    // Soma os totais de todos os pedidos no array
    const totalGeral = pedido.reduce((total, item) => total + item.total, 0);
    
    console.log(`Total do Pedido: R$ ${totalGeral}`);
  }
  
  // Exemplo de uso
  criarItemDoMenu("Salada Caesar", 12, "Alface, croutons, parmesão, molho Caesar");
  adicionarAoPedido(pedido, "Feijão Tropeiro", 2);
  adicionarAoPedido(pedido, "Stroganoff", 1);
  
  // Exemplo de uso:
  calcularTotalDoPedido(pedido);
  

 
  




/*

// Adicionando um novo item ao menu
criarItemDoMenu("Lasanha", 20, "Massa, molho de tomate, queijo");

// Adicionando outro item ao menu
criarItemDoMenu("Salada Caesar", 12, "Alface, croutons, parmesão, molho Caesar");

console.log(menu);




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
*/