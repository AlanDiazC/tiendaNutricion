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
      return (
        <img src="https://firebasestorage.googleapis.com/v0/b/pr-nutrition.appspot.com/o/prod2.JPG?alt=media&token=f5470ca1-af72-4a08-a0ae-cf3748fafcbe"></img>
        // <img className="imgProdInd" src={prod2} />
      );
    } else {
      return (
        <img src="https://firebasestorage.googleapis.com/v0/b/pr-nutrition.appspot.com/o/prod1.JPG?alt=media&token=46516f29-c44c-4845-a84c-3de942ac299a"></img>
        // <img className="imgProdInd" src={prod1} />
      );
    }
  };

  const [panel1, setPanel1] = useState(true);

  return (
    <div className="prodIndividual">
      <ObtenerProd
        setData={setData}
        data={data}
        setFlag={setFlag}
        id={idProd}
      />
      <div className="seccion_arriba_producto">
        <div className="container_producto">
          <div className="producto_fila">
            <div className="lado_izquierdo_prod">
              <div className="logo_producto">
                <img src="https://firebasestorage.googleapis.com/v0/b/pr-nutrition.appspot.com/o/Logo.png?alt=media&token=28787aa8-3cdb-4c68-b1bf-75bd9bbd8a64"></img>
              </div>
              <div className="texto_del_logo">
                <h2>Descripción</h2>
                <p>{data.producto0.descripcion}</p>
              </div>
            </div>
            <div className="parte_mitad_prod">
              <div className="slide_de_imagenes">
                {/* <button className="flecha_prod_Ant">{"<"}</button> */}
                <div className="imagenes_prod">
                  {Img(data.producto0.nombre)}
                </div>
                {/* <button className="flecha_prod_Sig">{">"}</button> */}
              </div>
            </div>
            <div className="lado_derecho_prod">
              <div className="lado_derecho_prod_texto">
                <h1>{data.producto0.nombre}</h1>
                <h3>$ {data.producto0.precio}</h3>
              </div>
              <form>
                <div className="seleccion_producto">
                  <div className="cantidad_de_productos">
                    <select>
                      <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                      <option value="4">4</option>
                      <option value="5">5</option>
                    </select>
                  </div>
                  <div className="btnProd">
                    <button>Agregar al carrito</button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div className="custom_tab_pequenio">
        <div className="container_producto">
          <ul className="navegacion_tab">
            {/* <li className="nav_item">
              <a className="nav_enlace">Beneficios</a>
            </li> */}
            {/* <li className="nav_item">
              <a className="nav_enlace">Nutricion</a>
            </li>
            <li className="nav_item">
              <a className="nav_enlace">Componentes principales</a>
            </li> */}
            <li className="nav_item">
              <a className={`nav_enlace ${panel1 ? "active" : "inactive"}`}>
                Instrucciones de uso
              </a>
            </li>
          </ul>
          <div className="contenido_tab">
            <div className="tab_panel">
              <div className="instrucciones_de_uso_tab">
                <p>Agregar de 1-3 scoops en 500-700ml de agua y mezcle.</p>
                <p>
                  Como punto de partida: consume 1 scoop por hora de ejercicio
                  para recargar/reponer energías y rehidratarte durante el
                  entrenamiento o competencia.
                </p>
                <p>
                  PR Fuel se puede utilizar antes, durante o después del
                  entrenamiento. Agita la botella durante la sesión, ya que
                  algunos ingredientes pueden asentarse en el fondo de la
                  botella.
                </p>
              </div>
            </div>
            {/* <div className="tab_panel">
              <div className="beneficios_primarios">
                <div className="fila_beneficios">
                  <div className="columna_beneficios">
                    <div className="imagen_beneficios">
                      <img></img>
                    </div>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore
                    </p>
                  </div>
                  <div className="columna_beneficios">
                    <div className="imagen_beneficios">
                      <img></img>
                    </div>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore
                    </p>
                  </div>
                  <div className="columna_beneficios">
                    <div className="imagen_beneficios">
                      <img></img>
                    </div>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore
                    </p>
                  </div>
                  <div className="columna_beneficios">
                    <div className="imagen_beneficios">
                      <img></img>
                    </div>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore
                    </p>
                  </div>
                  <div className="columna_beneficios">
                    <div className="imagen_beneficios">
                      <img></img>
                    </div>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore
                    </p>
                  </div>
                </div>
              </div>
            </div> */}
            {/* <div className="tab_panel">
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
                      <td>**</td>
                    </tr>
                    <tr>
                      <td>Grasa total</td>
                      <td>3.5g</td>
                      <td>4%</td>
                    </tr>
                    <tr>
                      <td>Grasas saturadas</td>
                      <td>2g</td>
                      <td>10%</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div className="tab_panel">
              <div className="texto_tercer_tab">
                <h3>Lorem ipsum dolor sit amet</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Turpis egestas sed tempus urna et. Nunc sed augue lacus
                  viverra vitae congue eu. Quis viverra nibh cras pulvinar.
                  Pretium quam vulputate dignissim suspendisse in est ante in.
                </p>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Turpis egestas sed tempus urna et. Nunc sed augue lacus
                  viverra vitae congue eu. Quis viverra nibh cras pulvinar.
                  Pretium quam vulputate dignissim suspendisse in est ante in.
                </p>
                <h3>Lorem ipsum dolor sit amet</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Turpis egestas sed tempus urna et. Nunc sed augue lacus
                  viverra vitae congue eu. Quis viverra nibh cras pulvinar.
                  Pretium quam vulputate dignissim suspendisse in est ante in.
                </p>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Turpis egestas sed tempus urna et. Nunc sed augue lacus
                  viverra vitae congue eu. Quis viverra nibh cras pulvinar.
                  Pretium quam vulputate dignissim suspendisse in est ante in.
                </p>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Turpis egestas sed tempus urna et. Nunc sed augue lacus
                  viverra vitae congue eu. Quis viverra nibh cras pulvinar.
                  Pretium quam vulputate dignissim suspendisse in est ante in.
                </p>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Producto;
