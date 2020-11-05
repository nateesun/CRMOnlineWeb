/**
 *
 * Dashboard
 *
 */

import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import useCookie, { getCookie } from 'react-use-cookie';
import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import * as loginSelectors from 'containers/Login/selectors';
import * as selectors from './selectors';
import reducer from './reducer';
import saga from './saga';
import * as actions from './actions';
import DashboardContent from './DashboardContent';

export function Dashboard(props) {
  useInjectReducer({ key: 'dashboard', reducer });
  useInjectSaga({ key: 'dashboard', saga });
  const [token, setToken] = useCookie('token', '');

  useEffect(() => {
    if (props.login.email) {
      setToken(JSON.stringify(props.login.email));
    }
    const getToken = getCookie('token') || '';
    if (getToken !== '') {
      props.onRefresh(JSON.parse(getToken));
      props.onLoadRedeem();
    }
  }, []);

  return props.login && <DashboardContent {...props} />;
}

Dashboard.propTypes = {};

const mapStateToProps = createStructuredSelector({
  login: loginSelectors.makeSelectLogin(),
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
    },
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(withConnect)(Dashboard);
