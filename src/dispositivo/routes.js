const express = require ("express");
const router = express.Router();

const DispositivoController = require("./controller");

/**
 * Permite obtener toda la lista de dispositivos
 * 
 * Parámetros URL: -
 * 
 * Body: -
 * 
 * Respuesta existosa:
 *      Código: 200
 *      Body: array con todos los dispositivos
 * 
 *      Ejemplo:
 *      [
 *          {
 *              dispositivoId: 1,
 *              nombre: "Dispositivo 1",
 *              ubicacion: "Patio",
 *              electrovalvulaId: 1
 *          }
 *      ]
 * 
 * Respuesta fallida:
 *      Código: 500
 *      Body: -
 */
router.get("/", [
    DispositivoController.getAll
]);


/**
 * Permite obtener el dispositivo con ID id
 *
 * Parámetros URL:
 *      id [number]: ID del dispositivo que se está consultando
 * 
 * Body: -
 * 
 * Respuesta existosa:
 *      Código: 200
 *      Body: dispositivo con ID id
 * 
 *      Ejemplo:
 *          {
 *              dispositivoId: 1,
 *              nombre: "Dispositivo 1",
 *              ubicacion: "Patio",
 *              electrovalvulaId: 1
 *          }
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
    DispositivoController.getById
]);



module.exports = router;