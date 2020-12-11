const jwt = require("jsonwebtoken")

const logger = require("../logger")
const pool = require("../mysql-connect")
const { zeroPad, getDB } = require("./FuncUtil")()

module.exports = (db) => {
  const module = {}
  const table_name = getDB(db, "member")
  const tb_company = getDB(db, "company")
  const tb_login = getDB(db, "login")

  module.findById = (id) => {
    logger.info(`findById: ${id}`)
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
    logger.info(`findByEmail: ${email}`)
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
    logger.info(`findByMobileAndEmail: ${email} ${mobile}`)
    return new Promise(async (resolve, reject) => {
      try {
        const sql = `select * from ${table_name} where email=? and mobile=?;`;
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
    logger.info("findAll")
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
    logger.info("getDataForClient")
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
    logger.info(`updateMemberFromClient: ${member}`)
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
    logger.info(`searchData: ${key} ${value}`)
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
    logger.info(`create: ${data}`)
    return new Promise(async (resolve, reject) => {
      try {
        let sql = `select member_running, prefix_running, size_running, member_register_point 
        from ${tb_company} c limit 0,1;`;
        const config = await pool.query(sql)
        const { prefix_running, member_running, size_running, member_register_point } = config[0]
        data.code = prefix_running + zeroPad(member_running, size_running) // generate prefix running
        data.total_score = member_register_point;

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
    logger.info(`update: ${data}`)
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
        WHERE code=?;`;
        logger.debug(sql);
        const result = await pool.query(sql, [
          data.prefix,
          data.first_name,
          data.last_name,
          data.birthday,
          data.mobile,
          data.line_id,
          data.code,
        ])
        resolve({ status: "Success", data: JSON.stringify(result) })
      } catch (err) {
        logger.error(err);
        reject({ status: "Error", msg: err.message })
      }
    })
  }

  module.updateRole = (data) => {
    logger.info(`updateRole: ${data}`)
    return new Promise(async (resolve, reject) => {
      try {
        const sql = `UPDATE ${table_name} SET  
        member_role = ?,
        first_name=?,
        last_name=?,
        system_updated = now(),
        total_score=?,
        total_purchase=? 
        WHERE uuid_index=?;`;
        logger.debug(sql);
        const result = await pool.query(sql, [
          data.member_role,
          data.first_name,
          data.last_name,
          data.total_score,
          data.total_purchase,
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
    logger.info(`changePassword: ${data}`)
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
    logger.info(`delete: ${email}`)
    return new Promise(async (resolve, reject) => {
      try {
        let sql = `DELETE FROM ${table_name} WHERE email = ?;`;
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

  module.verifyTokenLine = (lineId) => {
    logger.info(`verifyTokenLine: ${lineId}`)
    return new Promise(async (resolve, reject) => {
      try {
        const sql = `select l.* from ${table_name} m 
          inner join ${tb_login} l on m.email = l.username 
          where line_id ='nathee' and member_active ='Y';`;
          logger.debug(sql);
          const member = await pool.query(sql, [lineId])
          resolve({ status: "Success", data: JSON.stringify(member[0]) })
      } catch (err) {
        logger.error(err);
        reject({ status: "Error", msg: err.message })
      }
    })
  }

  module.getLineId = (lineId) => {
    logger.info(`getLineId: ${lineId}`)
    return new Promise(async (resolve, reject) => {
      try {
        const sql = `select * from ${table_name} where Line_Id=?;`;
        logger.debug(sql);
        const member = await pool.query(sql, [lineId])
        if (member.length == 0) {
          reject({ status: 'Warning', msg: "Not Found" })
        } else {
          resolve({ status: "Success", data: JSON.stringify(member) })
        }
      } catch (err) {
        logger.error(err);
        reject({ status: "Error", msg: err.message })
      }
    })
  }

  return module
}
