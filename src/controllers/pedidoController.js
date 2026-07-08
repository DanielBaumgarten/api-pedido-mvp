const pedidoService = require("../services/pedidoService");

function criarPedido(req, res) {
    try {

        const pedido = pedidoService.criarPedido(req.body);

        res.status(201).json(pedido);

    } catch (error) {

        res.status(400).json({
            erro: error.message
        });

    }
}

function listarPedidos(req, res) {
    try {

        const { situacao } = req.query;

        const pedidos =
            pedidoService.listarPedidos(situacao);

        res.status(200).json(pedidos);

    } catch (error) {

        res.status(400).json({
            erro: error.message
        });

    }
}

function buscarPedidoPorCodigo(req, res) {
    try {

        const { codigo } = req.params;

        const pedido =
            pedidoService.buscarPedidoPorCodigo(codigo);

        res.status(200).json(pedido);

    } catch (error) {

        res.status(400).json({
            erro: error.message
        });

    }
}

function atualizarSituacao(req, res) {
    try {

        const { codigo } = req.params;
        const { situacao } = req.body;

        const pedido =
            pedidoService.atualizarSituacao(
                codigo,
                situacao
            );

        res.status(200).json({
            mensagem: "Situação atualizada com sucesso",
            pedido
        });

    } catch (error) {

        res.status(400).json({
            erro: error.message
        });

    }
}

function deletarPedido(req, res) {

    try {

        const { codigo } = req.params;

        pedidoService.deletarPedido(codigo);

        res.status(200).json({
            mensagem: "Pedido removido com sucesso"
        });

    } catch (error) {

        res.status(400).json({
            erro: error.message
        });

    }
}


module.exports = {
    criarPedido,
    listarPedidos,
    buscarPedidoPorCodigo,
    atualizarSituacao,
    deletarPedido
};
