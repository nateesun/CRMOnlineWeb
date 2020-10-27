const { Router } = require("express")
const { json, urlencoded } = require("body-parser")
const Task = require('../model/Member.model')

module.exports = args => {
  const router = Router()

  router.use(json())
  router.use(urlencoded({ extended: false }))

  const module = {}

  module.GET_ALL_MEMBER = async (req, res) => {
    try {
      const response = await Task().findAll();
      const data = JSON.parse(response.data);
      res.status(200).json({
        status: response.status,
        msg: 'Success',
        data
      })
    } catch (error) {
      return res
      .status(500)
      .json({ status: "Internal Server Error", msg: error.sqlMessage })
    }
  }

  module.POST_MEMBER = async (req, res) => {
    try {
      const response = await Task().create(req.body);
      const data = JSON.parse(response.data);
      res.status(200).json({ status: response.status, msg: "Success", data })
    } catch (error) {
      return res
      .status(500)
      .json({ status: "Internal Server Error", msg: error.sqlMessage })
    }
  }

  // local database
  // member
  router.get('/', module.GET_ALL_MEMBER); // get old member
  router.post('/', module.POST_MEMBER); // create new member

  return router;
}
