import React, { memo } from "react"
import { connect } from "react-redux"
import { compose } from 'redux';
import { Redirect } from "react-router"

import { createStructuredSelector } from 'reselect'

import { useInjectReducer } from '../../utils/injectReducer';
import { useInjectSaga } from '../../utils/injectSaga';

import DashboardContent from './DashboardContent'

import reducer from '../Login/reducer'
import saga from '../Login/saga'
import { makeLoggedIn } from "../Login/selectors";

const key = 'dashboard'

const Dashboard = props => {
  const { loggedIn } = props
  useInjectReducer({ key, reducer });
  useInjectSaga({ key, saga });

  if (!loggedIn) {
    return <Redirect push to="/login" />
  }

  return (
    <DashboardContent />
  )
}

const mapStateToProps = createStructuredSelector({
  loggedIn: makeLoggedIn(),
})

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
