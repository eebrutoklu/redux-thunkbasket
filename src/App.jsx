import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./pages/Main";
import Cart from "./pages/Cart";
import Header from "./components/Header";
import Restaurant from "./pages/Restaurant";

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/restaurant/:id" element={<Restaurant />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
