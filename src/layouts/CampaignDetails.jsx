import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";
import toast, { Toaster } from "react-hot-toast";

const CampaignDetails = () => {
  const { user } = useContext(AuthContext);
  const campaign = useLoaderData();
  delete campaign._id;
  campaign.userName = user.displayName;
  campaign.userEmail = user.email;
  console.log(campaign);

  const handleDonate = () => {
    fetch("http://localhost:5000/donation", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(campaign),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        toast.success("Donated Successfully");
      });
  };
  return (
    <div className="my-12">
      <Toaster />
      <div className="grid lg:grid-cols-3 grid-cols-1 card-side bg-base-100 w-3/4 mx-auto border p-8 rounded-2xl">
        <figure>
          <img
            className="h-full w-full lg:col-span-1 rounded-2xl"
            src={campaign.image}
            alt=""
          />
        </figure>
        <div className="card-body lg:col-span-2">
          <h2 className="card-title">{campaign.title}</h2>
          <p>
            <span className="font-bold">Deadline:</span> {campaign.deadline}
          </p>
          <p>
            <span className="font-bold">Description:</span>{" "}
            {campaign.description}
          </p>
          <p>
            <span className="font-bold">Min Amount:</span> {campaign.amount}
          </p>
          <div>
            <button onClick={handleDonate} className="btn btn-neutral">
              Donate
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CampaignDetails;
