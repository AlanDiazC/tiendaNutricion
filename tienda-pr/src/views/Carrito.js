import React, { useState, useRef } from "react";
import "../css/carrito.css";

import prod1 from "../multimedia/prod1.png";
import prod2 from "../multimedia/prod2.png";

import { FiX } from "react-icons/fi";
import { BsFillPlusCircleFill } from "react-icons/bs";
import { BsFillDashCircleFill } from "react-icons/bs";
import { BiCurrentLocation } from "react-icons/bi";

const Tienda = () => {
  const [cantidad, setCantidad] = useState(1);
  const [cantidad2, setCantidad2] = useState(1);

  const Aumentar = (cant, setCant) => {
    setCant(cant + 1);
  };
  const Disminuir = (cant, setCant) => {
    if (cant > 1) {
      setCant(cant - 1);
    }
  };

  return (
    <div className="Carro">
      <h1 className="carroTitulo">Mi Carrito</h1>
      <div className="prodCarro">
        <img className="imgCarro" src={prod1} />
        <div className="datosCarro">
          <span className="nombreProdCarro">Nombre</span>
          <br />
          <a
            className="btnCantCarro"
            onClick={() => Disminuir(cantidad, setCantidad)}
          >
            <BsFillDashCircleFill />
          </a>
          <span className="cantCarro">{cantidad}</span>
          <a
            className="btnCantCarro"
            onClick={() => Aumentar(cantidad, setCantidad)}
          >
            <BsFillPlusCircleFill />
          </a>
        </div>
        <div className="datosCarro">
          <p className="xCarro">
            <FiX />
          </p>
          <span className="precioCarro">$ 000.00</span>
        </div>
      </div>
      <div className="prodCarro">
        <img className="imgCarro" src={prod2} />
        <div className="datosCarro">
          <span className="nombreProdCarro">Nombre</span>
          <br />
          <a
            className="btnCantCarro"
            onClick={() => Disminuir(cantidad2, setCantidad2)}
          >
            <BsFillDashCircleFill />
          </a>
          <span className="cantCarro">{cantidad2}</span>
          <a
            className="btnCantCarro"
            onClick={() => Aumentar(cantidad2, setCantidad2)}
          >
            <BsFillPlusCircleFill />
          </a>
        </div>
        <div className="datosCarro">
          <p className="xCarro">
            <FiX />
          </p>
          <span className="precioCarro">$ 000.00</span>
        </div>
      </div>
      <div className="direcCarro">
        <h2>Dirección de envio</h2>
        <button>
          <BiCurrentLocation />
        </button>
      </div>
      <div className="calcPrecio">
        <span>Subtotal: $000.00</span>
      </div>
      <div className="calcPrecio precioEnv">
        <span>Envío: $000.00</span>
      </div>
      <div className="totalPrecio">
        <span>Total: $000.00</span>
      </div>
      <div className="btnCarro">
        <button>Realizar pago</button>
      </div>
    </div>
  );
};

export default Tienda;
