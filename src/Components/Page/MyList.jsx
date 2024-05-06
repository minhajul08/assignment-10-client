import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { MdOutlineVisibility, MdOutlineWatchLater } from "react-icons/md";
import { BsCurrencyDollar } from "react-icons/bs";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet";

const MyList = () => {
    const { user } = useContext(AuthContext) || {};
    const [spots,setSports] = useState ([]);
    useEffect ( () => {
        fetch (`https://assignment-10-server-sigma-flax.vercel.app/myList/${user?.email}`)
        .then (res => res.json ())
        .then (data => {
            setSports (data);
        })
    } ,[user])

      const handelDelete = id => {
          Swal.fire({
              title: "Are you sure?",
              text: "You won't be able to revert this!",
              icon: "warning",
              showCancelButton: true,
              confirmButtonColor: "#3085d6",
              cancelButtonColor: "#d33",
              confirmButtonText: "Yes, delete it!"
          }).then((result) => {
              if (result.isConfirmed) {
  
                  fetch(`https://assignment-10-server-sigma-flax.vercel.app/delete/${id}`, {
                      method: 'DELETE'
                  })
                      .then(res => res.json())
                      .then(data => {
                          console.log(data);
                          if (data.deletedCount > 0) {
                              Swal.fire(
                                  "Deleted!",
                                  "Your Coffee has been deleted.",
                                  "success"
                              )
                              const remaining = spots.filter(spot => spot._id !== id)
                              setSports(remaining)
                          }
                      })
              }
          });
  
      }
  
    return (
       <div className="">
         <div className="mx-3 lg:mx-10">
            <Navbar></Navbar>
            <Helmet>
              <title>MyList</title>
            </Helmet>
            <div className="mx-auto text-center ">
            <h1 className="text-3xl font-bold  my-5">My List</h1>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-5">
            {
                spots.map (mySpot => <div key={mySpot._id}>
                     <div className="card card-compact  bg-base-100 shadow-xl">
  <figure><img className="w-96 h-52" src={mySpot.photo} alt={mySpot.spot} /></figure>
  <div className="card-body">
    <h2 className="text-gray-500 text-bold text-xl">{mySpot.location}</h2>
    <p className="font-bold text-2xl">{mySpot.description.slice(0,50)}</p>
    <div className="flex">
        <p className="flex items-center">
          <MdOutlineWatchLater  className="mr-3 text-orange-600"/>
           {mySpot.time}
           </p>
        <p className="flex items-center"> <MdOutlineVisibility className="mr-3 text-orange-600" /> {mySpot.visitor}</p>
        <div className="flex">
   <p className="flex items-center">
      <span className="mr-3 text-gray-500">From</span>
      <p className="text-orange-600 flex items-center font-bold">
      <BsCurrencyDollar />
      {mySpot.cost}
      </p>
    </p>
   </div>
    </div>
    <hr className="border-dashed "></hr>
  
   <div className="flex justify-between">
   <button onClick={ () => handelDelete (mySpot._id)} className="btn btn-outline btn-error">Delete</button>
  <Link to={`/update/${mySpot._id}`}><button className="btn btn-outline btn-info">Update</button></Link>
   </div>
  </div>
</div>
                </div>)
            }
        </div>
        
        </div>
       <div >
       <Footer></Footer>
       </div>
       </div>
    );
};

export default MyList;