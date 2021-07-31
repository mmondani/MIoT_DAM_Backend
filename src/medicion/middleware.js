/**
 * Comprueba que el request para sagregar una nueva medición de un dispositivo tenga en su body un objeto de la forma:
 * 
 *      {
 *          "id": 1
 *          "valor": "50"
 *      }
 * 
 * 
 * @param {*} req objeto del request realizado
 * @param {*} res objeto del response al request
 * @param {*} next llama a la siguiente función en el array de callbacks asociado al endpoint
 * @returns 
 */
 exports.hasNewMedicionValidFields = (req, res, next) => {
    let errors = [];

    if (!req.body.id)
        errors.push("Falta el campo id");

    if (!req.body.valor)
        errors.push("Falta el campo valor");
        

    if (errors.length > 0)
        return res.status(400).send({errores: errors});
    else
        return next();
}