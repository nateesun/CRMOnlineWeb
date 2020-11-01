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

import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import * as selectors from './selectors';
import reducer from './reducer';
import * as actions from './actions';
import ContentPage from './ContentPage';
import saga from './saga';

export function UsePromotion(props) {
  useInjectReducer({ key: 'usePromotion', reducer });
  useInjectSaga({ key: 'usePromotion', saga });

  useEffect(() => {
    props.onInitLoad();
  }, []);

  return <ContentPage {...props} />;
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
