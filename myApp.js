const express = require('express');
const app = express();
const helmet = require('helmet');

// 1. Solución al desafío: Ocultar X-Powered-By
app.use(helmet.hidePoweredBy());

const api = require('./server.js');
app.use(express.static('public'));
app.disable('strict-transport-security');
app.use('/_api', api);

app.get("/", function (request, response) {
  response.sendFile(__dirname + '/views/index.html');
});

// Esto permite que el verificador de freeCodeCamp lea tus middlewares
module.exports = app;
