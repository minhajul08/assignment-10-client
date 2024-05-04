import { useLoaderData, useParams } from "react-router-dom";
import Navbar from "./Navbar";


const DetailsPage = () => {
    const tourists = useLoaderData();
    const { id } = useParams();
    const details = tourists.find (tourist =>tourist._id ===id);
    const {spot,country,season,cost,location,description,visitor,time,name,email,photo,_id} = details;
    return (
        <div>
            <Navbar></Navbar>
            Details page
            <p>{spot}</p>
        </div>
    );
};

export default DetailsPage;