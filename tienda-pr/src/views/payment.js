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
  getDoc
  // getDocs,
  // query,
  // where,
} from "@firebase/firestore";

import { useParams } from "react-router-dom";
import { BsReverseBackspaceReverse } from "react-icons/bs";
import { async } from "@firebase/util";
//Se necesita modificar para que sea compatible con el carrito
// const Pagos = () => {
//   console.log("Pagos");
//   const { idPrecio } = useParams();
//   const [poli, setPoli] = useState(false);
//   const cart = useSelector((state) => state);
//   const dispatch = useDispatch();
//   const addition = (acc, currentvalue) => {
//     return acc + currentvalue.price * currentvalue.quantity;
//   };
//   const total = cart.reduce(addition, 0);
//   //precio parametro
//   const realizarPago = async () => {
//     const list = [];
//     var envio = 0;
//     cart.forEach((element) => {
//       list.push({
//         price: element.priceID, // RECURRING_PRICE_ID
//         quantity: element.quantity,
//       });
//       envio += (element.quantity * 1.5);
//     });
//     console.log(list);
//     var tosend;
//     switch (envio) {
//       case 1:
//       case 1.5:
//       case 2: // envio med
//         tosend = "price_1LX4ccJZ8SHfQTCm0q1u92ee";
//         break;

//       case 3: // envio large
//         tosend = "price_1LX4cNJZ8SHfQTCmTqrz6YXL";
//         break;

//       case 4.5: // envio xllarge
//         tosend = "price_1LX4c9JZ8SHfQTCmh5oZkt5z";
//         break;

//       default: //Envio xll
//         tosend = "price_1LX4c1JZ8SHfQTCmGHBsY1Ir";
//         break;
//     }
//     //Incluimos el costo del envio
//     list.push({
//       price: tosend, // RECURRING_PRICE_ID
//       quantity: 1,
//     });
//     console.log(list);

//     const docRef = await addDoc(
//       collection(db, `clientes/${auth.currentUser.uid}/checkout_sessions`),
//       {
//         // line_items:
//         // [ //precio parametro
//         //   {
//         //     price: cart[0].priceID,
//         //     quantity: cart[0].quantity,
//         //   },
//         //   {
//         //     price: "price_1LNu34AUDqNuV9CvPC8lLXMX", // RECURRING_PRICE_ID
//         //     quantity: 1,
//         //   },
//         // ], //precio parametro
//         line_items: list, //precio parametro
//         mode: "payment",
//         success_url: window.location.origin,
//         cancel_url: window.location.origin,
//         allow_promotion_codes: true
//       }
//     );
//     /*     const docRef = await db
//     .collection('clientes')
//     .doc(auth.currentUser)
//     .collection('checkout_sessions')
//     .add({
//       line_items: [
//         {
//           price: 'price_1L50FtAUDqNuV9CvLBC0i8ME', // RECURRING_PRICE_ID
//           quantity: 2,
//         },
//         {
//           price: 'price_1L50GBAUDqNuV9CvrDyc0npb', // ONE_TIME_PRICE_ID
//           quantity: 1,
//         },
//       ],
//       success_url: window.location.origin,
//       cancel_url: window.location.origin,
//     }); */
//     onSnapshot(docRef, (snap) => {
//       const { error, url } = snap.data();
//       if (error) {
//         // Show an error to your customer and
//         // inspect your Cloud Function logs in the Firebase console.
//         alert(`An error occured: ${error.message}`);
//       }
//       if (url) {
//         // We have a Stripe Checkout URL, let's redirect.
//         window.location.assign(url);
//       }
//     });
//   };
//   const revision = () => {
//     if (poli === true) {
//       return (
//         <div>
//           <div className="botonPagos">
//             <button onClick={realizarPago}>Pagar</button>
//           </div>
//         </div>
//       );
//     } else {
//       return <div>Loading</div>;
//     }
//   };

//   return (
//     <div>
//       <Policia poli={poli} setPoli={setPoli} />
//       <div>{revision()}</div>
//     </div>
//   );
// };

// export default Pagos;

const Payment = (uid) => {
  const { idPrecio } = useParams();
  const [poli, setPoli] = useState(false);
  const cart = useSelector((state) => state);
  const dispatch = useDispatch();
  const addition = (acc, currentvalue) => {
    return acc + currentvalue.price * currentvalue.quantity;
  };
  const total = cart.reduce(addition, 0);
  //precio parametro

  const [urlLink, setUrlLink] = useState("");

  //console.log("auth.currentUser", auth.currentUser);  // Test

  useEffect(async () => {
    console.log(uid);
    let freeShipping = false;
    // test
    if (auth?.currentUser?.uid) {
      const docRef = doc(db, `clientes/${auth.currentUser.uid}`);
      const docSnap = await getDoc( docRef );
    
      if (docSnap.exists()) {
        //console.log("Document data:", docSnap.data());
        //console.log("Document data:", docSnap.data().freeShipping);
        if (docSnap.data().freeShipping == true){freeShipping = true}
      } else {
        //console.log("No such document")
      }
    }
    //Test
    const list = [];
    var envio = 0;
    cart.forEach((element) => {
      list.push({
        price: element.priceID, // RECURRING_PRICE_ID
        quantity: element.quantity,
      });
      envio += element.quantity * 1.5;
    });
    var tosend;
    switch (envio) {
      case 1:
      case 1.5:
      case 2: // envio med
        tosend = "price_1LX4ccJZ8SHfQTCm0q1u92ee";
        break;

      case 3: // envio large
        tosend = "price_1LX4cNJZ8SHfQTCmTqrz6YXL";
        break;

      case 4.5: // envio xllarge
        tosend = "price_1LX4c9JZ8SHfQTCmh5oZkt5z";
        break;

      default: //Envio xll
        tosend = "price_1LX4c1JZ8SHfQTCmGHBsY1Ir";
        break;
    }
    //Incluimos el costo del envio
    if (freeShipping != true) {
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
          mode: "payment",
          success_url: window.location.origin,
          cancel_url: window.location.origin,
          allow_promotion_codes: true,
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
