

import React from 'react';
import { MapContainer, TileLayer, useMapEvents } from 'react-leaflet';
import { useNavigate } from 'react-router-dom'; // Update import

const MapComponent = () => {
  const navigate = useNavigate(); // Updated from useHistory

  const MapEvents = () => {
    useMapEvents({
      click() {
        navigate('/amenities'); // Updated from history.push
      },
    });
    return null;
  };

  return (
    <MapContainer center={[41.8781, -87.6298]} zoom={13} style={{ height: '100vh', width: '100%' }}>
      <TileLayer
        attribution='Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <MapEvents />
    </MapContainer>
  );
};

export default MapComponent;



// Below code is for specific to AreaName: Not working but


// import React from 'react';
// import { MapContainer, TileLayer, useMapEvents } from 'react-leaflet';
// import { useNavigate } from 'react-router-dom';

// const MapComponent = () => {
//   const navigate = useNavigate();

//   const MapEvents = () => {
//     useMapEvents({
//       click(e) {
//         // Example: Simulate checking if the click location corresponds to "Monroe"
//         // In a real app, use a geocoding API to find the area based on `e.latlng`

//         const { lat, lng } = e.latlng;

//         // This is a placeholder; you would have your own logic or API call here
//         let areaName = 'monroe'; // Default or determined dynamically

//         // Logic to determine the area name goes here
//         // For now, navigate to /{areaName}/amenities
//         navigate(`/${areaName}/amenities`);
//       },
//     });
//     return null;
//   };

//   return (
//     <MapContainer center={[41.8781, -87.6298]} zoom={13} style={{ height: '100vh', width: '100%' }}>
//       <TileLayer
//         attribution='Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
//         url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
//       />
//       <MapEvents />
//     </MapContainer>
//   );
// };

// export default MapComponent;
