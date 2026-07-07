const express = require("express");
const router = express.Router();

router.post("/pedidos", (req, res) => {
    res.send("Criar pedido");
});

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
