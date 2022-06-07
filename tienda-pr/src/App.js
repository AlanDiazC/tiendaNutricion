import React, { useState, useRef } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import Payment from "./views/payment";
import Navbar from "./views/navbar";
// import Contacto from "./views/Contacto";
import Homepage from "./views/Homepage";
import AboutMe from "./views/AboutMe";
// import Tienda from "./views/Tienda";
// import SignUP from "./views/LogIn";
// import Carrito from "./views/Carrito";
// import LogIn from "./views/LogIn";
// import MiCuenta from "./views/MiCuenta";
// import Producto from "./views/Producto";
// import Footer from "./views/Footer";
// import PuenteCuenta from "./views/PuenteCuenta";
// import PuenteCarrito from "./views/PuenteCarrito";
import QnA from "./views/Q&A.js";

const App = () => {
  return (
    <div>
      <header>
        <Navbar />
      </header>

      <Router>
        <Routes>
          {/* <Route path="/Contacto" element={<Contacto />} />
          <Route path="/signUp" element={<PuenteCuenta />} />
          <Route path="/payments/:idPrecio" element={<Payment />} />
          <Route path="/Tienda" element={<Tienda />} />
          <Route path="/MiCarrito" element={<PuenteCarrito />} />
          <Route path="LogIn" element={<LogIn />} />
          <Route path="/MiCuenta" element={<PuenteCuenta />} />
          <Route path="/Producto/:idProd" element={<Producto />} /> */}
          <Route path="/QnA" element={<QnA />} />
          <Route path="/SobreNosotros" element={<AboutMe />} />
          <Route path="/" element={<Homepage />} />
        </Routes>
      </Router>

      {/* <Footer /> */}
    </div>
  );
};

export default App;
