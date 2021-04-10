/**
 *
 * GoogleMap
 *
 */

import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import MapMarker from './MapMarker';
import * as selectors from './selectors';

export function GoogleMap(props) {
  const handlePlace = () => {};

  return (
    <React.Fragment>
      <MapMarker
        {...props}
        lat={13.844903}
        lng={100.525943}
        onExit={handlePlace}
      />
    </React.Fragment>
  );
}

GoogleMap.propTypes = {};

const mapStateToProps = createStructuredSelector({
  googleMap: selectors.makeSelectGoogleMap(),
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

export default compose(withConnect)(GoogleMap);
