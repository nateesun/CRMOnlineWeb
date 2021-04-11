const express = require("express")
const router = express.Router()
const Task = require("../models/Login.model")
const TaskMember = require("../models/Member.model")

module.exports = (args) => {
  router.post("/", async (req, res, next) => {
    try {
      const { username, password } = req.body
      const response = await Task(req.headers.database).validLogin(
        username,
        password
      )

      const login = JSON.parse(response.data)
      if (login.length > 0) {
        const findMember = await TaskMember(
          req.headers.database
        ).findByMobileOrEmail(username)

        const member = JSON.parse(findMember.data)
        if (member.length > 0) {
          if (member[0].member_role !== "") {
            return res
              .status(200)
              .json({ status: response.status, msg: "Success" })
          }
          return res.status(200).json({
            status: response.status,
            msg: "Member not found role mapping",
          })
        }
      }
      return res
        .status(200)
        .json({ status: response.status, msg: "Username/Password invalid" })
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

  return router
}
