import Swal from "sweetalert2";
import Navbar from "./Navbar";
import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { Helmet } from "react-helmet";
import Footer from "./Footer";


const AddTouristsSpot = () => {
    const { user } = useContext(AuthContext) || {};
    console.log (user);
    const handelAddSpot = e => {
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
        const email = user.email;
        const photo = form.photo.value;
        const addTouristsSpot = {spot,country,season,cost,location,description,visitor,time,name,email,photo}
        

        fetch ('https://assignment-10-server-sigma-flax.vercel.app/addTouristSpot', {
            method: 'POST',
            headers: {"content-type" : "application/json"},
            body:JSON.stringify (addTouristsSpot) 
        })
        .then (res => res.json ())
        .then (data => {
            console.log (data)
            if (data.insertedId){
                Swal.fire("TouristsSpot added");
            }
            form.reset();
        })
        // console.log (addTouristsSpot);
     }
    return (
       <div>
         <div className="mx-3 lg:mx-10">
            <Helmet>
                <title>Add tourist spot</title>
            </Helmet>
            <Navbar></Navbar>
            <div className="bg-[#F4F3F0] p-10 my-5">
        <h2 className="text-3xl font-extrabold text-center mb-4">All Tourists Spot</h2>
        <form onSubmit={handelAddSpot}>
            {/* tourists Spot Name & country Name */}
            <div className="md:flex gap-3">
                <div className="form-control md:w-1/2">
                    <label className="label">
                    <span className="label-text">Tourists Spot Name</span>
                    </label>
                    <div className="join">
                     <input className="input input-bordered join-item w-full" name="spotName" placeholder="Enter Tourists Spot Name" />
                </div>
                </div>
                <div className="form-control md:w-1/2">
                    <label className="label">
                    <span className="label-text">Country Name</span>
                    </label>
                    <div className="join">
                     <input className="input input-bordered join-item w-full" name="country" placeholder="Enter Country Name" />
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
                     <input className="input input-bordered join-item w-full" name="location" placeholder="Enter Your Location" />
                </div>
                </div>
                <div className="form-control md:w-1/2">
                    <label className="label">
                    <span className="label-text">Description</span>
                    </label>
                    <div className="join">
                     <input className="input input-bordered join-item w-full" name="description" placeholder="Shot Description" />
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
                     <input className="input input-bordered join-item w-full" name="cost" placeholder="Enter Average Cost" />
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
                     <input className="input input-bordered join-item w-full" name="visitor" placeholder="Total Visitor per Year" />
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
                     <input className="input input-bordered join-item w-full" name="name" placeholder="Enter Your Name" />
                </div>
                </div>
                <div className="form-control md:w-1/2">
                    <label className="label">
                    <span className="label-text">Email</span>
                    </label>
                    <div className="join">
                     <input className="input input-bordered join-item w-full" name="email" placeholder="Enter Your Email" />
                </div>
                </div>
            </div>
            <div className="form-control ">
                    <label className="label">
                    <span className="label-text">Photo URL</span>
                    </label>
                    <div className="join">
                     <input className="input input-bordered join-item w-full mb-8" name="photo" placeholder="Enter PhotoURL " />
                </div>
                </div>
                <input type="submit" className="btn bg-orange-600 btn-block text-white " value="Add to Coffee" />
        </form>
    </div>
        </div>
        <Footer></Footer>
       </div>
    );
};

export default AddTouristsSpot;