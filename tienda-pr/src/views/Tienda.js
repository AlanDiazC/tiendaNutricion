import React, { useState, useRef } from "react";
import "../css/tienda.css";

import ObtenerProductos from "./ObtenerProductos";

const Tienda = () => {
  const [data, setData] = useState([
    {
      id: "",
      nombre: "",
      imagen: "",
      descripcion: "",
      precio: 3,
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
            <a className="verMasTop" href={"/Producto/" + data[i].id}>
              <img className="imgProd" src={data[i].imagen} />
              <div className="datosProd">
                <p className="nombreProd">{data[i].nombre}</p>
                <p className="precioProd">$ {data[i].precio}</p>
              </div>
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
