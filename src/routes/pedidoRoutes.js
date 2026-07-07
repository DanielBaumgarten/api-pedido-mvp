const express = require("express");
const router = express.Router();

router.post("/pedidos");
router.get("/pedidos");
router.get("/pedidos/:codigo");
router.patch("/pedidos/:codigo/situacao");
router.delete("/pedidos/:codigo");

module.exports = router;