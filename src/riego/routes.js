const express = require ("express");
const router = express.Router();

const RiegoController = require("./controller");
const RiegoMiddleware = require("./middleware");

/**
 * Obtiene todas las entradas del log de riego de una electroválvula
 *
 * Parámetros URL:
 *      id [number]: ID de la electroválvula que se está consultando
 * 
 * Body: -
 * 
 * Respuesta existosa:
 *      Código: 200
 *      Body: array con todas las entradas del log de riego
 * 
 *      Ejemplo:
 *      [
 *          {
 *              logRiegoId: 1,
 *              apertura: "2020-11-26 21:19:41",
 *              fecha: "60",
 *              electrovalvulaId: 1
 *          }
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
    RiegoController.getLogRiegoElectrovalvula
]);


/**
 * Permite obtener la última entrada del log de riego de una electrovávula
 *
 * Parámetros URL:
 *      id [number]: ID de la electroválvula que se está consultando
 * 
 * Body: -
 * 
 * Respuesta existosa:
 *      Código: 200
 *      Body: última entrada del log
 * 
 *      Ejemplo:
 *          {
 *              logRiegoId: 1,
 *              apertura: "2020-11-26 21:19:41",
 *              fecha: "60",
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
 router.get("/last/:id", [
    RiegoController.getUltimoLogRiegoElectrovalvula
]);


/**
 * Permite agregar una nueva entrada al log de riego para la electrovávula ID
 *
 * Parámetros URL: -
 * 
 * Body: 
 *      Campos obligatorios
 *          id [number]: ID de la electrovávula
 *          apertura [number]: indica si es una apertura (1) o un cierre (0)
 * 
 *      Ejemplo:
 *      {
 *          "id": 1,
 *          "apertura": 1
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
 *              - Falta el campo apertura
 * 
 *      {
 *          "errores": ["No se encuentra el id"]
 *      }
 */
 router.post("/", [
    RiegoMiddleware.hasNewRiegoValidFields,
    RiegoController.newRiego
]);

module.exports = router;