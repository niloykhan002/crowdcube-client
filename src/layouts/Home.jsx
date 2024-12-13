import Banner from "../components/Banner";
import Faq from "../components/Faq";
import RunningCampaign from "../components/RunningCampaign";
import Stats from "../components/Stats";

const Home = () => {
  return (
    <div>
      <Banner />
      <RunningCampaign />
      <Stats />
      <Faq />
    </div>
  );
};

export default Home;
