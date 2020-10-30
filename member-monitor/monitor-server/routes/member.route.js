const { Router } = require("express")
const { json, urlencoded } = require("body-parser")
const request = require('request');
const Task = require('../model/Member.model')
const Controller = require('../controller/Member.controller')

module.exports = args => {
  const { apiServiceMember, apiServiceDB, apiServiceAuth } = args;
  const router = Router()

  router.use(json())
  router.use(urlencoded({ extended: false }))

  const module = {}

  module.GET_SERVER = (req, res) => {
    console.log('GET_SERVER');
    const options = {
      'method': 'GET',
      'url': apiServiceMember,
      'headers': {
        'database': apiServiceDB,
        'Authorization': apiServiceAuth
      }
    };
    request(options, async (error, response) => {
      if (error) {
        console.log(error);
      } else {
        const result = await Controller().createOrUpdate(response.body);
        res.json(result);
      }
    });
  }

  module.SYNC_UPLOAD = async (req, res) => {
    try {
      const response = await Task().syncData();
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

  module.POST = async (req, res) => {
    try {
      const response = await Task().create(req.body);
      if (response) {
        await Task().createTemp(req.body);
      }
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
  router.get('/server', module.GET_SERVER); // get member from server
  router.get('/', module.SYNC_UPLOAD); // sync member to server
  router.post('/', module.POST); // create new member

  return router;
}
