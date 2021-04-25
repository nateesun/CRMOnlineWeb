/**
 *
 * LineLogin
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
import saga from './saga';
import * as actions from './actions';

export function LineLogin(props) {
  useInjectReducer({ key: 'lineLogin', reducer });
  useInjectSaga({ key: 'lineLogin', saga });

  useEffect(() => {
    props.verifyTokenLogin(props.match.params.token);
  }, []);

  return <div>Line Line</div>;
}

LineLogin.propTypes = {
  verifyTokenLogin: PropTypes.func,
  match: PropTypes.object,
};

const mapStateToProps = createStructuredSelector({
  lineLogin: selectors.makeSelectLineLogin(),
});

function mapDispatchToProps(dispatch) {
  return {
    verifyTokenLogin: token => {
      dispatch(actions.verifyToken(token));
    },
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(withConnect)(LineLogin);
