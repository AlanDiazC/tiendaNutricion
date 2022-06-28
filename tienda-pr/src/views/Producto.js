// https://react-icons.github.io/react-icons/icons?name=gi
//https://www.bareperformancenutrition.com/products/vegan-protein

import React, { useState, useRef } from "react";
import "../css/producto.css";

import { useParams } from "react-router-dom";

import ObtenerProd from "./ObtenerProdEspecifico";

import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

const Producto = () => {
  const { idProd } = useParams();
  const [data, setData] = useState({
    producto0: {
      nombre: "",
      imagen: "",
      descripcion: "",
      precio: 0,
      precioId: "",
      uso: "",
      ingredientes: "",
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

  const Texto2 = () => {
    console.log(data.producto0.uso);
    if (flag) {
      const lista = data.producto0.uso;
      const usoLista = [];
      for (var i = 0; i < lista.length; i++) {
        usoLista.push(<p>{lista[i]}</p>);
      }
      return usoLista;
    }
  };
  const Texto1 = () => {
    console.log(data.producto0);
    if (flag) {
      const lista = data.producto0.ingredientes;
      const usoLista = [];
      for (var i = 0; i < lista.length; i++) {
        usoLista.push(<p>{lista[i]}</p>);
      }
      return usoLista;
    }
  };

  const [panel1, setPanel1] = useState(true);
  const [panel2, setPanel2] = useState(false);

  const CambiarPantallas = (setPanel) => {
    setPanel1(false);
    setPanel2(false);
    setPanel(true);
  };

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
                {/* <Carousel>
                  <div className="imagenes_prod">
                    {Img(data.producto0.nombre)}
                  </div>
                  <div className="imagenes_prod">
                    {Img(data.producto0.nombre)}
                  </div>
                </Carousel> */}
                <div className="imagenes_prod">
                  <img src={data.producto0.imagen}></img>
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
            </li>*/}
            <li className="nav_item">
              <a
                className={`nav_enlace ${panel1 ? "active" : "inactive"}`}
                onClick={() => {
                  CambiarPantallas(setPanel1);
                }}
              >
                Componentes principales
              </a>
            </li>
            <li className="nav_item">
              <a
                className={`nav_enlace ${panel2 ? "active" : "inactive"}`}
                onClick={() => {
                  CambiarPantallas(setPanel2);
                }}
              >
                Instrucciones de uso
              </a>
            </li>
          </ul>
          <div className="contenido_tab">
            <div className="tab_panel">
              <div
                className={`instrucciones_de_uso_tab ${
                  panel1 ? "active" : "inactive"
                }`}
              >
                {Texto1()}
              </div>
              <div
                className={`instrucciones_de_uso_tab ${
                  panel2 ? "active" : "inactive"
                }`}
              >
                {Texto2()}
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
