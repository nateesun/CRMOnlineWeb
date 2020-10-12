const pool = require("../mysql-connect")
const { getDB } = require("./FuncUtil")()

module.exports = (db) => {
  const module = {}
  const table_name = getDB(db, "branch")

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
        reject({ status: "Error", msg: err.message })
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
        const query = `UPDATE ${table_name} SET code=?, name=?, map_latitude=?, map_longitude=? WHERE uuid_index=? `
        const result = await pool.query(query, [
          data.code,
          data.name,
          data.map_latitude,
          data.map_longitude,
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
        reject(err, { status: "Error", msg: err.message })
      }
    })
  }

  return module
}
