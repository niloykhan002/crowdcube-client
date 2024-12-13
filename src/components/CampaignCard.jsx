import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { Tooltip } from "react-tooltip";

const CampaignCard = ({ campaign }) => {
  return (
    <div>
      <div className="card bg-base-100 w-96 shadow-xl">
        <figure>
          <img
            className="w-full h-60 m-6 rounded-lg"
            src={campaign.image}
            alt="Shoes"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{campaign.title}</h2>
          <p>
            <span className="font-bold">Min Amount:</span> {campaign.amount}
          </p>
          <p>
            <span className="font-bold">Deadline:</span> {campaign.deadline}
          </p>
          <p>{campaign.description.slice(0, 100)}...</p>
          <div className="card-actions justify-end">
            <Link
              id="details-id"
              to={`/campaign/${campaign._id}`}
              className="btn btn-neutral"
            >
              See More
            </Link>
            <Tooltip
              anchorSelect="#details-id"
              content="Click to see details"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
CampaignCard.propTypes = {
  campaign: PropTypes.object.isRequired,
};

export default CampaignCard;
