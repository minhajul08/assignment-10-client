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
                <figure><img src="https://i.ibb.co/YBtDzj8/blog1.jpg" alt="blog1" /></figure>
                <div className="uppercase flex gap-5 mt-5">
                    <p className="ml-5 text-bold text-orange-600">LifeStyle</p>
                    <p>october 20,2023</p>
                    <p>admin</p>
                </div>
                 <div className="mx-3 space-y-5">
                 <h1 className="capitalize text-2xl font-bold mt-5">10 best places to visit in dalhousie himachal</h1>
                 <hr className="w-10 text-gray-500 text-bold"></ hr>
                 <p className="text-gray-500">We are one of the world’s largest travel sellers on tours and cruises. With tour operator volume buys plus our low everyday prices you can save up  versus assembling the same itinerary on your own!</p>
                 </div>
                  
                  <div className="flex items-center my-5 mx-3">
                  <p className="mr-3 font-bold hover:text-orange-600">Read more</p>
                   <p className="text-orange-600"><FaArrowRightLong /></p>
                  </div>
                  
            </div>
            {/*  */}
            <div className="card card-compact  bg-base-100 shadow-xl">
                <figure><img src="https://i.ibb.co/sKwG0T1/blog2.jpg" alt="blog2" /></figure>
                <div className="uppercase flex gap-5 mt-5">
                    <p className="ml-5 text-bold text-orange-600">Tips & Tricks</p>
                    <p>May 11,2024</p>
                    <p>admin</p>
                </div>
                 <div className="mx-3 space-y-5">
                 <h1 className="capitalize text-2xl font-bold mt-5">the impact of covid-19 on travel & tourism industry in future</h1>
                 <hr className="w-10 text-gray-500 text-bold"></ hr>
                 <p className="text-gray-500">We are one of the world’s largest travel sellers on tours and cruises. With tour operator volume buys plus our low everyday prices you can save up  versus assembling the same itinerary on your own!</p>
                 </div>
                  
                  <div className="flex items-center my-5 mx-3">
                  <p className="mr-3 font-bold hover:text-orange-600">Read more</p>
                   <p className="text-orange-600"><FaArrowRightLong /></p>
                  </div>
                  
            </div>
            <div className="card card-compact  bg-base-100 shadow-xl">
                <figure><img src="https://i.ibb.co/JqgJvW2/blog3.jpg" alt="blog3" /></figure>
                <div className="uppercase flex gap-5 mt-5">
                    <p className="ml-5 text-bold text-orange-600">social media</p>
                    <p>april 20,2024</p>
                    <p>admin</p>
                </div>
                 <div className="mx-3 space-y-5">
                 <h1 className="capitalize text-2xl font-bold mt-5">top 15 summer holiday destination in india for 2024</h1>
                 <hr className="w-10 text-gray-500 text-bold"></ hr>
                 <p className="text-gray-500">We are one of the world’s largest travel sellers on tours and cruises. With tour operator volume buys plus our low everyday prices you can save up  versus assembling the same itinerary on your own!</p>
                 </div>
                  
                  <div className="flex items-center my-5 mx-3">
                  <p className="mr-3 font-bold hover:text-orange-600">Read more</p>
                   <p className="text-orange-600"><FaArrowRightLong /></p>
                  </div>
                  
            </div>
            </div>
        </div>
    );
};

export default TravelGuides;