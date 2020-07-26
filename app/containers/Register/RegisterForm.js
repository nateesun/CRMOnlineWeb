import React, { useState } from "react"
import { Link } from "react-router-dom"
import { useHistory } from "react-router-dom"
import DatePicker from "react-datepicker"
import "react-datepicker/dist/react-datepicker.css"
const moment = require("moment")

export default function RegisterForm(props) {
  const { onRegister } = props
  const [prefix, setPrefix] = useState("")
  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")
  const [mobile, setMobile] = useState("")
  const [dateOfBirth, setDateOfBirth] = useState(null)
  const [dateStr, setDateStr] = useState("")
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [rePassword, setRePassword] = useState("")
  const [termAccept, setTermAccept] = useState(false)
  const [saveDone, setSaveDone] = useState(false)
  const history = useHistory()

  const prefixData = ["นาย", "นาง", "นางสาว", "ดช.", "ดญ.", "คุณ"]

  const saveDate = (dateVal) => {
    setDateOfBirth(dateVal)
    setDateStr(moment(new Date(dateVal)).format("YYYY-MM-DD"))
  }

  const onSaveRegister = () => {
    if (prefix === "") {
      alert("กรุณาเลือกคำนำหน้า")
    } else if (firstName === "") {
      alert("กรุณาระบุชื่อ")
    } else if (lastName === "") {
      alert("กรุณาระบุนามสกุล")
    } else if (mobile === "") {
      alert("กรุณาระบุเบอร์ติดต่อ")
    } else if (!dateOfBirth) {
      alert("กรุณาระบุวันเกิด")
    } else if (username === "") {
      alert("กรุณาระบุอีเมล์ติดต่อ")
    } else if (password === "") {
      alert("กรุณาระบุรหัสผ่าน")
    } else if (password !== rePassword) {
      alert("ยืนยันรหัสผ่านไม่ตรงกัน")
    } else {
      onRegister({
        prefix,
        firstName,
        lastName,
        mobile,
        dateStr,
        username,
        password,
      })
      setPrefix("")
      setFirstName("")
      setLastName("")
      setMobile("")
      setDateOfBirth(null)
      setDateStr("")
      setUsername("")
      setPassword("")
      setRePassword("")
      alert("ทำการบันทึกข้อมูลเรียบร้อย")
      setSaveDone(true)
    }
  }

  if (saveDone) {
    history.push("/")
  }

  return (
    <div className="hold-transition register-page">
      <div className="register-box">
        <div className="register-logo" style={{ marginTop: "30px" }}>
          <b style={{ color: "white" }}>ลงทะเบียนสมาชิกใหม่</b>
        </div>
        <div className="card">
          <div className="card-body register-card-body">
            <div className="form-group mb-3">
              <select
                className="form-control"
                value={prefix}
                onChange={(evt) => setPrefix(evt.target.value)}
              >
                <option value="">คำนำหน้า</option>
                {prefixData &&
                  prefixData.map((data, index) => (
                    <option key={index} value={data}>
                      {data}
                    </option>
                  ))}
              </select>
            </div>
            <div className="input-group mb-3">
              <div className="input-group mb-3">
                <input
                  type="text"
                  className="form-control"
                  placeholder="ชื่อ"
                  value={firstName}
                  onChange={(evt) => setFirstName(evt.target.value)}
                />
                <div className="input-group-append">
                  <div className="input-group-text">
                    <span className="fas fa-user" />
                  </div>
                </div>
              </div>
              <div className="input-group mb-3">
                <input
                  type="text"
                  className="form-control"
                  placeholder="นามสกุล"
                  value={lastName}
                  onChange={(evt) => setLastName(evt.target.value)}
                />
                <div className="input-group-append">
                  <div className="input-group-text">
                    <span className="fas fa-user" />
                  </div>
                </div>
              </div>
              <input
                type="number"
                className="form-control"
                placeholder="เบอร์มือถือ"
                value={mobile}
                onChange={(evt) => setMobile(evt.target.value)}
              />
              <div className="input-group-append">
                <div className="input-group-text">
                  <span className="fas fa-mobile" aria-hidden="true" />
                </div>
              </div>
            </div>
            <div className="input-group mb-3">
              <DatePicker
                className="form-control"
                selected={dateOfBirth}
                dateFormat="dd/MM/yyyy"
                placeholderText="วันเกิด วว/ดด/ปปปป"
                isClearable
                showYearDropdown
                onChange={(date) => saveDate(date)}
              />
              <div className="input-group-append">
                <div className="input-group-text">
                  <span className="fas fa-calendar" />
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
                onChange={(evt) => setUsername(evt.target.value)}
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
                onChange={(evt) => setPassword(evt.target.value)}
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
                value={rePassword}
                onChange={(evt) => setRePassword(evt.target.value)}
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
                    checked={termAccept}
                    onChange={() => setTermAccept(!termAccept)}
                  />
                  &nbsp;
                  <label htmlFor="agreeTerms">ยอมรับเงื่อนไข</label>
                </div>
              </div>
              <div className="col-6">
                <button
                  className="btn btn-primary btn-block"
                  onClick={() => onSaveRegister()}
                  disabled={!termAccept}
                >
                  Register
                </button>
              </div>
            </div>
            <div
              className="social-auth-links text-center"
              style={{ display: "none" }}
            >
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
            <Link to="/" className="text-center">
              กลับหน้า Login
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
