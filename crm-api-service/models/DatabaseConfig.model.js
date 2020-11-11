/* DatabaseConfig.model code generator by automatic script */

const logger = require("../logger");
const pool = require("../mysql-connect")
const { getDB } = require('./FuncUtil')();

module.exports = db => {
  const module = {}

  module.findAll = async () => {
    console.log("findAll method start:")
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
