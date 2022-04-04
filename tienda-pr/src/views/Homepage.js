import React, { useState, useRef } from "react";
import "../css/homepage.css";

import { FaShoppingCart } from "react-icons/fa";

import prod1 from "../multimedia/prod1.png";
import prod2 from "../multimedia/prod2.png";
import prod3 from "../multimedia/prod3.png";

import ObtenerProductos from "./ObtenerProductos";

const Homepage = () => {
  const [data, setData] = useState({
    producto0: {
      id: "",
      nombre: "",
      imagen: "",
      descripcion: "",
      precio: 0,
    },
  });
  const [flag, setFlag] = useState(false);
  const mostrar = () => {
    if (flag) {
      return (
        <div>
          <div className="prodDest">
            <img className="imgDest" src={data.producto1.imagen} />
            <div className="datosDest">
              <h2 className="nombreDest">{data.producto1.nombre}</h2>
              <h3>
                <FaShoppingCart className="destCarro" />
              </h3>
            </div>
          </div>
          <div className="prodDest">
            <img className="imgDest" src={data.producto2.imagen} />
            <div className="datosDest">
              <h2 className="nombreDest">{data.producto2.nombre}</h2>
              <h3>
                <FaShoppingCart className="destCarro" />
              </h3>
            </div>
          </div>
        </div>
      );
    }
  };
  return (
    <div className="Homepage">
      <ObtenerProductos setData={setData} data={data} setFlag={setFlag} />
      <div className="prodDestacados">
        <h1 className="destTitulo">Productos Destacados</h1>
        {mostrar()}
      </div>
      <div className="textoHome">
        <h1 className="tituloTextoHome">Lorem Ipsum</h1>
        <p className="cuerpoTextoHome">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s
        </p>
        <img className="imgTextoHome" src={prod3} />
      </div>
      <div className="textoHome">
        <h1 className="tituloTextoHome">Lorem Ipsum</h1>
        <img className="imgTextoHome" src={prod2} />
        <p className="cuerpoTextoHome">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s
        </p>
      </div>
    </div>
  );
};

export default Homepage;
