import { useLoaderData } from "react-router-dom";
import Navbar from "./Navbar";
import Slider from "./Slider";
import SpotCard from "./SpotCard";
import Footer from "./Footer";
import Booking from "./Booking";
import TravelGuides from "./TravelGuides";


const Home = () => {
    const touristsSpot = useLoaderData ().slice(0,6);
    return (
       <div>
         <div className="mx-3 md:mx-10 mb-3 md:mb-10">
            <Navbar></Navbar>
              <Slider></Slider>
              <div>
                <div>
                    <h1 className="text-center text-5xl font-bold my-10">TouristsSpot</h1>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                    {
                        touristsSpot.map (spots => <SpotCard key={spots._id} spots={spots}></SpotCard>)
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