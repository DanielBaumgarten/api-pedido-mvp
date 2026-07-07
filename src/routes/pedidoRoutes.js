const express = require("express");
const router = express.Router();

const pedidoController = require("../controllers/pedidoController");

router.post("/pedidos", pedidoController.criarPedido);

router.get("/pedidos", (req, res) => {
    res.send("Listar pedidos");
});

router.get("/pedidos/:codigo", (req, res) => {
    res.send("Buscar pedido");
});

router.patch("/pedidos/:codigo/situacao", (req, res) => {
    res.send("Atualizar situação");
});

router.delete("/pedidos/:codigo", (req, res) => {
    res.send("Excluir pedido");
});

module.exports = router;
