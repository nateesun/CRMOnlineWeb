const express = require("express")
const router = express.Router()
const Task = require("../models/Member.model")
const TaskLogin = require("../models/Login.model")
const TaskCompany = require("../models/Company.model")
const moment = require("moment")

module.exports = io => {
  router.get("/", async (req, res, next) => {
    try {
      const response = await Task(req.headers.database).findAll()
      const data = JSON.parse(response.data)
      res.status(200).json({ status: response.status, msg: "Success", data })
    } catch (error) {
      return res
        .status(500)
        .json({ status: "Internal Server Error", msg: error.sqlMessage })
    }
  })
  
  router.get("/client", async (req, res, next) => {
    try {
      const response = await Task(req.headers.database).getDataForClient()
      const data = JSON.parse(response.data)
      res.status(200).json({ status: response.status, msg: "Success", data })
    } catch (error) {
      return res
        .status(500)
        .json({ status: "Internal Server Error", msg: error.sqlMessage })
    }
  })
  router.put("/client", async (req, res, next) => {
    try {
      const payload = req.body;
      const response = await Task(req.headers.database).updateMemberFromClient(payload)
      const data = JSON.parse(response.data)
      res.status(200).json({ status: response.status, msg: "Success", data })
    } catch (error) {
      return res
        .status(500)
        .json({ status: "Internal Server Error", msg: error.sqlMessage })
    }
  })
  
  router.post("/search", async (req, res, next) => {
    try {
      const { key, value } = req.body
      const response = await Task(req.headers.database).searchData(key, value)
      const data = JSON.parse(response.data)
      res.status(200).json({ status: response.status, msg: "Success", data })
    } catch (error) {
      return res
        .status(500)
        .json({ status: "Internal Server Error", msg: error.sqlMessage })
    }
  })
  
  router.get("/:email", async (req, res, next) => {
    try {
      const email = req.params.email
      const response = await Task(req.headers.database).findByEmail(email)
      const respData = JSON.parse(response.data)
      res.status(200).json({
        status: response.status,
        msg: "Success",
        data: {
          ...respData[0],
          birthday: moment(new Date(respData[0].birthday)).format("YYYY-MM-DD"),
        },
      })
    } catch (error) {
      return res
        .status(500)
        .json({ status: "Internal Server Error", msg: error.sqlMessage })
    }
  })
  
  router.post("/", async (req, res, next) => {
    try {
      const respComp = await TaskCompany(req.headers.database).findAll();
      const company = JSON.parse(respComp.data);
      const memberModel = {
        code: req.body.code,
        uuid_index: req.body.uuid_index,
        prefix: req.body.prefix,
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        mobile: req.body.mobile,
        email: req.body.email,
        system_created: req.body.system_created,
        system_updated: req.body.system_updated,
        total_score: company.member_register_point || 0,
        total_purchase: req.body.total_purchase,
        point_expired_date: req.body.point_expired_date,
        expired_date: req.body.expired_date,
        birthday: req.body.birthday,
        line_id: req.body.line_id,
        member_role: req.body.member_role,
      }
      const loginModel = {
        username: req.body.username,
        password: Buffer.from(req.body.password).toString("base64"),
        member_active: "Y",
      }
      const response = await Task(req.headers.database).create(memberModel)
      const response1 = await TaskLogin(req.headers.database).create(loginModel)
      const data = JSON.parse(response.data)
      res.status(200).json({ status: response1.status, msg: "Success", data })

      // emit socket io
      const sendPayload = {
        ...memberModel,
        database: req.headers.database
      }
      io.emit('create_member', JSON.stringify(sendPayload));
    } catch (error) {
      return res
        .status(500)
        .json({ status: "Internal Server Error", msg: error.sqlMessage })
    }
  })
  
  router.put("/:id", async (req, res, next) => {
    try {
      const payload = {...req.body, uuid_index: req.params.id }
      const response = await Task(req.headers.database).update(payload)
      const data = JSON.parse(response.data)
      res.status(200).json({ status: response.status, msg: "Success", data })
    } catch (error) {
      return res
        .status(500)
        .json({ status: "Internal Server Error", msg: error.sqlMessage })
    }
  })
  
  router.patch("/:id", async (req, res, next) => {
    try {
      const payload = {...req.body, uuid_index: req.params.id }
      let response
      if (req.params.id === 'change_password') {
        const { email, mobile } = req.body;
        const memberResult = await Task(req.headers.database).findByMobileAndEmail(email, mobile);
        const memberData = JSON.parse(memberResult.data);
        if (memberData.length === 0) {
          return res.status(500).json({ status: "Error", msg: "Email or Mobile mismatch in system!" })
        }
        response = await Task(req.headers.database).changePassword(req.body)
      } else {
        response = await Task(req.headers.database).updateRole(payload)
      }
      const data = JSON.parse(response.data)
      res.status(200).json({ status: response.status, msg: "Success", data })
    } catch (error) {
      return res
        .status(500)
        .json({ status: "Internal Server Error", msg: error.sqlMessage })
    }
  })
  
  router.delete("/:id", async (req, res, next) => {
    try {
      const response = await Task(req.headers.database).delete(req.params.id)
      const data = JSON.parse(response.data)
      res.status(200).json({ status: response.status, msg: "Success", data })
    } catch (error) {
      return res
        .status(500)
        .json({ status: "Internal Server Error", msg: error.sqlMessage })
    }
  })
  
  router.post("/login", async (req, res, next) => {
    try {
      const { token } = req.body
      const response = await Task(req.headers.database).verifyTokenLine(token)
      const { Username, Password } = JSON.parse(response.data)[0]
      res.status(200).json({
        status: "Success",
        data: {
          Username,
          Password,
        },
      })
    } catch (error) {
      return res
        .status(500)
        .json({ status: "Internal Server Error", msg: error.sqlMessage })
    }
  })
  
  return router  
}
