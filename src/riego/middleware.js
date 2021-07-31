/**
 * Comprueba que el request para agregar una nueva entrada al log de riego de una electroválvula tenga en su body un objeto de la forma:
 * 
 *      {
 *          "id": 1
 *          "apertura": 1
 *      }
 * 
 * 
 * @param {*} req objeto del request realizado
 * @param {*} res objeto del response al request
 * @param {*} next llama a la siguiente función en el array de callbacks asociado al endpoint
 * @returns 
 */
 exports.hasNewRiegoValidFields = (req, res, next) => {
    let errors = [];

    if (!req.body.id)
        errors.push("Falta el campo id");

    if (req.body.apertura == undefined)
        errors.push("Falta el campo apertura");
        

    if (errors.length > 0)
        return res.status(400).send({errores: errors});
    else
        return next();
}