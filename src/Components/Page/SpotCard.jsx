import { Link } from "react-router-dom";


const SpotCard = ({spots}) => {
    const {spot,country,season,cost,location,description,visitor,time,name,email,photo} = spots;
    return (
        
            <div className="card card-compact  bg-base-100 shadow-xl">
  <figure><img className="w-96 h-52" src={photo} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">{spot}</h2>
    <p>{description.slice(0,200)}</p>
    <div className="flex">
        <p>Location: {location}</p>
        <p>Average Cost :{cost}</p>
    </div>
    <div className="card-actions">
      <Link to='/touristDetails'>
      <button className="btn btn-primary">Details</button></Link>
    </div>
  </div>
</div>
    );
};

export default SpotCard;