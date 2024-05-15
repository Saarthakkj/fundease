import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Dashboard.css';

function Dashboard() {
    const user = { name: "John Doe" };
    const campaigns = [
        { id: 1, title: "Powered Kits Learning Boxes", description: "Fun, durable and reusable boxes with educational kits.", daysLeft: 6, amountRaised: 0.01, goal: 1, category: "Education" },
        { id: 2, title: "Building Hope Village", description: "Together we can create access for everyone", daysLeft: 34, amountRaised: 0, goal: 10, category: "Education" },
        // More campaigns can be added here
    ];

    return (
        <div className="dashboard">
            <nav className="navbar">
                <input type="text" placeholder="Search for campaigns" className="search-input" />
                <button className="btn">Search</button>
                <Link to="/create-campaign"><button className="btn">Create a Campaign</button></Link>
                <Link to="/browse-campaigns"><button className="btn">Browse Campaigns</button></Link>
            </nav>
            <div className="header-content">
                <h1 className="welcome-title">Welcome, {user.name}</h1>
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
