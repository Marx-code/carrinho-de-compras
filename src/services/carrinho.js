async function adicionarItem (userCarrinho, item) {
    return userCarrinho.push(item);
}

async function removerItem (userCarrinho, item, numeroItensRemovidos = 0) {

    const indice = userCarrinho.findIndex((p) => p == item);

    if (userCarrinho[indice].quantidade < numeroItensRemovidos) {
        console.log("Erro: você tentou remover mais itens do que possui")
    }else {
        userCarrinho[indice].quantidade = userCarrinho[indice].quantidade - numeroItensRemovidos;
    }
    

}







async function deletarItem (userCarrinho, nome) {
    const indice = userCarrinho.findIndex((item) => item.nome == nome);

    if (indice !== -1) {
        userCarrinho.splice( indice, 1)
    }
}

async function calcularTotal (userCarrinho) {
    const total = userCarrinho.reduce((total, item) => total + item.subtotal(), 0)
    return console.log(`O valor total do seu carrinho é de: R$ ${total}`);
}

async function listarItens (userCarrinho) {
    for(let i = 0; i < userCarrinho.length; i++) {
        console.log(`Item ${i}: ${userCarrinho[i].nome }, quantidade: ${userCarrinho[i].quantidade}, Subtotal: ${userCarrinho[i].subtotal()}`);
    }
    console.log("\n")
}   
 
export {
    adicionarItem, 
    removerItem, 
    deletarItem, 
    calcularTotal,
    listarItens,
};