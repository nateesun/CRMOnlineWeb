const express = require("express")
const router = express.Router()
const Task = require("../models/Login.model")
const TaskOrder = require('../models/Orders.model')
const TaskOrderDetail = require('../models/OrdersDetail.model')

router.post("/", async (req, res, next) => {
  try {
    const { email: username, password, type, cart_no } = req.body;
    const response = await Task(req.headers.database).validLogin(
      username,
      password
    )
    if (response.status === "Success") {
      if(type && type==='confirm_order'){
        const orders_response = await TaskOrder(req.headers.database).findByCartNo(cart_no);
        const orders = JSON.parse(orders_response.data);
        if(orders.length===0){
          return res.status(200).json({ status: response.status, msg: "Not found Order", data: [] })
        }
        const order_no = orders[0].order_no;
        const orders_detail_response = await TaskOrderDetail(req.headers.database).findByOrderNo(order_no);
        const orders_detail = JSON.parse(orders_detail_response.data);
        return res.status(200).json({ 
          status: response.status, 
          msg: "Success", 
          data: {
            orders: orders[0],
            orders_detail
          },
        })
      }else{
        return res.status(200).json({ status: response.status, msg: "Success" })
      }
    }
    if (response.status === "Missing Role") {
      return res.status(200).json({ status: response.status, msg: "Member not found role mapping" })
    }
    return res.status(200).json({ status: response.status, msg: "Username/Password invalid" })
  } catch (error) {
    return res
      .status(500)
      .json({ status: "Internal Server Error", msg: error.sqlMessage })
  }
})

router.put("/", async (req, res, next) => {
  try {
    const response = await Task(req.headers.database).update(req.body)
    const data = JSON.parse(response.data)
    res.status(200).json({ status: response.status, msg: "Success", data })
  } catch (error) {
    return res
      .status(500)
      .json({ status: "Internal Server Error", msg: error.sqlMessage })
  }
})

module.exports = router
