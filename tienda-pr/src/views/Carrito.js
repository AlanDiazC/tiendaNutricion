import React, { useState, useRef } from "react";
import "../css/carrito.css";
import { useNavigate } from "react-router-dom";

import { FiX } from "react-icons/fi";
import { BsFillPlusCircleFill } from "react-icons/bs";
import { BsFillDashCircleFill } from "react-icons/bs";
import { BiCurrentLocation } from "react-icons/bi";

import ObtenerProductos from "./ObtenerCarrito";

import prod1 from "../multimedia/prod1.JPG";
import Cart from "./Cart";
import { BsFillTrashFill } from "react-icons/bs";
import { BsPlus } from "react-icons/bs";
import { BsDash } from "react-icons/bs";
const Tienda = () => {
  const navigate = useNavigate();
  const [cantidad, setCantidad] = useState(1);
  const [cantidad2, setCantidad2] = useState(1);
  const [subTotal, setSubtotal] = useState(0);
  const [envio, setEnvio] = useState(0);
  const [total, setTotal] = useState(0);

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
