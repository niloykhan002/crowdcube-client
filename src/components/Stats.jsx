const Stats = () => {
  return (
    <div className="flex justify-center items-center my-28">
      <div>
        <h1 className="text-4xl font-bold text-center">Statistics</h1>
        <div className="divider"></div>
        <div className="lg:flex shadow-lg mt-12">
          <div className="stat place-items-center lg:p-28">
            <div className="stat-title">Total Donations</div>
            <div className="stat-value">311K</div>
            <div className="stat-desc">From January 1st to December 1st</div>
          </div>

          <div className="stat place-items-center lg:border-x lg:p-28">
            <div className="stat-title">Users</div>
            <div className="stat-value text-secondary">4,200</div>
            <div className="stat-desc text-secondary">↗︎ 40 (2%)</div>
          </div>

          <div className="stat place-items-center lg:p-28">
            <div className="stat-title">New Registers</div>
            <div className="stat-value">1,200</div>
            <div className="stat-desc">↘︎ 90 (14%)</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stats;
