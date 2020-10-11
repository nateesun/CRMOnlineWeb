/* MemberShipping.model code generator by automatic script */

const pool = require("../mysql-connect")
const { getDB } = require("./FuncUtil")()

module.exports = (db) => {
  const module = {}
  const table_name = getDB(db, "member_shipping")

  module.findByMemberCode = (member_code) => {
    console.log("findById method start:")
    return new Promise(async (resolve, reject) => {
      try {
        const sql = `select * from ${table_name} where member_code=?;`
        const result = await pool.query(sql, [member_code])
        resolve({ status: "Success", data: JSON.stringify(result) })
      } catch (err) {
        reject(err)
      }
    })
  }

  module.findAll = () => {
    console.log("findAll method start:")
    return new Promise(async (resolve, reject) => {
      try {
        const sql = `select * from ${table_name}`
        const result = await pool.query(sql)
        resolve({ status: "Success", data: JSON.stringify(result) })
      } catch (err) {
        reject(err)
      }
    })
  }

  module.searchData = (key, value) => {
    console.log("searchData method start:")
    return new Promise(async (resolve, reject) => {
      try {
        let sql = `select * from ${table_name}`
        if (key !== "") {
          sql = `${sql} where ${key} like '%${value}%'`
        }
        const result = await pool.query(sql)
        resolve({ status: "Success", data: JSON.stringify(result) })
      } catch (err) {
        reject(err)
      }
    })
  }

  module.create = (params) => {
    console.log("create method start:")
    return new Promise(async (resolve, reject) => {
      try {
        const query = `INSERT INTO ${table_name} SET ? `
        const result = await pool.query(query, params)
        resolve({ status: "Success", data: JSON.stringify(result) })
      } catch (err) {
        reject(err)
      }
    })
  }

  module.update = (data) => {
    console.log("update method start:")
    return new Promise(async (resolve, reject) => {
      try {
        const query = `UPDATE ${table_name} SET 
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
        WHERE member_code=? `
        const result = await pool.query(query, [
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
        resolve(null, { status: "Success", data: JSON.stringify(result) })
      } catch (err) {
        reject(err)
      }
    })
  }

  module.delete = (id) => {
    console.log("delete method start:")
    return new Promise(async (resolve, reject) => {
      try {
        const query = `DELETE FROM ${table_name} WHERE uuid_index = ? `
        const result = await pool.query(query, [id])
        resolve({ status: "Success", data: JSON.stringify(result) })
      } catch (err) {
        reject(err)
      }
    })
  }

  module.deleteByMemberCode = (member_code) => {
    console.log("delete by member_code method start:")
    return new Promise(async (resolve, reject) => {
      try {
        const query = `DELETE FROM ${table_name} WHERE member_code = ? `
        await pool.query(query, [member_code])
        resolve({ status: "Success", data: JSON.stringify(member_code) })
      } catch (err) {
        reject(err)
      }
    })
  }

  return module
}
