import React, { memo } from "react"
import { connect } from "react-redux"
import { compose } from 'redux';

import { createStructuredSelector } from 'reselect'
import { useCookies } from 'react-cookie'

import { useInjectReducer } from '../../utils/injectReducer';
import { useInjectSaga } from '../../utils/injectSaga';

import DashboardContent from './DashboardContent'

import reducer from '../Login/reducer'
import saga from '../Login/saga'
import { makeLoggedIn } from "../Login/selectors";
import { useHistory } from "react-router-dom";

const key = 'dashboard'

const Dashboard = props => {
  const [cookies] = useCookies(['loggedIn'])
  const history = useHistory()

  useInjectReducer({ key, reducer });
  useInjectSaga({ key, saga });

  if (cookies.loggedIn !== 'Y') {
    history.push('/login')
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
