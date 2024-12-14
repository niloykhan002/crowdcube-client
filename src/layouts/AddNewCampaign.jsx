import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import toast, { Toaster } from "react-hot-toast";

const AddNewCampaign = () => {
  const { user } = useContext(AuthContext);
  const handleCampaign = (e) => {
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

    const campaign = {
      image,
      title,
      campaignType,
      description,
      amount,
      deadline,
      email,
      name,
    };
    fetch("https://crowdcube-server-chi.vercel.app/campaigns", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(campaign),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        toast.success("Campaign Successfully Added");
        form.reset();
      });
  };
  return (
    <div className="my-12 bg-slate-600 p-24 rounded-lg">
      <Toaster />
      <h2 className="text-center text-4xl font-bold text-white">
        Add New Campaign
      </h2>
      <form onSubmit={handleCampaign} className="space-y-4">
        <label className="form-control w-full">
          <div className="label">
            <span className="label-text text-white">Image URL</span>
          </div>
          <input
            type="text"
            name="image"
            placeholder="Image URL"
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
            placeholder="Campaign Title"
            className="input input-bordered w-full"
            required
          />
        </label>
        <label className="form-control w-full">
          <div className="label">
            <span className="label-text text-white">Campaign Type</span>
          </div>
          <select className="select select-bordered" name="campaignType">
            <option defaultChecked>Startup</option>
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
            placeholder="Description"
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
            placeholder="Minimun Donation Amount"
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
            placeholder="Deadline"
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
            defaultValue={user.email}
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
            defaultValue={user.displayName}
            readOnly
            className="input input-bordered w-full"
          />
        </label>
        <button className="btn btn-block btn-neutral font-bold">ADD</button>
      </form>
    </div>
  );
};

export default AddNewCampaign;
