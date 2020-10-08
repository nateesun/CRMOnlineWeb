const express = require("express")
const router = express.Router()
const Task = require("../models/Login.model");

router.post("/", (req, res, next) => {
  const username = req.body.email
  const password = req.body.password
  Task(req.headers.database).validLogin(username, password, (err, response) => {
    if (err) {
      res.status(500).json({ 
        status: "Error", msg: err.sqlMessage || err.errno 
      })
    } else {
      if (response.status === "Invalid") {
        res.status(200).json({
          status: response.status,
          msg: "Username/Password invalid",
        })
      } else {
        res.status(200).json({
          status: response.status,
          msg: "Success"
        })
      }
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

module.exports = router
