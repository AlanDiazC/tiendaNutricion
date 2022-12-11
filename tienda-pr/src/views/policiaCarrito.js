import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../config/fbconfig";
import { onAuthStateChanged } from "@firebase/auth";
import Swal from "sweetalert2";

const PoliciaCarrito = ({ setFlag, cart }) => {
  const [user, setUser] = useState({});
  const navigate = useNavigate();

  onAuthStateChanged(auth, (currentUser) => {
    setUser(currentUser);
  });

  if (cart.length > 0) {
    setFlag(true);
  } else {
    Swal.fire({
      icon: "question",
      title: "Parece que su carrito esta vacio",
      text: "Vaya a revisar nuestros productos",
      confirmButtonText: "Ir a la tienda",
    }).then(() => {
      window.location.href = "/Tienda";
    });
  }
  return null;
};

export default PoliciaCarrito;
