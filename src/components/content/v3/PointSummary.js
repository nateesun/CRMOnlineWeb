import React from "react"
// const NumberFormat = require("react-number-format")
// import { Link } from "react-router-dom"

export default function PointSummary(props) {
  const { profile } = props
  let pointBalance = 0
  let pointRedemption = 0
  let rewardRedemption = 0
  let pointExpired = 'ยังไม่มีข้อมูล'
  if (profile && profile.pointBalance) {
    pointBalance = profile.pointBalance
  }
  if (profile && profile.pointRedemption) {
    pointRedemption = profile.pointRedemption
  }
  if (profile && profile.rewardRedemption) {
    rewardRedemption = profile.rewardRedemption
  }
  if (profile && profile.pointExpired) {
    pointExpired = profile.pointExpired
  }
  return (
    <div className="row">
      <div className="col-lg-3 col-6">
        <div className="small-box bg-info">
          <div className="inner">
            <p>คะแนนสะสม</p>
            <h5>{pointBalance}</h5>
          </div>
          <div className="icon">
            <i className="ion ion-bag" />
          </div>
          <span className="small-box-footer">
            More info <i className="fas fa-arrow-circle-right" />
          </span>
        </div>
      </div>
      <div className="col-lg-3 col-6">
        <div className="small-box bg-success">
          <div className="inner">
            <p>ยอดแลกซื้อสินค้า</p>
            <h5>{pointRedemption} %</h5>
          </div>
          <div className="icon">
            <i className="ion ion-stats-bars" />
          </div>
          <span className="small-box-footer">
            More info <i className="fas fa-arrow-circle-right" />
          </span>
        </div>
      </div>
      <div className="col-lg-3 col-6" style={{display: 'none'}}>
        <div className="small-box bg-danger">
          <div className="inner">
            <p>ของรางวัลที่แลก</p>
            <h5>{rewardRedemption}</h5>
          </div>
          <div className="icon">
            <i className="ion ion-pie-graph" />
          </div>
          <span className="small-box-footer">
            More info <i className="fas fa-arrow-circle-right" />
          </span>
        </div>
      </div>
      <div className="col-lg-3 col-6" style={{display: 'none'}}>
        <div className="small-box bg-warning">
          <div className="inner">
            <p>วันหมดอายุคะแนน</p>
            <h5>{pointExpired}</h5>
          </div>
          <div className="icon">
            <i className="ion ion-person-add" />
          </div>
          <span className="small-box-footer">
            More info <i className="fas fa-arrow-circle-right" />
          </span>
        </div>
      </div>
    </div>
  )
}
