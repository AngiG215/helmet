const express = require('express');
const helmet = require('helmet');
const app = express();

// 1. El desafío principal
app.use(helmet.hidePoweredBy());

// 2. Ruta de ayuda para que el test no falle (Vital)
app.get("/_api/app-info", (req, res) => {
  res.json({
    headers: res.getHeaders(),
    appStack: app._router.stack.map(l => l.name)
  });
});

app.get("/", (req, res) => {
  res.send("Hello World - Helmet Activo");
});

module.exports = app;
