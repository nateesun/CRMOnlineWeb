import React from "react"

export default function ForgotPassword() {
  return (
    <div className="hold-transition login-page">
      <div className="login-box">
        <div className="login-logo">
          <a href="../../index2.html">
            <b>ลืมรหัสผ่าน ?</b>
          </a>
        </div>
        {/* /.login-logo */}
        <div className="card">
          <div className="card-body login-card-body">
            <p className="login-box-msg">
              หากคุณลืมรหัสผ่านของคุณ ? เราจะส่งรหัสผ่านใหม่ไปให้คุณยังอีเมล์ของคุณ
            </p>
            <form action="recover-password.html" method="post">
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
                  <button type="submit" className="btn btn-primary btn-block">
                    ยืนยันการขอรับรหัสผ่านใหม่
                  </button>
                </div>
                {/* /.col */}
              </div>
            </form>
            <p className="mt-3 mb-1">
              <a href="login">กลับหน้า Login</a>
            </p>
            <p className="mb-0">
              <a href="register" className="text-center">
                ลงทะเบียนสมาชิกใหม่
              </a>
            </p>
          </div>
          {/* /.login-card-body */}
        </div>
      </div>
    </div>
  )
}
