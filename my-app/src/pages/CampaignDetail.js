import React from 'react';
import { useParams } from 'react-router-dom';
import '../styles/CampaignDetail.css';
import { useCampaigns } from '../contexts/CampaignsContext'; // Import the context hook

function CampaignDetail() {
    const { campaignId } = useParams();
    const { campaigns } = useCampaigns(); // Get campaigns from context
    const campaign = campaigns ? campaigns.find(c => c.id === parseInt(campaignId)) : null;

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
