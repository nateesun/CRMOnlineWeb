/**
 *
 * Dashboard
 *
 */

import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import { makeSelectLogin } from 'containers/Login/selectors';
import * as selectors from './selectors';
import reducer from './reducer';
import saga from './saga';
import * as actions from './actions';
import DashboardContent from './DashboardContent';

export function Dashboard(props) {
  useInjectReducer({ key: 'dashboard', reducer });
  useInjectSaga({ key: 'dashboard', saga });

  useEffect(() => {
    props.onRefresh(props.login.email);
    props.onLoadRedeem();
  }, []);

  return props.login && <DashboardContent {...props} />;
}

Dashboard.propTypes = {};

const mapStateToProps = createStructuredSelector({
  login: makeSelectLogin(),
  profile: selectors.makeSelectProfile(),
  listRedeem: selectors.makeSelectRedeem(),
  redeemPoint: selectors.makeSelectRedeemPoint(),
});

function mapDispatchToProps(dispatch) {
  return {
    onRefresh: email => {
      dispatch(actions.initLoad(email));
    },
    onLoadRedeem: () => {
      dispatch(actions.loadRedeem());
    },
    onCreateRedeem: code => {
      dispatch(actions.createRedeem(code));
    }
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(withConnect)(Dashboard);
