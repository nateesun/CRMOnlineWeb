/* Carts.route code generator by automatic script */

const express = require("express")
const router = express.Router()
const Task = require("../models/Carts.model")
const TaskDetail = require("../models/CartsDetail.model")

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

router.post("/", (req, res, next) => {
  const { carts, carts_detail } = req.body;
  Task(req.headers.database).create(carts, (err, response)=>{
    if (err) {
      res.status(500).json({ status: "Error", msg: err.sqlMessage || err.errno })
    } else {
      // create cart_detail
      TaskDetail(req.headers.database).create({...carts_detail, cart_no: JSON.parse(response.data)}, (err1, response1)=>{
        if (err1) {
          res.status(500).json({ status: "Error", msg: err1.sqlMessage || err1.errno })
        }

        // update summary carts
        Task(req.headers.database).updateSummary({cart_no: JSON.parse(response.data)}, (err2, response2)=>{
          if (err2) {
            res.status(500).json({ status: "Error", msg: err2.sqlMessage || err2.errno })
          }

          Task(req.headers.database).findByCartNo(JSON.parse(response.data), (err3, response3)=>{
            if (err3) {
              res.status(500).json({ status: "Error", msg: err3.sqlMessage || err3.errno })
            } else {
              // return success create cart order
              const data = JSON.parse(response3.data)[0]
              res.status(200).json({ status: response3.status, msg: "Success", data })
            }
          })
        })
      })
    }
  })
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
