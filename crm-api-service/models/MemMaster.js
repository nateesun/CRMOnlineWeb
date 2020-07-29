const pool = require("../config")
const table_name = "memmaster"

const MemMaster = {
  findAll: async callback => {
    try {
      const sql = `select * from ${table_name}`;
      const member = await pool.query(sql)
      callback(null, { status: "Success", data: JSON.stringify(member) })
    } catch (err) {
      callback(err, { status: "Error", msg: err.message })
    }
  },
  validLogin: async (username, password, callback) => {
    try {
      const sql = `select * from ${table_name} where username = ? and password = ?`
      const user = await pool.query(sql, [username, password])
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
        values (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`;
      const result = await pool.query(sql, [
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
        ])
      callback(null, { status: "Success", data: result.affectedRows })
    } catch (err) {
      callback(err, { status: "Error", msg: err.message })
    }
  },
}

module.exports = MemMaster
