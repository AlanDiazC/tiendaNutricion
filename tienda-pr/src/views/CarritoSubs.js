import React, { useState } from "react";
import "../css/carrito.css";
import { useNavigate } from "react-router-dom";

import Cart from "./CartSubs";

import Swal from "sweetalert2";

import Envio from "./EnvioSubs";

import { auth } from "../config/fbconfig";

import { onAuthStateChanged } from "@firebase/auth";

import ObtenerProd from "./ObtenerProdEspecificoSubs";
import { useParams } from "react-router-dom";

const CarritoSubs = () => {
  const { idProd } = useParams();
  const [data, setData] = useState({
    producto0: {
      nombre: "",
      imagen: "",
      descripcion: "",
      precio: 0,
      precioId: "",
      uso: "",
      tabla: "",
      articulos: "",
      beneficiosAdulto: "",
      beneficiosAtl: "",
      beneficiosPrinc: "",
      preguntas: "",
      quantity: 0,
    },
  });
  const [flag, setFlag] = useState(false);

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

  const [totalR, setTotalR] = useState(0);

  return (
    <div className="CarroContainer">
      <ObtenerProd
        setData={setData}
        data={data}
        setFlag={setFlag}
        id={idProd}
      />
      <div>
        <section className="secCarrito">
          <div className="container">
            <div className="carrito">
              <form>
                <div className="columnasCarrito">
                  <div className="columCarro">
                    <div className="contenidoColumna">
                      <h4>Tu Carrito</h4>
                      <Cart
                        totalR={totalR}
                        setTotalR={setTotalR}
                        producto={data.producto0}
                        setProducto={setData}
                      />
                    </div>
                  </div>
                  <div className="columCarro">
                    <div className="secColMedio">
                      <h4>Tu Orden</h4>
                      <p>
                        <span className="carroSubTotal">Subtotal:</span>
                        <span className="carroSubTotalPrecio">$ {totalR}</span>
                      </p>
                      <a href={"/Envio/" + idProd + "/" + (data.quantity + 1)}>
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

export default CarritoSubs;
