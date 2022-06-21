// https://react-icons.github.io/react-icons/icons?name=gi
//https://www.bareperformancenutrition.com/products/vegan-protein

import React, { useState, useRef } from "react";
import "../css/producto.css";

import prod2 from "../multimedia/prod2.JPG";
import prod1 from "../multimedia/prod1.JPG";
import logo from "../multimedia/Logo.png";
import { BsFacebook } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";

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

  const Img = (nombre) => {
    if (nombre == "PR Fuel") {
      return <img className="imgProdInd" src={prod2} />;
    } else {
      return <img className="imgProdInd" src={prod1} />;
    }
  };

  return <div></div>;
};

export default Producto;
