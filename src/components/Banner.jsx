import { Link } from "react-router-dom";
import banner1 from "../assets/image01.jpg";
import banner2 from "../assets/image02.jpg";
import banner3 from "../assets/image03.webp";
import { Typewriter } from "react-simple-typewriter";
const Banner = () => {
  return (
    <div className="my-12">
      <div className="carousel w-full">
        <div id="slide1" className="carousel-item relative w-full">
          <img src={banner1} className="w-full h-[600px] brightness-50" />
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a href="#slide3" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide2" className="btn btn-circle">
              ❯
            </a>
          </div>
          <div className="absolute flex flex-col gap-6 items-center top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <div className="text-white text-xl md:text-4xl font-bold">
              <Typewriter
                words={["Fuel Your Dreams, Join Our Journey!"]}
                loop={false}
                cursor
                cursorStyle="_"
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={1000}
              />
            </div>
            <p className="text-white md:text-xl font-semibold">
              Get Started Today
            </p>
            <div className="space-x-6">
              <Link to={"/campaigns"} className="btn md:w-40 font-semibold">
                Donate
              </Link>
              <Link to={"/addCampaign"} className="btn md:w-40 font-semibold">
                Add Campaign
              </Link>
            </div>
          </div>
        </div>
        <div id="slide2" className="carousel-item relative w-full">
          <img src={banner2} className="w-full h-[600px] brightness-50" />
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a href="#slide1" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide3" className="btn btn-circle">
              ❯
            </a>
          </div>
          <div className="absolute flex flex-col gap-6 items-center top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <div className="text-white text-xl md:text-4xl font-bold">
              <Typewriter
                words={["Small Steps, Big Differences!"]}
                loop={false}
                cursor
                cursorStyle="_"
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={1000}
              />
            </div>
            <p className="text-white md:text-xl font-semibold">
              Get Started Today
            </p>
            <div className="space-x-6">
              <Link to={"/campaigns"} className="btn md:w-40 font-semibold">
                Donate
              </Link>
              <Link to={"/addCampaign"} className="btn md:w-40 font-semibold">
                Add Campaign
              </Link>
            </div>
          </div>
        </div>
        <div id="slide3" className="carousel-item relative w-full">
          <img src={banner3} className="w-full h-[600px] brightness-50" />
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a href="#slide2" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide1" className="btn btn-circle">
              ❯
            </a>
          </div>
          <div className="absolute flex flex-col gap-6 items-center top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <div className="text-white text-xl md:text-4xl font-bold">
              <Typewriter
                words={["Together, We Make Change Possible!"]}
                loop={false}
                cursor
                cursorStyle="_"
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={1000}
              />
            </div>
            <p className="text-white md:text-xl font-semibold">
              Get Started Today
            </p>
            <div className="space-x-6">
              <Link to={"/campaigns"} className="btn md:w-40 font-semibold">
                Donate
              </Link>
              <Link to={"/addCampaign"} className="btn md:w-40 font-semibold">
                Add Campaign
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
