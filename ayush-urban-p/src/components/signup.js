import React, { useState } from 'react';
import videoBackground from './signup.mp4'; // Import your video file

function App() {
  const [signupData, setSignupData] = useState({
    name: '',
    email: '',
    password: ''
  });

  const [signinData, setSigninData] = useState({
    email: '',
    password: '',
    role: 'Resident' // Default role
  });

  const [loggedInUser, setLoggedInUser] = useState(null);
  const [showSignIn, setShowSignIn] = useState(false);
  document.title = 'Aminity4Resident';
  const storeSignupData = (data) => {
    localStorage.setItem('signupData', JSON.stringify(data));
  };

  const getSignupData = () => {
    const storedData = localStorage.getItem('signupData');
    return storedData ? JSON.parse(storedData) : null;
  };

  const storedSignupData = getSignupData();

  const handleSignupChange = (e) => {
    const { name, value } = e.target;
    setSignupData({
      ...signupData,
      [name]: value
    });
  };

  const handleSigninChange = (e) => {
    const { name, value } = e.target;
    setSigninData({
      ...signinData,
      [name]: value
    });
  };

  const handleSignupSubmit = (e) => {
    e.preventDefault();
    console.log('Signup Data:', signupData);
    storeSignupData(signupData);
    setLoggedInUser(signupData.email);
    setShowSignIn(false);
  };

  const handleSigninSubmit = (e) => {
    e.preventDefault();
    console.log('Signin Data:', signinData);

    // Simulate login credentials
    const loginCredentials = {
      email: 'alex@321',
      password: '4321',
      role: 'Resident'
    };

    if (
      signinData.email === loginCredentials.email &&
      signinData.password === loginCredentials.password
    ) {
      setLoggedInUser(signinData.email);

      // Redirect based on role
      if (signinData.role === 'Resident') {
        window.location.href = '/resident'; // Redirect to resident.js page
      } else if (signinData.role === 'Admin') {
        window.location.href = '/admin.js'; // Redirect to admin.js page
      }
    } else {
      alert('Invalid email or password. Please try again.');
    }
  };

  const handleSignout = () => {
    setLoggedInUser(null);
    setShowSignIn(false);
  };

  const showSignUpForm = () => {
    setShowSignIn(true);
  };

  return (
    <div className="App">
      <style>
        {`
          body {
            margin: 0;
            padding: 0;
            font-family: Arial, sans-serif;
            background-color: #7B68EE; /* Violet background color */
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

          .container {
            width: 400px; /* Set the width of the container */
            height: 400px; /* Set the height of the container */
            margin: 0 auto;
            padding: 20px;
            border-radius: 8px;
            background-color: rgba(255, 255, 255, 0.5); /* Light purple background color with opacity */
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            text-align: center;
          }

          h2 {
            margin-top: 0;
            color: #8A2BE2; /* Dark violet color */
          }

          .form-group {
            margin-bottom: 15px;
          }

          input[type="text"],
          input[type="email"],
          input[type="password"],
          select,
          .btn {
            width: calc(100% - 22px); /* Set the width of the input/select, considering padding and border */
            padding: 8px; /* Adjust padding */
            border: 1px solid #ccc;
            border-radius: 5px;
          }

          select {
            background-color: #fff; /* Set background color */
            color: #333; /* Set text color */
          }

          .btn {
            width: 50%; /* Make the button smaller */
            background-color: #8A2BE2; /* Dark violet color */
            color: #fff;
            cursor: pointer;
          }

          .btn:hover {
            background-color: #9400D3; /* Purple color */
          }

          .signin-link,
          .signup-link {
            cursor: pointer;
            color: #8A2BE2; /* Dark violet color */
            text-decoration: underline;
          }

          .signin-link:hover,
          .signup-link:hover {
            color: #9400D3; /* Purple color */
          }
        `}
      </style>
      <div className="video-background">
        <video autoPlay loop muted>
          <source src={videoBackground} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      <div className="container">
        <div className="signup-form">
          {loggedInUser ? (
            <div>
              <h2>Welcome, {loggedInUser}!</h2>
              <button className="btn" onClick={handleSignout}>Sign Out</button>
            </div>
          ) : (
            <div>
              {!showSignIn ? (
                <>
                  <h2>Sign Up</h2>
                  <form onSubmit={handleSignupSubmit}>
                    <div className="form-group">
                      <input type="text" name="name" placeholder="Name" value={signupData.name} onChange={handleSignupChange} />
                    </div>
                    <div className="form-group">
                      <input type="email" name="email" placeholder="Email" value={signupData.email} onChange={handleSignupChange} />
                    </div>
                    <div className="form-group">
                      <input type="password" name="password" placeholder="Password" value={signupData.password} onChange={handleSignupChange} />
                    </div>
                    <button type="submit" className="btn">Sign Up</button>
                  </form>
                  <p className="signin-link" onClick={showSignUpForm}>Already a user? Sign In</p>
                </>
              ) : (
                <>
                  <h2>Sign In</h2>
                  <form onSubmit={handleSigninSubmit}>
                    <div className="form-group">
                      <select name="role" value={signinData.role} onChange={handleSigninChange}>
                        <option value="Resident">Resident</option>
                        <option value="Admin">Admin</option>
                      </select>
                    </div>
                    <div className="form-group">
                      <input type="email" name="email" placeholder="Email" value={signinData.email} onChange={handleSigninChange} />
                    </div>
                    <div className="form-group">
                      <input type="password" name="password" placeholder="Password" value={signinData.password} onChange={handleSigninChange} />
                    </div>
                    <button type="submit" className="btn">Sign In</button>
                  </form>
                  <p className="signup-link" onClick={() => setShowSignIn(false)}>New user? Sign Up</p>
                </>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
