import React, { useState, useRef } from "react";
import "../css/envio.css";
import { useNavigate } from "react-router-dom";

import { FiX } from "react-icons/fi";
import { BsFillPlusCircleFill } from "react-icons/bs";
import { BsFillDashCircleFill } from "react-icons/bs";
import { BiCurrentLocation } from "react-icons/bi";

import { MdKeyboardArrowLeft } from "react-icons/md";

import ObtenerProductos from "./ObtenerCarrito";

import prod1 from "../multimedia/prod1.JPG";
import logo from "../multimedia/Logo.png";

const Tienda = () => {
  const navigate = useNavigate();
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
      precio: 0,
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

  const pagar = () => {
    if (flag) {
      navigate("/payments/" + data[0].precioId);
    }
  };

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
                      <h3>correo@ejemplo.com</h3>
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
                  <button onClick={() => pagar()}>
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
                <div className="prodEnvio">
                  <table className="tablaProdEnvip">
                    <tbody>
                      <tr>
                        <td className="imagenProdEnvio">
                          <div className="prodEnvio-thumbnail">
                            <div className="imgProdEnvio">
                              <img src={prod1} />
                            </div>
                            <span className="cantidadProdEnvio">1</span>
                          </div>
                        </td>
                        <tn className="nombreProdEnvio">
                          <span>Nombre</span>
                        </tn>
                        <tn className="precioProdEnvio">
                          <span>$0.00</span>
                        </tn>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div className="prodEnvio">
                  <table className="tablaProdEnvip">
                    <tbody>
                      <tr>
                        <td className="imagenProdEnvio">
                          <div className="prodEnvio-thumbnail">
                            <div className="imgProdEnvio">
                              <img src={prod1} />
                            </div>
                            <span className="cantidadProdEnvio">1</span>
                          </div>
                        </td>
                        <tn className="nombreProdEnvio">
                          <span>Nombre</span>
                        </tn>
                        <tn className="precioProdEnvio">
                          <span>$0.00</span>
                        </tn>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              <div className="secPreciosEnvio">
                <table className="tablaPreciosEnvio">
                  <tbody>
                    <tr>
                      <th className="subTotalEnvio">Subtotal:</th>
                      <td className="precioSubTotalEnvio">
                        <span>$0.00</span>
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
                        <span>$0.00</span>
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
          <div>
            Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum{" "}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tienda;
