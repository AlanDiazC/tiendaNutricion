import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Payment from "./views/payment"
import Navbar from "./views/navbar";
import Contacto from "./views/Contacto";
import Homepage from "./views/Homepage";
import AboutMe from "./views/AboutMe";
const App = () => {
  return (
    <div>
      <header>
        <Navbar />
      </header>

      <Router>
        <Routes>
          
          <Route path="/Contacto" element={<Contacto />} />

          <Route path="/SobreMi" element={<AboutMe />} />
          <Route path="/payments" element={<Payment />} />
          <Route path="/" element={<Homepage />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;