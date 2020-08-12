import React from "react"
import { Link } from "react-router-dom"

export default function NavHeader() {
  return (
    <ul className="navbar-nav">
      <li className="nav-item">
        <Link to="/" className="nav-link" data-widget="pushmenu" role="button">
          <i className="fas fa-bars" />
        </Link>
      </li>
      <li className="nav-item d-none d-sm-inline-block">
        <Link to="/" className="nav-link">
          Home
        </Link>
      </li>
      <li className="nav-item d-none d-sm-inline-block">
        <Link to="/" className="nav-link">
          Contact
        </Link>
      </li>
    </ul>
  )
}
