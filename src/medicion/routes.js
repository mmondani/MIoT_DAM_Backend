const express = require ("express");
const router = express.Router();

const MedicionMiddleware = require("./middleware")
const MedicionController = require("./controller");

/**
 * Permite todas las mediciones de un dispositivo
 *
 * Parámetros URL:
 *      id [number]: ID del dispositivo que se está consultando
 * 
 * Body: -
 * 
 * Respuesta existosa:
 *      Código: 200
 *      Body: array con todas las mediciones
 * 
 *      Ejemplo:
 *      [
 *           {
 *               medicionId: 1,
 *               fecha: "2020-11-26 21:19:41",
 *               valor: "60",
 *               dispositivoId: 1
 *           }
 *      ]
 * 
 * Respuesta fallida:
 *      Código: 400
 *      Body: objeto indicando el error
 *            Posibles errores:
 *              - No se encuentra el id
 * 
 *      {
 *          "errores": ["No se encuentra el id"]
 *      }
 */
 router.get("/:id", [
    MedicionController.getMedicionesDispositivoId
]);


/**
 * Permite obtener la última medicion de un dispositivo
 *
 * Parámetros URL:
 *      id [number]: ID del dispositivo que se está consultando
 * 
 * Body: -
 * 
 * Respuesta existosa:
 *      Código: 200
 *      Body: última medición del dispositivo con ID id
 * 
 *      Ejemplo:
 *           {
 *               medicionId: 1,
 *               fecha: "2020-11-26 21:19:41",
 *               valor: "60",
 *               dispositivoId: 1
 *           }
 * 
 * Respuesta fallida:
 *      Código: 400
 *      Body: objeto indicando el error
 *            Posibles errores:
 *              - No se encuentra el id
 * 
 *      {
 *          "errores": ["No se encuentra el id"]
 *      }
 */
 router.get("/last/:id", [
    MedicionController.getUltimaMedicionDispositivoId
]);



/**
 * Permite agregar una medición para el disposito ID
 *
 * Parámetros URL: -
 * 
 * Body: 
 *      Campos obligatorios
 *          id [number]: ID del dispositivo
 *          valor [string]: valor de la medición
 * 
 *      Ejemplo:
 *      {
 *          "id": 1,
 *          "valor": "50"
 *      }
 * 
 * Respuesta existosa:
 *      Código: 200
 *      Body: -
 * 
 * Respuesta fallida:
 *      Código: 400
 *      Body: objeto indicando el/los error/es. 
 *            Posibles errores:
 *              - Falta el campo id
 *              - Falta el campo valor
 * 
 *      {
 *          "errores": ["No se encuentra el id"]
 *      }
 */
 router.post("/:id", [
    MedicionMiddleware.hasNewMedicionValidFields,
    MedicionController.newMedicion
]);



module.exports = router;