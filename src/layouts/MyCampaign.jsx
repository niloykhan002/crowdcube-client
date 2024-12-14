import { useContext, useState } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { Link, useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const MyCampaign = () => {
  const { user } = useContext(AuthContext);
  const campaigns = useLoaderData();
  const myCampaigns = campaigns.filter(
    (campaign) => campaign.email === user.email
  );
  const [myCampaign, setMyCampaign] = useState(myCampaigns);
  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://crowdcube-server-chi.vercel.app/campaigns/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.deletedCount > 0) {
              Swal.fire({
                title: "Deleted!",
                text: "Your Campaign has been deleted.",
                icon: "success",
              });
              const remaining = myCampaign.filter(
                (campaign) => campaign._id !== id
              );
              setMyCampaign(remaining);
            }
          });
      }
    });
  };
  return (
    <div className="my-12">
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Campaign Type</th>
              <th>Deadline</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {myCampaign.map((campaign, index) => (
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
                <td>{campaign.deadline}</td>
                <th className="flex gap-4">
                  <Link
                    to={`/updateCampaign/${campaign._id}`}
                    className="btn btn-neutral btn-xs"
                  >
                    Update
                  </Link>
                  <button
                    onClick={() => handleDelete(campaign._id)}
                    className="btn btn-neutral btn-xs"
                  >
                    Delete
                  </button>
                </th>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyCampaign;
