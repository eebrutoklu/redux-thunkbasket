import React from "react";
import { MdDeliveryDining } from "react-icons/md";
import { IoTime } from "react-icons/io5";
import { FaStar } from "react-icons/fa6";
import { PiPackageFill } from "react-icons/pi";
const RestaurantDetail = ({ data }) => {
  return (
    <div className="flex gap-4">
      <img src={data.img} className="w-40 h-32 shadow rounded-md" alt="" />
      <div className="flex flex-col justify-between">
        <h1 className="text-2xl font-bold"> {data.name} </h1>
        <p className="flex gap-3 justify-between max-[400px]:block">
          <span className="text-sm flex items-center gap-1 my-2 text-gray-500 text-nowrap  ">
            {data.estimatedDelivery} minutes
            <IoTime className="text-md text-red-500" />
          </span>
          {data.isDeliveryFree && (
            <span className="text-sm flex items-center gap-1 my-2 text-gray-500 text-nowrap  ">
              Free delivery
              <MdDeliveryDining className="text-lg  text-red-500" />
            </span>
          )}
        </p>
        <p className="flex items-center gap-1">
          <FaStar className="text-red-500" /> {data.rating}
          <a className="text-red-500 text-sm cursor-pointer">see comments...</a>
        </p>
      </div>
    </div>
  );
};

export default RestaurantDetail;
