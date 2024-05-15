import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './styles/App.css';
import Login from './pages/login';
import Join from './pages/join';
import Dashboard from './pages/Dashboard';
import CampaignDetail from './pages/CampaignDetail';

function App() {
  // Mock campaigns data
  const campaigns = [
    { 
        id: 1, 
        title: "Powered Kits Learning Boxes", 
        description: "Fun, durable and reusable boxes with educational kits.", 
        daysLeft: 6, 
        amountRaised: 0.01, 
        goal: 1000,
        imageUrl: "/path/to/image.jpg" 
    },
    // more campaigns...
  ];


  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={
            <header className="App-header">
              <img src="/images/homepage.png" alt="CrowdChain Logo" className="App-logo" />
              <div className="text-and-buttons">
                <h1>CrowdChain</h1>
                <p>Discover innovative projects and initiatives!</p>
                <Link to="/join"><button className="App-button">Join</button></Link>
                <Link to="/login"><button className="App-button">Login</button></Link>
                
              </div>
            </header>
          } />
          <Route path="/login" element={<Login />} />
          <Route path="/join" element={<Join />} />
          <Route path="/dashboard" element={<Dashboard campaigns={campaigns} />} />
          <Route path="/campaign/:campaignId" element={<CampaignDetail campaigns={campaigns} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
