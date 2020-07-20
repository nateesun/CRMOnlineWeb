import React from "react"
// import OnlineStoreVisitors from "./dashboard/OnlineStoreVisitors"
// import SalesReport from "./dashboard/SalesReport"
import ProductsTable from "./dashboard/ProductsTable"
// import OnlineStoreOverView from './dashboard/OnlineStoreOverview'
import PointSummary from "./dashboard/PointSummary"
import ContentHeader from './header'

export default function Content(props) {
  return (
    <div className="content-wrapper">
      <ContentHeader />
      <div className="content">
        <div className="container-fluid">
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
        </div>
      </div>
    </div>
  )
}
