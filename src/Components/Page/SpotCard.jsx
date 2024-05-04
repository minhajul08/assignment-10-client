import { BsCurrencyDollar } from "react-icons/bs";
import { FaArrowRightLong } from "react-icons/fa6";
import { MdOutlineVisibility, MdOutlineWatchLater } from "react-icons/md";
import { Link } from "react-router-dom";


const SpotCard = ({spots}) => {
    const {spot,country,season,cost,location,description,visitor,time,name,email,photo,_id} = spots;
    return (
        
            <div className="card card-compact  bg-base-100 shadow-xl">
  <figure><img className="w-96 h-52" src={photo} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="text-gray-500 text-bold text-xl">{location}</h2>
    <p className="font-bold text-2xl">{description.slice(0,50)}</p>
    <div className="flex">
        <p className="flex items-center">
          <MdOutlineWatchLater  className="mr-3 text-orange-600"/>
           {time}
           </p>
        <p className="flex items-center"> <MdOutlineVisibility className="mr-3 text-orange-600" /> {visitor}</p>
    </div>
    <hr className="border-dashed "></hr>
   <div className="flex">
   <p className="flex items-center">
      <span className="mr-3 text-gray-500">From</span>
      <p className="text-orange-600 flex items-center font-bold">
      <BsCurrencyDollar />
      {cost}
      </p>
    </p>
    <div className="card-actions">
      <Link to={`/touristDetails/${_id}`}>
      <div className="flex items-center my-5 mx-3">
                  <p className="mr-3 font-bold hover:text-orange-600">More Information</p>
                   <p className="text-orange-600"><FaArrowRightLong /></p>
                  </div></Link>
    </div>
   </div>
  </div>
</div>
    );
};

export default SpotCard;