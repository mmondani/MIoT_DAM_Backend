const RiegoModel = require("./model");

/**
 * Devuelve todas las entradas en el log de riego a la electrovávula ID
 * Si la operación es exitosa, retorna un código 200 y un array con las entradas del log en el body.
 * Si la operación falla, retorna un código 400.
 * @param {*} req objeto del request realizado
 * @param {*} res objeto del response al request
 */
 exports.getLogRiegoElectrovalvula = async (req, res) => {
    try {
        let logs = await RiegoModel.getLogRiego(req.params.id);
        res.status(200).send(logs);
    }
    catch (error) {
        res.status(400).send({errores: ["No se encuentra el id"]});
    }
}


/**
 * Devuelve la entrada más reciente en el log de riego a la electrovávula ID
 * Si la operación es exitosa, retorna un código 200 y la entrada del log en el body.
 * Si la operación falla, retorna un código 400.
 * @param {*} req objeto del request realizado
 * @param {*} res objeto del response al request
 */
 exports.getUltimoLogRiegoElectrovalvula = async (req, res) => {
    try {
        let logs = await RiegoModel.getUltimoLogRiego(req.params.id);
        res.status(200).send(logs);
    }
    catch (error) {
        res.status(400).send({errores: ["No se encuentra el id"]});
    }
}


/**
 * Agrega una nueva entrada en el log de riego correspondiente a la electrovávula ID
 * Si la operación es exitosa, retorna un código 200.
 * Si la operación falla, retorna un código 400.
 * @param {*} req objeto del request realizado
 * @param {*} res objeto del response al request
 */
 exports.newRiego = async (req, res) => {
    try {
        await RiegoModel.newRiego(req.body);
        res.status(200).send();
    }
    catch (error) {
        res.status(400).send({errores: ["No se encuentra el id"]});
    }
}