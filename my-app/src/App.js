import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './styles/App.css';
import Login from './pages/login'; // Ensure this file exists and is correctly named

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={
            <header className="App-header">
              <img src="/images/homepage.png" alt="CrowdChain Logo" className="App-logo" />
              <div className="text-and-buttons">
                <div>
                  <h1>CrowdChain</h1>
                  <p>Discover innovative projects and initiatives!</p>
                </div>
                <div>
                  {/* Updated to use Link from react-router-dom for better navigation handling */}
                  <button className="App-button" onClick={() => window.location.href='/login'}>Join</button>
                  <button className="App-button" onClick={() => window.location.href='/login'}>Login</button>
                </div>
              </div>
            </header>
          } />
          <Route path="/login" element={<Login />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
