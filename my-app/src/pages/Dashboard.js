import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { FaPlus, FaSearch } from 'react-icons/fa';
import '../styles/Dashboard.css';
import { useCampaigns } from '../contexts/CampaignsContext'; // Import the context hook

function Dashboard() {
    const { name } = useParams();
    const { campaigns } = useCampaigns(); // Get campaigns from context

    return (
        <div className="dashboard">
            <div className="header-content">
                <div className="header-top">
                    <h1 className="welcome-title">Welcome, {name}</h1>
                </div>
                <div>
                    <nav className="navbar">
                        <input type="text" placeholder="Search for campaigns" className="search-input" />
                        <button className="btn"><FaSearch /> Search</button>
                    </nav>
                </div>
                <div className="button-container">
                    <Link to="/create-campaign">
                        <button className="btn"><FaPlus /> Create a Campaign</button>
                    </Link>
                    <Link to="/browse-campaigns">
                        <button className="btn">Browse Campaigns</button>
                    </Link>
                </div>
                <h2 className="your-campaigns">Your Campaigns</h2>
            </div>
            <div className="campaign-grid">
                {campaigns.map(campaign => (
                    <Link to={`/campaign/${campaign.id}`} key={campaign.id}>
                        <div className="campaign-card">
                            <h3>{campaign.title}</h3>
                            <p>{campaign.description}</p>
                            <p>{campaign.amountRaised} of {campaign.goal} raised</p>
                            <p>{campaign.daysLeft} Days Left</p>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
}

export default Dashboard;
