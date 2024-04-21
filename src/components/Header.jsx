import React from "react";
import { FaShoppingBasket } from "react-icons/fa";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom"; // Link eklemeyi unutmayın
import Container from "./Container";

const Header = () => {
  const cart = useSelector((store) => store.cart);
  const totalItems = cart.data.reduce((total, item) => total + item.amount, 0);

  return (
    <header className="shadow">
      <Container designs={"flex justify-between items-center"}>
        <Link
          to={"/"}
          className="text-red-500 font-bold text-xl font-mono cursor-pointer"
        >
          ThunkBasket
        </Link>
        <div className="flex items-center md:gap-4 gap-1 relative">
          <button className="border w-20 border-red-500 py-1 px-3 rounded text-red-500 hover:text-white hover:bg-red-500 transition ">
            Login
          </button>
          <button className="border w-20 0 py-1 px-3 bg-red-500 border-red-500  rounded text-white hover:text-red-500 hover:bg-opacity-15 transition ">
            Register
          </button>
          <Link
            to={"/cart"}
            className="hover:bg-red-500 hover:bg-opacity-15 rounded-full transition p-2"
          >
            <FaShoppingBasket className="text-red-500 text-2xl" />
            {totalItems > 0 && (
              <span className="absolute top-0 right-0 bg-red-600 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
                {totalItems}
              </span>
            )}
          </Link>
        </div>
      </Container>
    </header>
  );
};

export default Header;
