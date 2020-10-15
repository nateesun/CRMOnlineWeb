const pool = require("../mysql-connect")

module.exports = () => {
  const module = {}
  const table_name = "memmaster"

  module.getAllMember = () => {
    return new Promise(async (resolve, reject) => {
      try {
        const sql = `select * from ${table_name} where Member_Active='Y' order by Member_Code;`
        const result = await pool.query(sql)
        resolve({ status: "Success", data: JSON.stringify(result) })
      } catch (err) {
        reject(err)
      }
    })
  }

  module.getMemberById = member_code => {
    return new Promise(async (resolve, reject) => {
      try {
        const sql = `select * from ${table_name} where Member_Code=?;`
        const result = await pool.query(sql, [member_code])
        resolve({ status: "Success", data: JSON.stringify(result) })
      } catch (err) {
        reject(err)
      }
    })
  }

  module.saveMember = data => {
    return new Promise(async (resolve, reject) => {
      try {
        const sql = `INSERT INTO ${table_name} SET ? `;
        const result = await pool.query(sql, data);
        resolve({ status: "Success", data: JSON.stringify(result) })
      } catch (err) {
        reject(err)
      }
    })
  }

  module.updateMemberPoint = data => {
    return new Promise(async (resolve, reject) => {
      try {
        const sql = `UPDATE ${table_name} 
        SET Member_TotalScore=?, Member_TotalPurchase=?, System_Updated=now() 
        WHERE Member_Code=?`;
        const result = await pool.query(sql, [
          data.Member_TotalScore,
          data.Member_TotalPurchase,
          data.Member_Code
        ]);
        resolve({ status: "Success", data: JSON.stringify(result) })
      } catch (err) {
        reject(err)
      }
    })
  }

  return module
}
