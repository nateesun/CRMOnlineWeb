/**
 *
 * MemberTracking
 *
 */

import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import { Redirect } from 'react-router-dom';
import { Grid } from '@material-ui/core';
import { getCookie } from 'react-use-cookie';
import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import * as appConstants from 'containers/App/constants';
import TrackCarts from 'containers/TrackCarts/Loadable';
import TrackOrders from 'containers/TrackOrders/Loadable';
import MainLayoutApp from 'containers/MainLayoutApp';
import * as mainSelectors from 'containers/MainLayoutApp/selectors';
import * as appSelectors from 'containers/App/selectors';
import * as selectors from './selectors';
import reducer from './reducer';
import saga from './saga';

export function MemberTracking(props) {
  useInjectReducer({ key: 'memberTracking', reducer });
  useInjectSaga({ key: 'memberTracking', saga });

  const token = getCookie('token') || '';
  if (!token) {
    return <Redirect to={`${appConstants.publicPath}/`} />
  }

  return (
    <MainLayoutApp title='TrackOrder' {...props}>
      <Grid container spacing={1} style={{overflow: 'auto', width: '100vw', marginBottom: '50px'}}>
        <Grid item xs={12}>
          <TrackCarts {...props} showCommand={false} />
        </Grid>
        <Grid item xs={12}>
          <TrackOrders {...props} showCommand={false} />
        </Grid>
      </Grid>
    </MainLayoutApp>
  );
}

MemberTracking.propTypes = {};

const mapStateToProps = createStructuredSelector({
  memberTracking: selectors.makeSelectMemberTracking(),
  profile: mainSelectors.makeSelectProfile(),
  leftMenu: appSelectors.makeSelectLeftMenu(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(withConnect)(MemberTracking);
