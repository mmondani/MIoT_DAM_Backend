const PORT    = 3000;

const express = require('express');
const app     = express();
const utils   = require('./mysql-connector');

const dispositivoRoutes = require("./dispositivo/routes");

app.use(express.json()); 


app.use("/dispositivo", dispositivoRoutes);


app.listen(PORT, function(req, res) {
    console.log("API corriendo en el puerto " + PORT);
});