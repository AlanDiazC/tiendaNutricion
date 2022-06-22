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


  return <div>
    <div className="seccion_arriba_producto">
      <div className="container_producto">
        <div className="producto_fila">
          <div className="lado_izquierdo_prod">
            <div className="logo_producto">
              <img src={logo}></img>
            </div>
            <div className="texto_del_logo">
              <h2>Texto del texto xd</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Turpis egestas sed tempus urna et. Nunc sed augue lacus viverra vitae congue eu.</p>
            </div>
          </div>
          <div className="parte_mitad_prod">
            <div className="slide_de_imagenes">
              <div className="anterior_prod">
                <button>anterior</button>
              </div>
              <div className="imagenes">
                <img src={prod1}></img>
              </div>
              <div className="siguiente_prod">
                <button>siguiente</button>
              </div>
            </div>
          </div>
          <div className="lado_derecho_prod">
            <div className="lado_derecho_prod_texto">
              <h1>Nombre del producto</h1>
              <h3>Precio</h3>
            </div>
            <div className="seleccion_producto">
              <div className="cantidad_de_productos">
                <select>Cantidad</select>
              </div>
              <div className="tipo_de_producto">
                <select>Tipo</select>
              </div>
              <div>
                <button>Agregar al carrito</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="custom_tab_pequenio">
      <div className="container_producto">
        <ul className="navegacion_tab">
          <li className="nav_item">
            <a className="nav_enlace">Beneficios</a>
          </li>
          <li className="nav_item">
            <a className="nav_enlace">Nutricion</a>
          </li>
          <li className="nav_item">
            <a className="nav_enlace">Componentes principales</a>
          </li>
          <li className="nav_item">
            <a className="nav_enlace">Instrucciones de uso</a>
          </li>
        </ul>
        <div className="contenido_tab">
          <div className="tab_panel">
            <div className="beneficios_primarios">
              <div className="fila_beneficios">
                <div className="columna_beneficios">
                  <div className="imagen_beneficios">
                    <img></img>
                  </div>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore</p>
                </div>
                <div className="columna_beneficios">
                  <div className="imagen_beneficios">
                    <img></img>
                  </div>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore</p>
                </div>
                <div className="columna_beneficios">
                  <div className="imagen_beneficios">
                    <img></img>
                  </div>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore</p>
                </div>
                <div className="columna_beneficios">
                  <div className="imagen_beneficios">
                    <img></img>
                  </div>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore</p>
                </div>
                <div className="columna_beneficios">
                  <div className="imagen_beneficios">
                    <img></img>
                  </div>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore</p>
                </div>
              </div>
            </div>
          </div>
          <div className="tab_panel">
            <div className="datos_segundo_tab">
              <h4>Porcion por contenedor</h4>
              <h4>Tamaño de la porcion</h4>
              <table>
                <thead>
                  <tr>
                    <th></th>
                    <th>Cantidad por porcion</th>
                    <th>Valor en % diario</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Calorias</td>
                    <td>120</td>
                    <td>**</tdd>
                  </tr>
                  <tr>
                    <td>Grasa total</td>
                    <td>3.5g</td>
                    <td>4%</tdd>
                  </tr>
                  <tr>
                    <td>Grasas saturadas</td>
                    <td>2g</td>
                    <td>10%</tdd>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div className="tab_panel">
            <div className="texto_tercer_tab">
              <h3>Lorem ipsum dolor sit amet</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Turpis egestas sed tempus urna et. Nunc sed augue lacus viverra vitae congue eu. Quis viverra nibh cras pulvinar. Pretium quam vulputate dignissim suspendisse in est ante in.</p>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Turpis egestas sed tempus urna et. Nunc sed augue lacus viverra vitae congue eu. Quis viverra nibh cras pulvinar. Pretium quam vulputate dignissim suspendisse in est ante in.</p>
              <h3>Lorem ipsum dolor sit amet</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Turpis egestas sed tempus urna et. Nunc sed augue lacus viverra vitae congue eu. Quis viverra nibh cras pulvinar. Pretium quam vulputate dignissim suspendisse in est ante in.</p>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Turpis egestas sed tempus urna et. Nunc sed augue lacus viverra vitae congue eu. Quis viverra nibh cras pulvinar. Pretium quam vulputate dignissim suspendisse in est ante in.</p>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Turpis egestas sed tempus urna et. Nunc sed augue lacus viverra vitae congue eu. Quis viverra nibh cras pulvinar. Pretium quam vulputate dignissim suspendisse in est ante in.</p>
            </div>
          </div>
          <div className="tab_panel">
            <div className="instrucciones_de_uso_tab">
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
};

export default Producto;
