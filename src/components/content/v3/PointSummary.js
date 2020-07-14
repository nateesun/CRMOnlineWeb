import React from "react"
import { Link } from "react-router-dom"

export default function PointSummary() {
  return (
    <div className="row">
      <div className="col-lg-3 col-6">
        <div className="small-box bg-info">
          <div className="inner">
            <h5>0.00</h5>
            <p>คะแนนสะสม</p>
          </div>
          <div className="icon">
            <i className="ion ion-bag" />
          </div>
          <Link to="/" className="small-box-footer">
            More info <i className="fas fa-arrow-circle-right" />
          </Link>
        </div>
      </div>
      <div className="col-lg-3 col-6">
        <div className="small-box bg-success">
          <div className="inner">
            <h5>
              0.00 %
            </h5>
            <p>ยอดแลกซื้อสินค้า</p>
          </div>
          <div className="icon">
            <i className="ion ion-stats-bars" />
          </div>
          <Link to="/" className="small-box-footer">
            More info <i className="fas fa-arrow-circle-right" />
          </Link>
        </div>
      </div>
      <div className="col-lg-3 col-6">
        <div className="small-box bg-danger">
          <div className="inner">
            <h5>0.00</h5>
            <p>ของรางวัลที่แลก</p>
          </div>
          <div className="icon">
            <i className="ion ion-pie-graph" />
          </div>
          <Link to="/" className="small-box-footer">
            More info <i className="fas fa-arrow-circle-right" />
          </Link>
        </div>
      </div>
      <div className="col-lg-3 col-6">
        <div className="small-box bg-warning">
          <div className="inner">
            <h5>23/08/2020</h5>
            <p>วันหมดอายุคะแนน</p>
          </div>
          <div className="icon">
            <i className="ion ion-person-add" />
          </div>
          <Link to="/" className="small-box-footer">
            More info <i className="fas fa-arrow-circle-right" />
          </Link>
        </div>
      </div>
    </div>
  )
}
