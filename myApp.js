const express = require('express');
const app = express();
const helmet = require('helmet');

app.use(helmet.hidePoweredBy());
















































const api = require('./server.js');
app.use(express.static('public'));
app.disable('strict-transport-security');
app.use('/_api', api);

app.get("/", function (request, response) {
  response.sendFile(__dirname + '/views/index.html');
});

// ESTA ES LA LÍNEA MÁS IMPORTANTE
module.exports = app; 

// --- BORRA O COMENTA TODO LO QUE SIGUE ABAJO ---
// let port = process.env.PORT || 3000;
// app.listen(port, () => {
//   console.log(`Your app is listening on port ${port}`);
// });
