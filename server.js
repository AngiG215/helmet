const express = require('express');
const app = require('./myApp');
const port = process.env.PORT || 3000;

// Esto conecta tu código con el mundo exterior
app.listen(port, () => {
  console.log('Servidor encendido en puerto ' + port);
});
