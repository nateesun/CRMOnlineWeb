const jwt = require("jsonwebtoken")
const pool = require("../config")
const table_name = "login"

const Login = {
  create: async (data, callback) => {
    console.log("create method start:")
    return new Promise(async (resolve, reject) => {
      try {
        const query = `INSERT INTO ${table_name} SET ? `
        const result = await pool.query(query, data)
        if(result.affectedRows > 0) {
          callback(null, { status: "Success", data: JSON.stringify(result) })
        }else{
          callback(err, { status: "Error", msg: "Cannot update password" })
        }
      } catch (err) {
        callback(err, { status: "Error", msg: err.message })
      }
    })
  },
  update: (data, callback) => {
    console.log("update method start:")
    return new Promise(async (resolve, reject) => {
      try {
        const query = `UPDATE ${table_name} SET password = ? WHERE username=? `
        const result = await pool.query(query, [ 
          Buffer.from(data.password).toString('base64'), 
          data.username ])
        if(result.affectedRows > 0) {
          callback(null, { status: "Success", data: JSON.stringify(result) })
        }else{
          callback(err, { status: "Error", msg: "Cannot update password" })
        }
      } catch (err) {
        callback(err, { status: "Error", msg: err.message })
      }
    })
  },
  validLogin: async (username, password, callback) => {
    try {
      const sql = `select * from ${table_name} where username = ? and password = ? and member_active='Y'`
      const user = await pool.query(sql, [username, Buffer.from(password).toString('base64')])
      if (user.length === 0) {
        return callback(null, { status: "Invalid" })
      } else {
        return callback(null, { status: "Success", data: JSON.stringify(user) })
      }
    } catch (err) {
      callback(err, { status: "Error", msg: err.message })
    }
  },
  getLineId: async (lineId, callback) => {
    try {
      const sql = `select * from ${table_name} where Line_Id=?`
      const member = await pool.query(sql, [lineId])
      if(member.length==0){
        callback(null, { status: "Not Found", data: [] })
      }else{
        callback(null, { status: "Success", data: JSON.stringify(member) })
      }
    } catch (err) {
      callback(err, { status: "Error", msg: err.message })
    }
  },
}

module.exports = Login