const express = require('express');
const helmet = require('helmet');
const app = express();

// 1. El desafío
app.use(helmet.hidePoweredBy());

// 2. Esta ruta es la que usa freeCodeCamp para evaluarte
// Si esta ruta falla o no responde, el test se queda "cargando"
app.get("/_api/app-info", function (req, res) {
  var stack = app._router.stack
    .filter((s) => s.path === "" && s.name !== "bound dispatch")
    .map((l) => l.name);
  
  res.json({ headers: res.getHeaders(), appStack: stack });
});

// 3. Ruta principal
app.get("/", function (req, res) {
  res.send("Hello World - Helmet Activo");
});

module.exports = app;
