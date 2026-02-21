const express = require('express');
const app = express();
const helmet = require('helmet');

app.use(helmet.hidePoweredBy());
// app.use(helmet());
// ------------------

















































// ESTO DEBE IR DESPUÉS DE LA APP Y EL HELMET
app.get("/", function (request, response) {
  response.sendFile(__dirname + '/views/index.html');
});

// ESTO ES LO QUE SOLUCIONA EL ERROR DE "STACK"
module.exports = app;
