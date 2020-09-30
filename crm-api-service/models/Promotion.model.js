const pool = require("../mysql-connect")
const table_name = "promotion"

module.exports = {
  findByCode: async (code, callback) => {
    console.log("findByCode method start:")
    try {
      const sql = `select *,
      DATE_FORMAT(start_time, '%Y-%m-%d') start_time,
      DATE_FORMAT(finish_time, '%Y-%m-%d') finish_time 
      from ${table_name} where product_code=?;`
      const result = await pool.query(sql, [code])
      callback(null, { status: "Success", data: JSON.stringify(result) })
    } catch (err) {
      callback(err, { status: "Error", msg: err.message })
    }
  },
  findById: async (id, callback) => {
    console.log("findById method start:")
    try {
      const sql = `select *,
      DATE_FORMAT(start_time, '%Y-%m-%d') start_time,
      DATE_FORMAT(finish_time, '%Y-%m-%d') finish_time 
      from ${table_name} where uuid_index=?;`
      const result = await pool.query(sql, [id])
      callback(null, { status: "Success", data: JSON.stringify(result) })
    } catch (err) {
      callback(err, { status: "Error", msg: err.message })
    }
  },
  findAll: async (callback) => {
    console.log("findAll method start:")
    try {
      const sql = `select *,
      DATE_FORMAT(start_time, '%Y-%m-%d') start_time,
      DATE_FORMAT(finish_time, '%Y-%m-%d') finish_time 
      from ${table_name};`
      const result = await pool.query(sql)
      callback(null, { status: "Success", data: JSON.stringify(result) })
    } catch (err) {
      callback(err, { status: "Error", msg: err.message })
    }
  },
  findShowUser: async (callback) => {
    console.log("findAll method start:")
    try {
      const sql = `select *,
      DATE_FORMAT(start_time, '%Y-%m-%d') start_time,
      DATE_FORMAT(finish_time, '%Y-%m-%d') finish_time 
      from ${table_name} 
      where start_time >= curdate() and finish_time >= curdate() and qty_in_stock > 0;`
      const result = await pool.query(sql)
      callback(null, { status: "Success", data: JSON.stringify(result) })
    } catch (err) {
      callback(err, { status: "Error", msg: err.message })
    }
  },
  create: async (params, callback) => {
    console.log("create method start:")
    return new Promise(async (resolve, reject) => {
      try {
        const query = `INSERT INTO ${table_name} SET ? `
        const result = await pool.query(query, params)
        callback(null, { status: "Success", data: JSON.stringify(result) })
      } catch (err) {
        callback(err, { status: "Error", msg: err.message })
      }
    })
  },
  update: (data, callback) => {
    console.log("update method start:")
    return new Promise(async (resolve, reject) => {
      try {
        const query = `UPDATE ${table_name} SET 
        product_code=?,
        product_name=?,
        point_to_redeem=?,
        start_time=?,
        finish_time=?,
        qty_in_stock=?,
        img_path=? 
        WHERE uuid_index=? `
        const result = await pool.query(query, [
          data.product_code,
          data.product_name,
          data.point_to_redeem,
          data.start_time,
          data.finish_time,
          data.qty_in_stock,
          data.img_path,
          data.uuid_index
        ])
        callback(null, { status: "Success", data: JSON.stringify(result) })
      } catch (err) {
        callback(err, { status: "Error", msg: err.message })
      }
    })
  },
  delete: (id, callback) => {
    console.log("delete method start:")
    return new Promise(async (resolve, reject) => {
      try {
        const query = `DELETE FROM ${table_name} WHERE uuid_index = ? `
        const result = await pool.query(query, [id])
        callback(null, { status: "Success", data: JSON.stringify(result) })
      } catch (err) {
        callback(err, { status: "Error", msg: err.message })
      }
    })
  },
}
