import React from "react"
import { FormattedMessage } from "react-intl"
import messages from "./messages"

export default function ProductsTable() {
  return (
    <div className="card">
      <div className="card-header border-0">
        <h3 className="card-title">
          <FormattedMessage {...messages.productTransaction} />
        </h3>
        <div className="card-tools">
          <a href="/#" className="btn btn-tool btn-sm">
            <i className="fas fa-download" />
          </a>
          <a href="/#" className="btn btn-tool btn-sm">
            <i className="fas fa-bars" />
          </a>
        </div>
      </div>
      <div className="card-body table-responsive p-0">
        <table className="table table-striped table-valign-middle">
          <thead>
            <tr>
              <th>
                <FormattedMessage {...messages.colProduct} />
              </th>
              <th>
                <FormattedMessage {...messages.colPrice} />
              </th>
              <th>
                <FormattedMessage {...messages.colQty} />
              </th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td colSpan={4} align="center">
                <FormattedMessage {...messages.dataNotfound} />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}
