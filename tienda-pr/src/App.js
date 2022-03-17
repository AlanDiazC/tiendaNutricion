import React, { useState, useRef } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Payment from "./views/payment";
import Navbar from "./views/navbar";
import Contacto from "./views/Contacto";
import Homepage from "./views/Homepage";
import AboutMe from "./views/AboutMe";
import Tienda from "./views/Tienda";
import LogIn from "./views/LogIn";
import Producto from "./views/Producto";
import Carrito from "./views/Carrito";
import MiCuenta from "./views/MiCuenta";

const App = () => {
  return (
    <div>
      <header>
        <Navbar />
      </header>

      <Router>
        <Routes>
          <Route path="/SobreNosotros" element={<AboutMe />} />
          <Route path="/payments" element={<Payment />} />
          <Route path="/Tienda" element={<Tienda />} />
          <Route path="/Producto" element={<Producto />} />
          <Route path="/Contacto" element={<Contacto />} />
          <Route path="/SignUp" element={<LogIn />} />
          <Route path="/MiCarrito" element={<Carrito />} />
          <Route path="/MiCuenta" element={<MiCuenta />} />
          <Route path="/" element={<Homepage />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
