const express = require('express');
const helmet = require('helmet'); // Importar primero
const app = express();

// 1. EL DESAFÍO: Esto es lo que busca el test
app.use(helmet.hidePoweredBy());

// 2. Ruta de información para freeCodeCamp (ESTO ES LO QUE FALTA)
// El test necesita entrar aquí para confirmar que usaste Helmet
app.get("/_api/app-info", function(req, res) {
  res.json({
    headers: res.getHeaders(),
    appStack: app._router.stack.map(layer => layer.name)
  });
});

app.get("/", function (request, response) {
  response.send("Hello World");
});

module.exports = app;
