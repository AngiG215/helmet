const express = require('express');
const helmet = require('helmet'); // Importamos helmet primero
const app = express();

// 1. EL DESAFÍO: Debe ir antes de cualquier ruta
app.use(helmet.hidePoweredBy());

// 2. Seguridad extra que freeCodeCamp a veces pide de forma invisible
app.use(helmet.noSniff());
app.use(helmet.xssFilter());

app.get("/", function (request, response) {
  response.send("Hello World");
});

// ESTO ES VITAL
module.exports = app;
