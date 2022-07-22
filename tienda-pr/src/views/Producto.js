// https://react-icons.github.io/react-icons/icons?name=gi
//https://www.bareperformancenutrition.com/products/vegan-protein

import React, { useState, useRef } from "react";
import "../css/producto.css";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";

import ObtenerProd from "./ObtenerProdEspecifico";

import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

import Swal from "sweetalert2";

const Producto = () => {
  const { idProd } = useParams();
  const cart = useSelector((state) => state);
  const dispatch = useDispatch();
  const [data, setData] = useState({
    producto0: {
      nombre: "",
      imagen: "",
      descripcion: "",
      precio: 0,
      precioId: "",
      uso: "",
      tabla: "",
      articulos: "",
      beneficiosAdulto: "",
      beneficiosAtl: "",
      beneficiosPrinc: "",
      preguntas: "",
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

  const Texto1 = () => {
    if (flag) {
      const tabla = data.producto0.tabla;
      const tablaLista = [];
      tablaLista.push(<img className="tablaNutri" src={tabla} />);
      return tablaLista;
    }
  };
  const Texto2 = () => {
    if (flag) {
      const lista = data.producto0.uso;
      const usoLista = [];
      for (var i = 0; i < lista.length; i++) {
        usoLista.push(<p>{lista[i]}</p>);
      }
      return usoLista;
    }
  };
  const Texto3 = () => {
    if (flag) {
      const listaBenfAdu = data.producto0.beneficiosAdulto;
      const listaBenfAtl = data.producto0.beneficiosAtl;
      const listaBenfPrin = data.producto0.beneficiosPrinc;
      const beneficiosLista = [];
      beneficiosLista.push(
        <p className="tituloBeneficios">Beneficios Principales:</p>
      );
      for (var i = 0; i < listaBenfPrin.length; i++) {
        beneficiosLista.push(<p className="beneficios">{listaBenfPrin[i]}</p>);
      }

      beneficiosLista.push(
        <p className="tituloBeneficios">Beneficios para Atletas:</p>
      );
      for (var i = 0; i < listaBenfAtl.length; i++) {
        beneficiosLista.push(
          <p className={`beneficios ${"a" + i}`}>{listaBenfAtl[i]}</p>
        );
      }
      if (listaBenfAdu[0]) {
        beneficiosLista.push(
          <p className="tituloBeneficios">Beneficios para Adultos:</p>
        );
        for (var i = 0; i < listaBenfAdu.length; i++) {
          beneficiosLista.push(<p className="beneficios">{listaBenfAdu[i]}</p>);
        }
      }
      return beneficiosLista;
    }
  };
  const Texto4 = () => {
    if (flag) {
      const lista = data.producto0.articulos;
      const artuclosLista = [];
      for (var i = 0; i < lista.length; i++) {
        artuclosLista.push(<p>{lista[i]}</p>);
      }
      return artuclosLista;
    }
  };

  const dropdownRef = useRef(null);

  const [Preg1, setPreg1] = useState(false);
  const [Preg2, setPreg2] = useState(false);
  const [Preg3, setPreg3] = useState(false);
  const [Preg4, setPreg4] = useState(false);
  const [Preg5, setPreg5] = useState(false);
  const [Preg6, setPreg6] = useState(false);

  const OcultarPreg = (i) => {
    if (i == 0) {
      setPreg1(!Preg1);
    } else if (i == 1) {
      setPreg2(!Preg2);
    } else if (i == 2) {
      setPreg3(!Preg3);
    } else if (i == 3) {
      setPreg4(!Preg4);
    } else if (i == 4) {
      setPreg5(!Preg5);
    } else if (i == 5) {
      setPreg6(!Preg6);
    }
  };

  const Preguntas = () => {
    if (flag) {
      const lista = data.producto0.preguntas;
      const listaPreguntas = [];
      for (var i = 0; i < lista.length; i++) {
        listaPreguntas.push(AgregarPregunta(i, lista));
      }
      return listaPreguntas;
    }
  };
  const AgregarPregunta = (i, lista) => {
    var Preg = Preg1;
    if (i == 1) {
      Preg = Preg2;
    } else if (i == 2) {
      Preg = Preg3;
    } else if (i == 3) {
      Preg = Preg4;
    } else if (i == 4) {
      Preg = Preg5;
    } else if (i == 5) {
      Preg = Preg6;
    }
    return (
      <div
        className={`preguntas pregPanel1 pregunta1Pan1 ${
          Preg ? "active" : "inactive"
        }`}
      >
        <div className="preguntaN">
          <h4>
            <a ref={dropdownRef} onClick={() => OcultarPreg(i)}>
              <span className="preg">{lista[i].pregunta}</span>
              <span className="iconoPreg iconoPreg1"></span>
            </a>
          </h4>
        </div>
        <div className="respuesta respuestaApt1Preg1">
          <div>
            <p>{lista[i].respuesta}</p>
          </div>
        </div>
      </div>
    );
  };

  const [panel1, setPanel1] = useState(true);
  const [panel2, setPanel2] = useState(true);
  const [panel3, setPanel3] = useState(false);
  const [panel4, setPanel4] = useState(false);
  const [panel5, setPanel5] = useState(false);

  const CambiarPantallas = (setPanel) => {
    setPanel1(false);
    setPanel2(false);
    setPanel3(false);
    setPanel4(false);
    setPanel5(false);
    setPanel(true);
  };

  const Carrusel = () => {
    if (flag) {
      const lista = data.producto0.imagen;
      const listaPreguntas = [];
      for (var i = 0; i < lista.length; i++) {
        listaPreguntas.push(
          <div className="imagenes_prod">
            <img src={data.producto0.imagen[i]}></img>
          </div>
        );
      }
      return listaPreguntas;
    }
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
                <Carousel
                  showArrows={true}
                  autoPlay={true}
                  interval={5000}
                  infiniteLoop={true}
                >
                  {Carrusel()}
                </Carousel>
                {/* <div className="imagenes_prod">
                  <img src={data.producto0.imagen}></img>
                </div> */}

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
                </div>
              </form>
              <div className="btnProd">
                <button
                  onClick={() => {
                    const item = data.producto0;
                    try {
                      dispatch({
                        type: "ADD",
                        payload: item,
                      });
                      Swal.fire({
                        icon: "success",
                        title: "Producto agregado",
                        text: "El producto fue agregado correctamente al carrito",
                      });
                    } catch (e) {
                      Swal.fire({
                        icon: "error",
                        title: "Error",
                        text: "No se pudo agregar el producto al carrito",
                      });
                    }
                  }}
                >
                  Agregar al carrito
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="custom_tab_pequenio">
        <div className="container_producto">
          <ul className="navegacion_tab">
            {/* <li className="nav_item">
              <a
                className={`nav_enlace ${panel1 ? "active" : "inactive"}`}
                onClick={() => {
                  CambiarPantallas(setPanel1);
                }}
              >
                Información Nutrimental
              </a> 
            </li>*/}
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
            <li className="nav_item">
              <a
                className={`nav_enlace ${panel3 ? "active" : "inactive"}`}
                onClick={() => {
                  CambiarPantallas(setPanel3);
                }}
              >
                Beneficios
              </a>
            </li>
            <li className="nav_item">
              <a
                className={`nav_enlace ${panel4 ? "active" : "inactive"}`}
                onClick={() => {
                  CambiarPantallas(setPanel4);
                }}
              >
                Artículos Científicos
              </a>
            </li>
            <li className="nav_item">
              <a
                className={`nav_enlace ${panel5 ? "active" : "inactive"}`}
                onClick={() => {
                  CambiarPantallas(setPanel5);
                }}
              >
                Preguntas Frecuentes
              </a>
            </li>
          </ul>
          <div className="contenido_tab">
            <div className="tab_panel">
              {/* <div
                className={`tablaNutrimental instrucciones_de_uso_tab ${
                  panel1 ? "active" : "inactive"
                }`}
              >
                {Texto1()}
              </div> */}
              <div
                className={`instrucciones_de_uso_tab ${
                  panel2 ? "active" : "inactive"
                }`}
              >
                {Texto2()}
              </div>
              <div
                className={`instrucciones_de_uso_tab ${
                  panel3 ? "active" : "inactive"
                }`}
              >
                {Texto3()}
              </div>
              <div
                className={`instrucciones_de_uso_tab ${
                  panel4 ? "active" : "inactive"
                }`}
              >
                {Texto4()}
              </div>
              <div
                className={`instrucciones_de_uso_tab ${
                  panel5 ? "active" : "inactive"
                }`}
              >
                {Preguntas()}
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
