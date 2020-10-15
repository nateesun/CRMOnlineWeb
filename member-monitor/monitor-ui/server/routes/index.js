const { Router } = require("express")
const { json, urlencoded } = require("body-parser")
const fetch = require('node-fetch');
const Task = require('../model/Member.model')

module.exports = args => {
  const { cloud_host_api } = args;
  const router = Router()

  router.use(json())
  router.use(urlencoded({ extended: false }))

  const module = {}
  module.GET_VERSION = (req, res) => {
    res.json('MONITOR VERSION 1.0');
  }

  module.LOCAL_MEMBERS = async (req, res) => {
    try {
      const response = await Task().getAllMember();
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

  module.LOCAL_GET_MEMBERS = async (req, res) => {
    try {
      const member_code = req.params.meber_code;
      const response = await Task().getMemberById(member_code);
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

  module.LOCAL_SAVE_MEMBER = async (req, res) => {
    try {
      const response = await Task().saveMember(req.body);
      const data = JSON.parse(response.data);
      res.status(200).json({ status: response1.status, msg: "Success", data })
    } catch (error) {
      return res
      .status(500)
      .json({ status: "Internal Server Error", msg: error.sqlMessage })
    }
  }

  module.LOCAL_UPDATE_MEMBER_POINT = async (req, res) => {
    try {
      const response = await Task().updateMemberPoint(req.body);
      const data = JSON.parse(response.data);
      res.status(200).json({ status: response1.status, msg: "Success", data })
    } catch (error) {
      return res
      .status(500)
      .json({ status: "Internal Server Error", msg: error.sqlMessage })
    }
  }

  // call from server hosting or cloud
  module.ALL_CLOUD_MEMBER = async (req, res) => {
    try {
      const response = await fetch(`${cloud_host_api}/api/member/client`, {
        headers: {
          database: 'd2ViZGFpbHlfMDAx',
          'Content-Type': 'application/json',
          'Authorization': 'Basic YWRtaW46c29mdHBvczIwMTM='
        },
        method: 'GET',
      }).then(data => data.json());
      res.send(response);
    } catch (error) {
      return res
      .status(500)
      .json({ status: "Internal Server Error", msg: error.sqlMessage })
    }
  }

  module.CLOUD_UPDATE_MEMBER_POINT = async (req, res) => {
    try {
      const response = await fetch(`${cloud_host_api}/api/member/client`, {
        headers: {
          database: 'd2ViZGFpbHlfMDAx',
          'Content-Type': 'application/json',
          'Authorization': 'Basic YWRtaW46c29mdHBvczIwMTM='
        },
        method: 'PATCH',
      }).then(data => data.json());
      res.send(response);
    } catch (error) {
      return res
      .status(500)
      .json({ status: "Internal Server Error", msg: error.sqlMessage })
    }
  }

  module.SYNC_DATA = async (req, res) => {
    try {
      res.json('Success');
    } catch (error) {
      res.send('Error');
    }
  }

  router.get('/version', module.GET_VERSION);

  router.get('/local_member', module.LOCAL_MEMBERS);
  router.get('/local_member/:member_code', module.LOCAL_GET_MEMBERS);
  router.post('/local_member', module.LOCAL_SAVE_MEMBER);
  router.patch('/local_member', module.LOCAL_UPDATE_MEMBER_POINT);

  router.get('/members_service', module.ALL_CLOUD_MEMBER);
  router.patch('/members_service', module.CLOUD_UPDATE_MEMBER_POINT);

  router.get('/sync_data', module.SYNC_DATA);

  return router;
}
