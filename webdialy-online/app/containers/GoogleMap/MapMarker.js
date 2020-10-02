import React, { useState } from 'react';
const {
  compose,
  withProps,
  withStateHandlers,
} = require('recompose');
const {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker,
  InfoWindow,
} = require('react-google-maps');

const MapMarker = compose(
  withStateHandlers(
    () => ({
      isOpen: false,
    }),
    {
      onToggleOpen: ({ isOpen }) => () => ({
        isOpen: !isOpen,
      }),
    },
  ),
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
  console.log('MapMarker init:', props);
  const [latitude, setLatitude] = useState(props.origin.position.lat());
  const [longitude, setLongitude] = useState(props.origin.position.lng());

  if (latitude){
    props.onExit(latitude, longitude);
  }

  return (
    <GoogleMap
      defaultZoom={7}
      defaultCenter={
        new google.maps.LatLng(
          props.origin.position.lat(),
          props.origin.position.lng(),
        )
      }
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
