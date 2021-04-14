/**
 *
 * CheckCarts
 *
 */

import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import { makeStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';
import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import MainLayoutApp from 'containers/MainLayoutApp';
import * as mainSelectors from 'containers/MainLayoutApp/selectors';
import * as appSelectors from 'containers/App/selectors';
import * as selectors from './selectors';
import reducer from './reducer';
import * as actions from './actions';
import saga from './saga';
import TabLayout from './TabLayout';

const useStyles = makeStyles(() => ({
  root: {
    overflow: 'auto',
    marginBottom: '50px',
  },
}));

export function CheckCarts(props) {
  useInjectReducer({ key: 'checkCarts', reducer });
  useInjectSaga({ key: 'checkCarts', saga });
  const classes = useStyles();

  useEffect(() => {
    props.onInitLoad();
  }, []);

  return (
    <MainLayoutApp title="CheckCartList" {...props}>
      <Grid container spacing={1} className={classes.root}>
        <Grid item xs={12}>
          <TabLayout {...props} />
        </Grid>
      </Grid>
    </MainLayoutApp>
  );
}

CheckCarts.propTypes = {
  onChangePage: PropTypes.func,
  onInitLoad: PropTypes.func,
  onLoadEdit: PropTypes.func,
  onLoadView: PropTypes.func,
  onCreateItem: PropTypes.func,
  onUpdateItem: PropTypes.func,
  onDeleteItem: PropTypes.func,
  onSearch: PropTypes.func,
};

const mapStateToProps = createStructuredSelector({
  getPage: selectors.makeSelectPage(),
  getList: selectors.makeSelectListItems(),
  getData: selectors.makeSelectForm(),
  response: selectors.makeSelectResponse(),
  leftMenu: appSelectors.makeSelectLeftMenu(),
  profile: mainSelectors.makeSelectProfile(),
  showAlertResponse: selectors.makeSelectResponse(),
});

function mapDispatchToProps(dispatch) {
  return {
    onInitLoad: () => dispatch(actions.initLoad()),
    onCreateItem: data => dispatch(actions.createItem(data)),
    onUpdateItem: data => dispatch(actions.updateItem(data)),
    onDeleteItem: id => dispatch(actions.deleteItem(id)),
    onChangePage: pageAt => dispatch(actions.changePage(pageAt)),
    onLoadEdit: item => dispatch(actions.loadEdit(item)),
    onLoadView: item => dispatch(actions.loadView(item)),
    onSearch: (key, value) => dispatch(actions.search({ key, value })),
    onUpdateShoppingStep: data => dispatch(actions.updateShoppingStep(data)),
    onLoadViewOrder: data => dispatch(actions.loadViewOrder(data)),
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(withConnect)(CheckCarts);
