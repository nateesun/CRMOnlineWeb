const pool = require("../config")
const table_name = "memmaster"

const MemMaster = {
  find: async (Member_Code, callback) => {
    try {
      const sql = `select * from ${table_name} where Member_Code=?`
      const member = await pool.query(sql, [Member_Code])
      callback(null, { status: "Success", data: JSON.stringify(member) })
    } catch (err) {
      callback(err, { status: "Error", msg: err.message })
    }
  },
  findAll: async (callback) => {
    try {
      const sql = `select * from ${table_name}`
      const member = await pool.query(sql)
      callback(null, { status: "Success", data: JSON.stringify(member) })
    } catch (err) {
      callback(err, { status: "Error", msg: err.message })
    }
  },
  validLogin: async (username, password, callback) => {
    try {
      const sql = `select * from ${table_name} where username = ? and password = ?`
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
  create: async (MemmasterModel, callback) => {
    const {
      Member_Code,
      Member_TitleNameThai,
      Member_FirstName,
      Member_LastName,
      Member_HomeTel,
      Member_Mobile,
      Member_Email,
      Username,
      Password,
      System_Created,
      System_Updated,
      Member_TotalScore,
      Member_TotalPurchase,
      Member_PointExpiredDate,
      Member_ExpiredDate,
      Member_Brithday,
    } = MemmasterModel
    try {
      const sql = `insert into ${table_name} (
        Member_Code, Member_TitleNameThai, Member_FirstName, Member_LastName,
        Member_HomeTel, Member_Mobile, Member_Email, Username,
        Password, System_Created, System_Updated, Member_TotalScore,
        Member_TotalPurchase, Member_PointExpiredDate, Member_ExpiredDate, Member_Brithday) 
        values (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`
      const result = await pool.query(sql, [
        Member_Code,
        Member_TitleNameThai,
        Member_FirstName,
        Member_LastName,
        Member_HomeTel,
        Member_Mobile,
        Member_Email,
        Username,
        Buffer.from(Password).toString('base64'),
        System_Created,
        System_Updated,
        Member_TotalScore,
        Member_TotalPurchase,
        Member_PointExpiredDate,
        Member_ExpiredDate,
        Member_Brithday,
      ])
      callback(null, { status: "Success", data: result.affectedRows })
    } catch (err) {
      callback(err, { status: "Error", msg: err.message })
    }
  },
  update: async (MemmasterModel, callback) => {
    const {
      Member_TotalScore,
      Member_TotalPurchase,
      Member_Active,
      Member_BranchCode,
      Member_Code,
    } = MemmasterModel
    try {
      const sql = `update ${table_name} set 
        Member_TotalScore=?,
        Member_TotalPurchase=?,
        Member_Active=?,
        Member_BranchCode=?,
        System_Updated=? 
        WHERE Member_Code=?`
      const result = await pool.query(sql, [
        Member_TotalScore,
        Member_TotalPurchase,
        Member_Active,
        Member_BranchCode,
        System_Updated,
        Member_Code,
      ])
      callback(null, { status: "Success", data: result.affectedRows })
    } catch (err) {
      callback(err, { status: "Error", msg: err.message })
    }
  },
  delete: async (member_code, callback) => {
    try {
      const sql = `delete from ${table_name} WHERE Member_Code=?`;
      console.log(sql, member_code)
      const result = await pool.query(sql, [member_code]);
      callback(null, { status: "Success", data: result.affectedRows })
    } catch (err) {
      callback(err, { status: "Error", msg: err.message })
    }
  },
}

module.exports = MemMaster
