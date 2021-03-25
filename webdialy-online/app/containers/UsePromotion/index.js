/**
 *
 * UsePromotion
 *
 */

import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import { getCookie } from 'react-use-cookie';
import { Redirect } from 'react-router-dom';
import { Grid } from '@material-ui/core';
import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import * as appConstants from 'containers/App/constants';
import * as dashboardSelector from 'containers/Dashboard/selectors';
import MainLayout from 'components/MainLayout';
import SubMenu from 'components/SubMenu';
import * as appSelectors from 'containers/App/selectors';
import * as selectors from './selectors';
import reducer from './reducer';
import * as actions from './actions';
import ContentPage from './ContentPage';
import saga from './saga';

export function UsePromotion(props) {
  useInjectReducer({ key: 'usePromotion', reducer });
  useInjectSaga({ key: 'usePromotion', saga });

  const token = getCookie('token') || '';
  if (!token) {
    return <Redirect to={`${appConstants.publicPath}/`} />
  }

  useEffect(() => {
    props.onInitLoad();
  }, []);

  return (
    <MainLayout title='Promotion Using' {...props}>
      <Grid container spacing={3} style={{overflow: 'auto', maxWidth: window.innerWidth-(window.innerWidth*20/100)}}>
        <Grid item xs={12}>
          <SubMenu {...props} />
        </Grid>
        <Grid item xs={12}>
          <ContentPage {...props} />
        </Grid>
      </Grid>
    </MainLayout>
  );
}

UsePromotion.propTypes = {
  onChangePage: PropTypes.func,
  onInitLoad: PropTypes.func,
  onSearch: PropTypes.func,
};

const mapStateToProps = createStructuredSelector({
  getPage: selectors.makeSelectPage(),
  getList: selectors.makeSelectListItems(),
  getData: selectors.makeSelectForm(),
  response: selectors.makeSelectResponse(),
  leftMenu: appSelectors.makeSelectLeftMenu(),
  profile: dashboardSelector.makeSelectProfile(),
});

function mapDispatchToProps(dispatch) {
  return {
    onInitLoad: () => dispatch(actions.initLoad()),
    onChangePage: pageAt => dispatch(actions.changePage(pageAt)),
    onSearch: (key, value) => dispatch(actions.search({ key, value })),
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(withConnect)(UsePromotion);
