const express = require('express');
const app = express();
const helmet = require('helmet');

// 1. Esto es lo que pide freeCodeCamp
app.use(helmet.hidePoweredBy());

// 2. Ruta para que la web funcione
app.get("/", function (request, response) {
  response.sendFile(__dirname + '/views/index.html');
});

// 3. LA CLAVE: Exportar la app SIN el servidor
module.exports = app;
