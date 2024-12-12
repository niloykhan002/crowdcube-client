import PropTypes from "prop-types";

const DonateCard = ({ data }) => {
  return (
    <div>
      <div className="card bg-base-100 w-96 shadow-xl">
        <figure>
          <img className="w-full h-60 m-5 rounded-xl" src={data.image} alt="" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">
            {data.title}
            <div className="badge badge-secondary">NEW</div>
          </h2>
          <p>{data.description}</p>
          <div className="card-actions justify-end">
            <div className="badge badge-outline">{data.campaignType}</div>
            <div className="badge badge-outline">{data.deadline}</div>
          </div>
        </div>
      </div>
    </div>
  );
};
DonateCard.propTypes = {
  data: PropTypes.object.isRequired,
};

export default DonateCard;
