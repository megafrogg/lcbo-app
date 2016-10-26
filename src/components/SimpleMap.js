import React from 'react';
import { GoogleMap, GoogleMapLoader } from 'react-google-maps';

let mapRef;

const SimpleMap = ({lat, long, markers, onMapClick}) => {
  if (mapRef && mapRef.props && mapRef.props.map) {
    mapRef.props.map.setCenter({lat: lat, lng: long});
  }
  return (
  <section style={{
    height: `400px`,
    width: `400px`
   }}>
    <GoogleMapLoader
      containerElement={
        <div
          style={{
            height: `100%`,
            width: `100%`
          }}
        />
      }
      googleMapElement={
        <GoogleMap
          ref={(map) => mapRef = map}
          defaultZoom={10}
          defaultCenter={{ lat: lat, lng: long }}
          onClick={onMapClick}
        >
        {markers}
        </GoogleMap>
      }
    />
  </section>
)};

export default SimpleMap;
