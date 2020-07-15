const db = require("../config")
const table_name = "memmaster"

const Member = {
  findAll: (limit=10, callback) => {
    return db.query(`select *  from ${table_name} limit 0, ${limit}`, callback)
  },
  findPointMoreThanZero: (callback) => {
    return db.query(`select *  from ${table_name} where Member_TotalScore > 0`, callback)
  },
  findByCode: (member_code, callback) => {
    return db.query(
      `select *  from ${table_name} where Member_Code=?`,
      [member_code],
      callback
    )
  },
  delete: (member_code, callback) => {
    return db.query(
      `delete from ${table_name} where Member_Code=?`,
      [member_code],
      callback
    )
  },
  update: (MemberModel, callback) => {
    const {
      Member_Code,
      Member_TotalScore,
    } = MemberModel
    return db.query(
      `update ${table_name} 
      set Member_TotalScore=? 
      where Member_Code=?`,
      [Member_TotalScore, Member_Code],
      callback
    )
  },
  add: (MemberModel, callback) => {
    const {
      Member_Code='',Member_TypeCode='00',Member_BranchCode='000',Member_NameThai='',Member_NameEng='',
      Member_Gender='',Member_Status='S',Member_NationCode='00',Member_OccupationCode='0',Member_IncomeCode='0',
      Member_EducationCode='000',Member_Company='',Member_AddressNo='',Member_Building='',Member_AddressSoi='',
      Member_AddressStreet='',Member_AddressSubDistrict='',Member_AddressDistrict='',Member_Province='',Member_PostalCode='',
      Member_HomeTel='',Member_Fax='',Member_Email='',Member_Brithday='2020-01-01',Member_AppliedDate='2020-01-01',
      Member_ExpiredDate='2020-01-01',Member_DiscountRate='00/00/00',Member_SpouseName='',Member_Food='',Member_TotalPurchase=0,
      Member_Remark1='',Member_Remark2='',Member_Mobile='',Member_ReceiveInformation='M',Member_HobbySetCode='',
      Member_LastDateService='2020-01-01',Member_ServiceCount=0,Member_PointExpiredDate='2020-01-01',Member_TotalScore=0,Member_TitleNameThai='',
      Member_SurnameThai='',Member_CompanyAddressNo='',Member_CompanyBuilding='',Member_CompanySoi='',Member_CompanyStreet='',
      Member_CompanySubDistrict='',Member_CompanyDistrict='',Member_CompanyProvince='',Member_CompanyPostalCode='',Member_CompanyTel='',
      Member_CompanyFax='',Member_Active='Y',Member_UsedTitle='Y',Member_MailTo='',Member_PrintLabel='N',
      Employee_CodeCreate='000000',Employee_CreateDate='2020-01-01',Employee_CreateTime='00:00:00',Employee_CodeModify='000000',Employee_ModifyDate='2020-01-01',
      Employee_ModifyTime='00:00:00',Member_TranferFlag='N',Member_UnknowBirth='N',Member_PriceNO='1'
    } = MemberModel
    return db.query(
      `insert into ${table_name} (
        Member_Code,Member_TypeCode,Member_BranchCode,Member_NameThai,Member_NameEng,
        Member_Gender,Member_Status,Member_NationCode,Member_OccupationCode,Member_IncomeCode,
        Member_EducationCode,Member_Company,Member_AddressNo,Member_Building,Member_AddressSoi,
        Member_AddressStreet,Member_AddressSubDistrict,Member_AddressDistrict,Member_Province,Member_PostalCode,
        Member_HomeTel,Member_Fax,Member_Email,Member_Brithday,Member_AppliedDate,
        Member_ExpiredDate,Member_DiscountRate,Member_SpouseName,Member_Food,Member_TotalPurchase,
        Member_Remark1,Member_Remark2,Member_Mobile,Member_ReceiveInformation,Member_HobbySetCode,
        Member_LastDateService,Member_ServiceCount,Member_PointExpiredDate,Member_TotalScore,Member_TitleNameThai,
        Member_SurnameThai,Member_CompanyAddressNo,Member_CompanyBuilding,Member_CompanySoi,Member_CompanyStreet,
        Member_CompanySubDistrict,Member_CompanyDistrict,Member_CompanyProvince,Member_CompanyPostalCode,Member_CompanyTel,
        Member_CompanyFax,Member_Active,Member_UsedTitle,Member_MailTo,Member_PrintLabel,
        Employee_CodeCreate,Employee_CreateDate,Employee_CreateTime,Employee_CodeModify,Employee_ModifyDate,
        Employee_ModifyTime,Member_TranferFlag,Member_UnknowBirth,Member_PriceNO) 
        values(
            ?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,
            ?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?
        )`,
      [
        Member_Code,Member_TypeCode,Member_BranchCode,Member_NameThai,Member_NameEng,
        Member_Gender,Member_Status,Member_NationCode,Member_OccupationCode,Member_IncomeCode,
        Member_EducationCode,Member_Company,Member_AddressNo,Member_Building,Member_AddressSoi,
        Member_AddressStreet,Member_AddressSubDistrict,Member_AddressDistrict,Member_Province,Member_PostalCode,
        Member_HomeTel,Member_Fax,Member_Email,Member_Brithday,Member_AppliedDate,
        Member_ExpiredDate,Member_DiscountRate,Member_SpouseName,Member_Food,Member_TotalPurchase,
        Member_Remark1,Member_Remark2,Member_Mobile,Member_ReceiveInformation,Member_HobbySetCode,
        Member_LastDateService,Member_ServiceCount,Member_PointExpiredDate,Member_TotalScore,Member_TitleNameThai,
        Member_SurnameThai,Member_CompanyAddressNo,Member_CompanyBuilding,Member_CompanySoi,Member_CompanyStreet,
        Member_CompanySubDistrict,Member_CompanyDistrict,Member_CompanyProvince,Member_CompanyPostalCode,Member_CompanyTel,
        Member_CompanyFax,Member_Active,Member_UsedTitle,Member_MailTo,Member_PrintLabel,
        Employee_CodeCreate,Employee_CreateDate,Employee_CreateTime,Employee_CodeModify,Employee_ModifyDate,
        Employee_ModifyTime,Member_TranferFlag,Member_UnknowBirth,Member_PriceNO
      ],
      callback
    )
  },
}

module.exports = Member
