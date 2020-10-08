const express = require("express")
const router = express.Router()
const Task = require("../models/Company.model")

router.get("/", (req, res, next) => {
  Task(req.headers.database).findAll((err, response) => {
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
  Task(req.headers.database).findById(req.params.id, (err, response) => {
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
  Task(req.headers.database)(req.headers.database).create(req.body, (err, response)=>{
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
  Task(req.headers.database).update(req.body, (err, response)=>{
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
