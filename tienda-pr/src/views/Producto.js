import React, { useState, useRef } from "react";
import "../css/producto.css";

import prod1 from "../multimedia/prod1.png";

import { BsFillPlusCircleFill } from "react-icons/bs";
import { BsFillDashCircleFill } from "react-icons/bs";

const Contacto = () => {
  const [cantidad, setCantidad] = useState(1);

  const Aumentar = () => {
    setCantidad(cantidad + 1);
  };
  const Disminuir = () => {
    if (cantidad > 1) {
      setCantidad(cantidad - 1);
    }
  };

  return (
    <div>
      <div className="Producto">
        <img className="imgProdInd" src={prod1} />
        <h1 className="tituloProdInd">Nombre</h1>
        <h2 className="precioProdInd">$ 000.00</h2>
        <p className="cuerpoTextoHome">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s
        </p>
        <div className="cantidadProdInd">
          <span className="cantProdInd">Cantidad: </span>
          <a className="btnCantProdInd" onClick={() => Disminuir()}>
            <BsFillDashCircleFill />
          </a>
          <span className="cantAgregar">{cantidad}</span>
          {/* <input className="cantAgregar" type="text" value={cantidad} onChange={(e) => setCantidad(e)} /> */}
          <a className="btnCantProdInd" onClick={() => Aumentar()}>
            <BsFillPlusCircleFill />
          </a>
        </div>
        <button className="agregarCarro">Agregar al carrito</button>
      </div>
    </div>
  );
};

export default Contacto;
