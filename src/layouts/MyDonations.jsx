import { useLoaderData } from "react-router-dom";
import DonateCard from "../components/DonateCard";
import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";

const MyDonations = () => {
  const { user } = useContext(AuthContext);
  const donatedAllData = useLoaderData();
  const donatedData = donatedAllData.filter(
    (data) => data.userEmail === user.email
  );
  return (
    <div className="my-12">
      <h2 className="text-center text-4xl font-bold">My Donations</h2>
      <div className="mt-20 grid md:grid-cols-2 lg:grid-cols-3 gap-4 place-items-center">
        {donatedData.map((data) => (
          <DonateCard key={data._id} data={data} />
        ))}
      </div>
    </div>
  );
};

export default MyDonations;
