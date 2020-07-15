import React from "react"
import { Link } from "react-router-dom"

export default function RecoverPassword() {
  return (
    <div
      className="hold-transition login-page"
      style={{ backgroundImage: `url(${require("../../assets/bg.jpg")})` }}
    >
      <div className="login-box">
        <div className="login-logo">
          <b style={{ color: "white" }}>Recover Password</b>
        </div>
        <div className="card">
          <div className="card-body login-card-body">
            <p className="login-box-msg">
              คุณสามารถกู้คืนรหัสผ่านได้ทันที หลังจากยืนยันรหัสผ่าน
            </p>
            <div className="input-group mb-3">
              <input
                type="password"
                className="form-control"
                placeholder="Password"
              />
              <div className="input-group-append">
                <div className="input-group-text">
                  <span className="fas fa-lock" />
                </div>
              </div>
            </div>
            <div className="input-group mb-3">
              <input
                type="password"
                className="form-control"
                placeholder="Confirm Password"
              />
              <div className="input-group-append">
                <div className="input-group-text">
                  <span className="fas fa-lock" />
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-12">
                <Link to="/">
                  <button type="submit" className="btn btn-primary btn-block">
                    ยืนยันเปลี่ยนรหัสผ่าน
                  </button>
                </Link>
              </div>
            </div>
            <p className="mt-3 mb-1">
              <Link to="/">กลับหน้า Login</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
