import React from "react"
import styled from "styled-components"

const ImgLogo = styled.img`
  border: 1px solid white;
  padding: 10px;
  border-radius: 5px 25px 5px 25px;
`

export default function ProfileDashboard(props) {
  return (
    <div
      className="hold-transition login-page"
      style={{ backgroundColor: "#123456" }}
    >
      <div className="login-box">
        <div className="login-logo">
          <b style={{ color: "white" }}>คุณนที สังข์ทองงาม</b>
        </div>
        <div className="login-logo">
          <ImgLogo src="dist/img/avatar1.png" width="128" height="128" />
        </div>
        <div className="login-logo">
          <b style={{ color: "white", fontSize: '1.5rem' }}>Total Point</b>
        </div>
        <div className="row">
          <div className="col-lg-6 col-6">
            <div className="small-box bg-info">
              <div className="inner">
                <p style={{ fontSize: "1rem" }}>คะแนนสะสม</p>
                <h5>{0}</h5>
              </div>
              <div className="icon">
                <i className="ion ion-bag" />
              </div>
              <span className="small-box-footer">
                More info <i className="fas fa-arrow-circle-right" />
              </span>
            </div>
          </div>
          <div className="col-lg-6 col-6">
            <div className="small-box bg-success">
              <div className="inner">
                <p style={{ fontSize: "1rem" }}>ยอดแลกซื้อสินค้า</p>
                <h5>{0}</h5>
              </div>
              <div className="icon">
                <i className="ion ion-stats-bars" />
              </div>
              <span className="small-box-footer">
                More info <i className="fas fa-arrow-circle-right" />
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
