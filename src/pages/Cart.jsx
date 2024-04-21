// Cart.jsx
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Container from "../components/Container";
import { getCart } from "../redux/actions/basketActions";
import Loader from "../components/Loader";
import Error from "../components/Error";
import CartItem from "../components/CartItem";
import { Link } from "react-router-dom";
import Modal from "../components/Modal"; // Modal bileşenini import edin

const Cart = () => {
  const dispatch = useDispatch();
  const cart = useSelector((store) => store.cart);
  const [totalPrice, setTotalPrice] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false); // Modalın açık/kapalı durumunu tutar

  useEffect(() => {
    dispatch(getCart());
  }, []);

  useEffect(() => {
    // Sepetteki toplam fiyatı güncelle
    const total = cart.data.reduce((accumulator, item) => {
      return accumulator + item.price * item.amount;
    }, 0);
    setTotalPrice(total);
  }, [cart.data]);

  const handlePayNow = () => {
    // Ödeme yap butonuna basıldığında modalı aç
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    // Modalı kapat
    setIsModalOpen(false);
  };

  return (
    <Container>
      <h1 className="text-2xl font-semibold mb-5">CART </h1>

      <div>
        {cart.isLoading ? (
          <Loader />
        ) : cart.error ? (
          <Error />
        ) : cart.data.length > 0 ? (
          <div>
            {cart.data.map((item) => (
              <CartItem key={item.id} data={item} />
            ))}
          </div>
        ) : (
          <p className="flex flex-col items-center">
            There are no items in your cart.{" "}
            <Link
              to={"/"}
              className="mt-2 border shadow px-2 py-1 rounded hover:bg-gray-200"
            >
              {" "}
              add product
            </Link>
          </p>
        )}
      </div>

      {cart.data.length > 0 && (
        <div>
          <div className="mt-5 flex justify-end">
            <p className="font-bold">Total Price: {totalPrice.toFixed(2)} $</p>
          </div>
          <div className="mt-5 flex justify-end">
            <button
              onClick={handlePayNow}
              className="bg-red-500 text-white py-2 px-4 rounded-lg hover:bg-red-600"
            >
              Pay Now
            </button>
          </div>
        </div>
      )}

      {/* Modalı render et */}
      <Modal isOpen={isModalOpen} handleClose={handleCloseModal} />
    </Container>
  );
};

export default Cart;
