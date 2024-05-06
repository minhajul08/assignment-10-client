import { useLoaderData, useParams } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { FaChartArea } from "react-icons/fa6";
import { IoLocationOutline } from "react-icons/io5";
import { BsCurrencyDollar } from "react-icons/bs";
import { MdOutlineVisibility, MdOutlineWatchLater } from "react-icons/md";
import { Helmet } from "react-helmet";


const DetailsPage = () => {
    const tourists = useLoaderData();
    const { id } = useParams();
    const details = tourists.find(tourist => tourist._id === id);
    const { spot, country, season, cost, location, description, visitor, time, photo } = details;
    return (
        <div>
            <div className="mx-10">
                <Navbar></Navbar>
                <Helmet>
                    <title>Tourist spot details</title>
                </Helmet>
                <div className="grid grid-cols-1 md:grid-cols-7 md:gap-10 lg:gap-20 my-5 lg:my-10">
                    <div className="col-span-3 ">
                        <img className="h-full rounded-lg" src={photo} alt={spot} />
                    </div>
                    <div className="col-span-4 space-y-3 md:space-y-6"
                    >
                        <p className="text-orange-600 text-xl uppercase mt-3">About with us</p>
                        <h1 className="text-xl md:text-3xl lg:text-5xl font-bold">{spot}</h1>
                        <p className="text-gray-600">{description}</p>

                        <div className="flex">
                            <p className="flex items-center mr-6"><span className="mr-1">
                                <FaChartArea /></span>{location}</p>
                            <p className="flex items-center mr-3"><span className="mr-1">
                                <IoLocationOutline /></span>{country}</p>
                                <p className="flex items-center mr-6">
                                <MdOutlineWatchLater className="mr-3 text-orange-600" />
                                {time}
                            </p>
                            <p className="flex items-center"> <MdOutlineVisibility className="mr-3 text-orange-600" /> {visitor}</p>
                        </div>
                        <div className="flex items-center  ">
                            <p className="mr-6 bg-orange-600 text-white px-4 py-2 rounded-md">{season}</p>
                            <p className="flex items-center"><BsCurrencyDollar className="mr-1  " /> {cost}</p>
                        </div>
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default DetailsPage;