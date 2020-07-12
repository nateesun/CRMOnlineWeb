import React, { memo } from "react"
import { connect } from "react-redux"
import { compose } from 'redux';

import DashboardContent from './DashboardContent'

const Dashboard = () => {
  return (
    <DashboardContent />
  )
}

const mapStateToProps = state => {
  return {}
}

const mapDispatchToProps = dispatch => {
  return {}
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps
)

export default compose(
  withConnect,
  memo
)(Dashboard)
