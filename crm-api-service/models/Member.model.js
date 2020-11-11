const pool = require("../mysql-connect")
const { zeroPad, getDB } = require("./FuncUtil")()

module.exports = (db) => {
  const module = {}
  const table_name = getDB(db, "member")
  const tb_company = getDB(db, "company")
  const tb_login = getDB(db, "login")

  module.findById = (id) => {
    console.log("findById method start:")
    return new Promise(async (resolve, reject) => {
      try {
        const sql = `select * from ${table_name} where uuid_index=?;`
        const result = await pool.query(sql, [id])
        resolve({ status: "Success", data: JSON.stringify(result) })
      } catch (err) {
        reject({ status: "Error", msg: err.message })
      }
    })
  }

  module.findByEmail = (email) => {
    console.log("findByEmail method start:")
    return new Promise(async (resolve, reject) => {
      try {
        const sql = `select * from ${table_name} where email=?;`
        const result = await pool.query(sql, [email])
        resolve({ status: "Success", data: JSON.stringify(result) })
      } catch (err) {
        reject({ status: "Error", msg: err.message })
      }
    })
  }

  module.findByMobileAndEmail = (email, mobile) => {
    console.log("findByEmail method start:")
    return new Promise(async (resolve, reject) => {
      try {
        const sql = `select * from ${table_name} 
        where email=? and mobile=?;`
        const result = await pool.query(sql, [email, mobile])
        resolve({ status: "Success", data: JSON.stringify(result) })
      } catch (err) {
        reject({ status: "Error", msg: err.message })
      }
    })
  }

  module.findAll = () => {
    console.log("findAll method start:")
    return new Promise(async (resolve, reject) => {
      try {
        const sql = `select * from ${table_name} order by code;`
        const result = await pool.query(sql)
        resolve({ status: "Success", data: JSON.stringify(result) })
      } catch (err) {
        reject({ status: "Error", msg: err.message })
      }
    })
  }

  module.getDataForClient = () => {
    console.log("getDataForClient method start:")
    return new Promise(async (resolve, reject) => {
      try {
        const sql = `select * from ${table_name} where member_role='member' order by code;`
        const result = await pool.query(sql)
        resolve({ status: "Success", data: JSON.stringify(result) })
      } catch (err) {
        reject({ status: "Error", msg: err.message })
      }
    })
  }

  module.updateMemberFromClient = (member) => {
    console.log("updateMemberFromClient method start:")
    return new Promise(async (resolve, reject) => {
      try {
        const sql = `update ${table_name} 
        set total_purchase=?,
        total_score=? where code=?;`
        const result = await pool.query(sql, [
          member.Member_TotalPurchase,
          member.Member_TotalScore,
          member.Member_Code
        ])
        resolve({ status: "Success", data: JSON.stringify(result) })
      } catch (err) {
        reject({ status: "Error", msg: err.message })
      }
    })
  }

  module.searchData = (key, value) => {
    console.log("searchData method start:")
    return new Promise(async (resolve, reject) => {
      try {
        let sql = `select * from ${table_name} where 1=1 `
        if (key !== "") {
          sql = `${sql} and ${key} like '%${value}%'`
        }
        const result = await pool.query(sql)
        resolve({ status: "Success", data: JSON.stringify(result) })
      } catch (err) {
        reject({ status: "Error", msg: err.message })
      }
    })
  }

  module.create = (data) => {
    console.log("create method start:")
    return new Promise(async (resolve, reject) => {
      try {
        const config = await pool.query(
          `select member_running, prefix_running, size_running from ${tb_company} c limit 0,1;`
        )
        const { prefix_running, member_running, size_running } = config[0]
        data.code = prefix_running + zeroPad(member_running, size_running) // generate prefix running

        const query = `INSERT INTO ${table_name} SET ? `
        const result = await pool.query(query, data)

        // update running +1
        await pool.query(
          `update ${tb_company} set member_running=member_running+1`
        )
        resolve({ status: "Success", data: JSON.stringify(result) })
      } catch (err) {
        reject({ status: "Error", msg: err.message })
      }
    })
  }

  module.update = (data) => {
    console.log("update method start:")
    return new Promise(async (resolve, reject) => {
      try {
        const query = `UPDATE ${table_name} SET  
        prefix = ?, 
        first_name = ?, 
        last_name = ?, 
        birthday = ?, 
        mobile = ?, 
        line_id = ?, 
        system_updated = now() 
        WHERE uuid_index=? `
        const result = await pool.query(query, [
          data.prefix,
          data.first_name,
          data.last_name,
          data.birthday,
          data.mobile,
          data.line_id,
          data.uuid_index,
        ])
        resolve({ status: "Success", data: JSON.stringify(result) })
      } catch (err) {
        reject({ status: "Error", msg: err.message })
      }
    })
  }

  module.updateRole = (data) => {
    console.log("update method start:")
    return new Promise(async (resolve, reject) => {
      try {
        const query = `UPDATE ${table_name} SET  
        member_role = ?,
        first_name=?,
        last_name=?,
        system_updated = now() 
        WHERE uuid_index=? `
        const result = await pool.query(query, [
          data.member_role,
          data.first_name,
          data.last_name,
          data.uuid_index
        ])
        resolve({ status: "Success", data: JSON.stringify(result) })
      } catch (err) {
        reject({ status: "Error", msg: err.message })
      }
    })
  }

  module.changePassword = (data) => {
    console.log("changePassword method start:")
    return new Promise(async (resolve, reject) => {
      const { email, mobile, secret } = data;
      const password = Buffer.from('123456').toString('base64');
      try {
        const query = `UPDATE ${tb_login} SET password = ? WHERE username=? `
        const result = await pool.query(query, [password, email])
        resolve({ status: "Success", data: JSON.stringify(result) })
      } catch (err) {
        reject({ status: "Error", msg: err.message })
      }
    })
  }

  module.delete = (email) => {
    console.log("delete method start")
    return new Promise(async (resolve, reject) => {
      try {
        const query = `DELETE FROM ${table_name} WHERE email = ? `
        const qDelLogin = `DELETE FROM ${tb_login} WHERE username = ? `
        const result = await pool.query(query, [email])
        const result2 = await pool.query(qDelLogin, [email])
        resolve({ status: "Success", data: JSON.stringify(result) })
      } catch (err) {
        reject({ status: "Error", msg: err.message })
      }
    })
  }

  module.verifyTokenLine = (token) => {
    console.log("verifyTokenLine method start")
    return new Promise(async (resolve, reject) => {
      try {
        const verifyPass = jwt.verify(token, "softpos2013")
        if (verifyPass) {
          const { lineId } = jwt.decode(token)
          const sql = `select * from ${table_name} where line_id=?`
          const member = await pool.query(sql, [lineId])
          resolve({ status: "Success", data: JSON.stringify(member) })
        } else {
          reject("Verify Token Error")
        }
      } catch (err) {
        reject({ status: "Error", msg: err.message })
      }
    })
  }

  return module
}
