const { pedidos } = require("../repositories/pedidoRepository");

let proximoCodigo = 1;

function criarPedido(dados) {
    const {
        clienteCpf,
        clienteNome,
        produtoNome,
        produtoPreco
    } = dados;

    if (!clienteCpf) {
        throw new Error("CPF é obrigatório");
    }

    if (!/^\d{9}$/.test(clienteCpf)) {
        throw new Error("CPF deve possuir 9 dígitos numéricos");
    }

    if (!clienteNome) {
        throw new Error("Nome do cliente é obrigatório");
    }

    if (clienteNome.length < 5) {
        throw new Error("Nome do cliente deve ter pelo menos 5 caracteres");
    }

    if (!produtoNome) {
        throw new Error("Nome do produto é obrigatório");
    }

    if (produtoNome.length < 5) {
        throw new Error("Nome do produto deve ter pelo menos 5 caracteres");
    }

    if (produtoPreco === undefined) {
        throw new Error("Preço do produto é obrigatório");
    }

    if (produtoPreco <= 0) {
        throw new Error("Preço do produto deve ser positivo");
    }

    const pedido = {
        codigo: proximoCodigo++,
        dataHora: new Date(),
        clienteCpf,
        clienteNome,
        produtoNome,
        produtoPreco,
        situacao: "aberto"
    };

    pedidos.push(pedido);

    return pedido;
}

module.exports = {
    criarPedido
};