import React from "react"
import BrandLogo from "./BrandLogo"
import UserPanel from "./UserPanel"
import { Link } from "react-router-dom"

export default function Menu() {
  return (
    <aside className="main-sidebar sidebar-dark-primary elevation-4">
      <BrandLogo />
      {/* Sidebar */}
      <div className="sidebar">
        <UserPanel />
        {/* Sidebar Menu */}
        <nav className="mt-2">
          <ul
            className="nav nav-pills nav-sidebar flex-column"
            data-widget="treeview"
            role="menu"
            data-accordion="false"
          >
            {/* Add icons to the links using the .nav-icon class
         with font-awesome or any other icon font library */}
            <li className="nav-item">
              <Link to="/dashboard" className="nav-link active">
                <i className="nav-icon fas fa-tachometer-alt" />
                <p>
                  Dashboard
                  <span className="right badge badge-danger">New</span>
                </p>
              </Link>
            </li>
            <li className="nav-item has-treeview menu-open">
              <a href="/" className="nav-link">
                <i className="nav-icon fas fa-th" />
                <p>
                  All Menu
                  <i className="right fas fa-angle-left" />
                </p>
              </a>
              <ul className="nav nav-treeview">
                <li className="nav-item">
                  <Link to="/dashboard" className="nav-link">
                    <i className="far fa-circle nav-icon" />
                    <p>สั่งสินค้า Online</p>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/dashboard" className="nav-link">
                    <i className="far fa-circle nav-icon" />
                    <p>รายการสินค้าที่สั่ง</p>
                  </Link>
                </li>
                <li className="nav-header">ORDER HISTORY</li>
                <li className="nav-item">
                  <Link to="/dashboard" className="nav-link">
                    <i className="far fa-circle nav-icon" />
                    <p>ประวัติการสั่งสินค้า</p>
                  </Link>
                </li>
                <li className="nav-header">POINT REDEMPTION</li>
                <li className="nav-item">
                  <Link to="/dashboard" className="nav-link">
                    <i className="far fa-circle nav-icon" />
                    <p>คะแนนสะสม</p>
                  </Link>
                </li>
              </ul>
            </li>
          </ul>
        </nav>
        {/* /.sidebar-menu */}
      </div>
      {/* /.sidebar */}
    </aside>
  )
}
