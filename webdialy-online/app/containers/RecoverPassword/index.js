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
import * as selectors from './selectors';
import messages from './messages';

export function RecoverPassword() {
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
