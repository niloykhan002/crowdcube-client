import { useEffect, useState } from "react";
import CampaignCard from "./CampaignCard";

const RunningCampaign = () => {
  const [campaigns, setCampaigns] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/campaigns-limit")
      .then((res) => res.json())
      .then((data) => {
        setCampaigns(data);
      });
  }, []);
  console.log(campaigns);
  return (
    <div className="my-12">
      <h1 className="text-4xl font-bold text-center">Running Campaigns</h1>
      <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-3 gap-6 place-items-center">
        {campaigns.map((campaign) => (
          <CampaignCard key={campaign._id} campaign={campaign} />
        ))}
      </div>
    </div>
  );
};

export default RunningCampaign;
