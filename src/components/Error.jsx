import React from "react";
import { TiWarning } from "react-icons/ti";
const Error = ({ message, retry }) => {
  return (
    <>
      <div className="bg-red-500 p-5 rounded text-white my-10 flex gap-4 items-center">
        <TiWarning className="text-5xl" />
        <div className="font-semibold">
          <h1>We are sad. There is a problem.</h1>
          <p>{message} </p>
        </div>
      </div>
      <div className="flex justify-center">
        <button
          onClick={retry}
          className="border px-3 py-1 rounded font-semibold hover:bg-gray-100 "
        >
          retry
        </button>
      </div>
    </>
  );
};

export default Error;
