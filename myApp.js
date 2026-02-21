const express = require('express');
const app = express();
const helmet = require('helmet');

// El único middleware que necesitas para este test
app.use(helmet.hidePoweredBy());

// Ruta para que la web responda algo
app.get("/", function (request, response) {
  response.sendFile(__dirname + '/views/index.html');
});

// ESTO ES LO MÁS IMPORTANTE: Exportar la app
module.exports = app;
