const pool = require("../mysql-connect")
const { getDB } = require("./FuncUtil")()

module.exports = (db) => {
  const module = {}
  const table_name = getDB(db, "promotion")

  module.findByCode = (code) => {
    console.log("findByCode method start:")
    return new Promise(async (resolve, reject) => {
      try {
        const sql = `select *,
        DATE_FORMAT(start_time, '%Y-%m-%d') start_time,
        DATE_FORMAT(finish_time, '%Y-%m-%d') finish_time 
        from ${table_name} where product_code=?;`
        const result = await pool.query(sql, [code])
        resolve({ status: "Success", data: JSON.stringify(result) })
      } catch (err) {
        reject({ status: "Error", msg: err.message })
      }
    })
  }

  module.findById = (id) => {
    console.log("findById method start:")
    return new Promise(async (resolve, reject) => {
      try {
        const sql = `select *,
        DATE_FORMAT(start_time, '%Y-%m-%d') start_time,
        DATE_FORMAT(finish_time, '%Y-%m-%d') finish_time 
        from ${table_name} where uuid_index=?;`
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
        DATE_FORMAT(start_time, '%Y-%m-%d') start_time,
        DATE_FORMAT(finish_time, '%Y-%m-%d') finish_time 
        from ${table_name};`
        const result = await pool.query(sql)
        resolve({ status: "Success", data: JSON.stringify(result) })
      } catch (err) {
        reject({ status: "Error", msg: err.message })
      }
    })
  }

  module.findShowUser = () => {
    console.log("findShowUser method start:")
    return new Promise(async (resolve, reject) => {
      try {
        const sql = `select *,
        DATE_FORMAT(start_time, '%Y-%m-%d') start_time,
        DATE_FORMAT(finish_time, '%Y-%m-%d') finish_time 
        from ${table_name} 
        where (curdate() between start_time  and finish_time) and qty_in_stock > 0;`
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
        const query = `INSERT INTO ${table_name} SET ? `
        const result = await pool.query(query, params)
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
        const query = `UPDATE ${table_name} SET 
        product_code=?,
        redeem_name=?,
        point_to_redeem=?,
        start_time=?,
        finish_time=?,
        qty_in_stock=?,
        img_path=?,
        redeem_or_free=?,
        discount_amt=?,
        discount_percent=? 
        WHERE uuid_index=? `
        const result = await pool.query(query, [
          data.product_code,
          data.redeem_name,
          data.point_to_redeem,
          data.start_time,
          data.finish_time,
          data.qty_in_stock,
          data.img_path,
          data.redeem_or_free,
          data.discount_amt,
          data.discount_percent,
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
        const query = `DELETE FROM ${table_name} WHERE uuid_index = ? `
        const result = await pool.query(query, [id])
        resolve({ status: "Success", data: JSON.stringify(result) })
      } catch (err) {
        reject({ status: "Error", msg: err.message })
      }
    })
  }

  return module
}
