/* Redeem.model code generator by automatic script */

const pool = require("../mysql-connect")
const config = require('../config')
const moment = require('moment')
const util = require('../utils/TextUtil');

module.exports = () => {
  const module = {}
  const table_name = "redeem";

  module.findById = (id) => {
    console.log("findById method start:")
    return new Promise(async (resolve, reject) => {
      try {
        const sql = `select * from ${table_name} where uuid_index=?;`
        const result = await pool.query(sql, [id])
        resolve({ status: "Success", data: JSON.stringify(result) })
      } catch (err) {
        reject(err)
      }
    })
  }

  module.findByRedeemCode = (redeemCode) => {
    console.log("findById method start:")
    return new Promise(async (resolve, reject) => {
      try {
        const sql = `select * from ${table_name} where redeem_code=?;`
        const result = await pool.query(sql, [redeemCode])
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

  module.syncData = () => {
    return new Promise(async (resolve, reject) => {
      try {
        const fieldCheck = 'redeem_code, bill_no';
        const sql = `SELECT ${fieldCheck} FROM 
        (SELECT ${fieldCheck} FROM ${table_name} t1 
        UNION ALL SELECT ${fieldCheck} FROM ${table_name}_temp) tbl
        GROUP BY ${fieldCheck} HAVING count(*) = 1 
        ORDER BY bill_no;`
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

  module.bulkInsert = (objectArray) => {
    return new Promise(async (resolve, reject) => {
      let keys = Object.keys(objectArray[0]);
      let values = objectArray.map( obj => keys.map( key => obj[key]));
      let sql = `INSERT INTO ${table_name} (${keys.join(',')}) VALUES ? 
      ON DUPLICATE KEY UPDATE uuid_index=uuid_index`;
      const response = await pool.query(sql, [values]);
      resolve(response);
    });
  }
  module.bulkInsertTemp = (objectArray) => {
    return new Promise(async (resolve, reject) => {
      let keys = Object.keys(objectArray[0]);
      let values = objectArray.map( obj => keys.map( key => obj[key]));
      let sql = `INSERT INTO ${table_name}_temp (${keys.join(',')}) VALUES ? 
      ON DUPLICATE KEY UPDATE uuid_index=uuid_index`;
      const response = await pool.query(sql, [values]);
      resolve(response);
    });
  }

  module.getQuery = (data) => {
    console.log("create method start:")
    return new Promise(async (resolve, reject) => {
      return resolve({
        uuid_index: data.uuid_index,
        redeem_code: data.redeem_code,
        product_code: data.product_code,
        redeem_name: util.convUnicode2Ascii(data.redeem_name),
        point_to_redeem: data.point_to_redeem,
        use_in_branch: data.use_in_branch,
        emp_code_redeem: data.emp_code_redeem,
        member_code_use: data.member_code_use,
        qty_in_use: data.qty_in_use,
        system_create: data.system_create ? moment(data.system_create).format('YYYY-MM-DD HH:mm:ss'): null,
        redeem_date: data.redeem_date ? moment(data.redeem_date).format('YYYY-MM-DD HH:mm:ss'): null,
        in_time: data.in_time ? moment(data.in_time).format('YYYY-MM-DD HH:mm:ss'): null,
        status_use: data.status_use,
        active: data.active,
        redeem_or_free: data.redeem_or_free,
        discount_amt: data.discount_amt,
        discount_percent: data.discount_percent
      });
    })
  }

  module.create = data => {
    console.log("create method start:")
    return new Promise(async (resolve, reject) => {
      const payload = await module.getQuery(data);
      try {
        if(config.database.databaseServer === data.database){
          const sql = `INSERT INTO ${table_name} SET ? `
          const result = await pool.query(sql, payload);
          resolve({ status: "Success", data: JSON.stringify(result) })
        }else{
          resolve({ status: "Success", data: JSON.stringify([])})
        }
      } catch (err) {
        console.log(err);
        reject(err)
      }
    })
  }
  module.createTemp = data => {
    console.log("create temp method start:")
    return new Promise(async (resolve, reject) => {
      const payload = await module.getQuery(data);
      try {
        if(config.database.databaseServer === data.database){
          const sql = `INSERT INTO ${table_name}_temp SET ? `
          const result = await pool.query(sql, payload);
          resolve({ status: "Success", data: JSON.stringify(result) })
        }else{
          resolve({ status: "Success", data: JSON.stringify([])})
        }
      } catch (err) {
        console.log(err);
        reject(err)
      }
    })
  }

  module.update = (data) => {
    console.log("update method start:")
    return new Promise(async (resolve, reject) => {
      const payload = await module.getQuery(data);
      try {
        const query = `UPDATE ${table_name} 
        SET product_code=?,
        redeem_name=?,
        point_to_redeem=?,
        use_in_branch=?,
        emp_code_redeem=?,
        member_code_use=?,
        qty_in_use=?,
        system_create=?,
        redeem_date=?,
        in_time=?,
        status_use=?,
        active=?,
        redeem_or_free=?,
        discount_amt=?,
        discount_percent=? 
        WHERE redeem_code=? `
        const result = await pool.query(query, [
          payload.product_code,
          payload.redeem_name,
          payload.point_to_redeem,
          payload.use_in_branch,
          payload.emp_code_redeem,
          payload.member_code_use,
          payload.qty_in_use,
          payload.system_create,
          payload.redeem_date,
          payload.in_time,
          payload.status_use,
          payload.active,
          payload.redeem_or_free,
          payload.discount_amt,
          payload.discount_percent,
          payload.redeem_code
        ])
        resolve({ status: "Success", data: JSON.stringify(result) })
      } catch (err) {
        console.log(err);
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

  return module
}
