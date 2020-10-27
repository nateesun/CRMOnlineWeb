/* Redeem.model code generator by automatic script */

const pool = require("../mysql-connect")

module.exports = () => {
  const module = {}
  const table_name = "redeem";

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
      const payload = { 
        uuid_index: params.uuid_index,
        redeem_code: params.redeem_code,
        product_code: params.product_code,
        redeem_name: params.redeem_name,
        point_to_redeem: params.point_to_redeem,
        use_in_branch: params.use_in_branch,
        emp_code_redeem: params.emp_code_redeem,
        member_code_use: params.member_code_use,
        qty_in_use: params.qty_in_use,
        stystem_create: params.stystem_create,
        redeem_date: params.redeem_date,
        in_time: params.in_time,
        status_use: params.status_use,
        active: params.active,
        redeem_or_free: params.redeem_or_free,
        discount_amt: params.discount_amt,
        discount_percent: params.discount_percent
      };
      try {
        const query = `INSERT INTO ${table_name} SET ? `
        const result = await pool.query(query, payload)
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
