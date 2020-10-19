const db = require("../config")
const table_name = "memmaster"

const Member = {
  findAll: (limit=10, callback) => {
    return db.query(`select *  from ${table_name} limit 0, ${limit}`, callback)
  },
  findPointMoreThanZero: (callback) => {
    return db.query(`select *  from ${table_name} where Member_TotalScore > 0`, callback)
  },
  findByCode: (member_code, callback) => {
    return db.query(
      `select *  from ${table_name} where Member_Code=?`,
      [member_code],
      callback
    )
  },
  delete: (member_code, callback) => {
    return db.query(
      `delete from ${table_name} where Member_Code=?`,
      [member_code],
      callback
    )
  },
  update: (MemberModel, callback) => {
    const {
      Member_Code,
      Member_TotalScore,
      Member_TotalPurchase,
      System_Updated
    } = MemberModel
    return db.query(
      `update ${table_name} 
      set Member_TotalScore=?, Member_TotalPurchase=?, System_Updated=? 
      where Member_Code=?`,
      [Member_TotalScore, Member_TotalPurchase, System_Updated, Member_Code],
      callback
    )
  },
  add: (MemberModel, callback) => {
    return db.query(`insert into ${table_name} set ?`, [MemberModel],
      callback
    )
  },
}

module.exports = Member
