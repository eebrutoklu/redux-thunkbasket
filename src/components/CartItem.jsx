import React from "react";
import { FaRegTrashAlt } from "react-icons/fa";
import { FaPlus } from "react-icons/fa6";
import { FaMinus } from "react-icons/fa6";
import { useDispatch } from "react-redux";
import { deleteCart, updateCart } from "../redux/actions/basketActions";
const CartItem = ({ data }) => {
  const dispatch = useDispatch();
  const handleIncrease = () => {
    dispatch(updateCart(data.id, data.amount + 1));
  };
  const handleDecrease = () => {
    data.amount > 1
      ? dispatch(updateCart(data.id, data.amount - 1))
      : dispatch(deleteCart(data.id));
  };
  return (
    <div className="border rounded-lg p-3 flex gap-2  ">
      <img
        src={data.img}
        alt=""
        className="w-32 h-32 rounded-lg  object-cover"
      />
      <div className="w-full flex flex-col justify-between">
        <h3 className="text-lg font-semibold text-red-500">{data.title} </h3>
        <p className="text-gray-500">{data.restaurantName} </p>
        <div className="flex justify-between items-center ">
          <p className="font-bold ">{data.price.toFixed(2)} $ </p>
          <div className="text-lg flex gap-3 items-center border rounded-xl justify-center ">
            <button
              onClick={handleDecrease}
              className="p-2 rounded-xl hover:bg-red-100"
            >
              {data.amount > 1 ? (
                <FaMinus className="text-red-500  text-xl font-semibold transition hover:scale-105" />
              ) : (
                <FaRegTrashAlt className="text-red-500 text-xl font-semibold transition hover:scale-105 " />
              )}
            </button>
            <span className="font-semibold"> {data.amount} </span>
            <button
              onClick={handleIncrease}
              className="p-2 rounded-xl hover:bg-red-100"
            >
              <FaPlus className="text-red-500  text-xl font-semibold transition hover:scale-105" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
