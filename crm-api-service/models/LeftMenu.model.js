const logger = require("../logger")
const pool = require("../mysql-connect")
const { getDB } = require("./FuncUtil")()

module.exports = (db) => {
  const module = {}
  const table_name = getDB(db, "ui_menu")
  const ui_menu_list = getDB(db, "ui_menu_list")
  const member = getDB(db, "member")

  module.findRole = (email) => {
    logger.info(`findRole: ${email}`)
    return new Promise(async (resolve, reject) => {
      try {
        const sql = `
          select ml.*,m.role 
          from ${table_name} m 
          inner join ${ui_menu_list} ml on m.id=ml.menu_id 
          where m.role like concat('%', (select member_role from ${member} m1 where m1.email = ?),'%') 
          order by m.priority, ml.id;`;
          logger.debug(sql);
        const result = await pool.query(sql, [email])
        resolve({ status: "Success", data: JSON.stringify(result) })
      } catch (err) {
        logger.error(err);
        reject({ status: "Error", msg: err.message })
      }
    })
  }

  return module
}
