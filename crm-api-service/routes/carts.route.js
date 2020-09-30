/* Carts.route code generator by automatic script */

const express = require("express")
const router = express.Router()
const Task = require("../models/Carts.model")
const TaskDetail = require("../models/CartsDetail.model")

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
  const { carts, carts_detail } = req.body;
  Task.create(carts, (err, response)=>{
    if (err) {
      res.status(500).json({ status: "Error", msg: err.sqlMessage || err.errno })
    } else {
      // create cart_detail
      TaskDetail.create({...carts_detail, cart_no: JSON.parse(response.data)}, (err1, response1)=>{
        if (err1) {
          res.status(500).json({ status: "Error", msg: err1.sqlMessage || err1.errno })
        }

        // update summary carts
        Task.updateSummary({cart_no: JSON.parse(response.data)}, (err2, response2)=>{
          if (err2) {
            res.status(500).json({ status: "Error", msg: err2.sqlMessage || err2.errno })
          }

          Task.findByCartNo(JSON.parse(response.data), (err3, response3)=>{
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

router.delete("/:id", (req, res, next) => {
  Task.delete(req.params.id, (err, response) => {
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
