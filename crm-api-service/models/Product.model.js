const logger = require("../logger")
const pool = require("../mysql-connect")
const { getDB } = require("./FuncUtil")()

module.exports = (db) => {
  const module = {}
  const table_name = getDB(db, "product")
  const tb_stock_product = getDB(db, "stock_product")

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

  module.findAll = () => {
    console.log("findAll method start:")
    return new Promise(async (resolve, reject) => {
      try {
        const sql = `select *,
        (select in_stock from ${tb_stock_product} sp where sp.product_code=p.code) in_stock 
        from ${table_name} p;`;
        logger.debug(sql);
        const result = await pool.query(sql)
        resolve({ status: "Success", data: JSON.stringify(result) })
      } catch (err) {
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
        reject({ status: "Error", msg: err.message })
      }
    })
  }

  module.update = (data) => {
    console.log("update method start:")
    return new Promise(async (resolve, reject) => {
      try {
        const sql = `UPDATE ${table_name} SET 
        code=?,
        name=?,
        unit_code_sale=?,
        product_group_code=?,
        img_path=?,
        point=?,
        stock_code=?,
        price_e=?,
        price_t=?,
        price_d=?,
        max_stock=?,
        min_stock=?,
        unit_code_stock=?,
        qty_over_stock=? 
        WHERE uuid_index=? ;`;
        logger.debug(sql);
        const result = await pool.query(sql, [
          data.code,
          data.name,
          data.unit_code_sale,
          data.product_group_code,
          data.img_path,
          data.point,
          data.stock_code,
          data.price_e,
          data.price_t,
          data.price_d,
          data.max_stock,
          data.min_stock,
          data.unit_code_stock,
          data.qty_over_stock,
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
        const result = await pool.query(sql, [id])
        resolve({ status: "Success", data: JSON.stringify(result) })
      } catch (err) {
        reject({ status: "Error", msg: err.message })
      }
    })
  }

  return module
}
