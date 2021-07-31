const PORT    = 3000;

const express = require('express');
const app     = express();
const utils   = require('./mysql-connector');

app.use(express.json()); 



app.listen(PORT, function(req, res) {
    console.log("API corriendo en el puerto " + PORT);
});