import React, { useState, useRef } from "react";
import { useForm } from "react-hook-form";
import "../css/envio.css";
import { useNavigate } from "react-router-dom";
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

import Enviaing from "./Enviaing";

import Swal from "sweetalert2";

const Envio = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState({});
  onAuthStateChanged(auth, (currentUser) => {
    setUser(currentUser);
  });

  const { register, handleSubmit } = useForm();

  const pagar = (e) => {
    //e.preventDefault();
    if (user) {
      navigate("/payments/" + "price_1L50FtAUDqNuV9CvLBC0i8ME");
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
    <div className="EnvioContainer">
      <div className="informacion">
        <div className="contenidoEnvio">
          <div>
            <form className="formEnvio" onSubmit={handleSubmit(pagar)}>
              <div>
                <div className="correoEnvio">
                  <div className="tituloEnvio">
                    {user?.email && (
                      <div>
                        <h3>Correo: {user.email}</h3>
                      </div>
                    )}
                  </div>
                </div>
                <span className="aviso">
                  Los campos requeridos estan marcados por *
                </span>
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
                            <input
                              placeholder="Primer nombre*"
                              {...register("primerNombre")}
                              required
                            ></input>
                          </div>
                        </div>
                        <div className="divCampo c1">
                          <div>
                            <label>Apellidos*</label>
                            <input
                              placeholder="Apellidos*"
                              {...register("apellidos")}
                              required
                            ></input>
                          </div>
                        </div>
                        <div className="divCampo">
                          <div>
                            <label>Dirección*</label>
                            <input
                              placeholder="Dirección*"
                              {...register("direccion")}
                              required
                            ></input>
                          </div>
                        </div>
                        <div className="divCampo">
                          <div>
                            <label>Departamento (opcional)</label>
                            <input
                              placeholder="Departamento (opcional)"
                              {...register("departamento")}
                            ></input>
                          </div>
                        </div>
                        <div className="divCampo">
                          <div>
                            <label>Ciudad*</label>
                            <input
                              placeholder="Ciudad*"
                              {...register("ciudad")}
                              required
                            ></input>
                          </div>
                        </div>
                        <div className="divCampo">
                          <div>
                            <label>Estado</label>
                            <input
                              placeholder="Estado"
                              {...register("estado")}
                            ></input>
                          </div>
                        </div>
                        <div className="divCampo c1">
                          <div>
                            <label>ZIP*</label>
                            <input
                              placeholder="ZIP*"
                              {...register("zip")}
                              required
                            ></input>
                          </div>
                        </div>
                        <div className="divCampo c1">
                          <div>
                            <label>Telefono*</label>
                            <input
                              placeholder="Telefono*"
                              {...register("telefono")}
                              required
                            ></input>
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
                  <button type="submit">
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

export default Envio;
