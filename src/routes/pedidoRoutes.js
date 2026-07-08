const express = require("express");
const router = express.Router();

const pedidoController = require("../controllers/pedidoController");

router.post(
    "/pedidos",
    pedidoController.criarPedido
);

router.get(
    "/pedidos",
    pedidoController.listarPedidos
);

router.get(
    "/pedidos/:codigo",
    pedidoController.buscarPedidoPorCodigo
);

router.patch(
    "/pedidos/:codigo/situacao",
    pedidoController.atualizarSituacao
);

router.delete("/pedidos/:codigo", (req, res) => {
    res.send("Excluir pedido");
});

module.exports = router;