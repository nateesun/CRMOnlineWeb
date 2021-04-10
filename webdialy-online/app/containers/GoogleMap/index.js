/**
 *
 * GoogleMap
 *
 */

import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import MapMarker from './MapMarker';
import * as selectors from './selectors';
import reducer from './reducer';
import saga from './saga';

export function GoogleMap() {
  useInjectReducer({ key: 'googleMap', reducer });
  useInjectSaga({ key: 'googleMap', saga });

  return (
    <React.Fragment>
      <MapMarker lat={13.844903} lng={100.525943} />
    </React.Fragment>
  );
}

GoogleMap.propTypes = {};

const mapStateToProps = createStructuredSelector({
  googleMap: selectors.makeSelectGoogleMap(),
});

function mapDispatchToProps() {
  return {};
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(withConnect)(GoogleMap);
