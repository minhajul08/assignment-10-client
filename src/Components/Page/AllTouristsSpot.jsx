import { Link, useLoaderData } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { MdOutlineVisibility, MdOutlineWatchLater } from "react-icons/md";
import { BsCurrencyDollar } from "react-icons/bs";
import { FaArrowRightLong } from "react-icons/fa6";

const AllTouristsSpot = () => {
   const allSpot = useLoaderData ();
   console.log (allSpot)
   
    return (
       <div>
         <div className="mx-10">
            <Navbar></Navbar>
            <p>all spot {allSpot.length}</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-5">
          {
                allSpot.map (all => <div  key={all._id}>
                       <div className="card card-compact  bg-base-100 shadow-xl">
  <figure><img className="w-96 h-52" src={all.photo} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="text-gray-500 text-bold text-xl">{all.location}</h2>
    <p className="font-bold text-2xl">{all.description.slice(0,50)}</p>
    <div className="flex">
        <p className="flex items-center">
          <MdOutlineWatchLater  className="mr-3 text-orange-600"/>
           {all.time}
           </p>
        <p className="flex items-center"> <MdOutlineVisibility className="mr-3 text-orange-600" /> {all.visitor}</p>
    </div>
    <hr className="border-dashed "></hr>
   <div className="flex">
   <p className="flex items-center">
      <span className="mr-3 text-gray-500">From</span>
      <p className="text-orange-600 flex items-center font-bold">
      <BsCurrencyDollar />
      {all.cost}
      </p>
    </p>
    <div className="card-actions">
      <Link to={`/touristDetails/${all._id}`}>
      <div className="flex items-center my-5 mx-3">
                  <p className="mr-3 font-bold hover:text-orange-600">More Information</p>
                   <p className="text-orange-600"><FaArrowRightLong /></p>
                  </div></Link>
    </div>
   </div>
  </div>
</div>
                </div>)
            }
          </div>
        </div>
        <Footer></Footer>
       </div>
    );
};

export default AllTouristsSpot;