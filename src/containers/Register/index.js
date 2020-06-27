import React from "react"
import { Link } from "react-router-dom"

export default function Register() {
  return (
    <div
      className="hold-transition register-page"
      style={{ backgroundImage: `url(${require("../../assets/bg.jpg")})` }}
    >
      <div className="register-box">
        <div className="register-logo">
          <b style={{ color: "white" }}>ลงทะเบียนสมาชิกใหม่</b>
        </div>
        <div className="card">
          <div className="card-body register-card-body">
            <p className="login-box-msg">บันทึกข้อมูลส่วนตัวของคุณ</p>
            <div className="input-group mb-3">
              <input
                type="text"
                className="form-control"
                placeholder="Full name"
              />
              <div className="input-group-append">
                <div className="input-group-text">
                  <span className="fas fa-user" />
                </div>
              </div>
            </div>
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
            <div className="input-group mb-3">
              <input
                type="password"
                className="form-control"
                placeholder="Retype password"
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
                  <input
                    type="checkbox"
                    id="agreeTerms"
                    name="terms"
                    defaultValue="agree"
                  />
                  &nbsp;
                  <label htmlFor="agreeTerms">
                    ยอมรับ <Link to="/Register">เงื่อนไข</Link>
                  </label>
                </div>
              </div>
              <div className="col-4">
                <Link to="/login">
                  <button type="submit" className="btn btn-primary btn-block">
                    Register
                  </button>
                </Link>
              </div>
            </div>
            <div className="social-auth-links text-center">
              <p>- OR -</p>
              <Link to="/" className="btn btn-block btn-primary">
                <i className="fab fa-facebook mr-2" />
                เข้าระบบด้วย Facebook
              </Link>
              <Link to="/" className="btn btn-block btn-danger">
                <i className="fab fa-google-plus mr-2" />
                เข้าระบบด้วย Google+
              </Link>
            </div>
            <Link to="/login" className="text-center">
              กลับหน้า Login
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
