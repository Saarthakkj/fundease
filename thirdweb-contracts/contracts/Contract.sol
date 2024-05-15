// SPDX-License-Identifier: MIT
pragma solidity >=0.8.0 <0.9.0;

contract FundEase{

    struct Campaign
    {
        address creatorAddress;
        string campaignName;
        string description;
        uint256 goal;
        uint256 duration;
        uint256 amountRaised;
        address[] donator;
        uint256[] donations; 
    }

    mapping (uint256 => Campaign) public  Campaigns;
    uint256 public numCampaigns=0;


    function createCampaign (address cAddress,  string memory name , string memory desc ,uint256 _goal , uint256 _duration ) public returns (uint256)// returns the index of the index of the campaign in the Campaigns mapping
    {
        Campaign storage currCampaign = Campaigns[numCampaigns];


        require(_duration < block.timestamp,"The deadline cannot be a past date");


        currCampaign.creatorAddress=cAddress;
        currCampaign.campaignName=name;
        currCampaign.description=desc;
        currCampaign.goal=_goal;
        currCampaign.duration=_duration;
        currCampaign.amountRaised=0;

        numCampaigns++;

        return numCampaigns-1;

    }


    function contributeToCampaign(uint256 campaignIndex) public payable 
    {
        require(campaignIndex < numCampaigns, "Invalid campaign index");
        Campaign storage currCampaign = Campaigns[campaignIndex];

        require(block.timestamp < currCampaign.duration, "Campaign deadline has passed");

        currCampaign.donator.push(msg.sender);
        currCampaign.donations.push(msg.value);

        (bool sent, )=payable (currCampaign.creatorAddress).call{value : msg.value}("");
        if (sent)
        {
            currCampaign.amountRaised += msg.value;

        }
        // currCampaign.amountRaised += msg.value;
    }

    function getDonators(uint256 campaignIndex) public view returns (address[] memory, uint256[] memory) 
    {
        require(campaignIndex < numCampaigns, "Invalid campaign index");
        Campaign storage currCampaign = Campaigns[campaignIndex];

        address[] memory donators = new address[](currCampaign.donator.length);
        uint256[] memory donations = new uint256[](currCampaign.donations.length);

        for (uint256 i = 0; i < currCampaign.donator.length; i++) {
            donators[i] = currCampaign.donator[i];
            donations[i] = currCampaign.donations[i];
        }

        return (donators, donations);
    }


    function getCampaigns() public view returns (Campaign[] memory) 
    {
        Campaign[] memory campaigns = new Campaign[](numCampaigns);

        for (uint256 i = 0; i < numCampaigns; i++) {
            Campaign storage currCampaign = Campaigns[i];
            campaigns[i] = Campaign({
                creatorAddress: currCampaign.creatorAddress,
                campaignName: currCampaign.campaignName,
                description: currCampaign.description,
                goal: currCampaign.goal,
                duration: currCampaign.duration,
                amountRaised: currCampaign.amountRaised,
                donator: currCampaign.donator,
                donations: currCampaign.donations
            });
        }

        return campaigns;
    }


}