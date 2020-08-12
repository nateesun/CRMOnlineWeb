import React from "react"
import { Link } from "react-router-dom"

export default function ForgotPassword() {
  return (
    <div className="hold-transition login-page" style={{backgroundColor: '#123456'}}>
      <div className="login-box">
        <div className="login-logo">
          <b style={{ color: "white" }}>ลืมรหัสผ่าน ?</b>
        </div>
        <div className="card">
          <div className="card-body login-card-body">
            <p className="login-box-msg">
              หากคุณลืมรหัสผ่านของคุณ ?
              เราจะส่งรหัสผ่านใหม่ไปให้คุณยังอีเมล์ของคุณ
            </p>
            <div className="input-group mb-3">
              <input
                type="email"
                className="form-control"
                placeholder="Email"
              />
              <div className="input-group-append">
                <div className="input-group-text">
                  <span className="fas fa-envelope" />
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-12">
                <Link to="/recover-password">
                  <button type="submit" className="btn btn-primary btn-block" disabled>
                    ยืนยันการขอรับรหัสผ่านใหม่
                  </button>
                </Link>
              </div>
            </div>
            <p className="mt-3 mb-1">
              <Link to="/">กลับหน้า Login</Link>
            </p>
            <p className="mb-0">
              <Link to="/register" className="text-center">
                ลงทะเบียนสมาชิกใหม่
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
