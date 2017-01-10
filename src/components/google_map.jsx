import React from 'react';
import { GoogleMapLoader, GoogleMap } from "react-google-maps";

// Wrap all `react-google-maps` components with `withGoogleMap` HOC
// and name it GettingStartedGoogleMap
export default (props) => {
  return(
    <GoogleMapLoader
      defaultZoom={3}
      defaultCenter={{ lat: props.lat, lng: props.lon }}
      containerElement={
        <div style={{ height: `100%` }} />
      }
      mapElement={
        <div style={{ height: `100%` }} />
      }/>
  );
}
