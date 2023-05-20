import React from "react";
import GoogleMapReact from 'google-map-react';



export default function SimpleMap(){
  const defaultProps = {
    center: {
      lat: 31.771959,
      lng: 35.217018
    },
    zoom: 11
  };

  return (
    // Important! Always set the container height explicitly
    <div style={{ height: '700px', width: '500px' }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: "" }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
      >
       
      </GoogleMapReact>
    </div>
  );
}