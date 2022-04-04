import React, { useState, useRef } from "react";
import "../css/producto.css";

import prod1 from "../multimedia/prod1.png";

import { BsFillPlusCircleFill } from "react-icons/bs";
import { BsFillDashCircleFill } from "react-icons/bs";

import { useParams } from "react-router-dom";

import ObtenerProd from "./ObtenerProdEspecifico";

const Producto = () => {
  const { idProd } = useParams();
  const [data, setData] = useState({
    producto0: {
      nombre: "",
      imagen: "",
      descripcion: "",
      precio: 0,
      precioId: "",
    },
  });
  const [flag, setFlag] = useState(false);

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
        <ObtenerProd
          setData={setData}
          data={data}
          setFlag={setFlag}
          id={idProd}
        />
        <img className="imgProdInd" src={data.producto0.imagen} />
        <h1 className="tituloProdInd">{data.producto0.nombre}</h1>
        <h2 className="precioProdInd">$ {data.producto0.precio}</h2>
        <p className="cuerpoTextoHome">{data.producto0.descripcion}</p>
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

export default Producto;
