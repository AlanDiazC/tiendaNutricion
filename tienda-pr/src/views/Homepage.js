import React, { useState, useRef } from "react";
import "../css/homepage.css";

import { FaShoppingCart } from "react-icons/fa";

import prod1 from "../multimedia/prod1.png";
import prod2 from "../multimedia/prod2.png";
import prod3 from "../multimedia/prod3.png";

const Homepage = () => {
  return (
    <div className="Homepage">
      <div className="prodDestacados">
        <h1 className="destTitulo">Productos Destacados</h1>
        <div className="prodDest">
          <img className="imgDest" src={prod1} />
          <div className="datosDest">
            <h2 className="nombreDest">Nombre</h2>
            <h3>
              <FaShoppingCart className="destCarro" />
            </h3>
          </div>
        </div>
        <div className="prodDest">
          <img className="imgDest" src={prod2} />
          <div className="datosDest">
            <h2 className="nombreDest">Nombre</h2>
            <h3>
              <FaShoppingCart className="destCarro" />
            </h3>
          </div>
        </div>
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
