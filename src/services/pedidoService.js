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

function listarPedidos(situacao) {
    if (situacao) {

        const situacoesValidas = [
            "aberto",
            "pago",
            "finalizado"
        ];

        if (!situacoesValidas.includes(situacao)) {
            throw new Error("Situação inválida");
        }

        return pedidos
            .filter(pedido => pedido.situacao === situacao)
            .map(pedido => ({
                codigo: pedido.codigo,
                dataHora: pedido.dataHora,
                clienteNome: pedido.clienteNome,
                produtoNome: pedido.produtoNome,
                situacao: pedido.situacao,
                valorTotal: pedido.produtoPreco
            }));
    }

    return pedidos.map(pedido => ({
        codigo: pedido.codigo,
        dataHora: pedido.dataHora,
        clienteNome: pedido.clienteNome,
        produtoNome: pedido.produtoNome,
        situacao: pedido.situacao,
        valorTotal: pedido.produtoPreco
    }));
}

function buscarPedidoPorCodigo(codigo) {

    if (isNaN(codigo)) {
        throw new Error("Código deve ser numérico");
    }

    const pedido = pedidos.find(
        pedido => pedido.codigo === Number(codigo)
    );

    if (!pedido) {
        throw new Error("Pedido não encontrado");
    }

    return {
        codigo: pedido.codigo,
        dataHora: pedido.dataHora,
        clienteCpf: pedido.clienteCpf,
        clienteNome: pedido.clienteNome,
        produtoNome: pedido.produtoNome,
        produtoPreco: pedido.produtoPreco,
        situacao: pedido.situacao
    };
}

module.exports = {
    criarPedido,
    listarPedidos,
    buscarPedidoPorCodigo
};