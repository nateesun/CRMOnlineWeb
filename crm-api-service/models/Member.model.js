const pool = require("../mysql-connect")
const Task = require('./Member.model');
const table_name = "member"

const zeroPad = (num, places) => String(num).padStart(places, '0')

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
  findByEmail: async (email, callback) => {
    console.log("findByEmail method start:")
    try {
      const sql = `select * from ${table_name} where email=?;`
      const result = await pool.query(sql, [email])
      callback(null, { status: "Success", data: JSON.stringify(result) })
    } catch (err) {
      callback(err, { status: "Error", msg: err.message })
    }
  },
  findAll: async (callback) => {
    console.log("findAll method start:")
    try {
      const sql = `select * from ${table_name} where email !='softpos@gmail.com'`
      const result = await pool.query(sql)
      callback(null, { status: "Success", data: JSON.stringify(result) })
    } catch (err) {
      callback(err, { status: "Error", msg: err.message })
    }
  },
  create: async (data, callback) => {
    console.log("create method start:")
    return new Promise(async (resolve, reject) => {
      try {
        const config = await pool.query(`select member_running, prefix_running, size_running from company c limit 0,1;`)
        const { prefix_running, member_running, size_running } = config[0];
        const query = `INSERT INTO ${table_name} SET ? `
        data.code = prefix_running + zeroPad(member_running, size_running);
        const result = await pool.query(query, data)
        await pool.query('update company set member_running=member_running+1')
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
        const query = `UPDATE ${table_name} SET  
        prefix = ?, first_name = ?, last_name = ?, birthday = ?, mobile = ?, line_id = ?, system_updated = now() 
        WHERE email=? `
        const result = await pool.query(query, [
          data.prefix, data.first_name, data.last_name, data.birthday, data.mobile, data.line_id,
          data.email
        ])
        callback(null, { status: "Success", data: JSON.stringify(result) })
      } catch (err) {
        callback(err, { status: "Error", msg: err.message })
      }
    })
  },
  delete: (email, callback) => {
    console.log("delete method start")
    return new Promise(async (resolve, reject) => {
      try {
        const query = `DELETE FROM ${table_name} WHERE email = ? `
        const qDelLogin = `DELETE FROM login WHERE username = ? `
        const result = await pool.query(query, [email])
        const result2 = await pool.query(qDelLogin, [email])
        callback(null, { status: "Success", data: JSON.stringify(result) })
      } catch (err) {
        callback(err, { status: "Error", msg: err.message })
      }
    })
  },
  verifyTokenLine: async (token, callback) => {
    try {
      const verifyPass = jwt.verify(token, 'softpos2013');
      if(verifyPass){
        const { lineId } = jwt.decode(token);
        const sql = `select * from ${table_name} where line_id=?`
        const member = await pool.query(sql, [lineId])
        callback(null, { status: "Success", data: JSON.stringify(member) })
      }else {
        callback(null, { status: "Error", msg: 'Verify Token Error' })
      }
    } catch (err) {
      callback(err, { status: "Error", msg: err.message })
    }
  },
}
