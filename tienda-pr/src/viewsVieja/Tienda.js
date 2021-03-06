import React, { useState, useRef } from "react";
import "../css/tienda.css";

import prod2 from "../multimedia/prod2.JPG";
import prod1 from "../multimedia/prod1.JPG";

import ObtenerProductos from "./ObtenerProductos";

const Tienda = () => {
  const img = [prod1, prod2];
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
  const mostrar = () => {
    if (flag) {
      const productos = [];
      for (let i = 0; i < data.length; i++) {
        productos.push(
          <div className="producto" key={i}>
            <h1 className="nombreProd">{data[i].nombre}</h1>
            <img className="imgProd" src={img[i]} />
            <div className="datosProd">
              <h2 className="precioProd">$ {data[i].precio}</h2>
              <a className="verMasTop" href={"/Producto/" + data[i].id}>
                <span className="verMasProd">Ver más</span>
              </a>
            </div>
          </div>
        );
      }
      return productos;
    }
  };
  return (
    <div className="Tienda">
      <ObtenerProductos setData={setData} data={data} setFlag={setFlag} />
      <div className="mostrarProds">{mostrar()}</div>
    </div>
  );
};

export default Tienda;
