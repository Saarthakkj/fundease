import React from 'react';
import { useParams } from 'react-router-dom';
import '../styles/CampaignDetail.css'; // Ensure the CSS file is linked

function CampaignDetail({ campaigns }) {
    const { campaignId } = useParams();
    const campaign = campaigns.find(c => c.id === parseInt(campaignId));

    if (!campaign) {
        return <div>Campaign not found</div>;
    }

    return (
        <div className="campaign-detail-container">
            <img src={campaign.imageUrl} alt={campaign.title} className="campaign-image"/>
            <div className="campaign-content">
                <h1>{campaign.title}</h1>
                <p>{campaign.description}</p>
                <p>Deadline: {campaign.daysLeft} days left</p>
                <p>Total Amount Needed: ${campaign.goal}</p>
                <p>Total Amount Donated: ${campaign.amountRaised}</p>
                <button className="donate-button" onClick={() => alert('Donate button clicked!')}>Donate</button>
            </div>
        </div>
    );
}

export default CampaignDetail;
