import React, { useState, useRef } from "react";
import "../css/tienda.css";

import prod1 from "../multimedia/prod1.png";
import prod2 from "../multimedia/prod2.png";
import prod3 from "../multimedia/prod3.png";

const Tienda = () => {
  return (
    <div className="Tienda">
      <div className="producto producto1">
        <h1 className="nombreProd">Nombre</h1>
        <img className="imgProd" src={prod1} />
        <div className="datosProd">
          <h2 className="precioProd">$ 000.00</h2>
          <a className="verMasProd" href="/Producto">
            Ver más
          </a>
        </div>
      </div>
      <div className="producto">
        <h1 className="nombreProd">Nombre</h1>
        <img className="imgProd" src={prod2} />
        <div className="datosProd">
          <h2 className="precioProd">$ 000.00</h2>
          <a className="verMasProd" href="/Producto">
            Ver más
          </a>
        </div>
      </div>
      <div className="producto">
        <h1 className="nombreProd">Nombre</h1>
        <img className="imgProd" src={prod3} />
        <div className="datosProd">
          <h2 className="precioProd">$ 000.00</h2>
          <a className="verMasProd" href="/Producto">
            Ver más
          </a>
        </div>
      </div>
    </div>
  );
};

export default Tienda;
