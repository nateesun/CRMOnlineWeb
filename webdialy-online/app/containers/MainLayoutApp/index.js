/**
 *
 * MainLayoutApp
 *
 */

import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import { Grid } from '@material-ui/core';
import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import MainLayout from 'components/MainLayout';
import makeSelectMainLayoutApp from './selectors';
import reducer from './reducer';
import saga from './saga';

export function MainLayoutApp(props) {
  useInjectReducer({ key: 'mainLayoutApp', reducer });
  useInjectSaga({ key: 'mainLayoutApp', saga });

  return (
    <Grid container spacing={1}>
      <Grid item xs={12}>
        <MainLayout title='Overview' {...props}>
          {props.children}
        </MainLayout>
      </Grid>
    </Grid>
  )
}

MainLayoutApp.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  mainLayoutApp: makeSelectMainLayoutApp(),
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

export default compose(
  withConnect,
  memo,
)(MainLayoutApp);
