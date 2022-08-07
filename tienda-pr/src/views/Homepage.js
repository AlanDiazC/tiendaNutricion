import React, { useState, useRef } from "react";
import "../css/homepage.css";
import ReactPlayer from "react-player";

import { FaShoppingCart } from "react-icons/fa";

import icono1 from "../multimedia/icono1.png";
import icono2 from "../multimedia/icono2.png";
import icono3 from "../multimedia/icono3.png";

import video from "../multimedia/reel2.MOV";

// import ObtenerProductos from "../views/ObtenerProductos";

import { BsInstagram } from "react-icons/bs";
import { BsWhatsapp } from "react-icons/bs";

const Homepage = () => {
  return (
    <div>
      <div className="seccion1">
        <section>
          <div className="seccion1Div">
            <div className="imgFondo"></div>
            <div className="datosSec1">
              <div className="tituloHP">
                <h2>#Fuelingyourdreams</h2>
                <div className="textoDiv">
                  <p>
                    <b>
                      Si tú cumples tus metas, nosotros cumplimos nuestro sueño.
                    </b>
                  </p>
                </div>
                <a className="btnHP" href="/Tienda">
                  Comprar
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>

      <div className="seccion2">
        <div>
          <div className="seccion2Padding">
            <div className="gridSec2">
              <div className="gridItem">
                <a className="seccion2Caja" href="/Tienda">
                  <div className="divImgSec2">
                    <div>
                      <img
                        className="imgSec2"
                        src="https://firebasestorage.googleapis.com/v0/b/pr-nutrition.appspot.com/o/imgHP1.JPG?alt=media&token=36fe5341-842f-422b-a7ab-bb08696153b1"
                      />
                    </div>
                  </div>
                  <h2 className="textoSec2">Productos</h2>
                </a>
              </div>
              <div className="gridItem">
                <a className="seccion2Caja" href="/MiCarrito">
                  <div className="divImgSec2">
                    <div>
                      <img
                        className="imgSec2"
                        src="https://firebasestorage.googleapis.com/v0/b/pr-nutrition.appspot.com/o/imgHP2.JPG?alt=media&token=373376b9-5dbe-4bdf-82f0-df0904f49075"
                      />
                    </div>
                  </div>
                  <h2 className="textoSec2">Mi Carrito</h2>
                </a>
              </div>
              <div className="gridItem">
                <a className="seccion2Caja" href="/Contacto">
                  <div className="divImgSec2">
                    <div>
                      <img
                        className="imgSec2"
                        src="https://firebasestorage.googleapis.com/v0/b/pr-nutrition.appspot.com/o/imgHP3.JPG?alt=media&token=0595a17a-7c6b-4ca8-8ab6-0e1f535e8569"
                      />
                    </div>
                  </div>
                  <h2 className="textoSec2">Contacto</h2>
                </a>
              </div>
              <div className="gridItem">
                <a className="seccion2Caja" href="/SobreNosotros">
                  <div className="divImgSec2">
                    <div>
                      <img
                        className="imgSec2"
                        src="https://firebasestorage.googleapis.com/v0/b/pr-nutrition.appspot.com/o/imgHP4.JPG?alt=media&token=bbd9331f-ad64-469f-8ad0-7379e475fa69"
                      />
                    </div>
                  </div>
                  <h2 className="textoSec2">Sobre Nosotros</h2>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="seccion3"></div>
      <div className="seccion4">
        <div>
          <div className="seccion4Padding">
            <div className="seccion3Padding">
              <div className="gridSec3">
                <div className="gridSec3Item">
                  <div className="textoDivSec3">
                    <h2>Nuestro objetivo</h2>
                    <div className="textoDiv">
                      <p>
                        Queremos inspirar e impulsar el bienestar, sueños y
                        metas de las personas para que construyan su mejor
                        versión, a tráves de productos de alta calidad para
                        maximizar el desempeño.
                      </p>
                    </div>
                    {/* <a className="btnHP">Boton prueba</a> */}
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className="grid">
                <div className="gridItem">
                  <div className="divImgSec4">
                    <img className="imgSec4" src={icono1}></img>
                  </div>
                  <div className="textoDiv">
                    Productos nutritivos de alta calidad
                  </div>
                </div>
                <div className="gridItem gridItemMedio">
                  <div className="divImgSec4">
                    <img className="imgSec4" src={icono2}></img>
                  </div>
                  <div className="textoDiv">Supera a tu yo de ayer</div>
                </div>
                <div className="gridItem gridItemDer">
                  <div className="divImgSec4">
                    <img className="imgSec4" src={icono3}></img>
                  </div>
                  <div className="textoDiv">
                    Queremos ser parte de tus logros
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="seccion5">
        <div>
          <div className="seccion5Padding">
            <div className="tituloSec5">
              <h2>
                Nuestra <span>Mentalidad</span>
              </h2>
              <div className="textoDiv">
                Acompañando a toda persona que deseé rendir óptimamente en un
                estilo de vida activo.
              </div>
            </div>
            <div className="grid">
              <div className="gridItem">
                <div className="contenedorSec5">
                  <div className="divVideoSec5">
                    <div>
                      {/* <iframe
                        className="iframeVideo"
                        src={"https://www.youtube.com/embed/tVTM_xrnAzY?&controls=0&vq=hd720&playlist=tVTM_xrnAzY"}
                      ></iframe> */}
                      <ReactPlayer
                        controls
                        className="iframeVideo"
                        url="https://firebasestorage.googleapis.com/v0/b/pr-nutrition.appspot.com/o/reel2.MOV?alt=media&token=10d42e10-89b9-4f53-b908-f784bbcc69e7"
                      />
                    </div>
                  </div>
                  <div className="textoDiv">
                    Sabemos que cada quien tiene una historia que contar, somos
                    testigos de los grandes logros que cada quien puede lograr,
                    queremos ser parte de ello y brindar herramientas para que
                    esas historias se puedan volver una realidad.
                  </div>
                </div>
              </div>
            </div>
            <div className="divBtnSec5">
              <a className="btnHP" href="/Tienda">
                Productos
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* <div className="seccion6">
        <div>
          <div>
            <div>
              <h2></h2>
            </div>
            <div>
              <button></button>
              <div>
                <div>
                  <div>
                    <a>
                      <div>
                        <div>
                          <img></img>
                        </div>
                      </div>
                      <h2></h2>
                      <div>texto</div>
                    </a>
                  </div>
                </div>
              </div>
              <button></button>
            </div>
          </div>
        </div>
      </div> */}

      {/* <div className="seccion7">
        <div>
          <div>
            <h2></h2>
            <div></div>
          </div>
        </div>
      </div> */}

      <div className="seccion8">
        <div className="seccion8Padding">
          <div className="containerSec8">
            <div className="rowSec8">
              <div className="textoSec8">
                <p>
                  Consultas sobre distribución y productos al por mayor <br />
                  Envíenos un correo a pr.nutritionmx@gmail.com
                </p>
              </div>
              <div className="formSec8">
                <form>
                  <input type="hidden" className="sec8Input1" />
                  <input type="hidden" className="sec8Input1" />
                  <div className="form-group">
                    <input type="hidden" />
                    <input
                      type="email"
                      className="form-control"
                      placeholder="Manda nos un correo"
                    />
                    <input type="submit" className="formBtn" />
                  </div>
                </form>
                <ul>
                  <li>
                    <a href="https://wa.me/525516820762">
                      <BsWhatsapp />
                    </a>
                  </li>
                  <li>
                    <a href="https://www.instagram.com/pr.nutritionmx/?igshid=YmMyMTA2M2Y=">
                      <BsInstagram />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
