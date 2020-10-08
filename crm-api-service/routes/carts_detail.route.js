/* CartsDetail.route code generator by automatic script */

const express = require("express")
const router = express.Router()
const Task = require("../models/CartsDetail.model")
const CartsTask = require('../models/Carts.model');

router.get("/", (req, res, next) => {
  Task.findAll((err, response) => {
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

router.post("/search", (req, res, next) => {
  const { key, value } = req.body;
  Task.searchData(key, value, (err, response) => {
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

router.get("/:id", (req, res, next) => {
  Task.findById(req.params.id, (err, response) => {
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
  Task.create(req.body, (err, response)=>{
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

router.put("/", (req, res, next) => {
  Task.update(req.body, (err, response)=>{
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

router.patch("/", (req, res, next) => {
  Task.updateQty(req.body, (err, response)=>{
    if (err) {
      res
        .status(500)
        .json({ status: "Error", msg: err.sqlMessage || err.errno })
    } else {
      CartsTask.updateSummary({cart_no: req.body.cart_no}, (err1, response1) => {
        if (err1) {
          res.status(500).json({ status: "Error", msg: err1.sqlMessage || err1.errno })
        }else{
          const data = JSON.parse(response.data)
          res.status(200).json({
            status: response.status,
            msg: "Success",
            data,
          })
        }
      });
    }
  })
})

router.delete("/", (req, res, next) => {
  Task.delete(req.body, (err, response) => {
    if (err) {
      res.status(500).json({ status: "Error", msg: err.sqlMessage || err.errno })
    } else {
      CartsTask.updateSummary({cart_no: req.body.cart_no}, (err1, response1) => {
        if (err1) {
          res.status(500).json({ status: "Error", msg: err1.sqlMessage || err1.errno })
        }else{
          const data = JSON.parse(response.data)
          res.status(200).json({
            status: response.status,
            msg: "Success",
            data,
          })
        }
      });
      
    }
  })
})

module.exports = router
