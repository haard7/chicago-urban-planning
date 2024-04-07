import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Home from './components/home';
import Signup from './components/signup';
import Resident from './components/resident'; // Import the Resident component
import Query from './components/query'; // Import the Query component

function App() {
  const [loggedInUser, setLoggedInUser] = useState(null);

  const handleLogin = (user) => {
    setLoggedInUser(user);
  };

  const handleLogout = () => {
    setLoggedInUser(null);
  };

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/resident" element={<Resident />} />
          <Route path="/query" element={<Query />} /> {/* Add this route for the Query component */}
          {/* Redirect to Resident page if user is logged in */}
          {loggedInUser ? (
            <Route path="*" element={<Navigate to="/resident" />} />
          ) : null}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
