import { FaArrowRightLong } from "react-icons/fa6";

const TravelGuides = () => {
    return (
        <div>
            <div className="text-center font-bold my-8 space-y-5">
                <p>TRAVEL INSIGHTS & IDEAS</p>
                <h1 className="text-4xl">Latest Travel Guides</h1>
                <hr className="w-10"></hr>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            <div className="card card-compact  bg-base-100 shadow-xl">
                <figure><img src="https://i.ibb.co/YBtDzj8/blog1.jpg" alt="Shoes" /></figure>
                <div className="uppercase flex gap-5">
                    <p className="ml-5 text-bold text-orange-600">LifeStyle</p>
                    <p>october 20,2023</p>
                    <p>admin</p>
                </div>
                 <div className="mx-3 space-y-5">
                 <h1 className="capitalize text-2xl font-bold">10 best places to visit in dalhousie himachal</h1>
                 <hr className="w-10"></ hr>
                 <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Excepturi veritatis similique tempora beatae deserunt consequuntur al!</p>
                 </div>
                  
                  <div className="flex items-center my-5 mx-3">
                  <p className="mr-3 hover:text-orange-600">Read more</p>
                   <p className="text-orange-600"><FaArrowRightLong /></p>
                  </div>
                  
            </div>
            {/*  */}
            <div className="card card-compact  bg-base-100 shadow-xl">
                <figure><img src="https://i.ibb.co/YBtDzj8/blog1.jpg" alt="Shoes" /></figure>
                <div className="uppercase flex gap-5">
                    <p className="ml-5 text-bold text-orange-600">LifeStyle</p>
                    <p>october 20,2023</p>
                    <p>admin</p>
                </div>
                <h1 className="capitalize text-2xl font-bold">10 best places to visit in dalhousie himachal</h1>
                <div className="card-body">
                    <h2 className="card-title">Shoes!</h2>
                    <p>If a dog chews shoes whose shoes does he choose?</p>
                    <div className="card-actions">
                        <button className="btn bg-orange-600 text-white">Buy Now</button>
                    </div>
                </div>
            </div>
            </div>
        </div>
    );
};

export default TravelGuides;