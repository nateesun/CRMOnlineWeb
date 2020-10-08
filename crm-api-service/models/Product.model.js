const pool = require("../mysql-connect")
const { getDB } = require('./FuncUtil')();

module.exports = db => {
  const module = {}
  const table_name = getDB(db, 'product');
  const tb_stock_product = getDB(db, 'stock_product');

  module.findById = async (id, callback) => {
    console.log("findById method start:")
    try {
      const sql = `select * from ${table_name} where uuid_index=?;`
      const result = await pool.query(sql, [id])
      callback(null, { status: "Success", data: JSON.stringify(result) })
    } catch (err) {
      callback(err, { status: "Error", msg: err.message })
    }
  }

  module.findAll = async (callback) => {
    console.log("findAll method start:")
    try {
      const sql = `select *,
      (select in_stock from ${tb_stock_product} sp where sp.product_code=p.code) in_stock 
      from ${table_name} p;`
      const result = await pool.query(sql)
      callback(null, { status: "Success", data: JSON.stringify(result) })
    } catch (err) {
      callback(err, { status: "Error", msg: err.message })
    }
  }

  module.create = async (params, callback) => {
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
  }

  module.update = (data, callback) => {
    console.log("update method start:")
    return new Promise(async (resolve, reject) => {
      try {
        const query = `UPDATE ${table_name} SET 
        code=?,
        name=?,
        unit_code_sale=?,
        product_group_code=?,
        img_path=?,
        point=?,
        stock_code=?,
        price_e=?,
        price_t=?,
        price_d=?,
        max_stock=?,
        min_stock=?,
        unit_code_stock=? 
        WHERE uuid_index=? `
        const result = await pool.query(query, [
          data.code,
          data.name,
          data.unit_code_sale,
          data.product_group_code,
          data.img_path,
          data.point,
          data.stock_code,
          data.price_e,
          data.price_t,
          data.price_d,
          data.max_stock,
          data.min_stock,
          data.unit_code_stock,
          data.uuid_index
        ])
        callback(null, { status: "Success", data: JSON.stringify(result) })
      } catch (err) {
        callback(err, { status: "Error", msg: err.message })
      }
    })
  }

  module.delete = (id, callback) => {
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
  }

  return module
}
