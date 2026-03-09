import createItem from './services/item.js'
import { adicionarItem, removerItem, deletarItem, calcularTotal, listarItens } from './services/carrinho.js' 

const meuCarrinho = [];

const item1 =  await createItem("mouse", 19.99, 3);
const item2 = await createItem("Teclado", 49.99, 3)
const item3 = await createItem("monitor", 300, 3)
const item4 = await createItem("mousePad", 16.99, 3)




await adicionarItem(meuCarrinho, item1);
await adicionarItem(meuCarrinho, item2);
await adicionarItem(meuCarrinho, item3);
await adicionarItem(meuCarrinho, item4);


// await deletarItem(meuCarrinho, item1[0]);

await removerItem(meuCarrinho, item4, 3);





await listarItens(meuCarrinho);

await calcularTotal(meuCarrinho)
