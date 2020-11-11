const logger = require("../logger")
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
        const sql = `select * from ${table_name} where uuid_index=?;`;
        logger.debug(sql);
        const result = await pool.query(sql, [id])
        resolve({ status: "Success", data: JSON.stringify(result) })
      } catch (err) {
        logger.error(err);
        reject({ status: "Error", msg: err.message })
      }
    })
  }

  module.findByEmail = (email) => {
    console.log("findByEmail method start:")
    return new Promise(async (resolve, reject) => {
      try {
        const sql = `select * from ${table_name} where email=?;`;
        logger.debug(sql);
        const result = await pool.query(sql, [email])
        resolve({ status: "Success", data: JSON.stringify(result) })
      } catch (err) {
        logger.error(err);
        reject({ status: "Error", msg: err.message })
      }
    })
  }

  module.findByMobileAndEmail = (email, mobile) => {
    console.log("findByEmail method start:")
    return new Promise(async (resolve, reject) => {
      try {
        const sql = `select * from ${table_name} 
        where email=? and mobile=?;`;
        logger.debug(sql);
        const result = await pool.query(sql, [email, mobile])
        resolve({ status: "Success", data: JSON.stringify(result) })
      } catch (err) {
        logger.error(err);
        reject({ status: "Error", msg: err.message })
      }
    })
  }

  module.findAll = () => {
    console.log("findAll method start:")
    return new Promise(async (resolve, reject) => {
      try {
        const sql = `select * from ${table_name} order by code;`;
        logger.debug(sql);
        const result = await pool.query(sql)
        resolve({ status: "Success", data: JSON.stringify(result) })
      } catch (err) {
        logger.error(err);
        reject({ status: "Error", msg: err.message })
      }
    })
  }

  module.getDataForClient = () => {
    console.log("getDataForClient method start:")
    return new Promise(async (resolve, reject) => {
      try {
        const sql = `select * from ${table_name} where member_role='member' order by code;`;
        logger.debug(sql);
        const result = await pool.query(sql)
        resolve({ status: "Success", data: JSON.stringify(result) })
      } catch (err) {
        logger.error(err);
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
        total_score=? where code=?;`;
        logger.debug(sql);
        const result = await pool.query(sql, [
          member.Member_TotalPurchase,
          member.Member_TotalScore,
          member.Member_Code
        ])
        resolve({ status: "Success", data: JSON.stringify(result) })
      } catch (err) {
        logger.error(err);
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
          sql = `${sql} and ${key} like '%${value}%'`;
        }
        logger.debug(sql);
        const result = await pool.query(sql)
        resolve({ status: "Success", data: JSON.stringify(result) })
      } catch (err) {
        logger.error(err);
        reject({ status: "Error", msg: err.message })
      }
    })
  }

  module.create = (data) => {
    console.log("create method start:")
    return new Promise(async (resolve, reject) => {
      try {
        let sql = `select member_running, prefix_running, size_running from ${tb_company} c limit 0,1;`;
        const config = await pool.query(sql)
        const { prefix_running, member_running, size_running } = config[0]
        data.code = prefix_running + zeroPad(member_running, size_running) // generate prefix running

        sql = `INSERT INTO ${table_name} SET ?;`;
        logger.debug(sql);
        const result = await pool.query(sql, data)

        // update running +1
        sql = `update ${tb_company} set member_running=member_running+1;`;
        logger.debug(sql);
        await pool.query(sql)
        resolve({ status: "Success", data: JSON.stringify(result) })
      } catch (err) {
        logger.error(err);
        reject({ status: "Error", msg: err.message })
      }
    })
  }

  module.update = (data) => {
    console.log("update method start:")
    return new Promise(async (resolve, reject) => {
      try {
        const sql = `UPDATE ${table_name} SET  
        prefix = ?, 
        first_name = ?, 
        last_name = ?, 
        birthday = ?, 
        mobile = ?, 
        line_id = ?, 
        system_updated = now() 
        WHERE uuid_index=?;`;
        logger.debug(sql);
        const result = await pool.query(sql, [
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
        logger.error(err);
        reject({ status: "Error", msg: err.message })
      }
    })
  }

  module.updateRole = (data) => {
    console.log("update method start:")
    return new Promise(async (resolve, reject) => {
      try {
        const sql = `UPDATE ${table_name} SET  
        member_role = ?,
        first_name=?,
        last_name=?,
        system_updated = now() 
        WHERE uuid_index=?;`;
        logger.debug(sql);
        const result = await pool.query(sql, [
          data.member_role,
          data.first_name,
          data.last_name,
          data.uuid_index
        ])
        resolve({ status: "Success", data: JSON.stringify(result) })
      } catch (err) {
        logger.error(err);
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
        const sql = `UPDATE ${tb_login} SET password = ? WHERE username=?;`;
        logger.debug(sql);
        const result = await pool.query(sql, [password, email])
        resolve({ status: "Success", data: JSON.stringify(result) })
      } catch (err) {
        logger.error(err);
        reject({ status: "Error", msg: err.message })
      }
    })
  }

  module.delete = (email) => {
    console.log("delete method start")
    return new Promise(async (resolve, reject) => {
      try {
        const sql = `DELETE FROM ${table_name} WHERE email = ?;`;
        logger.debug(sql);
        const result = await pool.query(sql, [email])
        sql = `DELETE FROM ${tb_login} WHERE username = ?;`;
        logger.debug(sql);
        const result2 = await pool.query(sql, [email])
        resolve({ status: "Success", data: JSON.stringify(result) })
      } catch (err) {
        logger.error(err);
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
          const sql = `select * from ${table_name} where line_id=?;`;
          logger.debug(sql);
          const member = await pool.query(sql, [lineId])
          resolve({ status: "Success", data: JSON.stringify(member) })
        } else {
          reject("Verify Token Error")
        }
      } catch (err) {
        logger.error(err);
        reject({ status: "Error", msg: err.message })
      }
    })
  }

  return module
}
