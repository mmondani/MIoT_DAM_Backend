const db = require("../mysql-connector");

/*
* Devuelve todo el log de riego correspondiente a la vávula ID
* @returns retorna una Promise que se resuelve en un array de objetos con la siguiente estructura:
*      {
*          logRiegoId: 1,
*          apertura: "2020-11-26 21:19:41",
*          fecha: "60",
*          electrovalvulaId: 1
*      }
*/
exports.getLogRiego = (idValvula) => {
    return new Promise((resolve, reject) => {
        db.query(
            "SELECT * from Log_Riegos WHERE electrovalvulaId=?",
            [idValvula],
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
* Devuelve la entrada más reciente del log de riego a la vávula ID
* @returns retorna una Promise que se resuelve en un objeto con la siguiente estructura:
*      {
*          logRiegoId: 1,
*          apertura: "2020-11-26 21:19:41",
*          fecha: "60",
*          electrovalvulaId: 1
*      }
*/
exports.getUltimoLogRiego = (idValvula) => {
    return new Promise((resolve, reject) => {
        db.query(
            "SELECT * from Log_Riegos WHERE electrovalvulaId=? ORDER BY fecha DESC LIMIT 1",
            [idValvula],
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
* Agrega una nueva entrada en el log de riego para la electroválvula ID
 * @param {object} data objeto que contiene el id de la electrovávula a modificar y el si es una apertura o no. Por ejemplo:
 * 
 *      {
 *          "id": 1,
 *          "apertura": 1
 *      }
* @returns retorna una Promise 
*/
exports.newRiego = (data) => {
    return new Promise((resolve, reject) => {
        db.query(
            "INSERT INTO Log_Riegos (apertura, fecha, electrovalvulaId) VALUES (?, ?, ?)",
            [
                data.apertura,
                new Date().toISOString().
                    replace(/T/, ' ').       // replace T with a space
                    replace(/\..+/, ''),     // delete the dot and everything after,
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
