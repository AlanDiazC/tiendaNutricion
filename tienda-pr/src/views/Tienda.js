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
            <img className="imgProd" src={img[i]} />
            <div className="datosProd">
              <span className="nombreProd">{data[i].nombre}</span>
              <span className="precioProd">$ {data[i].precio}</span>
            </div>
            {/* <a className="verMasTop" href={"/Producto/" + data[i].id}> */}
            <a className="verMasTop" href={"/Producto"}>
              <span className="verMasProd">Ver más</span>
            </a>
          </div>
        );
      }
      return productos;
    }
  };
  return (
    <div className="Tienda">
      <div className="bannerTienda">
        <div>
          <h1>Productos</h1>
        </div>
      </div>
      <ObtenerProductos setData={setData} data={data} setFlag={setFlag} />
      <div className="mostrarProds">{mostrar()}</div>
    </div>
  );
};

export default Tienda;
