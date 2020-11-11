/* CartsDetail.model code generator by automatic script */

const logger = require("../logger")
const pool = require("../mysql-connect")
const { getDB } = require("./FuncUtil")()

module.exports = (db) => {
  const module = {}
  const table_name = getDB(db, "carts_detail")

  module.findByCartNo = (cart_no) => {
    console.log("findByProduct method start:")
    return new Promise(async (resolve, reject) => {
      try {
        const sql = `select * from ${table_name} where cart_no=?;`;
        logger.debug(sql);
        const result = await pool.query(sql, [cart_no])
        resolve({ status: "Success", data: JSON.stringify(result) })
      } catch (err) {
        logger.error(err);
        reject({ status: "Error", msg: err.message })
      }
    })
  }

  module.findByProduct = (product_code, cart_no) => {
    console.log("findByProduct method start:")
    return new Promise(async (resolve, reject) => {
      try {
        const sql = `select * from ${table_name} where product_code=? and cart_no=?;`;
        logger.debug(sql);
        const result = await pool.query(sql, [product_code, cart_no])
        resolve({ status: "Success", data: JSON.stringify(result) })
      } catch (err) {
        logger.error(err);
        reject({ status: "Error", msg: err.message })
      }
    })
  }

  module.findById = (id) => {
    console.log("findById method start:")
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
    console.log("findAll method start:")
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
        logger.error(err);
        reject({ status: "Error", msg: err.message })
      }
    })
  }

  module.create = (params) => {
    console.log("create method start:")
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
    console.log("update method start:")
    return new Promise(async (resolve, reject) => {
      try {
        const sql = `UPDATE ${table_name} 
        SET 
        cart_no=?,
        product_code=?,
        product_name=?,
        product_price=?,
        product_unit=?,
        qty=?,
        total_amount=?,
        options=?,
        special_text=?,
        point =? 
        WHERE uuid_index=?;`;
        logger.debug(sql);
        const result = await pool.query(sql, [
          data.cart_no,
          data.product_code,
          data.product_name,
          data.product_price,
          data.product_unit,
          data.qty,
          data.total_amount,
          data.options,
          data.special_text,
          data.point,
          data.uuid_index,
        ])
        resolve({ status: "Success", data: JSON.stringify(result) })
      } catch (err) {
        logger.error(err);
        reject({ status: "Error", msg: err.message })
      }
    })
  }

  module.updateQty = (data) => {
    console.log("update method start:")
    return new Promise(async (resolve, reject) => {
      try {
        const sql = `UPDATE ${table_name} 
        SET qty=?,total_amount=qty*product_price 
        WHERE cart_no=? and product_code=?;`;
        logger.debug(sql);
        const result = await pool.query(sql, [
          data.qty,
          data.cart_no,
          data.product_code,
        ])
        resolve({ status: "Success", data: JSON.stringify(result) })
      } catch (err) {
        logger.error(err);
        reject({ status: "Error", msg: err.message })
      }
    })
  }

  module.delete = ({ cart_no, product_code }) => {
    console.log("delete method start:")
    return new Promise(async (resolve, reject) => {
      try {
        const sql = `DELETE FROM ${table_name} WHERE cart_no=? and product_code=?;`;
        logger.debug(sql);
        const result = await pool.query(sql, [cart_no, product_code])
        resolve({ status: "Success", data: JSON.stringify(result) })
      } catch (err) {
        logger.error(err);
        reject({ status: "Error", msg: err.message })
      }
    })
  }

  return module
}
