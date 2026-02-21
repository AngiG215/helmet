const express = require('express');
const app = express();
const helmet = require('helmet');

// 1. La única tarea que pide freeCodeCamp
app.use(helmet.hidePoweredBy());

// 2. Ruta para que la página no salga en blanco
app.get("/", function (request, response) {
  response.sendFile(__dirname + '/views/index.html');
});

// 3. ESTO ES VITAL: Exportar la app para que server.js la maneje
module.exports = app;
