import React from "react"
import { Link } from "react-router-dom"
import SearchForm from "./SearchForm"
import NavHeader from "./NavHeader"
import NotificationAlert from './NotificationAlert'

export default function Header() {
  return (
    <nav className="main-header navbar navbar-expand navbar-white navbar-light">
      <NavHeader />
      <SearchForm />
      <ul className="navbar-nav ml-auto">
        <li className="nav-item dropdown">
          <Link to="/" className="nav-link" data-toggle="dropdown">
            <i className="far fa-comments" />
            <span className="badge badge-danger navbar-badge">1</span>
          </Link>
          <NotificationAlert />
        </li>
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
