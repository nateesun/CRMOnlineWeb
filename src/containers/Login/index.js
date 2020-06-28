import React from "react"
import { Link } from "react-router-dom"

export default function Login() {
  return (
    <div
      className="hold-transition login-page"
      style={{ backgroundImage: `url(${require("../../assets/bg.jpg")})` }}
    >
      <div className="login-box">
        <div className="login-logo">
          <b style={{ color: "white" }}>Login System</b>
        </div>
        <div className="card">
          <div className="card-body login-card-body">
            <p className="login-box-msg">ลงชื่อเข้าใช้งาน</p>
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
            <div className="row">
              <div className="col-8">
                <div className="icheck-primary">
                  <input type="checkbox" id="remember" />
                  <label htmlFor="remember">&nbsp;จดจำฉันไว้</label>
                </div>
              </div>
              <div className="col-4">
                <Link to="/dashboard">
                  <button type="submit" className="btn btn-primary btn-block">
                    Sign In
                  </button>
                </Link>
              </div>
            </div>
            <div className="social-auth-links text-center mb-3">
              <p>- หรือ -</p>
              <Link to="/dashboard" className="btn btn-block btn-primary">
                <i className="fab fa-facebook mr-2" /> เข้าระบบด้วย Facebook
              </Link>
              <Link to="/dashboard" className="btn btn-block btn-danger">
                <i className="fab fa-google-plus mr-2" /> เข้าระบบด้วย Google+
              </Link>
            </div>
            <p className="mb-1">
              <Link to="/forgot-password">
                <span>ลืมรหัสผ่าน</span>
              </Link>
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
