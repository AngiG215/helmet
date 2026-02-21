const express = require('express');
const app = express();
const helmet = require('helmet');

app.use(helmet.hidePoweredBy());

app.get("/", (req, res) => {
  res.send("Hello World");
});

module.exports = app; // <--- Así y nada más
