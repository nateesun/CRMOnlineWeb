/* Redeem.model code generator by automatic script */

const logger = require("../logger")
const pool = require("../mysql-connect")
const { getDB } = require("./FuncUtil")()

module.exports = (db) => {
  const module = {}
  const table_name = getDB(db, "redeem")
  const promotion = getDB(db, "promotion")

  module.findById = (id) => {
    logger.info(`findById: ${id}`)
    return new Promise(async (resolve, reject) => {
      try {
        const sql = `select * from ${table_name} where uuid_index=?;`;
        logger.debug(sql);
        const result = await pool.query(sql, [id])
        resolve({ status: "Success", data: JSON.stringify(result) })
      } catch (err) {
        logger.error(err);
        reject({ status: "Error", msg: err.message })
      }
    })
  }

  module.findAll = () => {
    logger.info("findAll")
    return new Promise(async (resolve, reject) => {
      try {
        const sql = `select * from ${table_name};`;
        logger.debug(sql);
        const result = await pool.query(sql)
        resolve({ status: "Success", data: JSON.stringify(result) })
      } catch (err) {
        logger.error(err);
        reject({ status: "Error", msg: err.message })
      }
    })
  }

  module.getDataForClient = () => {
    logger.info("getDataForClient")
    return new Promise(async (resolve, reject) => {
      try {
        const sql = `select * from ${table_name} where in_time > curdate();`;
        logger.debug(sql);
        const result = await pool.query(sql)
        resolve({ status: "Success", data: JSON.stringify(result) })
      } catch (err) {
        logger.error(err);
        reject({ status: "Error", msg: err.message })
      }
    })
  }

  module.updateRedeemFromClient = (redeem) => {
    logger.info(`updateRedeemFromClient: ${redeem}`)
    return new Promise(async (resolve, reject) => {
      try {
        let sql = `update ${table_name} 
        set bill_no=?,
        use_in_branch=?,
        emp_code_redeem=?,
        redeem_date=curdate(),
        active=? 
        where redeem_code=?;`;
        logger.debug(sql);
        const result = await pool.query(sql, [
          redeem.bill_no,
          redeem.use_in_branch,
          redeem.emp_code_redeem,
          redeem.active,
          redeem.Member_Code
        ])
        sql = `update ${promotion} 
        set qty_in_stock = qty_in_stock-1 
        where product_code=?;`;
        logger.debug(sql);
        const result2 = await pool.query(sql, [redeem.product_code]);
        resolve({ status: "Success", data: JSON.stringify(result) })
      } catch (err) {
        logger.error(err);
        reject({ status: "Error", msg: err.message })
      }
    })
  }

  module.searchData = (key, value) => {
    logger.info(`searchData: ${key} ${value}`)
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
        logger.error(err);
        reject({ status: "Error", msg: err.message })
      }
    })
  }

  module.create = (params) => {
    logger.info(`create: ${params}`)
    return new Promise(async (resolve, reject) => {
      try {
        const sql = `INSERT INTO ${table_name} SET ?;`;
        logger.debug(sql);
        const result = await pool.query(sql, params)
        resolve({ status: "Success", data: JSON.stringify(result) })
      } catch (err) {
        logger.error(err);
        reject({ status: "Error", msg: err.message })
      }
    })
  }

  module.update = (data) => {
    logger.info(`update: ${data}`)
    return new Promise(async (resolve, reject) => {
      try {
        const sql = `UPDATE ${table_name} 
        SET redeem_code=?, product_code=?, point_to_redeem=? WHERE uuid_index=?;`;
        logger.debug(sql);
        const result = await pool.query(sql, [
          data.redeem_code,
          data.product_code,
          data.point_to_redeem,
          data.uuid_index,
        ])
        resolve({ status: "Success", data: JSON.stringify(result) })
      } catch (err) {
        logger.error(err);
        reject({ status: "Error", msg: err.message })
      }
    })
  }

  module.delete = (id) => {
    logger.info(`delete: ${id}`)
    return new Promise(async (resolve, reject) => {
      try {
        const sql = `DELETE FROM ${table_name} WHERE uuid_index = ?;`;
        logger.debug(sql);
        const result = await pool.query(sql, [id])
        resolve({ status: "Success", data: JSON.stringify(result) })
      } catch (err) {
        logger.error(err);
        reject({ status: "Error", msg: err.message })
      }
    })
  }

  return module
}
