import React from "react"
// import OnlineStoreVisitors from "./OnlineStoreVisitors"
// import SalesReport from "./SalesReport"
import ProductsTable from "./ProductsTable"
// import OnlineStoreOverView from './OnlineStoreOverview'
import PointSummary from "./PointSummary"

export default function ContentV3(props) {
  return (
    <div className="row">
      <div className="col-lg-12">
        <PointSummary {...props} />
      </div>
      <div className="col-lg-12">
        {/* <OnlineStoreVisitors /> */}
        <ProductsTable {...props} />
      </div>
      <div className="col-lg-6">
        {/* <SalesReport /> */}
        {/* <OnlineStoreOverView /> */}
      </div>
    </div>
  )
}
