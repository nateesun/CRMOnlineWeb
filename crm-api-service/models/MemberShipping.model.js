/* MemberShipping.model code generator by automatic script */

const pool = require("../mysql-connect")
const table_name = "member_shipping"

module.exports = {
  findByMemberCode: async (member_code, callback) => {
    console.log("findById method start:")
    try {
      const sql = `select * from ${table_name} where member_code=?;`
      const result = await pool.query(sql, [member_code])
      callback(null, { status: "Success", data: JSON.stringify(result) })
    } catch (err) {
      callback(err, { status: "Error", msg: err.message })
    }
  },
  findAll: async (callback) => {
    console.log("findAll method start:")
    try {
      const sql = `select * from ${table_name}`
      const result = await pool.query(sql)
      callback(null, { status: "Success", data: JSON.stringify(result) })
    } catch (err) {
      callback(err, { status: "Error", msg: err.message })
    }
  },
  searchData: async (key, value, callback) => {
    console.log("searchData method start:")
    try {
      let sql = `select * from ${table_name}`;
      if(key!==''){
        sql = `${sql} where ${key} like '%${value}%'`;
      }
      const result = await pool.query(sql)
      callback(null, { status: "Success", data: JSON.stringify(result) })
    } catch (err) {
      callback(err, { status: "Error", msg: err.message })
    }
  },
  create: async (params, callback) => {
    console.log("create method start:")
    return new Promise(async (resolve, reject) => {
      try {
        const query = `INSERT INTO ${table_name} SET ? `
        const result = await pool.query(query, params)
        callback(null, { status: "Success", data: JSON.stringify(result) })
      } catch (err) {
        callback(err, { status: "Error", msg: err.message })
      }
    })
  },
  update: (data, callback) => {
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
          data.member_code
        ])
        callback(null, { status: "Success", data: JSON.stringify(result) })
      } catch (err) {
        callback(err, { status: "Error", msg: err.message })
      }
    })
  },
  delete: (id, callback) => {
    console.log("delete method start:")
    return new Promise(async (resolve, reject) => {
      try {
        const query = `DELETE FROM ${table_name} WHERE uuid_index = ? `
        const result = await pool.query(query, [id])
        callback(null, { status: "Success", data: JSON.stringify(result) })
      } catch (err) {
        callback(err, { status: "Error", msg: err.message })
      }
    })
  },
}
