const db = require("../config")
const table_name = "memmaster"

const MemMaster = {
  validLogin: (username, password, callback) => {
    db.query(
      `select * from ${table_name} where username = ? and password = ?`,
      [username, password],
      (err, rows) => {
        if (err) {
          return callback(err, null)
        }
        if (rows.length === 0) {
          return callback(null, { status: "Invalid" })
        }
        callback(null, { status: "Success", data: JSON.stringify(rows) })
      }
    )
  },
  create: (MemmasterModel, callback) => {
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
      Member_Brithday
    } = MemmasterModel
    return db.query(
      `insert into ${table_name} (
        Member_Code, Member_TitleNameThai, Member_FirstName, Member_LastName,
        Member_HomeTel, Member_Mobile, Member_Email, Username,
        Password, System_Created, System_Updated, Member_TotalScore,
        Member_TotalPurchase, Member_PointExpiredDate, Member_ExpiredDate, Member_Brithday) 
        values (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
      [
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
        Member_Brithday
      ],
      callback
    )
  },
}

module.exports = MemMaster
