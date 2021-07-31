const db = require("../mysql-connector");

/*
* Devuelve todas las mediciones del dispositivo ID.
* @returns retorna una Promise que se resuelve en un un array de objetos con la siguiente estructura:
*      {
*          medicionId: 1,
*          fecha: "2020-11-26 21:19:41",
*          valor: "60",
*          dispositivoId: 1
*      }
*/
exports.getMedicionesDispositivoId = (id) => {
    return new Promise((resolve, reject) => {
        db.query(
            "SELECT * from Mediciones WHERE dispositivoId=?",
            [id],
            function (error, rows) {
                if (error)
                    reject(error);
                else {
                    if (rows.length == 0)
                        resolve([])
                    else
                        resolve(rows);
                }
            }
        )
    })
}



/*
* Devuelve la última medición del dispositivo ID.
* @returns retorna una Promise que se resuelve en un objeto con la siguiente estructura:
*      {
*          medicionId: 1,
*          fecha: "2020-11-26 21:19:41",
*          valor: "60",
*          dispositivoId: 1
*      }
*/
exports.getUltimaMedicionDispositivoId = (id) => {
    return new Promise((resolve, reject) => {
        db.query(
            "SELECT * from Mediciones WHERE dispositivoId=? ORDER BY fecha DESC LIMIT 1",
            [id],
            function (error, rows) {
                if (error)
                    reject(error);
                else {
                    if (rows.length == 0)
                        resolve({})
                    else
                        resolve(rows[0]);
                }
            }
        )
    })
}



/*
* Agrega una nueva medición en la tabla Mediciones
 * @param {object} data objeto que contiene el id del dispositivo a modificar y el nuevo state. Por ejemplo:
 * 
 *      {
 *          "id": 1,
 *          "valor": "50"
 *      }
* @returns retorna una Promise 
*/
exports.newMedicion = (data) => {
    return new Promise((resolve, reject) => {
        db.query(
            "INSERT INTO Mediciones (fecha, valor, dispositivoId) VALUES (?, ?, ?)",
            [
                new Date().toISOString().
                    replace(/T/, ' ').       // replace T with a space
                    replace(/\..+/, ''),     // delete the dot and everything after,
                data.valor,
                data.id
            ],
            function (error, rows) {
                if (error)
                    reject(error);
                else {
                    resolve();
                }
            }
        )
    })
}
