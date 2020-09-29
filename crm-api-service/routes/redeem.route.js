const express = require("express")
const moment = require("moment")
const router = express.Router()
const cc = require("coupon-code")
const Task = require("../models/Promotion.model")
const TaskRedeem = require("../models/Redeem.model")

const generateRedeemCode = () => {
  return cc.generate()
}

router.get("/", (req, res, next) => {
  Task.findShowUser((err, response) => {
    if (err) {
      res
        .status(500)
        .json({ status: "Error", msg: err.sqlMessage || err.errno })
    } else {
      const data = JSON.parse(response.data)
      res.status(200).json({
        status: response.status,
        msg: "Success",
        data,
      })
    }
  })
})

router.post("/", (req, res, next) => {
  const { uuid_index, product_code, member_code_use } = req.body;
  Task.findByCode(product_code, (err1, response) => {
    if(err1) {
      res.status(500).json({ status: "Error", msg: err1.sqlMessage || err1.errno })
    }
    const promotion = JSON.parse(response.data)[0];
    const redeemCodeGen = generateRedeemCode();
    const payload = {
      uuid_index,
      redeem_code: redeemCodeGen,
      product_code,
      point_to_redeem: promotion.point_to_redeem,
      use_in_branch: '',
      emp_code_redeem: '',
      member_code_use,
      qty_in_use: 1,
      stystem_create: moment().format('YYYY-MM-DD HH:mm:ss'),
      redeem_date: null,// update agian from active status
      in_time: moment().add(5, 'minutes').format('YYYY-MM-DD HH:mm:ss'),
      status_use: 'in_progress',// in_progress|success|expired
      active: 'Y',// Y|N
    }
    TaskRedeem.create(payload, (err, response) => {
      if (err) {
        res.status(500).json({ status: "Error", msg: err.sqlMessage || err.errno })
      } else {
        res.status(200).json({
          status: response.status,
          msg: "Success",
          data: ""+redeemCodeGen,
        })
      }
    })
  })
})

module.exports = router
