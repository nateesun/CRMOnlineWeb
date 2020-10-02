/**
 *
 * GoogleMap
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import MapDirectionAB from './MapDirectionAB';
import MapMarker from './MapMarker';
import makeSelectGoogleMap from './selectors';
import reducer from './reducer';
import saga from './saga';

const origin = {
  position: {
    lat: () => 13.828941,
    lng: () => 100.525943,
  },
};
const destination = {
  position: {
    lat: () => 13.844903,
    lng: () => 100.511078,
  },
};

export function GoogleMap() {
  useInjectReducer({ key: 'googleMap', reducer });
  useInjectSaga({ key: 'googleMap', saga });
  
  const handleDirection = (distance, duration) => {
    console.log('distance:', distance)
    console.log('duration:', duration)
  }

  const handlePlace = (latitude, longitude) => {
    console.log('latitude:', latitude)
    console.log('longitude:', longitude)
  }

  return (
    <div>
      {/* <MapDirectionAB origin={origin} destination={destination} onExit={handleDirection} /> */}
      <MapMarker origin={origin} onExit={handlePlace} />
    </div>
  );
}

GoogleMap.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  googleMap: makeSelectGoogleMap(),
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
