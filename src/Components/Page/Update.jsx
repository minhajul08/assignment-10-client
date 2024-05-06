import { useEffect, useState } from "react";
import {  useParams } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Swal from "sweetalert2";


const Update = () => {
    const {id} = useParams ();
    console.log(id)
    const [spots,SetSpot] = useState ({});

    useEffect ( () => {
     fetch (`https://assignment-10-server-sigma-flax.vercel.app/spots/${id}`)
     .then (res => res.json ())
     .then (data => {
        SetSpot (data)
        console.log (data)
    })
    },[id]);
    const handelUpdate = (e) => {
        e.preventDefault ();
        const form = e.target;
        const spot = form.spotName.value;
        const country = form.country.value;
        const season = form.season.value;
        const cost = form.cost.value;
        const location = form.location.value;
        const description = form.description.value;
        const visitor = form.visitor.value;
        const time = form.time.value;
        const name = form.name.value;
        const email = form.email.value;
        const photo = form.photo.value;
        const updateSpot = {spot,country,season,cost,location,description,visitor,time,name,email,photo};
        fetch (`https://assignment-10-server-sigma-flax.vercel.app/update/${id}`, {
            method: "PUT",
            headers: {
                "Content-type":"application/json"
            },
            body:JSON.stringify (updateSpot)
        })
        .then (res => res.json ())
        .then (data => {
            console.log (data)
            if (data.modifiedCount> 0){
                Swal.fire ({
                    title: 'success!',
                    text:'TouristSpot Updated Successfully',
                    icon: 'success',
                    confirmButtonText: 'Ok'
                })
            }
        })
    }
    return (
      <div>
         <div className="mx-10">
        <Navbar></Navbar>
        <p className="text-center text-3xl font-bold">Update </p>
         <div className="my-5">
            <form onSubmit={handelUpdate}>
            {/* tourists Spot Name & country Name */}
            <div className="md:flex gap-3">
                <div className="form-control md:w-1/2">
                    <label className="label">
                    <span className="label-text">Tourists Spot Name</span>
                    </label>
                    <div className="join">
                     <input className="input input-bordered join-item w-full" name="spotName" placeholder="Enter Tourists Spot Name" defaultValue={spots.spot} />
                </div>
                </div>
                <div className="form-control md:w-1/2">
                    <label className="label">
                    <span className="label-text">Country Name</span>
                    </label>
                    <div className="join">
                     <input className="input input-bordered join-item w-full" name="country" placeholder="Enter Country Name" defaultValue={spots.country}/>
                </div>
                </div>
            </div>
             {/* Location & short description */}
            <div className="md:flex gap-3">
                <div className="form-control md:w-1/2">
                    <label className="label">
                    <span className="label-text">Location</span>
                    </label>
                    <div className="join">
                     <input className="input input-bordered join-item w-full" name="location" placeholder="Enter Your Location" defaultValue={spots.location} />
                </div>
                </div>
                <div className="form-control md:w-1/2">
                    <label className="label">
                    <span className="label-text">Description</span>
                    </label>
                    <div className="join">
                     <input className="input input-bordered join-item w-full" name="description" placeholder="Shot Description" defaultValue={spots.description} />
                </div>
                </div>
            </div>
            {/* average_cost & seasonality */}
            <div className="md:flex gap-3">
                <div className="form-control md:w-1/2">
                    <label className="label">
                    <span className="label-text">Average Cost</span>
                    </label>
                    <div className="join">
                     <input className="input input-bordered join-item w-full" name="cost" placeholder="Enter Average Cost" defaultValue={spots.cost} />
                </div>
                </div>
                <div className="form-control md:w-1/2">
                    <label className="label">
                    <span className="label-text">Seasonality</span>
                    </label>
                    <div className="join ">
                     <select name="season" className=" p-3 border-2 border-gray-500 join-item w-full">
                       <option value="Summer">Summer</option>
                       <option value="Winter">Winter</option>
                     </select>
                </div>
                </div>
            </div>
                 {/* travel time & total visitor per year */}
                 <div className="md:flex gap-3">
                <div className="form-control md:w-1/2">
                    <label className="label">
                    <span className="label-text">Total Visitor</span>
                    </label>
                    <div className="join">
                     <input className="input input-bordered join-item w-full" name="visitor" placeholder="Total Visitor per Year" defaultValue={spots.visitor} />
                </div>
                </div>
                <div className="form-control md:w-1/2">
                    <label className="label">
                    <span className="label-text">Travel Time</span>
                    </label>
                    <div className="join ">
                     <select name="time" className=" p-3 border-2 border-gray-500 join-item w-full">
                       <option value="1 Days">1 Days</option>
                       <option value="3 Days">3 Days</option>
                       <option value="5 Days">5 Days</option>
                       <option value="7 Days">7 Days</option>
                     </select>
                </div>
                </div>
            </div>
              {/* name & email */}
              <div className="md:flex gap-3">
                <div className="form-control md:w-1/2">
                    <label className="label">
                    <span className="label-text">Name</span>
                    </label>
                    <div className="join">
                     <input className="input input-bordered join-item w-full" name="name" placeholder="Enter Your Name" defaultValue={spots.name} />
                </div>
                </div>
                <div className="form-control md:w-1/2">
                    <label className="label">
                    <span className="label-text">Email</span>
                    </label>
                    <div className="join">
                     <input className="input input-bordered join-item w-full" name="email" placeholder="Enter Your Email" defaultValue={spots.email} />
                </div>
                </div>
            </div>
            <div className="form-control ">
                    <label className="label">
                    <span className="label-text">Photo URL</span>
                    </label>
                    <div className="join">
                     <input className="input input-bordered join-item w-full mb-8" name="photo" placeholder="Enter PhotoURL  " defaultValue={spots.photo} />
                </div>
                </div>
                <input type="submit" className="btn bg-orange-600 text-white font-bold  w-full" value="Update Spot" />
        </form>
        </div>
       </div>
       <Footer></Footer>
      </div>
    );
};

export default Update;