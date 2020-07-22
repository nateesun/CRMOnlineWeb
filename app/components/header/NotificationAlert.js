import React from "react"
import { Link } from "react-router-dom"

export default function NotificationAlert() {
  return (
    <div className="dropdown-menu dropdown-menu-lg dropdown-menu-right">
      <Link to="/" className="dropdown-item">
        <div className="media">
          <img
            src="dist/img/user7-128x128.jpg"
            alt="User Avatar"
            className="img-size-50 mr-3 img-circle"
          />
          <div className="media-body">
            <h3 className="dropdown-item-title">
              Call center
              <span className="float-right text-sm text-danger">
                <i className="fas fa-star" />
              </span>
            </h3>
            <p className="text-sm">ยินดีต้อนรับสมาชิกใหม่ค่ะ</p>
            <p className="text-sm text-muted">
              <i className="far fa-clock mr-1" /> 4 Hours Ago
            </p>
          </div>
        </div>
      </Link>
      <div className="dropdown-divider" />
      <div className="dropdown-divider" />
      <Link to="/" className="dropdown-item dropdown-footer">
        See All Messages
      </Link>
    </div>
  )
}
