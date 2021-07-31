const db = require("../mysql-connector");

/**
 * Devuelve todos los dispositivos.
 * @returns retorna una Promise que se resuelve en un array de dispositivos con la siguiente estructura:
 *      {
 *          dispositivoId: 1,
 *          nombre: "Dispositivo 1",
 *          ubicacion: "Patio",
 *          electrovalvulaId: 1
 *      }
 */
 exports.getAllDevices = () => {
    return new Promise((resolve, reject) => {
        db.query(
            "SELECT * from Dispositivos",
            function (error, rows) {
                if (error)
                    reject(error);
                else {
                    resolve(rows);
                }
            }
        )
    })
}

/*
* Devuelve un dispositivo.
* @returns retorna una Promise que se resuelve en un objeto con la siguiente estructura:
*      {
*          dispositivoId: 1,
*          nombre: "Dispositivo 1",
*          ubicacion: "Patio",
*          electrovalvulaId: 1
*      }
*/
exports.getDispositivo = (id) => {
    return new Promise((resolve, reject) => {
        db.query(
            "SELECT * from Dispositivos WHERE dispositivoId=?",
            [id],
            function (error, rows) {
                if (error || rows.length == 0)
                    reject(error);
                else {
                    resolve(rows[0]);
                }
            }
        )
    })
}
