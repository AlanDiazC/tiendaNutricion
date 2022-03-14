import React, { useState, useRef } from "react";
import "../css/tienda.css";

import { FaShoppingCart } from "react-icons/fa";

import logo from "../multimedia/Logo.png";

const Tienda = () => {
  return (
    <div className="Tienda">
      <div className="producto producto1">
        <h1 className="nombreProd">Nombre</h1>
        <img className="imgProd" src={logo} />
        <div className="datosProd">
          <h2 className="precioProd">$ 000.00</h2>
          <h3>
            <FaShoppingCart className="prodCarro" />
          </h3>
        </div>
      </div>
      <div className="producto">
        <h1 className="nombreProd">Nombre</h1>
        <img className="imgProd" src={logo} />
        <div className="datosProd">
          <h2 className="precioProd">$ 000.00</h2>
          <h3>
            <FaShoppingCart className="prodCarro" />
          </h3>
        </div>
      </div>
      <div className="producto">
        <h1 className="nombreProd">Nombre</h1>
        <img className="imgProd" src={logo} />
        <div className="datosProd">
          <h2 className="precioProd">$ 000.00</h2>
          <h3>
            <FaShoppingCart className="prodCarro" />
          </h3>
        </div>
      </div>
    </div>
  );
};

export default Tienda;
