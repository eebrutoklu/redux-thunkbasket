import React from "react";
import { MdDeliveryDining } from "react-icons/md";
import { IoTime } from "react-icons/io5";
import { FaStar } from "react-icons/fa6";
import { PiPackageFill } from "react-icons/pi";
import { Link } from "react-router-dom";

const RestaurantCart = ({ data }) => {
  return (
    <Link
      to={`/restaurant/${data.id}`}
      className="shadow rounded-lg overflow-hidden cursor-pointer hover:bg-red-50"
    >
      <img
        className="w-full object-contain transition-transform hover:scale-105"
        src={data.img}
        alt={data.name}
      />
      <div className="p-3">
        <div className="flex justify-between ">
          <h3 className="font-semibold">{data.name} </h3>
          <p className="flex items-center gap-1">
            <FaStar className="text-red-500" /> {data.rating}
          </p>
        </div>
        <p>
          <span className="text-sm flex gap-5 my-2 text-gray-500 justify-between">
            <span className="flex items-center gap-1">
              {data.minPrice} $ minimum
              <PiPackageFill className="text-md" />{" "}
            </span>

            <span>Category: {data.category} </span>
          </span>
        </p>
        <p className="flex justify-between">
          <span className="text-sm flex items-center gap-1 my-2 text-gray-500 ">
            {data.estimatedDelivery} minutes
            <IoTime className="text-md" />
          </span>
          {data.isDeliveryFree && (
            <span className="text-sm flex items-center gap-1 my-2 text-gray-500 ">
              Free delivery <MdDeliveryDining className="text-lg" />
            </span>
          )}
        </p>
      </div>
    </Link>
  );
};

export default RestaurantCart;
