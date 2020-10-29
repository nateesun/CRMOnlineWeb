const { Router } = require("express")
const { json, urlencoded } = require("body-parser")
const request = require('request');
const fs = require('fs');
const Task = require('../model/Member.model')

module.exports = args => {
  const { apiServiceMember, apiServiceDB, apiServiceAuth } = args;
  const router = Router()

  router.use(json())
  router.use(urlencoded({ extended: false }))

  const module = {}

  module.GET_SERVER = (req, res) => {
    console.log('GET_SERVER');
    const file_path = __dirname + '/file_stores/member.json';
    const options = {
      'method': 'GET',
      'url': apiServiceMember,
      'headers': {
        'database': apiServiceDB,
        'Authorization': apiServiceAuth
      }
    };
    request(options, function (error, response) {
      if (error) throw new Error(error);
      const payload = JSON.parse(response.body);
      fs.writeFileSync(file_path, JSON.stringify(payload.data));
      res.json(JSON.parse(response.body));
    });
  }

  module.GET_ALL = async (req, res) => {
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

  module.POST = async (req, res) => {
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
  router.get('/server', module.GET_SERVER); // all member from server
  router.get('/', module.GET_ALL); // get old member
  router.post('/', module.POST); // create new member

  return router;
}
