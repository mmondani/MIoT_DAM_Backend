const DispositivoModel = require("./model");

/**
 * Devuelve todos los dispositivos.
 * Si la operación es exitosa, retorna un código 200 y el array de dispositivos en el body.
 * Si la operación falla, retorna un código 500.
 * @param {*} req objeto del request realizado
 * @param {*} res objeto del response al request
 */
 exports.getAll = async (req, res) => {
    try {
        let devices = await DispositivoModel.getAllDevices();
        res.status(200).send(devices);
    }
    catch (error) {
        res.status(500).send();
    }
}


/**
 * Devuelve el dispositivo correspondiente al ID que viene en la URL.
 * Si la operación es exitosa, retorna un código 200 y el dispositivo en cuestión en el body.
 * Si la operación falla, retorna un código 400.
 * @param {*} req objeto del request realizado
 * @param {*} res objeto del response al request
 */
 exports.getById = async (req, res) => {
    try {
        let devices = await DispositivoModel.getDispositivo(req.params.id);
        res.status(200).send(devices);
    }
    catch (error) {
        res.status(400).send({errores: ["No se encuentra el id"]});
    }
}