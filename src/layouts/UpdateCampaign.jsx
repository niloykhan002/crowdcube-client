import toast, { Toaster } from "react-hot-toast";
import { useLoaderData } from "react-router-dom";

const UpdateCampaign = () => {
  const campaign = useLoaderData();
  const handleUpdate = (e) => {
    e.preventDefault();
    const form = e.target;
    const image = form.image.value;
    const title = form.title.value;
    const campaignType = form.campaignType.value;
    const description = form.description.value;
    const amountStr = form.amount.value;
    const amount = parseInt(amountStr);
    const deadline = form.deadline.value;
    const email = form.email.value;
    const name = form.name.value;

    const updateInfo = {
      image,
      title,
      campaignType,
      description,
      amount,
      deadline,
      email,
      name,
    };

    fetch(`https://crowdcube-server-chi.vercel.app/campaigns/${campaign._id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updateInfo),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
          toast.success("Campaign Updated Successfully");
        }
      });
  };
  return (
    <div className="my-12 bg-slate-600 p-24 rounded-lg">
      <Toaster />
      <h2 className="text-center text-4xl font-bold text-white">
        Update Campaign
      </h2>
      <form onSubmit={handleUpdate} className="space-y-4">
        <label className="form-control w-full">
          <div className="label">
            <span className="label-text text-white">Image URL</span>
          </div>
          <input
            type="text"
            name="image"
            defaultValue={campaign.image}
            className="input input-bordered w-full"
            required
          />
        </label>
        <label className="form-control w-full">
          <div className="label">
            <span className="label-text text-white">Campaign Title</span>
          </div>
          <input
            type="text"
            name="title"
            defaultValue={campaign.title}
            className="input input-bordered w-full"
            required
          />
        </label>
        <label className="form-control w-full">
          <div className="label">
            <span className="label-text text-white">Campaign Type</span>
          </div>
          <select
            className="select select-bordered"
            defaultValue={campaign.campaignType}
            name="campaignType"
          >
            <option>Startup</option>
            <option>Business</option>
            <option>Personal Issues</option>
            <option>Creative Ideas</option>
          </select>
        </label>
        <label className="form-control">
          <div className="label">
            <span className="label-text text-white">Description</span>
          </div>
          <textarea
            className="textarea textarea-bordered h-24"
            name="description"
            defaultValue={campaign.description}
            required
          ></textarea>
        </label>
        <label className="form-control w-full">
          <div className="label">
            <span className="label-text text-white">
              Minimun Donation Amount
            </span>
          </div>
          <input
            type="number"
            name="amount"
            defaultValue={campaign.amount}
            className="input input-bordered w-full"
            required
          />
        </label>
        <label className="form-control w-full">
          <div className="label">
            <span className="label-text text-white">Deadline</span>
          </div>
          <input
            type="date"
            name="deadline"
            defaultValue={campaign.deadline}
            className="input input-bordered w-full"
            required
          />
        </label>
        <label className="form-control w-full">
          <div className="label">
            <span className="label-text text-white">User Email</span>
          </div>
          <input
            type="email"
            name="email"
            defaultValue={campaign.email}
            readOnly
            className="input input-bordered w-full"
          />
        </label>
        <label className="form-control w-full">
          <div className="label">
            <span className="label-text text-white">User Name</span>
          </div>
          <input
            type="text"
            name="name"
            defaultValue={campaign.name}
            readOnly
            className="input input-bordered w-full"
          />
        </label>
        <button className="btn btn-block btn-neutral font-bold">Update</button>
      </form>
    </div>
  );
};

export default UpdateCampaign;
