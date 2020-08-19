/**
 *
 * Logout
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
import { checkLogout } from 'containers/Login/actions';
import makeSelectLogout from './selectors';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';

export function Logout(props) {
  useInjectReducer({ key: 'logout', reducer });
  useInjectSaga({ key: 'logout', saga });

  useEffect(() => {
    props.onCheckLogout();
  }, []);

  return (
    <div>
      <FormattedMessage {...messages.header} />
    </div>
  );
}

Logout.propTypes = {
  dispatch: PropTypes.func.isRequired,
  onCheckLogout: PropTypes.func,
};

const mapStateToProps = createStructuredSelector({
  logout: makeSelectLogout(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
    onCheckLogout: email => {
      dispatch(checkLogout(email));
    },
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(withConnect)(Logout);
