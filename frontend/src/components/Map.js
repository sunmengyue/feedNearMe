import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import ReactMapGL, { Marker, Popup } from 'react-map-gl';
import getCenter from 'geolib/es/getCenter';

const Map = ({ events }) => {
  const [selectedLocation, setSelectedLocation] = useState({});

  // Transform the event locations in the format of {longitude, latitude}
  const coordinates = events.slice(0, 4).map((event) => ({
    longitude: event.location[0],
    latitude: event.location[1],
  }));
  const center = getCenter(coordinates);

  const [viewPort, setviewPort] = useState({
    width: '100%',
    height: '60vh',
    latitude: center.latitude,
    longitude: center.longitude,
    zoom: 0,
  });

  return (
    <ReactMapGL
      mapStyle="mapbox://styles/sunmengyue/cktu6pvp80kbk17ny02mll90x"
      mapboxApiAccessToken="pk.eyJ1Ijoic3VubWVuZ3l1ZSIsImEiOiJja2owY3o0Z3Ywa3E5MnhrbGV2a3M3aDM4In0.uK5_xMb75lXraq02u0Htjg"
      {...viewPort}
      onViewportChange={(viewPort) => setviewPort(viewPort)}
    >
      {events.slice(0, 4).map((event) => (
        <div key={uuidv4()}>
          <Marker latitude={event.location[1]} longitude={event.location[0]}>
            <p
              className="cursor-pointer animate-bounce"
              onClick={() => setSelectedLocation(event.location)}
            >
              📍
            </p>
          </Marker>
          {selectedLocation[0] === event.location[0] ? (
            <Popup
              closeOnClick={true}
              onClose={() => setSelectedLocation({})}
              latitude={event.location[1]}
              longitude={event.location[0]}
            >
              {event.title}
            </Popup>
          ) : (
            false
          )}
        </div>
      ))}
    </ReactMapGL>
  );
};

export default Map;
