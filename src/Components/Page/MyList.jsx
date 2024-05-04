import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { FaArrowRightLong } from "react-icons/fa6";
import Navbar from "./Navbar";
import Footer from "./Footer";

const MyList = () => {
    const { user } = useContext(AuthContext) || {};
    const [spots,setSports] = useState ([]);
    useEffect ( () => {
        fetch (`http://localhost:5000/myList/${user?.email}`)
        .then (res => res.json ())
        .then (data => {
            setSports (data);
        })
    } ,[user])
    return (
       <div>
         <div className="mx-10">
            <Navbar></Navbar>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 ">
            {
                spots.map (spot => <div key={spot._id}>
                     <div className="card card-compact  bg-base-100 shadow-xl">
                <figure><img src="https://i.ibb.co/JqgJvW2/blog3.jpg" alt="blog3" /></figure>
                <div className="uppercase flex gap-5 mt-5">
                    <p className="ml-5 text-bold text-orange-600">social media</p>
                    <p>april 20,2024</p>
                    <p>admin</p>
                </div>
                 <div className="mx-3 space-y-5">
                 <h1 className="capitalize text-2xl font-bold mt-5">{spot.name}</h1>
                 <hr className="w-10 text-gray-500 text-bold"></ hr>
                 <p className="text-gray-500">{spot.description}</p>
                 </div>
                  
                  <div className="flex items-center my-5 mx-3">
                  <p className="mr-3 font-bold hover:text-orange-600">Read more</p>
                   <p className="text-orange-600"><FaArrowRightLong /></p>
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

export default MyList;