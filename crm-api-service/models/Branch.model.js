const pool = require("../mysql-connect")
const { getDB, getUUID } = require("./FuncUtil")()

module.exports = (db) => {
  const module = {}
  const table_name = getDB(db, "branch")

  module.findById = (uuid_index) => {
    console.log("findById method start:")
    if(!uuid_index) {
      return reject('uuid_index to find is empty!')
    }
    return new Promise(async (resolve, reject) => {
      try {
        const sql = `select * from ${table_name} where uuid_index=?;`
        const result = await pool.query(sql, [uuid_index])
        if(result.length === 1){
          return resolve({ status: "Success", data: JSON.stringify(result[0]) })
        } else {
          return resolve({ status: "Success", data: JSON.stringify(result) })
        }
      } catch (err) {
        reject(err)
      }
    })
  }

  module.findByCode = (code) => {
    console.log("findByCode method start:")
    if(!code) {
      return reject('code to find is empty!')
    }
    return new Promise(async (resolve, reject) => {
      try {
        const sql = `select * from ${table_name} where code=?;`
        const result = await pool.query(sql, [code])
        if(result.length === 1){
          return resolve({ status: "Success", data: JSON.stringify(result[0]) })
        } else {
          return resolve({ status: "Success", data: JSON.stringify(result) })
        }
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
      params.uuid_index = getUUID();
      try {
        const query = `INSERT INTO ${table_name} SET ? `
        const result = await pool.query(query, params)
        if (result.affectedRows > 0) {
          resolve({ status: "Success", data: JSON.stringify(params.uuid_index) })
        } else {
          reject('Cannot create branch data');
        }
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
        SET code=?, name=?, map_latitude=?, map_longitude=? 
        WHERE uuid_index=? `
        const result = await pool.query(query, [
          data.code,
          data.name,
          data.map_latitude,
          data.map_longitude,
          data.uuid_index,
        ])
        if (result.affectedRows > 0) {
          return resolve({ status: "Success", data: JSON.stringify(data) })
        }
        reject('Cannot update branch data');
      } catch (err) {
        reject(err)
      }
    })
  }

  module.updatePatch = (data) => {
    console.log("updatePatch method start:")
    return new Promise(async (resolve, reject) => {
      try {
        const query = `UPDATE ${table_name} 
        SET map_latitude=?, map_longitude=? 
        WHERE uuid_index=? `
        const result = await pool.query(query, [
          data.map_latitude,
          data.map_longitude,
          data.uuid_index,
        ])
        if (result.affectedRows > 0) {
          return resolve({ status: "Success", data: JSON.stringify(data) })
        }
        reject('Cannot update branch data');
      } catch (err) {
        reject(err)
      }
    })
  }

  module.delete = (uuid_index) => {
    console.log("delete method start:")
    if(!uuid_index) {
      return reject('id to delete is empty!')
    }
    return new Promise(async (resolve, reject) => {
      try {
        const query = `DELETE FROM ${table_name} 
        WHERE uuid_index = ? `
        const result = await pool.query(query, [uuid_index])
        if (result.affectedRows > 0) {
          return resolve({ status: "Success", data: JSON.stringify(uuid_index) })
        }
        reject('Cannot delete branch data');
      } catch (err) {
        reject(err, { status: "Error", msg: err.message })
      }
    })
  }

  return module
}
