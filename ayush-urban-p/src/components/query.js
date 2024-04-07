import React, { useState, useEffect, useRef } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import backgroundImage from './query.png';


function Query() {
  const [city, setCity] = useState('');
  const [address, setAddress] = useState('');
  const [complaint, setComplaint] = useState('');
  const [description, setDescription] = useState('');
  const mapRef = useRef(null);

  useEffect(() => {
    if (!mapRef.current) {
      mapRef.current = L.map('map').setView([51.505, -0.09], 13); // Default center coordinates
      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      }).addTo(mapRef.current);
    }
  }, []);

  const handleCityChange = (e) => {
    setCity(e.target.value);
    // Update map view based on selected city
    switch (e.target.value) {
      case 'New York':
        mapRef.current.setView([40.7128, -74.0060], 13); // New York coordinates
        break;
      case 'Los Angeles':
        mapRef.current.setView([34.0522, -118.2437], 13); // Los Angeles coordinates
        break;
      case 'Chicago':
        mapRef.current.setView([41.8781, -87.6298], 13); // Chicago coordinates
        break;
      default:
        // Set default center coordinates if city is not recognized
        mapRef.current.setView([51.505, -0.09], 13); // Default center coordinates
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission here
  };

  return (
    <div className="container">
      <style>
        {`
          .container {
            position: relative;
          }
          body {
            font-family: Arial, sans-serif;
            margin: 0;
            overflow-y: auto; /* Add scrollbar to the body */
            background-image: url(${backgroundImage});
            background-size: cover; /* Cover the entire viewport */
          }

          .navbar {
            background-color: rgba(0, 0, 0, 0.5); /* Semi-transparent black */
            color: #fff;
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 10px 20px;
          }

          #map {
            position: absolute;
            bottom: 0;
            right: 0;
            width: 500px;
            height: 500px;
            z-index: 0;
          }
          .video-background {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            overflow: hidden;
            z-index: -1;
          }

          video {
            min-width: 100%;
            min-height: 100%;
            width: auto;
            height: auto;
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            z-index: -1;
          }

          .form-container {
            z-index: 1;
            background-color: rgba(255, 255, 255, 0.8);
            padding: 20px;
            border-radius: 8px;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
            margin: 20px;
            max-width: 500px; /* Increased maximum width */
          }

          @media (min-width: 768px) {
            .form-container {
              margin-left: 20px; /* Adjust margin for larger screens */
            }
          }

          .form-heading {
            text-align: center;
            margin-bottom: 20px;
          }

          .form-group {
            margin-bottom: 20px;
          }

          .form-label {
            display: block;
            margin-bottom: 5px;
          }

          .form-input {
            width: 100%;
            padding: 10px;
            box-sizing: border-box;
            border: 1px solid #ccc;
            border-radius: 4px;
          }

          .submit-button {
            background-color: #4CAF50;
            color: white;
            padding: 10px 20px;
            border: none;
            border-radius: 4px;
            cursor: pointer;
            width: 100%;
          }
        `}
      </style>
      <div className="form-container">
        <h2 className="form-heading">Query Information</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="city" className="form-label">Select City:</label>
            <select id="city" name="city" value={city} onChange={handleCityChange} className="form-input">
              <option value="">Select a city</option>
              <option value="New York">New York</option>
              <option value="Los Angeles">Los Angeles</option>
              <option value="Chicago">Chicago</option>
            </select>
          </div>
          
          <div className="form-group">
            <label htmlFor="address" className="form-label">Address:</label>
            <input type="text" id="address" name="address" value={address} onChange={(e) => setAddress(e.target.value)} className="form-input" />
          </div>
          <div className="form-group">
            <label htmlFor="complaint" className="form-label">Complaint:</label>
            <input type="text" id="complaint" name="complaint" value={complaint} onChange={(e) => setComplaint(e.target.value)} className="form-input" />
          </div>
          <div className="form-group">
            <label htmlFor="description" className="form-label">Describe Your Complaint:</label>
            <textarea id="description" name="description" rows="4" value={description} onChange={(e) => setDescription(e.target.value)} className="form-input"></textarea>
          </div>
          <button type="submit" className="submit-button">Submit</button>
        </form>
      </div>
      <div id="map"></div>
    </div>
  );
}

export default Query;
