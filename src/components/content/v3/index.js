import React from "react"
import OnlineStoreVisitors from "./OnlineStoreVisitors"
import ProductsTable from "./ProductsTable"
import SalesReport from "./SalesReport"
import OnlineStoreOverView from './OnlineStoreOverview'

export default function ContentV3() {
  return (
    <div className="row">
      <div className="col-lg-6">
        <OnlineStoreVisitors />
        <ProductsTable />
      </div>
      <div className="col-lg-6">
        <SalesReport />
        <OnlineStoreOverView />
      </div>
    </div>
  )
}
