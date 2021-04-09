/**
 *
 * MainLayoutApp
 *
 */

import React, { memo, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import { Grid } from '@material-ui/core';
import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import MainLayout from 'components/MainLayout';
import * as selectors from './selectors';
import * as actions from './actions';
import reducer from './reducer';
import saga from './saga';

export function MainLayoutApp(props) {
  useInjectReducer({ key: 'mainLayoutApp', reducer });
  useInjectSaga({ key: 'mainLayoutApp', saga });

  useEffect(() => {
    props.onLoadProfile();
  }, []);

  return (
    <Grid container spacing={1}>
      <Grid item xs={12}>
        <MainLayout {...props}>{props.children}</MainLayout>
      </Grid>
    </Grid>
  );
}

MainLayoutApp.propTypes = {};

const mapStateToProps = createStructuredSelector({
  mainLayoutApp: selectors.makeSelectMainLayoutApp(),
  profile: selectors.makeSelectProfile(),
});

function mapDispatchToProps(dispatch) {
  return {
    onLoadProfile: () => {
      dispatch(actions.loadProfile());
    },
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(
  withConnect,
  memo,
)(MainLayoutApp);
