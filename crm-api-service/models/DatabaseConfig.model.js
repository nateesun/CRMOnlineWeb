/* DatabaseConfig.model code generator by automatic script */

const pool = require("../mysql-connect")
const { getDB } = require('./FuncUtil')();

module.exports = db => {
  const module = {}

  module.findAll = async () => {
    console.log("findAll method start:")
    return new Promise(async (resolve, reject) => {
      try {
        const sql = `show databases`;
        const result = await pool.query(sql)
        resolve({ status: "Success", data: JSON.stringify(result) })
      } catch (err) {
        reject(err)
      }
    })
  }

  return module
}
