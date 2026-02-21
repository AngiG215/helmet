const express = require('express');
const app = express(); // Este es el que usará el server.js
const helmet = require('helmet');

// El desafío:
app.use(helmet.hidePoweredBy());

// Ruta para que la web no esté vacía
app.get("/", function (request, response) {
  response.send("Hello World - Helmet is active");
});

module.exports = app;
