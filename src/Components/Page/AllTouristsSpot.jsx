import { Link, useLoaderData } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { MdOutlineVisibility, MdOutlineWatchLater } from "react-icons/md";
import { BsCurrencyDollar } from "react-icons/bs";
import { FaArrowRightLong } from "react-icons/fa6";
import { Helmet } from "react-helmet";

const AllTouristsSpot = () => {
  const allSpot = useLoaderData();

  console.log(allSpot)

  const handelSort = () => {
    
  }

  return (
    <div>
      <div className="mx-10">
        <Helmet>
          <title>All tourists spot</title>
        </Helmet>
        <Navbar></Navbar>
        <div className="mx-auto text-center ">
        <p className="text-3xl font-bold my-5">All Tourist Spot</p>
        <div onClick={handelSort} className="dropdown mb-5 ">
  <div tabIndex={0} role="button" className="btn bg-orange-600 text-white m-1">
    Average Cost
    <svg width="12px" height="12px" className="h-2 w-2 fill-current opacity-60 inline-block" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 2048 2048"><path d="M1799 349l242 241-1017 1017L7 590l242-241 775 775 775-775z"></path></svg>
  </div>
  <ul tabIndex={0} className="dropdown-content z-[1] p-2 shadow-2xl bg-base-300 rounded-box w-52">
    <li><input type="radio" name="theme-dropdown" className="theme-controller btn btn-sm btn-block btn-ghost justify-start" aria-label="100" value="100"/></li>
    <li><input type="radio" name="theme-dropdown" className="theme-controller btn btn-sm btn-block btn-ghost justify-start" aria-label="200" value="200"/></li>
    <li><input type="radio" name="theme-dropdown" className="theme-controller btn btn-sm btn-block btn-ghost justify-start" aria-label="300" value="300"/></li>
    <li><input type="radio" name="theme-dropdown" className="theme-controller btn btn-sm btn-block btn-ghost justify-start" aria-label="500" value="500"/></li>
    <li><input type="radio" name="theme-dropdown" className="theme-controller btn btn-sm btn-block btn-ghost justify-start" aria-label="1000" value="1000"/></li>
  </ul>
</div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-5">
          {
            allSpot.map(all => <div key={all._id}>
              <div className="card card-compact  bg-base-100 shadow-xl">
                <figure><img className="w-96 h-52" src={all.photo} alt="Shoes" /></figure>
                <div className="card-body">
                  <h2 className="text-gray-500 text-bold text-xl">{all.location}</h2>
                  <p className="font-bold text-2xl">{all.description.slice(0, 50)}</p>
                  <div className="flex">
                    <p className="flex items-center">
                      <MdOutlineWatchLater className="mr-3 text-orange-600" />
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