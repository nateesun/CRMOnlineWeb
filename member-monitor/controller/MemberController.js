const MemberTask = require("../models/Member")

const MemberController = {
  findAll: (limit, callback) => {
    MemberTask.findAll(limit, callback)
  },
  find: (Member_Code, callback) => {
    MemberTask.findByCode(Member_Code, callback)
  },
  findPoint: (callback) => {
    MemberTask.findPointMoreThanZero(callback)
  },
  addMember: (MemberJson, callback) => {
    MemberTask.add(MemberJson, callback)
  },
  updateMember: (MemberJson, callback) => {
    MemberTask.update(MemberJson, callback)
  },
  deleteMember: (Member_Code, callback) => {
    MemberTask.delete(Member_Code, callback)
  },
}

module.exports = MemberController
