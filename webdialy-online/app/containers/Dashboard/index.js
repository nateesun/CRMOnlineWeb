/**
 *
 * Dashboard
 *
 */

import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import * as loginSelectors from 'containers/Login/selectors';
import * as appActions from 'containers/App/actions';
import MainLayoutApp from 'containers/MainLayoutApp';
import * as mainSelectors from 'containers/MainLayoutApp/selectors';
import * as appSelectors from 'containers/App/selectors';
import * as selectors from './selectors';
import reducer from './reducer';
import saga from './saga';
import * as actions from './actions';
import MainComponents from './components';

export function Dashboard(props) {
  useInjectReducer({ key: 'dashboard', reducer });
  useInjectSaga({ key: 'dashboard', saga });

  useEffect(() => {
    props.onLoadRedeem();
    props.onLoadMenu();
  }, []);

  return (
    <MainLayoutApp title="Overview" {...props}>
      <MainComponents {...props} />
    </MainLayoutApp>
  );
}

Dashboard.propTypes = {
  onLoadRedeem: PropTypes.func,
  onLoadMenu: PropTypes.func,
};

const mapStateToProps = createStructuredSelector({
  login: loginSelectors.makeSelectLogin(),
  listRedeem: selectors.makeSelectRedeem(),
  redeemPoint: selectors.makeSelectRedeemPoint(),
  leftMenu: appSelectors.makeSelectLeftMenu(),
  profile: mainSelectors.makeSelectProfile(),
});

function mapDispatchToProps(dispatch) {
  return {
    onLoadRedeem: () => {
      dispatch(actions.loadRedeem());
    },
    onCreateRedeem: code => {
      dispatch(actions.createRedeem(code));
    },
    onLoadMenu: () => {
      dispatch(appActions.initLoad());
    },
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(withConnect)(Dashboard);
