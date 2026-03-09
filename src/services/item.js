async function createItem (nome, preco, quantidade) {
    return {
        nome,
        preco,
        quantidade,
        subtotal: () => preco * quantidade,
    }
}

export default createItem