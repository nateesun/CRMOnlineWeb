/* Redeem.model code generator by automatic script */

const pool = require("../mysql-connect")
const { getDB } = require("./FuncUtil")()

module.exports = (db) => {
  const module = {}
  const table_name = getDB(db, "redeem")
  const promotion = getDB(db, "promotion")

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

  module.getDataForClient = () => {
    console.log("getDataForClient method start:")
    return new Promise(async (resolve, reject) => {
      try {
        const sql = `select * from ${table_name} where in_time > curdate()`
        const result = await pool.query(sql)
        resolve({ status: "Success", data: JSON.stringify(result) })
      } catch (err) {
        reject(err)
      }
    })
  }

  module.updateRedeemFromClient = (redeem) => {
    console.log("updateRedeemFromClient method start:")
    return new Promise(async (resolve, reject) => {
      try {
        const sql = `update ${table_name} 
        set bill_no=?,
        use_in_branch=?,
        emp_code_redeem=?,
        redeem_date=curdate(),
        active=? 
        where redeem_code=?;`
        const result = await pool.query(sql, [
          redeem.bill_no,
          redeem.use_in_branch,
          redeem.emp_code_redeem,
          redeem.active,
          redeem.Member_Code
        ])
        const sql2 = `update ${promotion} 
        set qty_in_stock = qty_in_stock-1 
        where product_code=?`;
        const result2 = await pool.query(sql2, [redeem.product_code]);
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
        SET redeem_code=?, product_code=?, point_to_redeem=? WHERE uuid_index=? `
        const result = await pool.query(query, [
          data.redeem_code,
          data.product_code,
          data.point_to_redeem,
          data.uuid_index,
        ])
        resolve({ status: "Success", data: JSON.stringify(result) })
      } catch (err) {
        reject(err)
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
        reject(err)
      }
    })
  }

  return module
}
