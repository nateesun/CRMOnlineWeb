/**
 *
 * RecoverPassword
 *
 */

import React from 'react';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import * as selectors from './selectors';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';

export function RecoverPassword() {
  useInjectReducer({ key: 'recoverPassword', reducer });
  useInjectSaga({ key: 'recoverPassword', saga });

  return (
    <React.Fragment>
      <FormattedMessage {...messages.header} />
    </React.Fragment>
  );
}

RecoverPassword.propTypes = {};

const mapStateToProps = createStructuredSelector({
  recoverPassword: selectors.makeSelectRecoverPassword(),
});

function mapDispatchToProps() {
  return {};
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(withConnect)(RecoverPassword);
