import React from "react"
// import OnlineStoreVisitors from "./OnlineStoreVisitors"
// import SalesReport from "./SalesReport"
import ProductsTable from "./ProductsTable"
import OnlineStoreOverView from './OnlineStoreOverview'
import PointSummary from "./PointSummary"

export default function ContentV3() {
  return (
    <div className="row">
      <div className="col-lg-12">
        <PointSummary />
      </div>
      <div className="col-lg-6">
        {/* <OnlineStoreVisitors /> */}
        <ProductsTable />
      </div>
      <div className="col-lg-6">
        {/* <SalesReport /> */}
        <OnlineStoreOverView />
      </div>
    </div>
  )
}
