
import React from "react";
import Title from "components/discovery/Title";
import AllRestoransData from "../../api/AllRestorans.json";
import { BiCycling } from "react-icons/bi";



const AllRestorans = () => {
    
  return (
    <div className="py-6">
      <h2 className="mb-4 font-semibold text-lg md:text-xl lg:text-2xl">
        <Title>Bütün restoranlar</Title>
      </h2>
      
       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
       {AllRestoransData.length &&
          AllRestoransData.map((restoran) => (
            <div
            key={restoran.id}
            className="w-full h-full"
          >
            <div className="w-full h-[285px] md:h-[300px] overflow-hidden rounded-2xl hover:scale-105 transition-all duration-500  border-2 border-gray-200">
            <img
              className="h-[182px] w-full object-cover"
              src={restoran.img}
              alt=""
            />

            <div className="h-full pt-3 relative">
              <h3 className="w-[90%] px-6 font-medium text-[1rem] md:text-[1.125rem] line-clamp-1">
                {restoran.productName}
              </h3>

              <p className="px-6 w-[90%] line-clamp-1 text-[0.675rem] md:text-[0.875rem]">{restoran.productOwner}</p>

              <div className="flex flex-col items-center absolute top-4 right-4 bg-blue-50 px-2 py-1 text-brand-color text-sm rounded-xl">
                <span>{restoran.time}</span>
                <span className="opacity-75 text-xs">dəq</span>
              </div>

              <div className=" py-1 mt-5 border-t-2 border-gray-200 ">
                <div className="flex gap-x-2 items-center px-6">
                  <span>
                    <BiCycling size={14} />
                  </span>
                  <span className="text-xs md:text-sm">AZN {restoran.price}</span>
                  <span className="text-xs md:text-sm">$$$</span>
                </div>
              </div>
            </div>
            </div>
          </div>
          ))}
       </div>
    </div>
  );
};

export default AllRestorans;

