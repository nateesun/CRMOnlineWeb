const pool = require("../mysql-connect")

module.exports = {
  create: (params, tableName) => {
    console.log("create method start:")
    return new Promise(async (resolve, reject) => {
      try {
        const query = `INSERT INTO ${tableName} SET ? `
        const result = await pool.query(query, params)
        return result.affectedRows > 0
          ? resolve()
          : reject({
              type: "database_error",
              message: "Failed to insert record in database",
            })
      } catch (error) {
        reject({ type: "database_error", message: error.message })
      }
    })
  },
  update: (params, tableName) => {
    console.log("update method start:")
    return new Promise(async (resolve, reject) => {
      try {
        const query = `UPDATE ${tableName} SET ? `
        const result = await pool.query(query, params)
        return result.affectedRows > 0
          ? resolve()
          : reject({
              type: "database_error",
              message: "Failed to insert record in database",
            })
      } catch (error) {
        reject({ type: "database_error", message: error.message })
      }
    })
  },
}
