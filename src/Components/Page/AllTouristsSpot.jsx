import { useLoaderData } from "react-router-dom";
import Navbar from "./Navbar";

const AllTouristsSpot = () => {
   const allSpot = useLoaderData ();
   console.log (allSpot)
   
    return (
        <div>
            <Navbar></Navbar>
            <p>all spot {allSpot.length}</p>
        </div>
    );
};

export default AllTouristsSpot;