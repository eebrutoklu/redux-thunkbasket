import React from "react";
import Modal from "react-modal";

Modal.setAppElement("#root"); // React uygulamasının root elementini belirtin

const CustomModal = ({ isOpen, handleClose, handleLogin, handleRegister }) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={handleClose}
      contentLabel="Example Modal"
      className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white p-6 rounded-lg shadow-lg"
      overlayClassName="fixed inset-0 bg-black bg-opacity-50"
    >
      <div className="text-center">
        <h2 className="text-xl font-semibold mb-4">You are not logged in!</h2>
        <p className="mb-4">Please log in or register to make payment.</p>
        <div className="flex justify-center gap-4">
          <button
            onClick={handleLogin}
            className="border w-20 border-red-500 py-1 px-3 rounded text-red-500 hover:text-white hover:bg-red-500 transition "
          >
            Log In
          </button>
          <button
            onClick={handleRegister}
            className="border w-20 0 py-1 px-3 bg-red-500 border-red-500  rounded text-white hover:text-red-500 hover:bg-opacity-15 transition "
          >
            Register
          </button>
        </div>
      </div>
    </Modal>
  );
};

export default CustomModal;
