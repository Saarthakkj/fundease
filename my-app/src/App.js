import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './styles/App.css';
import Login from './pages/login';
import Join from './pages/join';
import Dashboard from './pages/Dashboard';
import CampaignDetail from './pages/CampaignDetail';
import { CampaignsProvider } from './contexts/CampaignsContext'; // Import the provider

function App() {
  return (
    <CampaignsProvider>
      <Router>
        <div className="App">
          <Routes>
            <Route path="/" element={
              <header className="App-header">
                <div className="content-wrapper">
                  <img src="/images/homepage.png" alt="CrowdChain Logo" className="App-logo" />
                  <div className="text-and-buttons">
                    <h1>CrowdChain</h1>
                    <p>Discover innovative projects and initiatives!</p>
                    <Link to="/join"><button className="App-button">Join</button></Link>
                    <Link to="/login"><button className="App-button">Login</button></Link>
                  </div>
                </div>
              </header>
            } />
            <Route path="/login" element={<Login />} />
            <Route path="/join" element={<Join />} />
            <Route path="/dashboard/:name" element={<Dashboard />} />
            <Route path="/campaign/:campaignId" element={<CampaignDetail />} />
          </Routes>
        </div>
      </Router>
    </CampaignsProvider>
  );
}

export default App;
