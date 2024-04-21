import React from "react";
import { FaPlus } from "react-icons/fa6";
import { useSelector } from "react-redux";

const ProductCart = ({ item, handleAdd }) => {
  const { data } = useSelector((store) => store.cart);
  const found = data.find((i) => i.productId === item.id); // Doğru öğeyi bulmak için productId ile karşılaştırma yapılmalı

  return (
    <div className="shadow flex rounded-lg p-3 cursor-pointer hover:bg-red-50 hover:scale-105 transition duration-300 justify-between">
      <div className="flex flex-col justify-between">
        <h1 className="font-semibold max-w-52">{item.title}</h1>
        <span className="text-gray-500 max-w-72">{item.desc}</span>
        <div className="mt-auto font-semibold ">
          <b className="block text-sm">{item.category} </b>
          <b>{item.price} $</b>
        </div>
      </div>
      <div className="relative">
        <img
          className="w-48 h-48 object-cover rounded-lg"
          src={item.img}
          alt={item.title}
        />
        <button
          onClick={() => handleAdd(item, found)}
          className="absolute bottom-2 end-2 bg-red-500  rounded-full hover:bg-white transition text-white  hover:text-black w-8 h-8 grid place-items-center"
        >
          {found ? <span> {found.amount} </span> : <FaPlus />}
        </button>
      </div>
    </div>
  );
};

export default ProductCart;
