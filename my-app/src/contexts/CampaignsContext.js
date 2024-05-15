import React, { createContext, useContext, useState } from 'react';

const CampaignsContext = createContext();

export const useCampaigns = () => useContext(CampaignsContext);

export const CampaignsProvider = ({ children }) => {
    const [campaigns, setCampaigns] = useState([
        { id: 1, title: "Powered Kits Learning Boxes", description: "Fun, durable and reusable boxes with educational kits.", daysLeft: 6, amountRaised: 0.01, goal: 1, category: "Education", imageUrl: "public/images/campaign1.webp" },
        { id: 2, title: "Building Hope Village", description: "Together we can create access for everyone", daysLeft: 34, amountRaised: 0, goal: 10, category: "Education", imageUrl: "/images/campaign1.webp" },
        // More campaigns can be added here
    ]);

    return (
        <CampaignsContext.Provider value={{ campaigns, setCampaigns }}>
            {children}
        </CampaignsContext.Provider>
    );
};
