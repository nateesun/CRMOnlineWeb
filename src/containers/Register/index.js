import React from "react"
import { Link } from "react-router-dom"

export default function Register() {
  return (
    <div
      className="hold-transition register-page"
      style={{ backgroundImage: `url(${require("../../assets/bg.jpg")})` }}
    >
      <div className="register-box">
        <div className="register-logo" style={{marginTop: "30px"}}>
          <b style={{ color: "white" }}>ลงทะเบียนสมาชิกใหม่</b>
        </div>
        <div className="card">
          <div className="card-body register-card-body">
            <p className="login-box-msg">ข้อมูลเบื้องต้น</p>
            <div className="input-group mb-3">
              <input
                type="text"
                className="form-control"
                placeholder="ชื่อ - นามสกุล"
              />
              <div className="input-group-append">
                <div className="input-group-text">
                  <span className="fas fa-user" />
                </div>
              </div>
            </div>
            <div className="input-group mb-3">
              <input
                type="number"
                className="form-control"
                placeholder="เบอร์มือถือ"
              />
              <div className="input-group-append">
                <div className="input-group-text">
                  <span className="fas fa-mobile" aria-hidden="true" />
                </div>
              </div>
            </div>
            <div className="input-group mb-3">
              <input
                type="email"
                className="form-control"
                placeholder="Email" autoComplete="off"
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
                placeholder="รหัสผ่าน" autoComplete="off"
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
                placeholder="ยืนยัน รหัสผ่าน" autoComplete="off"
              />
              <div className="input-group-append">
                <div className="input-group-text">
                  <span className="fas fa-lock" />
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-6">
                <div className="icheck-primary">
                  <input
                    type="checkbox"
                    id="agreeTerms"
                    name="terms"
                    defaultValue="agree"
                  />
                  &nbsp;
                  <label htmlFor="agreeTerms">
                    ยอมรับเงื่อนไข
                  </label>
                </div>
              </div>
              <div className="col-6">
                <Link to="/login">
                  <button type="submit" className="btn btn-primary btn-block">
                    Register
                  </button>
                </Link>
              </div>
            </div>
            <div className="social-auth-links text-center">
              <p>- หรือ -</p>
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
