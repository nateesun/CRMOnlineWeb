import React from "react"
import { Link } from "react-router-dom"

export default function Control() {
  return (
    <aside className="control-sidebar control-sidebar-dark">
      <nav className="mt-2">
        <ul
          className="nav nav-pills nav-sidebar flex-column"
          data-widget="treeview"
          role="menu"
          data-accordion="false"
        >
          <li className="nav-item has-treeview menu-open">
            <ul className="nav nav-treeview">
              <li className="nav-header">Promotions</li>
              <li className="nav-item">
                <Link to="/dashboard" className="nav-link">
                  <p>ยังไม่มีโปรโมชั่น</p>
                </Link>
              </li>
            </ul>
          </li>
        </ul>
      </nav>
    </aside>
  )
}
