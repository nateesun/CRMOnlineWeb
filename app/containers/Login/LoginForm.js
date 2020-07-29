import React, { useState } from "react"
import { Link } from "react-router-dom"
import styled from 'styled-components';

const ImgLogo = styled.img`
  border: 1px solid white;
  padding: 10px;
  border-radius: 5px 25px 5px 25px;
`;

export default function LoginForm(props) {
  const { onCheckLogin } = props

  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")

  const onLogin = () => {
    onCheckLogin(username, password)
  }

  return (
    <div className="hold-transition login-page" style={{backgroundColor: '#123456'}}>
      <div className="login-box">
        <div className="login-logo">
          <ImgLogo src="/images/login.png" width="128" height="128" />
        </div>
        <div className="login-logo">
          <b style={{ color: "white" }}>Login System</b>
        </div>
        <div className="card">
          <div className="card-body login-card-body" style={{borderRadius: '25px', textShadow: '20px'}}>
            <p className="login-box-msg">ลงชื่อเข้าใช้งาน</p>
            <div className="input-group mb-3">
              <input
                type="email"
                className="form-control"
                placeholder="Email"
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
                placeholder="Password"
                value={password}
                onChange={(evt) => setPassword(evt.target.value)}
              />
              <div className="input-group-append">
                <div className="input-group-text">
                  <span className="fas fa-lock" />
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-12">
                <button
                  className="btn btn-primary btn-block"
                  onClick={() => onLogin()}
                >
                  Sign In
                </button>
              </div>
            </div>
            <div
              className="social-auth-links text-center mb-3"
              style={{ display: "none" }}
            >
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
      <div style={{
          color: "orange",
          width: "100%",
          textAlign: "center",
          position: "absolute",
          bottom: "0",
          paddingBottom: "10px",
        }}>
          <b>CRM Online : Copyright © 2020</b>
        </div>
    </div>
  )
}
