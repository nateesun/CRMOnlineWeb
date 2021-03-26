/**
 *
 * MemberTracking
 *
 */

import React, { useEffect } from 'react';
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
import MainLayout from 'components/MainLayout';
import SubMenu from 'components/SubMenu';
import * as appSelectors from 'containers/App/selectors';
import * as selectors from './selectors';
import * as actions from './actions';
import reducer from './reducer';
import saga from './saga';

export function MemberTracking(props) {
  useInjectReducer({ key: 'memberTracking', reducer });
  useInjectSaga({ key: 'memberTracking', saga });

  const token = getCookie('token') || '';
  if (!token) {
    return <Redirect to={`${appConstants.publicPath}/`} />
  }

  useEffect(() => {
    props.onLoadProfile();
  }, []);

  return (
    <MainLayout title='TrackOrder' {...props}>
      <Grid container spacing={1} style={{overflow: 'auto', maxWidth: window.innerWidth-(window.innerWidth*20/100)}}>
        <Grid item xs={12}>
          <SubMenu {...props} />
        </Grid>
        <Grid item xs={12}>
          <TrackCarts {...props} showCommand={false} />
        </Grid>
        <Grid item xs={12}>
          <TrackOrders {...props} showCommand={false} />
        </Grid>
      </Grid>
    </MainLayout>
  );
}

MemberTracking.propTypes = {};

const mapStateToProps = createStructuredSelector({
  memberTracking: selectors.makeSelectMemberTracking(),
  profile: selectors.makeSelectProfile(),
  leftMenu: appSelectors.makeSelectLeftMenu(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
    onLoadProfile: () => dispatch(actions.loadProfile()),
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(withConnect)(MemberTracking);
