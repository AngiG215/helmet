const express = require('express');
const app = express();
const helmet = require('helmet');

// 1. Desafío Helmet
app.use(helmet.hidePoweredBy());

// 2. Seguridad adicional (esto ayuda a que los tests pasen mejor)
app.use(helmet.noSniff());
app.use(helmet.xssFilter());

// 3. Configuración para que server.js no falle
app.get("/", function (request, response) {
  response.sendFile(__current_dir + '/views/index.html');
});

app.use(express.static('public'));

app.get("/_api/app-info", function(req, res) {
  res.json({headers: res.getHeaders(), appStack: []});
});

// 4. LA EXPORTACIÓN CORRECTA
module.exports = app;
