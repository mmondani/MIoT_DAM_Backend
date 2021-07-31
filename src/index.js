const PORT    = 3000;

const cors  = require("cors");
const express = require('express');
const app     = express();
const utils   = require('./mysql-connector');

const dispositivoRoutes = require("./dispositivo/routes");
const medicionRoutes = require("./medicion/routes");
const riegoRoutes = require("./riego/routes");


let corsOptions = {
	origin: "*",
	optionsSucessStatus: 200
};
app.use(cors(corsOptions));


app.use(express.json()); 


app.use("/dispositivo", dispositivoRoutes);
app.use("/medicion", medicionRoutes);
app.use("/riego", riegoRoutes);


app.listen(PORT, function(req, res) {
    console.log("API corriendo en el puerto " + PORT);
});