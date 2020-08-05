import React from "react"
import { Link } from "react-router-dom"
import { FormattedMessage } from "react-intl"
import messages from "./messages"

export default function MenuTabs() {
  return (
    <div>
      <nav className="mt-2">
        <ul
          className="nav nav-pills nav-sidebar flex-column"
          data-widget="treeview"
          role="menu"
          data-accordion="false"
        >
          <li className="nav-item">
            <Link to="/dashboard" className="nav-link active">
              <i className="nav-icon fas fa-tachometer-alt" />
              <p>
                <FormattedMessage {...messages.dashboard} />
                <span className="right badge badge-danger">
                  <FormattedMessage {...messages.new} />
                </span>
              </p>
            </Link>
          </li>
          <li className="nav-item has-treeview menu-open">
            <a href="/" className="nav-link">
              <i className="nav-icon fas fa-th" />
              <p>
                <FormattedMessage {...messages.all} />
                <i className="right fas fa-angle-left" />
              </p>
            </a>
            <ul className="nav nav-treeview">
              <li className="nav-item">
                <Link to="/dashboard" className="nav-link">
                  <i className="far fa-circle nav-icon" />
                  <p>
                    <FormattedMessage {...messages.orderOnline} />
                  </p>
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/dashboard" className="nav-link">
                  <i className="far fa-circle nav-icon" />
                  <p>
                    <FormattedMessage {...messages.orderTransaction} />
                  </p>
                </Link>
              </li>
              <li className="nav-header">
                <FormattedMessage {...messages.history} />
              </li>
              <li className="nav-item">
                <Link to="/dashboard" className="nav-link">
                  <i className="far fa-circle nav-icon" />
                  <p>
                    <FormattedMessage {...messages.historyTransaction} />
                  </p>
                </Link>
              </li>
            </ul>
          </li>
        </ul>
      </nav>
    </div>
  )
}
