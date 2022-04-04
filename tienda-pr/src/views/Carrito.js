import React, { useState, useRef } from "react";
import "../css/carrito.css";
import { useNavigate } from "react-router-dom";

import { FiX } from "react-icons/fi";
import { BsFillPlusCircleFill } from "react-icons/bs";
import { BsFillDashCircleFill } from "react-icons/bs";
import { BiCurrentLocation } from "react-icons/bi";

import ObtenerProductos from "./ObtenerProductos";

const Tienda = () => {
  const navigate = useNavigate();
  const [cantidad, setCantidad] = useState(1);
  const [cantidad2, setCantidad2] = useState(1);
  const [subTotal, setSubtotal] = useState(200);
  const [envio, setEnvio] = useState(30);
  const [total, setTotal] = useState(subTotal + envio);

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
  const Aumentar = (cant, setCant) => {
    setCant(cant + 1);
  };
  const Disminuir = (cant, setCant) => {
    if (cant > 1) {
      setCant(cant - 1);
    }
  };

  const mostrar = () => {
    if (flag) {
      return (
        <div>
          <div className="prodCarro">
            <img className="imgCarro" src={data.producto2.imagen} />
            <div className="datosCarro">
              <span className="nombreProdCarro">{data.producto2.nombre}</span>
              <br />
              <a
                className="btnCantCarro"
                onClick={() => Disminuir(cantidad, setCantidad)}
              >
                <BsFillDashCircleFill />
              </a>
              <span className="cantCarro">{cantidad}</span>
              <a
                className="btnCantCarro"
                onClick={() => Aumentar(cantidad, setCantidad)}
              >
                <BsFillPlusCircleFill />
              </a>
            </div>
            <div className="datosCarro">
              <p className="xCarro">
                <FiX />
              </p>
              <span className="precioCarro">$ {data.producto2.precio}</span>
            </div>
          </div>
          {/* <div className="prodCarro">
            <img className="imgCarro" src={data.producto1.imagen} />
            <div className="datosCarro">
              <span className="nombreProdCarro">{data.producto1.nombre}</span>
              <br />
              <a
                className="btnCantCarro"
                onClick={() => Disminuir(cantidad, setCantidad)}
              >
                <BsFillDashCircleFill />
              </a>
              <span className="cantCarro">{cantidad}</span>
              <a
                className="btnCantCarro"
                onClick={() => Aumentar(cantidad, setCantidad)}
              >
                <BsFillPlusCircleFill />
              </a>
            </div>
            <div className="datosCarro">
              <p className="xCarro">
                <FiX />
              </p>
              <span className="precioCarro">$ {data.producto1.precio}</span>
            </div>
          </div> */}
        </div>
      );
    }
  };

  const pagar = () => {
    if (flag) {
      navigate("/payments/" + data.producto2.precioId);
    }
  };

  return (
    <div className="Carro">
      <h1 className="carroTitulo">Mi Carrito</h1>
      <ObtenerProductos setData={setData} data={data} setFlag={setFlag} />
      {mostrar()}
      <div className="direcCarro">
        <h2>Dirección de envio</h2>
        <button>
          <BiCurrentLocation />
        </button>
      </div>
      <div className="calcPrecio">
        <span>Subtotal: ${subTotal}</span>
      </div>
      <div className="calcPrecio precioEnv">
        <span>Envío: ${envio}</span>
      </div>
      <div className="totalPrecio">
        <span>Total: ${total}</span>
      </div>
      <div className="btnCarro">
        <button onClick={pagar}>Realizar pago</button>
      </div>
    </div>
  );
};

export default Tienda;
