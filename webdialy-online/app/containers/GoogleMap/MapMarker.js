import React, { useState } from 'react';
import { compose, withProps, withStateHandlers } from 'recompose';
import { withScriptjs, withGoogleMap, GoogleMap, Marker, InfoWindow } from 'react-google-maps';

const MapMarker = compose(
  withStateHandlers(() => ({ isOpen: false }), {
    onToggleOpen: ({ isOpen }) => () => ({
      isOpen: !isOpen,
    }),
  }),
  withProps({
    googleMapURL:
      'https://maps.googleapis.com/maps/api/js?key=AIzaSyCE9HPrREFNujIAtNwsn20dKFfLj4TRXp0&libraries=geometry,drawing,places',
    loadingElement: <div style={{ height: `100%` }} />,
    containerElement: <div style={{ height: `400px` }} />,
    mapElement: <div style={{ height: `100%` }} />,
  }),
  withScriptjs,
  withGoogleMap,
)(props => {
  const [latitude, setLatitude] = useState(props.lat);
  const [longitude, setLongitude] = useState(props.lng);

  if (latitude) {
    props.onExit(latitude, longitude);
  }

  const position = new window.google.maps.LatLng(props.lat, props.lng) || {
    lat: latitude,
    lng: longitude,
  };
  return (
    <GoogleMap
      defaultZoom={18}
      defaultCenter={position}
      onClick={e => {
        setLatitude(e.latLng.lat());
        setLongitude(e.latLng.lng());
      }}
    >
      <Marker
        position={{
          lat: latitude,
          lng: longitude,
        }}
        onClick={props.onToggleOpen}
      >
        {props.isOpen && <InfoWindow onCloseClick={props.onToggleOpen} />}
      </Marker>
    </GoogleMap>
  );
});

export default MapMarker;
