import React, { useState, useEffect } from "react";
import "../css/boton.css";
import { auth, db } from "../config/fbconfig";
import Policia from "./policia";
import { useSelector, useDispatch } from "react-redux";

import {
  collection,
  addDoc,
  onSnapshot,
  doc,
  getDoc,
  // getDocs,
  // query,
  // where,
} from "@firebase/firestore";

import { useParams } from "react-router-dom";
import { BsReverseBackspaceReverse } from "react-icons/bs";
import { async } from "@firebase/util";
const Payment = (uid, data) => {
  const { idPrecio } = useParams();
  const [poli, setPoli] = useState(false);
  const dispatch = useDispatch();
  const addition = (acc, currentvalue) => {
    return acc + currentvalue.price * currentvalue.quantity;
  };
  //precio parametro

  const [urlLink, setUrlLink] = useState("");

  //console.log("auth.currentUser", auth.currentUser);  // Test

  useEffect(async () => {
    //console.log(uid);
    let freeShipping = false;
    let address = {};
    let phone_number = "";
    let first_name = "";
    let last_name = "";

    // test
    if (auth?.currentUser?.uid) {
      const docRef = doc(db, `clientes/${auth.currentUser.uid}`);
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        //console.log("Document data:", docSnap.data());
        //console.log("Document data:", docSnap.data().freeShipping);
        if (docSnap.data().freeShipping == true) {
          freeShipping = true;
        }
        address = docSnap.data().address;
        phone_number = docSnap.data().phone_number;
        first_name = docSnap.data().first_name;
        last_name = docSnap.data().last_name;
      } else {
        //console.log("No such document")
      }
    }
    //Test
    const list = [];
    var envio = 0;
    let total_price = 0;
    data.forEach((element) => {
      list.push({
        price: element.producto0.priceID, // RECURRING_PRICE_ID
        quantity: element.producto0.quantity,
      });
      total_price += element.producto0.precio * element.producto0.quantity;
      envio += element.producto0.quantity * 1.5;
    });
    var tosend;
    switch (envio) {
      case 1:
      case 1.5:
      case 2: // envio med
        tosend = "price_1MIMNnJZ8SHfQTCmzSfoFO7g";
        break;

      case 3: // envio large
        tosend = "price_1MIMWLJZ8SHfQTCmrvL2eQV8";
        break;

      case 4.5: // envio xllarge
        tosend = "price_1MIMWUJZ8SHfQTCmUeC4Gh8t";
        break;

      default: //Envio xll
        tosend = "price_1MIMWkJZ8SHfQTCmYBUsu02T";
        break;
    }
    //Incluimos el costo del envio
    if (freeShipping || total_price >= 1000) {
      list.push({
        price: "price_1MIMW8JZ8SHfQTCm1BvW9KLw", //freeShipping
        quantity: 1,
      });
    } else {
      list.push({
        price: tosend, // RECURRING_PRICE_ID
        quantity: 1,
      });
    }
    //console.log(list); // Test

    if (auth?.currentUser?.uid) {
      const docRef = await addDoc(
        collection(db, `clientes/${auth.currentUser.uid}/checkout_sessions`),
        {
          line_items: list, //precio parametro
          mode: "subscription",
          success_url: window.location.origin,
          cancel_url: window.location.origin,
          allow_promotion_codes: true,
          phone_number_collection: { enabled: true },
          metadata: {
            first_name: first_name,
            last_name: last_name,
            phone_number: phone_number,
            ...address,
          },
          custom_text: {
            shipping_address: address.line1 + " " + address.country,
          },
          customer_details: {
            address: address,
            //email: "",
            name: first_name + " " + last_name,
            phone: phone_number,
          },

          shipping_address_collection: {
            enabled: true,
            allowed_countries: ["MX"],
          },
        }
      );
      onSnapshot(docRef, (snap) => {
        const { error, url } = snap.data();
        if (error) {
          // Show an error to your customer and
          // inspect your Cloud Function logs in the Firebase console.
          alert(`An error occured: ${error.message}`);
        }
        if (url) {
          setUrlLink(url);
          // We have a Stripe Checkout URL, let's redirect.
          window.location.assign(url);
        }
      });
    }
  }, [uid]);

  return urlLink;
};

export default Payment;