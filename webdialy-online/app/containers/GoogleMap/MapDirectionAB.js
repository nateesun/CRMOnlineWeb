import React from 'react';
const { compose, withProps, lifecycle } = require('recompose');
const {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  DirectionsRenderer,
} = require('react-google-maps');

const MapDirectionAB = compose(
  withProps({
    googleMapURL:
      'https://maps.googleapis.com/maps/api/js?key=AIzaSyCE9HPrREFNujIAtNwsn20dKFfLj4TRXp0&libraries=geometry,drawing,places',
    loadingElement: <div style={{ height: `100%` }} />,
    containerElement: <div style={{ height: `400px` }} />,
    mapElement: <div style={{ height: `100%` }} />,
  }),
  withScriptjs,
  withGoogleMap,
  lifecycle({
    componentDidMount() {
      const { origin, destination } = this.props;
      const DirectionsService = new google.maps.DirectionsService();

      DirectionsService.route(
        {
          origin: new google.maps.LatLng(
            origin.position.lat(),
            origin.position.lng(),
          ),
          destination: new google.maps.LatLng(
            destination.position.lat(),
            destination.position.lng(),
          ),
          travelMode: google.maps.TravelMode.DRIVING,
        },
        (result, status) => {
          if (status === google.maps.DirectionsStatus.OK) {
            this.setState({
              lat: origin.position.lat(),
              lng: origin.position.lng(),
              directions: result,
              distance: result.routes[0].legs[0].distance.value,
              duration: result.routes[0].legs[0].duration.value,
            });
          } else {
            console.error(`error fetching directions ${result}`);
          }
        },
      );
    },
  }),
)(props => {
  console.log('MapDirectionAB init:', props);
  if (props.distance) {
    props.onExit(props.distance, props.duration);
  }
  return (
    <GoogleMap
      defaultZoom={7}
      defaultCenter={
        new google.maps.LatLng(props.lat | 13.828941, props.lng | 100.525943)
      }
    >
      {props.directions && <DirectionsRenderer directions={props.directions} />}
    </GoogleMap>
  );
});

export default MapDirectionAB;
