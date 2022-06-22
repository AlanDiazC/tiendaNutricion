import React, { useState, useRef } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import Payment from "./views/payment";
import Navbar from "./views/navbar";
import Contacto from "./views/Contacto";
import Homepage from "./views/Homepage";
import AboutMe from "./views/AboutMe";
import Tienda from "./views/Tienda";
import SignUp from "./views/SignUp";
import Carrito from "./views/Carrito";
import LogIn from "./views/LogIn";
import MiCuenta from "./views/MiCuenta";
import Producto from "./views/Producto";
import Footer from "./views/Footer";
// import PuenteCuenta from "./views/PuenteCuenta";
// import PuenteCarrito from "./views/PuenteCarrito";
import QnA from "./views/Q&A.js";
import Envio from "./views/Envio.js";

const App = () => {
  return (
    <div>
      <header>
        <style>
          @import
          url('https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@400;600;700;900&display=swap');
        </style>
        <style>
          @import
          url('https://fonts.googleapis.com/css2?family=Russo+One&display=swap');
        </style>
        <Navbar />
      </header>

      <Router>
        <Routes>
          {/*
          <Route path="/signUp" element={<PuenteCuenta />} />
          <Route path="/payments/:idPrecio" element={<Payment />} />
          <Route path="/Producto/:idProd" element={<Producto />} /> 
          <Route path="/MiCuenta" element={<PuenteCuenta />} />
        */}
          <Route path="/MiCuenta" element={<MiCuenta />} />
          <Route path="/Producto/:idProd" element={<Producto />} />
          <Route path="/MiCarrito" element={<Carrito />} />
          <Route path="/Envio" element={<Envio />} />
          <Route path="/Tienda" element={<Tienda />} />
          <Route path="/Contacto" element={<Contacto />} />
          <Route path="/Cuenta/SignUp" element={<SignUp />} />
          <Route path="/Cuenta/LogIn" element={<LogIn />} />
          <Route path="/QnA" element={<QnA />} />
          <Route path="/SobreNosotros" element={<AboutMe />} />
          <Route path="/" element={<Homepage />} />
        </Routes>
      </Router>

      <Footer />
    </div>
  );
};

export default App;
