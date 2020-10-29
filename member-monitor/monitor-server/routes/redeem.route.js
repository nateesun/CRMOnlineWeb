const { Router } = require("express")
const { json, urlencoded } = require("body-parser")
const request = require('request');
const fs = require('fs');
const Task = require('../model/Redeem.model')
const Controller = require('../controller/Redeem.controller')

module.exports = args => {
  const { apiServiceRedeem, apiServiceDB, apiServiceAuth } = args;
  const router = Router()

  router.use(json())
  router.use(urlencoded({ extended: false }))

  const module = {}

  module.GET_SERVER = (req, res) => {
    console.log('GET_SERVER');
    const file_path = __dirname + '/file_stores/redeem.json';
    const options = {
      'method': 'GET',
      'url': apiServiceRedeem,
      'headers': {
        'database': apiServiceDB,
        'Authorization': apiServiceAuth
      }
    };
    request(options, function (error, response) {
      if (error) throw new Error(error);
      (async ()=>{
        const payload = JSON.parse(response.body);
        fs.writeFile(file_path, JSON.stringify(payload.data), async ()=>{
          const data = fs.readFileSync(file_path)
          const result = await Controller().createOrUpdateFromFile(data);
          res.json(result);
        });
      })()
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
  // redeem
  router.get('/server', module.GET_SERVER); // all redeem from server
  router.get('/', module.GET_ALL); // get old redeem
  router.post('/', module.POST); // create new redeem

  return router;
}
