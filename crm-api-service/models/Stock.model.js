const pool = require("../mysql-connect")
const types = require('./Constants')
const tableName = "stock_master"

module.exports = {
  create: (params) => {
    return new Promise(async (resolve, reject) => {
      try {
        const query = `INSERT INTO ${tableName} SET ? `
        const result = await pool.query(query, params)
        return result.affectedRows > 0
          ? resolve({ data: params })
          : reject({
              type: types.DATABASE_ERROR,
              message: "Failed to insert record in database",
            })
      } catch (error) {
        reject({ type: types.DATABASE_ERROR, message: error.message })
      }
    })
  },
  update: (payload) => {
    const { index_uuid, stock_code, stock_name } = payload
    return new Promise(async (resolve, reject) => {
      try {
        const query = `UPDATE ${tableName} SET stock_code=?, stock_name=? where index_uuid=? `
        const result = await pool.query(query, [
          stock_code,
          stock_name,
          index_uuid,
        ])
        return result.affectedRows > 0
          ? resolve({ data: payload })
          : reject({
              type: types.NOT_FOUND,
              message: `stock id:${index_uuid} not found`,
            })
      } catch (error) {
        reject({ type: types.DATABASE_ERROR, message: error.message })
      }
    })
  },
  delete: (index_uuid) => {
    return new Promise(async (resolve, reject) => {
      try {
        const query = `DELETE FROM ${tableName} WHERE index_uuid=? `
        const result = await pool.query(query, index_uuid)
        return result.affectedRows > 0
          ? resolve({ data: result.affectedRows })
          : reject({
              type: types.NOT_FOUND,
              message: `id:${index_uuid} not found`,
            })
      } catch (error) {
        reject({ type: types.DATABASE_ERROR, message: error.message })
      }
    })
  },
  findAll: () => {
    return new Promise(async (resolve, reject) => {
      try {
        const query = `SELECT * FROM ${tableName}`
        const result = await pool.query(query)
        return result.length >= 0
          ? resolve(result)
          : reject({
              type: types.DATABASE_ERROR,
              message: "Failed to find all record in database",
            })
      } catch (error) {
        reject({ type: types.DATABASE_ERROR, message: error.message })
      }
    })
  },
  findById: (index_uuid) => {
    return new Promise(async (resolve, reject) => {
      try {
        const query = `SELECT * FROM ${tableName} WHERE index_uuid=? `
        const result = await pool.query(query, index_uuid)
        return result.length >= 0
          ? resolve(result)
          : reject({
              type: types.DATABASE_ERROR,
              message: "Failed to find record in database",
            })
      } catch (error) {
        reject({ type: types.DATABASE_ERROR, message: error.message })
      }
    })
  },
}
