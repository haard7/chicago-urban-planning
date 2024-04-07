import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MapComponent from './MapComponent';
import AmenitiesPage from './AmenitiesPage'; // Import AmenitiesPage component
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MapComponent />} />
        <Route path="/amenities" element={<AmenitiesPage />} /> {/* Use AmenitiesPage component */}
      </Routes>
    </Router>
  );
}

export default App;




// import React from 'react';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Update import
// import MapComponent from './MapComponent';

// const AmenitiesPage = () => {
//    return (
//     <div>
//       <div className="amenity">
//         <img src="https://via.placeholder.com/150" alt="Amenity" />
//         <h2>Amenity Name</h2>
//         <button>Request</button>
//         <textarea placeholder="Additional details" />
//       </div>
//       <div className="amenity">
//         <img src="https://via.placeholder.com/150" alt="Amenity" />
//         <h2>Amenity Name</h2>
//         <button>Request</button>
//         <textarea placeholder="Additional details" />
//       </div>
//     </div>
//   );
// };

// function App() {
//   return (
//     <Router>
//       <Routes> {/* Updated from Switch to Routes */}
//         <Route path="/" element={<MapComponent />} /> {/* Update Route definition */}
//         <Route path="/amenities" element={<AmenitiesPage />} />
//       </Routes>
//     </Router>
//   );
// }

// export default App;




// I have a function named AmenitiesPage, now I want to display the hard coded set of aminities in form of box. each box should contain the aminity name, image of aminity, button to request that aminity and then textbox to add additional detail. can you give the code to have nice aminity page. please give the complete code including the css. you can give dummy names of images for now. please give the code for the same.
// import React from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import MapComponent from './MapComponent';

// const AmenitiesPage = () => {
//   return (
//     <div>
//       <div className="amenity">
//         <img src="https://via.placeholder.com/150" alt="Amenity" />
//         <h2>Amenity Name</h2>
//         <button>Request</button>
//         <textarea placeholder="Additional details" />
//       </div>
//       <div className="amenity">
//         <img src="https://via.placeholder.com/150" alt="Amenity" />
//         <h2>Amenity Name</h2>
//         <button>Request</button>
//         <textarea placeholder="Additional details" />
//       </div>
//     </div>
//   );
// };





// Code with areaName, Not working

// import React from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import MapComponent from './MapComponent';

// // Dynamically display amenities based on the area
// const AmenitiesPage = ({ match }) => {
//   // Access the area name from the URL
//   const { areaName } = match.params;
//   return <div>Amenities for {areaName}.</div>;
// };

// function App() {
//   return (
//     <Router>
//       <Routes>
//         <Route path="/" element={<MapComponent />} exact />
//         <Route path="/:areaName/amenities" element={<AmenitiesPage />} />
//       </Routes>
//     </Router>
//   );
// }

// export default App;
