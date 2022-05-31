import React, { useState, useRef } from "react";
import "../css/homepage.css";

import { FaShoppingCart } from "react-icons/fa";

import prod2 from "../multimedia/prod2.JPG";
import prod1 from "../multimedia/prod1.JPG";

import ObtenerProductos from "./ObtenerProductos";

const Homepage = () => {
  const [data, setData] = useState([
    {
      id: "",
      nombre: "",
      imagen: "",
      descripcion: "",
      precio: 0,
    },
  ]);
  const [flag, setFlag] = useState(false);
  const mostrar = () => {
    if (flag) {
      const productos = [];
      for (let i = 0; i < data.length; i++) {
        productos.push(
          <div className="prodDest" key={i}>
            <img className="imgDest" src={data[i].imagen} />
            <div className="datosDest">
              <h1 className="nombreDest">{data[i].nombre}</h1>
              <h3>
                <FaShoppingCart className="destCarro" />
              </h3>
            </div>
          </div>
        );
      }
      return productos;
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
        <h1 className="tituloTextoHome">PR Reds Unstoppable Powder</h1>
        <p className="cuerpoTextoHome">
          PR REDS encontró la forma de asegurar la concentración de nutrientes
          propios del betabel en su forma natural. Se trata de un suplemento
          creado para mejorar tu rendimiento físico y mental.
        </p>
        <img className="imgTextoHome" src={prod1} />
      </div>
      <div className="textoHome">
        <h1 className="tituloTextoHome">PR Fuel</h1>
        <img className="imgTextoHome" src={prod2} />
        <p className="cuerpoTextoHome">
          Buscamos brindar al atleta el sustrato energético necesario durante la
          actividad física intensa con la finalidad de retrasar la fatiga y así
          mejorar el rendimiento durante los entrenamientos y competencias, de
          igual forma darte los electrolitos que se pierden durante.
        </p>
      </div>
    </div>
  );
};

export default Homepage;
