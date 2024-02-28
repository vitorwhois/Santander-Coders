/* Desafio 01
Crie um mapa para representar uma lista de compras
const listaDeCompras = new Map()
1. Adicione itens à lista de compras com a quantidade desejada
Maçã - 5
Banana - 3
Leite - 4
Pão - 10
2. Verifique se um item específico está na lista de compras
3. Verifique a quantidade de um item específico da lista
4. Modifique a quantidade de um item específico da lista
5. Remova um item específico da lista*/


const listaDeCompras = new Map();

listaDeCompras.set("Maçã", 5);
listaDeCompras.set("Banana", 3);
listaDeCompras.set("Leite", 4);
listaDeCompras.set("Pão", 10);

console.log(listaDeCompras.has("Maçã")); 

console.log(listaDeCompras.get("Banana")); 

listaDeCompras.set("Banana", 6);
console.log(listaDeCompras.get("Leite"));

listaDeCompras.delete("Pão");
console.log(listaDeCompras.has("Pão")); 
