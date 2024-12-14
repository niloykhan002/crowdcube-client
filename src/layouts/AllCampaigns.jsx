import { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";

const AllCampaigns = () => {
  const LoadedCampaigns = useLoaderData();
  const [campaigns, setCampaigns] = useState(LoadedCampaigns);

  const handleSort = () => {
    fetch("https://crowdcube-server-chi.vercel.app/campaigns-sort")
      .then((res) => res.json())
      .then((data) => {
        setCampaigns(data);
      });
  };
  return (
    <div className="my-12">
      <div className="py-4 px-4 border rounded-xl my-6 flex justify-end ">
        <button onClick={handleSort} className="btn btn-neutral w-24">
          Sort
        </button>
      </div>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Campaign Type</th>
              <th>Donation Amount</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {campaigns.map((campaign, index) => (
              <tr key={campaign._id}>
                <th>{index + 1}</th>
                <td>
                  <div className="flex items-center gap-3">
                    <div className="avatar">
                      <div className="mask mask-squircle h-12 w-12">
                        <img src={campaign.image} alt="" />
                      </div>
                    </div>
                    <div>
                      <div className="font-bold">{campaign.title}</div>
                    </div>
                  </div>
                </td>
                <td>{campaign.campaignType}</td>
                <td>{campaign.amount}$</td>
                <th>
                  <Link
                    to={`/campaign/${campaign._id}`}
                    className="btn btn-neutral btn-xs h-7 "
                  >
                    See More
                  </Link>
                </th>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllCampaigns;
