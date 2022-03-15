import React, { useState, useRef } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Payment from "./views/payment";
import Navbar from "./views/navbar";
import Contacto from "./views/Contacto";
import Homepage from "./views/Homepage";
import AboutMe from "./views/AboutMe";
import Tienda from "./views/Tienda";
import { auth, db } from "../config/fbinit";
import Policia from "./views/policia";
import { collection, addDoc, getDocs, query, where } from "@firebase/firestore";
const App = () => {
const [poli, setPoli] = useState(false);
const realizarPago = async() =>{
  
  const docRef = await db
  .collection('clientes')
  .doc(currentUser.uid)
  .collection("checkout_sessions")
  .add({
    mode: "payment",
    price: "price_1GqIC8HYgolSBA35zoTTN2Zl", // One-time price created in Stripe
    success_url: window.location.origin,
    cancel_url: window.location.origin,
  });



}

const revision =()=>{
if (poli == true){

  return (
    <div>
      
      <header>
        <Navbar />
      </header>

      <Router>
        <Routes>
          <Route path="/Contacto" element={<Contacto />} />

          <Route path="/SobreNosotros" element={<AboutMe />} />
          <Route path="/payments" element={<Payment />} />
          <Route path="/Tienda" element={<Tienda />} />
          <Route path="/" element={<Homepage />} />
        </Routes>
      </Router>
    </div>
  );

  
}

}



  return (
    <div>
      
      <header>
        <Navbar />
      </header>

      <Router>
        <Routes>
          <Route path="/Contacto" element={<Contacto />} />

          <Route path="/SobreNosotros" element={<AboutMe />} />
          <Route path="/payments" element={<Payment />} />
          <Route path="/Tienda" element={<Tienda />} />
          <Route path="/" element={<Homepage />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
