/* CartsDetail.model code generator by automatic script */

const pool = require("../mysql-connect")
const table_name = "carts_detail"

module.exports = {
  findByCartNo: async (cart_no, callback) => {
    console.log("findByProduct method start:")
    try {
      const sql = `select * from ${table_name} where cart_no=?;`
      const result = await pool.query(sql, [cart_no])
      callback(null, { status: "Success", data: JSON.stringify(result) })
    } catch (err) {
      callback(err, { status: "Error", msg: err.message })
    }
  },
  findByProduct: async (product_code, cart_no, callback) => {
    console.log("findByProduct method start:")
    try {
      const sql = `select * from ${table_name} where product_code=? and cart_no=?;`
      const result = await pool.query(sql, [product_code, cart_no])
      callback(null, { status: "Success", data: JSON.stringify(result) })
    } catch (err) {
      callback(err, { status: "Error", msg: err.message })
    }
  },
  findById: async (id, callback) => {
    console.log("findById method start:")
    try {
      const sql = `select * from ${table_name} where uuid_index=?;`
      const result = await pool.query(sql, [id])
      callback(null, { status: "Success", data: JSON.stringify(result) })
    } catch (err) {
      callback(err, { status: "Error", msg: err.message })
    }
  },
  findAll: async (callback) => {
    console.log("findAll method start:")
    try {
      const sql = `select * from ${table_name}`
      const result = await pool.query(sql)
      callback(null, { status: "Success", data: JSON.stringify(result) })
    } catch (err) {
      callback(err, { status: "Error", msg: err.message })
    }
  },
  searchData: async (key, value, callback) => {
    console.log("searchData method start:")
    try {
      let sql = `select * from ${table_name}`;
      if(key!==''){
        sql = `${sql} where ${key} like '%${value}%'`;
      }
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
        const query = `UPDATE ${table_name} 
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
        WHERE uuid_index=? `
        const result = await pool.query(query, [
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
          data.uuid_index
        ])
        callback(null, { status: "Success", data: JSON.stringify(result) })
      } catch (err) {
        callback(err, { status: "Error", msg: err.message })
      }
    })
  },
  updateQty: (data, callback) => {
    console.log("update method start:")
    return new Promise(async (resolve, reject) => {
      try {
        const query = `UPDATE ${table_name} 
        SET qty=?,total_amount=qty*product_price 
        WHERE cart_no=? and product_code=? `
        const result = await pool.query(query, [data.qty, data.cart_no, data.product_code])
        callback(null, { status: "Success", data: JSON.stringify(result) })
      } catch (err) {
        callback(err, { status: "Error", msg: err.message })
      }
    })
  },
  delete: ({cart_no, product_code}, callback) => {
    console.log("delete method start:")
    return new Promise(async (resolve, reject) => {
      try {
        const query = `DELETE FROM ${table_name} WHERE cart_no=? and product_code=?`
        const result = await pool.query(query, [cart_no, product_code])
        callback(null, { status: "Success", data: JSON.stringify(result) })
      } catch (err) {
        callback(err, { status: "Error", msg: err.message })
      }
    })
  },
}
