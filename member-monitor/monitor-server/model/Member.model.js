const pool = require("../mysql-connect")
const config = require('../mysql-connect/config')
const moment = require('moment')
const util = require('../utils/TextUtil');

module.exports = () => {
  const module = {}
  const table_name = "memmaster"

  module.findAll = () => {
    return new Promise(async (resolve, reject) => {
      try {
        const sql = `select * from ${table_name} 
        where Member_Active='Y' 
        order by Member_Code;`
        const result = await pool.query(sql)
        resolve({ status: "Success", data: JSON.stringify(result) })
      } catch (err) {
        reject(err)
      }
    })
  }

  module.create = data => {
    return new Promise(async (resolve, reject) => {
      const payload = {
        Member_Code: data.code,
        Member_NameThai: util.convUnicode2Ascii(data.first_name),
        Member_HomeTel: data.mobile,
        Member_Email: data.email,
        Member_Brithday: moment(data.birthday).format('YYYY-MM-DD'),
        Member_ExpiredDate: moment(data.expired_date).format('YYYY-MM-DD'),
        Member_AppliedDate: moment().format('YYYY-MM-DD'),
        Member_LastDateService: moment().format('YYYY-MM-DD'),
        Employee_CreateDate: moment().format('YYYY-MM-DD'),
        Employee_ModifyDate: moment().format('YYYY-MM-DD'),
        Member_TotalPurchase: data.total_purchase,
        Member_Mobile: data.mobile,
        Member_PointExpiredDate: moment(data.point_expired_date).format('YYYY-MM-DD'),
        Member_TotalScore: data.total_score,
        Member_TitleNameThai: util.convUnicode2Ascii(data.prefix),
        Member_SurnameThai: util.convUnicode2Ascii(data.last_name),
        Member_Active: 'Y',
        System_Created: moment(data.system_created).format('YYYY-MM-DD HH:mm:ss'),
        System_Updated: moment(data.system_updated).format('YYYY-MM-DD HH:mm:ss')
      }
      try {
        if(config.databaseServer === data.database){
          const sql = `INSERT INTO ${table_name} SET ? `;
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
