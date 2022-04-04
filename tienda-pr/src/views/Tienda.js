import React, { useState, useRef } from "react";
import "../css/tienda.css";

import ObtenerProductos from "./ObtenerProductos";

const Tienda = () => {
  const [data, setData] = useState({
    producto0: {
      id: "",
      nombre: "",
      imagen: "",
      descripcion: "",
      precio: 0,
      precioId: "",
    },
  });
  const [flag, setFlag] = useState(false);
  const mostrar = () => {
    if (flag) {
      return (
        <div>
          <div className="producto producto1">
            <h1 className="nombreProd">{data.producto0.nombre}</h1>
            <img className="imgProd" src={data.producto0.imagen} />
            <div className="datosProd">
              <h2 className="precioProd">$ {data.producto0.precio}</h2>
              <a className="verMasProd" href={"/Producto/" + data.producto0.id}>
                Ver más
              </a>
            </div>
          </div>
          <div className="producto">
            <h1 className="nombreProd">{data.producto1.nombre}</h1>
            <img className="imgProd" src={data.producto1.imagen} />
            <div className="datosProd">
              <h2 className="precioProd">$ {data.producto1.precio}</h2>
              <a className="verMasProd" href={"/Producto/" + data.producto1.id}>
                Ver más
              </a>
            </div>
          </div>
          <div className="producto">
            <h1 className="nombreProd">{data.producto2.nombre}</h1>
            <img className="imgProd" src={data.producto2.imagen} />
            <div className="datosProd">
              <h2 className="precioProd">$ {data.producto2.precio}</h2>
              <a className="verMasProd" href={"/Producto/" + data.producto2.id}>
                Ver más
              </a>
            </div>
          </div>
        </div>
      );
    }
  };
  return (
    <div className="Tienda">
      <ObtenerProductos setData={setData} data={data} setFlag={setFlag} />
      <div>{mostrar()}</div>
    </div>
  );
};

export default Tienda;
