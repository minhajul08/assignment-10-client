import { useLoaderData } from "react-router-dom";
import Navbar from "./Navbar";
import Slider from "./Slider";
import SpotCard from "./SpotCard";
import Footer from "./Footer";
import Booking from "./Booking";
import TravelGuides from "./TravelGuides";
import { Helmet } from "react-helmet";


const Home = () => {
  const touristsSpot = useLoaderData().slice(0, 6);
  return (
    <div>
      <Helmet>
        <title>Home</title>
      </Helmet>
      <div className="mx-3 md:mx-10 mb-3 md:mb-10">
        <Navbar></Navbar>
        <Slider></Slider>
        <div>
          <div className="my-10 space-y-5">
            <h1 className="text-center text-5xl font-bold ">Tourists Spot</h1>
            <p className="text-center mx-5 text-gray-500 md:mx-52  lg:mx-80">
              We offer amazing properties that are full of character, situated in beautiful neighborhoods so you can feel right at home anywhere in the world.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
            {
              touristsSpot.map(spots => <SpotCard key={spots._id} spots={spots}></SpotCard>)
            }
          </div>
        </div>
        <TravelGuides></TravelGuides>
        <Booking></Booking>
      </div>

      <Footer></Footer>
    </div>
  );
};

export default Home;