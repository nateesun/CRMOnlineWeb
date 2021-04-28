/**
 *
 * RecoverPassword
 *
 */

import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import * as selectors from './selectors';

export function RecoverPassword() {
  return <div>Recover Password</div>;
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
