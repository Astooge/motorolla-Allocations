import React from 'react';
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
//import BlankTileLayer from './blankTileLayer'

import markerIcon from './marker.png';
const customMarkerIcon = new L.Icon({
  iconUrl: markerIcon,
  iconSize: [10, 15],
  iconAnchor: [12.5, 41],
});

function Map(): JSX.Element {
  return (
    <MapContainer center={[31.771959, 35.217018]} zoom={8} style={{ height: '700px', width: '500px' }}>
      
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution="Map data &copy; <a href=&quot;https://www.openstreetmap.org/&quot;>OpenStreetMap</a> contributors"
      />
      <Marker position={[31.771959, 35.217018]} icon={customMarkerIcon}>
      </Marker>
    </MapContainer>
  );
}

export default Map;