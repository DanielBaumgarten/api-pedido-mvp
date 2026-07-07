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

module.exports = {
    criarPedido
};