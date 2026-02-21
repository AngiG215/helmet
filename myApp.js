const express = require('express');
const app = express();
const helmet = require('helmet');

app.use(helmet.hidePoweredBy());

app.get("/", (req, res) => {
  res.send("Servidor funcionando");
});

module.exports = app; // <--- ESTO ES LO ÚNICO AL FINAL
