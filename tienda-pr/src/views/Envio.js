import React, { useState, useRef } from "react";
import "../css/envio.css";
import { useNavigate } from "react-router-dom";

import { FiX } from "react-icons/fi";
import { BsFillPlusCircleFill } from "react-icons/bs";
import { BsFillDashCircleFill } from "react-icons/bs";
import { BiCurrentLocation } from "react-icons/bi";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  GoogleAuthProvider,
  signInWithPopup,
  FacebookAuthProvider,
} from "@firebase/auth";
import { MdKeyboardArrowLeft } from "react-icons/md";
import { auth, db } from "../config/fbconfig";

import ObtenerProductos from "./ObtenerCarrito";

import prod1 from "../multimedia/prod1.JPG";
import logo from "../multimedia/Logo.png";

import Enviaing from "./Enviaing";

import Swal from "sweetalert2";

const Tienda = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState({});
  onAuthStateChanged(auth, (currentUser) => {
    setUser(currentUser);
  });
  //   const [cantidad, setCantidad] = useState(1);
  //   const [cantidad2, setCantidad2] = useState(1);
  //   const [subTotal, setSubtotal] = useState(0);
  //   const [envio, setEnvio] = useState(0);
  //   const [total, setTotal] = useState(0);
  const [data, setData] = useState([
    {
      id: "",
      nombre: "",
      imagen: "",
      descripcion: "",
      precio: 3,
      precioId: "",
    },
  ]);
  const [flag, setFlag] = useState(false);
  //   const Aumentar = (cant, setCant) => {
  //     setCant(cant + 1);
  //   };
  //   const Disminuir = (cant, setCant) => {
  //     if (cant > 1) {
  //       setCant(cant - 1);
  //     }
  //   };

  //   const mostrar = () => {
  //     if (flag) {
  //       return <div></div>;
  //     }
  //   };

  const pagar = (e) => {
    e.preventDefault();
    if (user) {
      navigate("/payments/" + "price_1L50FtAUDqNuV9CvLBC0i8ME");
    } else {
      Swal.fire({
        icon: "error",
        title: "No tiene sesión iniciada",
        text: "Por favor inicie sesión para continuar",
      }).then(() => {
        window.location = "/Cuenta/LogIn";
      });
    }
  };

  const [totalR, setTotalR] = useState(0);

  return (
    <div className="EnvioContainer">
      <div className="informacion">
        <div className="contenidoEnvio">
          <div>
            <form className="formEnvio">
              <div>
                <div className="correoEnvio">
                  <div className="tituloEnvio">
                    <div>
                      <h2>Información de contacto:</h2>
                      <h3>
                        Correo:
                        {user?.email ??
                          "invalido,Logueate para pasar a el Pago"}
                      </h3>
                    </div>
                  </div>
                </div>
                <div className="infoEnvio">
                  <div className="tituloEnvio">
                    <h2>Dirección</h2>
                  </div>
                  <div>
                    <div className="campoDatosEnvio">
                      <div>
                        <div className="divCampo c1">
                          <div>
                            <label>Primer nombre*</label>
                            <input placeholder="Primer nombre*"></input>
                          </div>
                        </div>
                        <div className="divCampo c1">
                          <div>
                            <label>Apellidos*</label>
                            <input placeholder="Apellidos*"></input>
                          </div>
                        </div>
                        <div className="divCampo">
                          <div>
                            <label>Dirección*</label>
                            <input placeholder="Dirección*"></input>
                          </div>
                        </div>
                        <div className="divCampo">
                          <div>
                            <label>Departamento (opcional)</label>
                            <input placeholder="Departamento (opcional)"></input>
                          </div>
                        </div>
                        <div className="divCampo">
                          <div>
                            <label>Ciudad*</label>
                            <input placeholder="Ciudad*"></input>
                          </div>
                        </div>
                        <div className="divCampo">
                          <div>
                            <label>Estado</label>
                            <input placeholder="Estado"></input>
                          </div>
                        </div>
                        <div className="divCampo c1">
                          <div>
                            <label>ZIP*</label>
                            <input placeholder="ZIP*"></input>
                          </div>
                        </div>
                        <div className="divCampo c1">
                          <div>
                            <label>Telefono*</label>
                            <input placeholder="Telefono*"></input>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="finalEnvio">
                  <a href="/MiCarrito">
                    <MdKeyboardArrowLeft className="flechaEnvio" /> Regresar al
                    carrito
                  </a>
                  <button onClick={(e) => pagar(e)}>
                    <span>Continuar</span>
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div className="mostrarProdsEnvio">
        <div>
          <div>
            <div className="resumenOrdenEnvio">
              <div className="secProdsEnvio">
                <Enviaing totalR={totalR} setTotalR={setTotalR} />
              </div>
              <div className="secPreciosEnvio">
                <table className="tablaPreciosEnvio">
                  <tbody>
                    <tr>
                      <th className="subTotalEnvio">Subtotal:</th>
                      <td className="precioSubTotalEnvio">
                        <span>${totalR}</span>
                      </td>
                    </tr>
                    <tr>
                      <th className="envioEnvio">Envio:</th>
                      <td className="precioEnvioEnvio">
                        <span>Calculado en el siguiente paso</span>
                      </td>
                    </tr>
                  </tbody>
                  <tfoot>
                    <tr>
                      <th className="totalEnvio">
                        <span>Total: </span>
                      </th>
                      <td className="precioTotalEnvio">
                        <span>${totalR}</span>
                      </td>
                    </tr>
                  </tfoot>
                </table>
              </div>
            </div>
          </div>
        </div>
        <div className="logoEnvio">
          <img src="https://firebasestorage.googleapis.com/v0/b/pr-nutrition.appspot.com/o/Logo.png?alt=media&token=28787aa8-3cdb-4c68-b1bf-75bd9bbd8a64" />
        </div>
      </div>
    </div>
  );
};

export default Tienda;
