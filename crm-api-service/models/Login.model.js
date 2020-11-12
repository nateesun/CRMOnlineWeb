const logger = require("../logger")
const pool = require("../mysql-connect")
const { getDB } = require("./FuncUtil")()

module.exports = (db) => {
  const module = {}
  const table_name = getDB(db, "login")
  const tb_member = getDB(db, "member")

  module.create = (data) => {
    logger.info(`create: ${data}`)
    return new Promise(async (resolve, reject) => {
      try {
        const sql = `INSERT INTO ${table_name} SET ?;`;
        logger.debug(sql);
        const result = await pool.query(sql, data)
        if (result.affectedRows > 0) {
          resolve({ status: "Success", data: JSON.stringify(result) })
        } else {
          reject({ status: 'Warning', msg: "Cannot create password" })
        }
      } catch (err) {
        logger.error(err);
        reject({ status: "Error", msg: err.message })
      }
    })
  }

  module.update = (data) => {
    logger.info(`update: ${data}`)
    return new Promise(async (resolve, reject) => {
      try {
        const sql = `UPDATE ${table_name} SET password = ? WHERE username=?;`;
        logger.debug(sql);
        const result = await pool.query(sql, [
          Buffer.from(data.password).toString("base64"),
          data.username,
        ])
        if (result.affectedRows > 0) {
          resolve({ status: "Success", data: JSON.stringify(result) })
        } else {
          reject({ status: 'Warning', msg: "Cannot update password" })
        }
      } catch (err) {
        logger.error(err);
        reject({ status: "Error", msg: err.message })
      }
    })
  }

  module.validLogin = (username, password) => {
    logger.info(`validLogin: ${username}`)
    return new Promise(async (resolve, reject) => {
      try {
        const sql = `select l.*, m.member_role 
        from ${table_name} l 
        inner join ${tb_member} m on l.username=m.email 
        where l.username=? 
        and l.password=? 
        and member_active = 'Y';`;
        logger.debug(sql);
        const user = await pool.query(sql, [username, password])
        if (user.length === 0) {
          return resolve({ status: "Invalid", data: JSON.stringify("Invalid user") })
        }
        if (user[0].member_role === '' || user[0].member_role === null){
          return resolve({ status: "Missing Role", data: JSON.stringify("Invalid user") })
        }
        resolve({ status: "Success", data: JSON.stringify(user) })
      } catch (err) {
        logger.error(err);
        reject({ status: "Error", msg: err.message })
      }
    })
  }

  module.getLineId = (lineId) => {
    logger.info(`getLineId: ${lineId}`)
    return new Promise(async (resolve, reject) => {
      try {
        const sql = `select * from ${table_name} where Line_Id=?;`;
        logger.debug(sql);
        const member = await pool.query(sql, [lineId])
        if (member.length == 0) {
          reject({ status: 'Warning', msg: "Not Found" })
        } else {
          resolve({ status: "Success", data: JSON.stringify(member) })
        }
      } catch (err) {
        logger.error(err);
        reject({ status: "Error", msg: err.message })
      }
    })
  }

  return module
}
