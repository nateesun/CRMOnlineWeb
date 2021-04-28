const logger = require("../logger")
const pool = require("../mysql-connect")
const { getDB, getUUID } = require("./FuncUtil")()

module.exports = (db) => {
  const module = {}
  const table_name = getDB(db, "branch")

  module.findById = (uuid_index) => {
    logger.debug(`findById: ${uuid_index}`)
    if (!uuid_index) {
      logger.warn(`uuid_index to find is empty!`)
      return reject({ status: "Warning", msg: "uuid_index to find is empty!" })
    }
    return new Promise(async (resolve, reject) => {
      try {
        const sql = `select * from ${table_name} where uuid_index=?;`
        logger.debug(sql)
        const result = await pool.query(sql, [uuid_index])
        if (result.length === 1) {
          return resolve({ status: "Success", data: JSON.stringify(result[0]) })
        }
        resolve({ status: "Success", data: JSON.stringify(result) })
      } catch (err) {
        logger.error(err)
        reject({ status: "Error", msg: err.message })
      }
    })
  }

  module.findByCode = (code) => {
    logger.debug(`findByCode: ${code}`)
    if (!code) {
      logger.warn(`code to find is empty!`)
      return reject({ status: "Warning", msg: "code to find is empty!" })
    }
    return new Promise(async (resolve, reject) => {
      try {
        const sql = `select * from ${table_name} where code=?;`
        logger.debug(sql)
        const result = await pool.query(sql, [code])
        resolve({ status: "Success", data: JSON.stringify(result) })
      } catch (err) {
        logger.error(err)
        reject({ status: "Error", msg: err.message })
      }
    })
  }

  module.findAll = () => {
    logger.debug(`findAll`)
    return new Promise(async (resolve, reject) => {
      try {
        const sql = `select * from ${table_name};`
        logger.debug(sql)
        const result = await pool.query(sql)
        resolve({ status: "Success", data: JSON.stringify(result) })
      } catch (err) {
        logger.error(err)
        reject({ status: "Error", msg: err.message })
      }
    })
  }

  module.create = (params) => {
    logger.debug(`create ${params}`)
    return new Promise(async (resolve, reject) => {
      params.uuid_index = getUUID()
      try {
        const sql = `INSERT INTO ${table_name} SET ?;`
        logger.debug(sql)
        const result = await pool.query(sql, params)
        if (result.affectedRows > 0) {
          return resolve({
            status: "Success",
            data: JSON.stringify(params.uuid_index),
          })
        }
        logger.warn("Cannot create branch data")
        reject({ status: "Warning", msg: "Cannot create branch data" })
      } catch (err) {
        logger.error(err)
        reject({ status: "Error", msg: err.message })
      }
    })
  }

  module.update = (data) => {
    logger.debug(`Branch:update ${data}`)
    return new Promise(async (resolve, reject) => {
      try {
        const sql = `UPDATE ${table_name} 
        SET code=?, name=?, map_latitude=?, map_longitude=?,
        mapping_direction_length1=?, mapping_direction_length2=?, mapping_direction_length3=?,
        mapping_type1=?, mapping_type2=?, mapping_type3=?,
        mapping_baht1=?, mapping_baht2=?, mapping_baht3=? 
        WHERE uuid_index=?;`
        logger.debug(sql)
        const result = await pool.query(sql, [
          data.code,
          data.name,
          data.map_latitude,
          data.map_longitude,
          data.mapping_direction_length1,
          data.mapping_direction_length2,
          data.mapping_direction_length3,
          data.mapping_type1,
          data.mapping_type2,
          data.mapping_type3,
          data.mapping_baht1,
          data.mapping_baht2,
          data.mapping_baht3, 
          data.uuid_index,
        ])
        if (result.affectedRows > 0) {
          return resolve({ status: "Success", data: JSON.stringify(data) })
        }
        logger.warn("Cannot update branch data")
        reject({ status: "Warning", msg: "Cannot update branch data" })
      } catch (err) {
        logger.error(err)
        reject({ status: "Error", msg: err.message })
      }
    })
  }

  module.updatePatch = (data) => {
    logger.debug(`updatePatch ${data}`)
    return new Promise(async (resolve, reject) => {
      try {
        const sql = `UPDATE ${table_name} 
        SET map_latitude=?, map_longitude=? 
        WHERE uuid_index=?;`
        logger.debug(sql)
        const result = await pool.query(sql, [
          data.map_latitude,
          data.map_longitude,
          data.uuid_index,
        ])
        if (result.affectedRows > 0) {
          return resolve({ status: "Success", data: JSON.stringify(data) })
        }
        logger.warn("Cannot update branch data")
        reject({ status: "Warning", msg: "Cannot update branch data" })
      } catch (err) {
        logger.error(err)
        reject({ status: "Error", msg: err.message })
      }
    })
  }

  module.delete = (uuid_index) => {
    logger.debug(`delete ${uuid_index}`)
    if (!uuid_index) {
      logger.warn("id to delete is empty!")
      return reject({ status: "Warning", msg: "id to delete is empty!" })
    }
    return new Promise(async (resolve, reject) => {
      try {
        const sql = `DELETE FROM ${table_name} WHERE uuid_index = ?;`
        logger.debug(sql)
        const result = await pool.query(sql, [uuid_index])
        if (result.affectedRows > 0) {
          return resolve({
            status: "Success",
            data: JSON.stringify(uuid_index),
          })
        }
        logger.warn("Cannot delete branch data")
        reject({ status: "Warning", msg: "Cannot delete branch data" })
      } catch (err) {
        logger.error(err)
        reject({ status: "Error", msg: err.message })
      }
    })
  }

  return module
}
