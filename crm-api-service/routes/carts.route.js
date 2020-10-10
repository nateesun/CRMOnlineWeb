/* Carts.route code generator by automatic script */

const express = require("express")
const router = express.Router()
const { v4: uuidv4 } = require('uuid');
const moment = require('moment');
const Task = require("../models/Carts.model")
const TaskDetail = require("../models/CartsDetail.model")
const TaskOrders = require('../models/Orders.model');
const TaskOrdersDetail = require('../models/OrdersDetail.model');

router.use((req, res, next) => {
  console.log(req.method, req.originalUrl);
  next();
})

router.get("/", (req, res, next) => {
  Task(req.headers.database).findAll((err, response) => {
    if (err) {
      res.status(500).json({ status: "Error", msg: err.sqlMessage || err.errno })
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

router.get("/findByMember/:member_code", (req, res, next) => {
  const member_code = req.params.member_code;
  Task(req.headers.database).findAllByMember(member_code, (err, response) => {
    if (err) {
      res.status(500).json({ status: "Error", msg: err.sqlMessage || err.errno })
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

router.post("/search", (req, res, next) => {
  const { key, value } = req.body;
  Task(req.headers.database).searchData(key, value, (err, response) => {
    if (err) {
      res.status(500).json({ status: "Error", msg: err.sqlMessage || err.errno })
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

router.post("/payment", (req, res, next) => {
  Task(req.headers.database).updatePayment(req.body, (err, response) => {
    if (err) {
      res.status(500).json({ status: "Error", msg: err.sqlMessage || err.errno })
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

router.patch("/shopping_step", (req, res, next) => {
  Task(req.headers.database).updateShoppingStep(req.body, (err, response) => {
    if (err) {
      res.status(500).json({ status: "Error", msg: err.sqlMessage || err.errno })
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

router.patch("/shopping_approve", async (req, res, next) => {
  try {
    await Task(req.headers.database).updateShoppingApprove(req.body);

    // copy to orders tables
    const Carts = await Task(req.headers.database).findByCartNo(req.body.cart_no);
    const CartsParse = JSON.parse(Carts.data)[0];
    const CartsData = {
      ...CartsParse,
      cart_create_date: moment(new Date(CartsParse.cart_create_date)).format('YYYY-MM-DD HH:mm:ss'),
      emp_update_date: moment().format('YYYY-MM-DD HH:mm:ss'),
      uuid_index: uuidv4(),
    };
    const order_no = await TaskOrders(req.headers.database).create(CartsData);

    // copy to orders_detail tables
    const CartsDetail = await TaskDetail(req.headers.database).findByCartNo(req.body.cart_no);
    const CartsDetailData = JSON.parse(CartsDetail.data);
    for(let i=0;i<CartsDetailData.length;i+=1){
      const dataIns = {
        ...CartsDetailData[i],
        order_no: order_no.data,
      };
      await TaskOrdersDetail(req.headers.database).create(dataIns);
    }
    res.status(200).json({
      status: 'Success',
      msg: "Create Order Success",
    })
  } catch (error) {
    res.status(500).json({ status: "Error", msg: error.message })
  }
  
})

router.get("/:cart_no", (req, res, next) => {
  Task(req.headers.database).findByCartNo(req.params.cart_no, (err, response) => {
    if (err) {
      res.status(500).json({ status: "Error", msg: err.sqlMessage || err.errno })
    } else {
      const carts = JSON.parse(response.data)
      TaskDetail(req.headers.database).findByCartNo(req.params.cart_no, (err2, response2)=>{
        if (err2) {
          res.status(500).json({ status: "Error", msg: err2.sqlMessage || err2.errno })
        }else{
          const carts_detail = JSON.parse(response2.data);
          res.status(200).json({
            status: response.status,
            msg: "Success",
            data: {
              carts,
              carts_detail,
            },
          })
        }
      })
    }
  })
})

router.post("/", async (req, res, next) => {
  const { carts, carts_detail } = req.body;
  await Task(req.headers.database).create(carts);

  // create cart_detail
  await TaskDetail(req.headers.database).create({...carts_detail, cart_no: carts.cart_no});

  // update summary carts
  await Task(req.headers.database).updateSummary({cart_no: carts.cart_no});
  let response = await Task(req.headers.database).findByCartNo(carts.cart_no);
  // return success create cart order
  res.status(200).json({ status: "Success", msg: "Success", data: JSON.parse(response.data) })
})

router.put("/", (req, res, next) => {
  const { carts, carts_detail } = req.body;
  TaskDetail(req.headers.database).findByProduct(carts_detail.product_code, carts.cart_no, (err, response)=>{
    if (err) {
      res.status(500).json({ status: "Error", msg: err.sqlMessage || err.errno })
    }else{
      const result = JSON.parse(response.data);
      if(result.length > 0) {
        const carts_upd = {
          uuid_index: result[0].uuid_index,
          qty: carts_detail.qty + result[0].qty,
          total_amount: carts_detail.total_amount + result[0].total_amount,
          options: carts_detail.options,
          special_text: carts_detail.special_text,
          point: carts_detail.point + result[0].point
        }
        TaskDetail(req.headers.database).update({...carts_detail, ...carts_upd}, (err1, response1) => {
          if (err1) {
            res.status(500).json({ status: "Error", msg: err1.sqlMessage || err1.errno })
          } else {
            // update summary
            Task(req.headers.database).updateSummary({cart_no: carts.cart_no}, (err2, response2)=>{
              if(err2){
                res.status(500).json({ status: "Error", msg: err2.sqlMessage || err2.errno })
              }else{
                // find by cart no again
                Task(req.headers.database).findByCartNo(carts.cart_no, (err3, response3)=>{
                  if (err3) {
                    res.status(500).json({ status: "Error", msg: err3.sqlMessage || err3.errno })
                  } else {

                    // return success create cart order
                    const data = JSON.parse(response3.data)[0]
                    res.status(200).json({ status: response3.status, msg: "Success", data })
                  }
                })
              }
            })
            
          }
        })
      }else{
        TaskDetail(req.headers.database).create({...carts_detail, cart_no: carts.cart_no}, (err, response)=>{
          if (err) {
            res.status(500).json({ status: "Error", msg: err.sqlMessage || err.errno })
          } else {
            // update summary
            Task(req.headers.database).updateSummary({ cart_no: carts.cart_no }, (err1, response1)=>{
              if(err1){
                res.status(500).json({ status: "Error", msg: err1.sqlMessage || err1.errno })
              }else{
                // find by cart no again
                Task(req.headers.database).findByCartNo(carts.cart_no, (err2, response2)=>{
                  if (err2) {
                    res.status(500).json({ status: "Error", msg: err2.sqlMessage || err2.errno })
                  } else {
                    
                    // return success create cart order
                    const data = JSON.parse(response2.data)[0]
                    res.status(200).json({ status: response2.status, msg: "Success", data })
                  }
                })
              }
            })

          }
        })
      }
    }
  })
  
})

router.delete("/:id", (req, res, next) => {
  Task(req.headers.database).delete(req.params.id, (err, response) => {
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

module.exports = router
