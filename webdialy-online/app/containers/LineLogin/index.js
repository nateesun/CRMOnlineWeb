/**
 *
 * LineLogin
 *
 */

import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import * as selectors from './selectors';
import reducer from './reducer';
import saga from './saga';
import * as actions from './actions';
import messages from './messages';

export function LineLogin(props) {
  useInjectReducer({ key: 'lineLogin', reducer });
  useInjectSaga({ key: 'lineLogin', saga });

  useEffect(() => {
    props.verifyTokenLogin(props.match.params.token);
  }, []);

  return (
    <div>
      <FormattedMessage {...messages.header} />
    </div>
  );
}

LineLogin.propTypes = {
  dispatch: PropTypes.func.isRequired,
  verifyTokenLogin: PropTypes.func,
  match: PropTypes.object,
};

const mapStateToProps = createStructuredSelector({
  lineLogin: selectors.makeSelectLineLogin(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
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
