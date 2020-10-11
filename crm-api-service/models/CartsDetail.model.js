/* CartsDetail.model code generator by automatic script */

const pool = require("../mysql-connect")
const { getDB } = require("./FuncUtil")()

module.exports = (db) => {
  const module = {}
  const table_name = getDB(db, "carts_detail")

  module.findByCartNo = (cart_no) => {
    console.log("findByProduct method start:")
    return new Promise(async (resolve, reject) => {
      try {
        const sql = `select * from ${table_name} where cart_no=?;`
        const result = await pool.query(sql, [cart_no])
        resolve({ status: "Success", data: JSON.stringify(result) })
      } catch (err) {
        reject(err)
      }
    })
  }

  module.findByProduct = (product_code, cart_no) => {
    console.log("findByProduct method start:")
    return new Promise(async (resolve, reject) => {
      try {
        const sql = `select * from ${table_name} where product_code=? and cart_no=?;`
        const result = await pool.query(sql, [product_code, cart_no])
        resolve({ status: "Success", data: JSON.stringify(result) })
      } catch (err) {
        reject(err)
      }
    })
  }

  module.findById = (id) => {
    console.log("findById method start:")
    return new Promise(async (resolve, reject) => {
      try {
        const sql = `select * from ${table_name} where uuid_index=?;`
        const result = await pool.query(sql, [id])
        resolve({ status: "Success", data: JSON.stringify(result) })
      } catch (err) {
        reject(err)
      }
    })
  }

  module.findAll = () => {
    console.log("findAll method start:")
    return new Promise(async (resolve, reject) => {
      try {
        const sql = `select * from ${table_name}`
        const result = await pool.query(sql)
        resolve({ status: "Success", data: JSON.stringify(result) })
      } catch (err) {
        reject(err)
      }
    })
  }

  module.searchData = (key, value) => {
    console.log("searchData method start:")
    return new Promise(async (resolve, reject) => {
      try {
        let sql = `select * from ${table_name}`
        if (key !== "") {
          sql = `${sql} where ${key} like '%${value}%'`
        }
        const result = await pool.query(sql)
        resolve({ status: "Success", data: JSON.stringify(result) })
      } catch (err) {
        reject(err)
      }
    })
  }

  module.create = (params) => {
    console.log("create method start:")
    return new Promise(async (resolve, reject) => {
      try {
        const query = `INSERT INTO ${table_name} SET ? `
        const result = await pool.query(query, params)
        resolve({ status: "Success", data: JSON.stringify(result) })
      } catch (err) {
        reject(err)
      }
    })
  }

  module.update = (data) => {
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
          data.uuid_index,
        ])
        resolve({ status: "Success", data: JSON.stringify(result) })
      } catch (err) {
        reject(err)
      }
    })
  }

  module.updateQty = (data) => {
    console.log("update method start:")
    return new Promise(async (resolve, reject) => {
      try {
        const query = `UPDATE ${table_name} 
        SET qty=?,total_amount=qty*product_price 
        WHERE cart_no=? and product_code=? `
        const result = await pool.query(query, [
          data.qty,
          data.cart_no,
          data.product_code,
        ])
        resolve({ status: "Success", data: JSON.stringify(result) })
      } catch (err) {
        reject(err)
      }
    })
  }

  module.delete = ({ cart_no, product_code }) => {
    console.log("delete method start:")
    return new Promise(async (resolve, reject) => {
      try {
        const query = `DELETE FROM ${table_name} WHERE cart_no=? and product_code=?`
        const result = await pool.query(query, [cart_no, product_code])
        resolve({ status: "Success", data: JSON.stringify(result) })
      } catch (err) {
        reject(err)
      }
    })
  }

  return module
}
