const MedicionModel = require("./model");

/**
 * Devuelve todas las mediciones correspondiente al dispositivo con el ID indicado en la URL
 * Si la operación es exitosa, retorna un código 200 y un array con las mediciones en cuestión en el body.
 * Si la operación falla, retorna un código 400.
 * @param {*} req objeto del request realizado
 * @param {*} res objeto del response al request
 */
 exports.getMedicionesDispositivoId = async (req, res) => {
    try {
        let devices = await MedicionModel.getMedicionesDispositivoId(req.params.id);
        res.status(200).send(devices);
    }
    catch (error) {
        res.status(400).send({errores: ["No se encuentra el id"]});
    }
}


/**
 * Devuelve la última medición correspondiente al dispositivo con el ID indicado en la URL
 * Si la operación es exitosa, retorna un código 200 y la medición en cuestión en el body.
 * Si la operación falla, retorna un código 400.
 * @param {*} req objeto del request realizado
 * @param {*} res objeto del response al request
 */
 exports.getUltimaMedicionDispositivoId = async (req, res) => {
    try {
        let devices = await MedicionModel.getUltimaMedicionDispositivoId(req.params.id);
        res.status(200).send(devices);
    }
    catch (error) {
        res.status(400).send({errores: ["No se encuentra el id"]});
    }
}


/**
 * Agrega una nueva medición correspondiente al dispositivo con el ID indicado en la URL
 * Si la operación es exitosa, retorna un código 200.
 * Si la operación falla, retorna un código 400.
 * @param {*} req objeto del request realizado
 * @param {*} res objeto del response al request
 */
 exports.newMedicion = async (req, res) => {
    try {
        await MedicionModel.newMedicion(req.body);
        res.status(200).send();
    }
    catch (error) {
        res.status(400).send({errores: ["No se encuentra el id"]});
    }
}