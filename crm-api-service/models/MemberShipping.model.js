/* MemberShipping.model code generator by automatic script */
const logger = require('../logger');
const pool = require("../mysql-connect")
const { getDB } = require("./FuncUtil")()

module.exports = (db) => {
  const module = {}
  const table_name = getDB(db, "member_shipping")

  module.findByMemberCode = (member_code) => {
    console.log("findById method start:")
    return new Promise(async (resolve, reject) => {
      try {
        const sql = `select * from ${table_name} where member_code=?;`;
        logger.debug(sql);
        const result = await pool.query(sql, [member_code])
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
        const sql = `select * from ${table_name};`;
        logger.debug(sql);
        const result = await pool.query(sql)
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
        let sql = `select * from ${table_name}`
        if (key !== "") {
          sql = `${sql} where ${key} like '%${value}%'`;
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

  module.create = (params) => {
    console.log("create method start:")
    return new Promise(async (resolve, reject) => {
      try {
        const sql = `INSERT INTO ${table_name} SET ?;`;
        logger.debug(sql);
        const result = await pool.query(sql, params)
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
        map_latitude=?,
        map_longitude=?,
        address_type=?,
        member_name=?,
        address1=?,
        address2=?,
        sub_district=?,
        district=?,
        province=?,
        postcode=?,
        member_lastname=?,
        member_prefix =? 
        WHERE member_code=?;`;
        logger.debug(sql);
        const result = await pool.query(sql, [
          data.map_latitude,
          data.map_longitude,
          data.address_type,
          data.member_name,
          data.address1,
          data.address2,
          data.sub_district,
          data.district,
          data.province,
          data.postcode,
          data.member_lastname,
          data.member_prefix,
          data.member_code,
        ])
        resolve({ status: "Success", data: JSON.stringify(result) })
      } catch (err) {
        logger.error(err);
        reject({ status: "Error", msg: err.message })
      }
    })
  }

  module.delete = (id) => {
    console.log("delete method start:")
    return new Promise(async (resolve, reject) => {
      try {
        const sql = `DELETE FROM ${table_name} WHERE uuid_index = ?;`;
        logger.debug(sql);
        const result = await pool.query(sql, [id])
        resolve({ status: "Success", data: JSON.stringify(result) })
      } catch (err) {
        logger.error(err);
        reject({ status: "Error", msg: err.message })
      }
    })
  }

  module.deleteByMemberCode = (member_code) => {
    console.log("delete by member_code method start:")
    return new Promise(async (resolve, reject) => {
      try {
        const sql = `DELETE FROM ${table_name} WHERE member_code = ?;`;
        logger.debug(sql);
        await pool.query(sql, [member_code])
        resolve({ status: "Success", data: JSON.stringify(member_code) })
      } catch (err) {
        logger.error(err);
        reject({ status: "Error", msg: err.message })
      }
    })
  }

  return module
}
