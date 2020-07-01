import React, { useState } from "react"
import { Link } from "react-router-dom"

export default function RegisterForm(props) {
  const { onRegister } = props
  const [fullName, setFullName] = useState("")
  const [mobile, setMobile] = useState("")
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")

  const onSaveRegister = () => {
    console.log("onSaveRegister")
    onRegister({
      fullName,
      mobile,
      username,
      password,
    })
  }

  return (
    <div
      className="hold-transition register-page"
      style={{ backgroundImage: `url(${require("../../assets/bg.jpg")})` }}
    >
      <div className="register-box">
        <div className="register-logo" style={{ marginTop: "30px" }}>
          <b style={{ color: "white" }}>ลงทะเบียนสมาชิกใหม่</b>
        </div>
        <div className="card">
          <div className="card-body register-card-body">
            <div className="input-group mb-3">
              <input
                type="text"
                className="form-control"
                placeholder="ชื่อ - นามสกุล"
                value={fullName}
                onChange={evt => setFullName(evt.target.value)}
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
                value={mobile}
                onChange={evt => setMobile(evt.target.value)}
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
                placeholder="Email"
                autoComplete="off"
                value={username}
                onChange={evt => setUsername(evt.target.value)}
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
                placeholder="รหัสผ่าน"
                autoComplete="off"
                value={password}
                onChange={evt => setPassword(evt.target.value)}
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
                placeholder="ยืนยัน รหัสผ่าน"
                autoComplete="off"
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
                  <label htmlFor="agreeTerms">ยอมรับเงื่อนไข</label>
                </div>
              </div>
              <div className="col-6">
                <button
                  className="btn btn-primary btn-block"
                  onClick={()=>onSaveRegister()}
                >
                  Register
                </button>
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
