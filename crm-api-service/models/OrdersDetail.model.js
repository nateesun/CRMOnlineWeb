/* OrderDetails.model code generator by automatic script */

const logger = require("../logger")
const pool = require("../mysql-connect")
const { getDB } = require("./FuncUtil")()

module.exports = (db) => {
  const module = {}
  const table_name = getDB(db, "orders_detail")

  module.findById = (id) => {
    console.log("findById method start:")
    return new Promise(async (resolve, reject) => {
      try {
        const sql = `select * from ${table_name} where uuid_index=?;`;
        logger.debug(sql);
        const result = await pool.query(sql, [id])
        resolve({ status: "Success", data: JSON.stringify(result) })
      } catch (err) {
        reject({ status: "Error", msg: err.message })
      }
    })
  }

  module.findByOrderNo = (order_no) => {
    console.log("findByOrderNo method start:")
    return new Promise(async (resolve, reject) => {
      try {
        const sql = `select * from ${table_name} where order_no=?;`;
        logger.debug(sql);
        const result = await pool.query(sql, [order_no])
        resolve({ status: "Success", data: JSON.stringify(result) })
      } catch (err) {
        reject({ status: "Error", msg: err.message })
      }
    })
  }

  module.findAll = () => {
    console.log("findAll method start:")
    return new Promise(async (resolve, reject) => {
      try {
        const sql = `select * from ${table_name};`;
        logger.debug(sql);
        const result = await pool.query(sql)
        resolve({ status: "Success", data: JSON.stringify(result) })
      } catch (err) {
        reject({ status: "Error", msg: err.message })
      }
    })
  }

  module.searchData = (key, value) => {
    console.log("searchData method start:")
    return new Promise(async (resolve, reject) => {
      try {
        let sql = `select * from ${table_name}`;
        if (key !== "") {
          sql = `${sql} where ${key} like '%${value}%'`;
        }
        logger.debug(sql);
        const result = await pool.query(sql)
        resolve({ status: "Success", data: JSON.stringify(result) })
      } catch (err) {
        reject({ status: "Error", msg: err.message })
      }
    })
  }

  module.create = async (params) => {
    console.log("create method start:")
    return new Promise(async (resolve, reject) => {
      try {
        const sql = `INSERT INTO ${table_name} SET ?;`;
        logger.debug(sql);
        await pool.query(sql, params)
        resolve({ status: "Success", data: JSON.stringify(params.order_no) })
      } catch (err) {
        reject({ status: "Error", msg: err.message })
      }
    })
  }

  module.update = (data) => {
    console.log("update method start:")
    return new Promise(async (resolve, reject) => {
      try {
        const sql = `UPDATE ${table_name} 
        SET product_code=?, qty=?, options=?, special_text=? WHERE uuid_index=?;`;
        logger.debug(sql);
        const result = await pool.query(sql, [
          data.product_code,
          data.qty,
          data.options,
          data.special_text,
          data.uuid_index,
        ])
        resolve({ status: "Success", data: JSON.stringify(result) })
      } catch (err) {
        reject({ status: "Error", msg: err.message })
      }
    })
  }

  module.delete = (id) => {
    console.log("delete method start:")
    return new Promise(async (resolve, reject) => {
      try {
        const sql = `DELETE FROM ${table_name} WHERE uuid_index = ?;`;
        logger.debug(sql);
        const result = await pool.query(sql, [id])
        resolve({ status: "Success", data: JSON.stringify(result) })
      } catch (err) {
        reject({ status: "Error", msg: err.message })
      }
    })
  }

  return module
}
