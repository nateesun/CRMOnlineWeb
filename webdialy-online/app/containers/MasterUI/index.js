/**
 *
 * MasterUI
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import makeSelectMasterUI from './selectors';
import reducer from './reducer';
import saga from './saga';
import MainTabs from './MainTabs';

export function MasterUI() {
  useInjectReducer({ key: 'MasterUI', reducer });
  useInjectSaga({ key: 'MasterUI', saga });

  return (
    <div>
      <MainTabs />
    </div>
  );
}

MasterUI.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  MasterUI: makeSelectMasterUI(),
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

export default compose(withConnect)(MasterUI);
