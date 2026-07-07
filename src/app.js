const express = require("express");
const pedidoRoutes = require("./routes/pedidoRoutes");

const app = express();

app.use(express.json());

app.use(pedidoRoutes);

app.get("/health", (req, res) => {
    res.status(200).json({
        status: "API online"
    });
});

module.exports = app;