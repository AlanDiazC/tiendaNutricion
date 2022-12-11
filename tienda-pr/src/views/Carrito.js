import React, { useState } from "react";
import "../css/carrito.css";
import { useNavigate } from "react-router-dom";

import Cart from "./Cart";

import Swal from "sweetalert2";

import Envio from "./Envio";

import { auth, db } from "../config/fbconfig";

import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  GoogleAuthProvider,
  signInWithPopup,
  FacebookAuthProvider,
} from "@firebase/auth";

const Tienda = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState({});
  const [uid, setUid] = useState("");
  onAuthStateChanged(auth, (currentUser) => {
    setUser(currentUser);
  });
  Envio(uid);
  //const { register, handleSubmit } = useForm();

  const pagar = (e) => {
    //e.preventDefault();
    if (user) {
      setUid(auth.currentUser.uid);
    } else {
      Swal.fire({
        icon: "error",
        title: "No tiene sesión iniciada",
        text: "Por favor inicie sesión para continuar",
        confirmButtonText: "Ir a iniciar sesión",
      }).then(() => {
        window.location = "/Cuenta/LogIn";
      });
    }
  };

  const [data, setData] = useState([
    {
      id: "",
      nombre: "",
      imagen: "",
      descripcion: "",
      precio: 0,
      precioId: "",
    },
  ]);
  const [totalR, setTotalR] = useState(0);

  return (
    <div className="CarroContainer">
      {/* <ObtenerProductos
        setData={setData}
        data={data}
        setFlag={setFlag}
        setSubtotal={setSubtotal}
        setEnvio={setEnvio}
        setTotal={setTotal}
      /> */}
      <div>
        <section className="secCarrito">
          <div className="container">
            <div className="carrito">
              <form>
                <div className="columnasCarrito">
                  <div className="columCarro">
                    <div className="contenidoColumna">
                      <h4>Tu Carrito</h4>
                      <Cart totalR={totalR} setTotalR={setTotalR} />
                    </div>
                  </div>
                  <div className="columCarro">
                    <div className="secColMedio">
                      <h4>Tu Orden</h4>
                      <p>
                        <span className="carroSubTotal">Subtotal:</span>
                        <span className="carroSubTotalPrecio">$ {totalR}</span>
                      </p>
                      <a href="/Envio">
                        <button type="button">Continuar al pago</button>
                      </a>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Tienda;
