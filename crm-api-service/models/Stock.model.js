const pool = require("../mysql-connect")
const table_name = "stock"

module.exports = {
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
        const query = `UPDATE ${table_name} SET code=?, name=? WHERE uuid_index=? `
        const result = await pool.query(query, [
          data.code,
          data.name,
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
