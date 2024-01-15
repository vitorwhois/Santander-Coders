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
  
  function adicionarAoPedido(itemNome, quantidade, menu) {
    const item = menu.find((item) => item.nome === itemNome);
  
    if (item) {
      const totalPedido = quantidade * item.preco;
      const novoPedido = { nome: itemNome, quantidade: quantidade, total: totalPedido };
      pedido.push(novoPedido);
  
      console.log(`Pedido atualizado:`);
      console.log(pedido);
    } else {
      console.log(`Item ${itemNome} não encontrado no menu.`);
    }
  }
  
  // Exemplo de uso:
  criarItemDoMenu("Lasanha", 20, "Massa, molho de tomate, queijo");
  adicionarAoPedido("Lasanha", 2, menu);
  adicionarAoPedido("Stroganoff", 2, menu);
