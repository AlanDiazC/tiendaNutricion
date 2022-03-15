import React, { useState, useRef } from "react";
import "../css/homepage.css";
import { auth, db } from "../config/fbinit";
import Policia from "./views/policia";
import { collection, addDoc, getDocs, query, where } from "@firebase/firestore";

const Pagos = () => {

  

const [poli, setPoli] = useState(false);
const realizarPago = async() =>{
  
  const docRef = await db
  .collection('clientes')
  .doc(auth.currentUser)
  .collection("checkout_sessions")
  .add({
    mode: "payment",
    price: "price_1GqIC8HYgolSBA35zoTTN2Zl", // One-time price created in Stripe
    success_url: window.location.origin,
    cancel_url: window.location.origin,
  });
}
const revision = async() =>{
if(poli==true){

    return (
      <div>
        <div className="">
            Pagos
        </div>
      </div>
    );

}else{ return(<div>
  Loading
</div>)}
  
};

  return (
    <div>
      
      <Policia poli={poli} setPoli={setPoli} />
      <div>{revision()}</div>

    </div>
  );
};

export default Pagos;
