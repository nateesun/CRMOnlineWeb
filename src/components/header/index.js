import React from "react"
import { Link } from "react-router-dom"
import SearchForm from "./SearchForm"
import NavHeader from "./NavHeader"

export default function Header() {
  return (
    <nav className="main-header navbar navbar-expand navbar-white navbar-light">
      <NavHeader />
      <SearchForm />
      {/* Right navbar links */}
      <ul className="navbar-nav ml-auto">
        {/* Messages Dropdown Menu */}
        <li className="nav-item dropdown">
          <Link to="/" className="nav-link" data-toggle="dropdown">
            <i className="far fa-comments" />
            <span className="badge badge-danger navbar-badge">1</span>
          </Link>
          <div className="dropdown-menu dropdown-menu-lg dropdown-menu-right">
            <Link to="/" className="dropdown-item">
              {/* Message Start */}
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
              {/* Message End */}
            </Link>
            <div className="dropdown-divider" />
            <div className="dropdown-divider" />
            <Link to="/" className="dropdown-item dropdown-footer">
              See All Messages
            </Link>
          </div>
        </li>
        {/* Notifications Dropdown Menu */}
        <li className="nav-item dropdown">
          <Link to="/" className="nav-link" data-toggle="dropdown">
            <i className="far fa-bell" />
            <span className="badge badge-warning navbar-badge">1</span>
          </Link>
          <div className="dropdown-menu dropdown-menu-lg dropdown-menu-right">
            <span className="dropdown-item dropdown-header">
              1 Notifications
            </span>
            <div className="dropdown-divider" />
            <Link to="/" className="dropdown-item">
              <i className="fas fa-envelope mr-2" /> 1 new messages
              <span className="float-right text-muted text-sm">3 mins</span>
            </Link>
            <div className="dropdown-divider" />
            <Link to="/" className="dropdown-item dropdown-footer">
              See All Notifications
            </Link>
          </div>
        </li>
        <li className="nav-item">
          <Link
            to="/"
            className="nav-link"
            data-widget="control-sidebar"
            data-slide="true"
            role="button"
          >
            <i className="fas fa-th-large" />
          </Link>
        </li>
      </ul>
    </nav>
  )
}
