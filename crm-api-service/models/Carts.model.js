/* Carts.model code generator by automatic script */

const logger = require("../logger")
const pool = require("../mysql-connect")
const { getDB, zeroPad } = require("./FuncUtil")()

module.exports = (db) => {
  const module = {}
  const table_name = getDB(db, "carts")
  const tb_company = getDB(db, "company")
  const tb_carts_detail = getDB(db, "carts_detail")

  module.findByCartNo = (cart_no) => {
    console.log("findByCartNo method start:")
    return new Promise(async (resolve, reject) => {
      try {
        const sql = `select * from ${table_name} where cart_no=?;`;
        logger.debug(sql);
        const result = await pool.query(sql, [cart_no])
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
        const sql = `select * from ${table_name} order by cart_no;`;
        logger.debug(sql);
        const result = await pool.query(sql)
        resolve({ status: "Success", data: JSON.stringify(result) })
      } catch (err) {
        logger.error(err);
        reject({ status: "Error", msg: err.message })
      }
    })
  }

  module.findAllByMember = (member_code) => {
    console.log("findAll method start:")
    return new Promise(async (resolve, reject) => {
      try {
        const sql = `select * from ${table_name} where member_code = ? order by cart_no;`;
        logger.debug(sql);
        const result = await pool.query(sql, [member_code])
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
        let sql = `select * from ${table_name}`;
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
        let sql = `select cart_running, cart_prefix, cart_size_running from ${tb_company} c limit 0,1;`;
        logger.debug(sql);
        const config = await pool.query(sql)
        const { cart_prefix, cart_running, cart_size_running } = config[0]
        params.cart_no = cart_prefix + zeroPad(cart_running, cart_size_running) // generate prefix running

        sql = `INSERT INTO ${table_name} SET ? `
        logger.debug(sql);
        await pool.query(query, params)

        // update running +1
        sql = `update ${tb_company} set cart_running=cart_running+1;`;
        logger.debug(sql);
        await pool.query(sql)
        resolve({ status: "Success", data: JSON.stringify(params.cart_no) })
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
        const sql = `UPDATE ${table_name} SET cart_no=?, member_code=? WHERE uuid_index=?;`;
        logger.debug(sql);
        const result = await pool.query(sql, [
          data.cart_no,
          data.member_code,
          data.uuid_index,
        ])
        resolve({ status: "Success", data: JSON.stringify(result) })
      } catch (err) {
        logger.error(err);
        reject({ status: "Error", msg: err.message })
      }
    })
  }

  module.updatePayment = (data) => {
    console.log("updatePayment method start:")
    return new Promise(async (resolve, reject) => {
      try {
        const sql = `UPDATE ${table_name} SET 
        account_from_name=?,
        account_to_name=?,
        from_account_no=?,
        to_account_no=?,
        transfer_date=?,
        transfer_ref=?,
        transfer_amount=? 
        WHERE cart_no=? and member_code=?;`;
        logger.debug(sql);
        const result = await pool.query(sql, [
          data.account_from_name,
          data.account_to_name,
          data.from_account_no,
          data.to_account_no,
          data.transfer_date,
          data.transfer_ref,
          data.transfer_amount,
          data.cart_no,
          data.member_code,
        ])
        resolve({ status: "Success", data: JSON.stringify(result) })
      } catch (err) {
        logger.error(err);
        reject({ status: "Error", msg: err.message })
      }
    })
  }

  module.updateShoppingStep = (data) => {
    console.log("updateShoppingStep method start:")
    return new Promise(async (resolve, reject) => {
      try {
        let sql = `UPDATE ${table_name} SET shopping_step=? WHERE cart_no=?;`;
        logger.debug(sql);
        const result = await pool.query(sql, [
          data.shopping_step,
          data.cart_no,
        ])
        resolve({ status: "Success", data: JSON.stringify(result) })
      } catch (err) {
        logger.error(err);
        reject({ status: "Error", msg: err.message })
      }
    })
  }

  module.updateShoppingApprove = (data) => {
    console.log("updateShoppingApprove method start:")
    return new Promise(async (resolve, reject) => {
      try {
        let sql = `UPDATE ${table_name} 
        SET shopping_step=?,
        emp_code_update=?,
        emp_reason=?,
        emp_update_date=now() 
        WHERE cart_no=?;`;
        logger.debug(sql);
        const result = await pool.query(sql, [
          data.shopping_step,
          data.emp_code_update,
          data.emp_reason,
          data.cart_no,
        ])
        resolve({ status: "Success", data: JSON.stringify(result) })
      } catch (err) {
        logger.error(err);
        reject({ status: "Error", msg: err.message })
      }
    })
  }

  module.updateSummary = (data) => {
    console.log("updateSummary method start:")
    return new Promise(async (resolve, reject) => {
      // summary to carts
      try {
        const sql = `update ${table_name} c set 
        total_item=(select sum(qty) from ${tb_carts_detail} cd where cd.cart_no=c.cart_no),
        total_amount=(select sum(total_amount) from ${tb_carts_detail} cd where cd.cart_no=c.cart_no),
        total_point=(select sum(point) from ${tb_carts_detail} cd where cd.cart_no=c.cart_no) 
        where cart_no=?;`;
        logger.debug(sql);
        const result = await pool.query(sql, [data.cart_no])
        resolve({ status: "Success", data: JSON.stringify(result) })
      } catch (err) {
        logger.error(err);
        reject(err, { status: "Error", msg: err.message })
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

  return module
}
