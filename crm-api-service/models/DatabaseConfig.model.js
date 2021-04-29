/* DatabaseConfig.model code generator by automatic script */

const logger = require("../logger");
const pool = require("../mysql-connect")

module.exports = db => {
  const module = {}

  module.findAll = async () => {
    logger.debug("findAll")
    return new Promise(async (resolve, reject) => {
      try {
        const sql = `show databases;`;
        logger.debug(sql);
        const result = await pool.query(sql)
        resolve({ status: "Success", data: JSON.stringify(result) })
      } catch (err) {
        logger.error(err);
        reject({ status: "Error", msg: err.message })
      }
    })
  }

  return module
}
