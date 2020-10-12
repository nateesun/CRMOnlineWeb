const pool = require("../mysql-connect")
const { getDB } = require("./FuncUtil")()

module.exports = (db) => {
  const module = {}
  const table_name = getDB(db, "login")
  const tb_member = getDB(db, "member")

  module.create = (data) => {
    console.log("create method start:")
    return new Promise(async (resolve, reject) => {
      try {
        const query = `INSERT INTO ${table_name} SET ? `
        const result = await pool.query(query, data)
        if (result.affectedRows > 0) {
          resolve({ status: "Success", data: JSON.stringify(result) })
        } else {
          reject("Cannot update password")
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
        const query = `UPDATE ${table_name} SET password = ? WHERE username=? `
        const result = await pool.query(query, [
          Buffer.from(data.password).toString("base64"),
          data.username,
        ])
        if (result.affectedRows > 0) {
          resolve({ status: "Success", data: JSON.stringify(result) })
        } else {
          reject("Cannot update password")
        }
      } catch (err) {
        reject(err)
      }
    })
  }

  module.validLogin = (username, password) => {
    return new Promise(async (resolve, reject) => {
      try {
        const sql = `select l.*, m.member_role 
        from ${table_name} l 
        inner join ${tb_member} m on l.username=m.email 
        where l.username=? 
        and l.password=? 
        and member_active = 'Y'`;
        const user = await pool.query(sql, [username, password])
        if (user.length === 0) {
          return resolve({ status: "Invalid", data: JSON.stringify("Invalid user") })
        } else if (user[0].member_role === '' || user[0].member_role === null){
          return resolve({ status: "Missing Role", data: JSON.stringify("Invalid user") })
        } else {
          return resolve({ status: "Success", data: JSON.stringify(user) })
        }
      } catch (err) {
        reject(err)
      }
    })
  }

  module.getLineId = (lineId) => {
    return new Promise(async (resolve, reject) => {
      try {
        const sql = `select * from ${table_name} where Line_Id=?`
        const member = await pool.query(sql, [lineId])
        if (member.length == 0) {
          reject("Not Found")
        } else {
          resolve({ status: "Success", data: JSON.stringify(member) })
        }
      } catch (err) {
        reject(err)
      }
    })
  }

  return module
}
