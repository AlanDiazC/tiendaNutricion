import React, { useState, useRef } from "react";
import "../css/homepage.css";
import ReactPlayer from "react-player";

import { FaShoppingCart } from "react-icons/fa";

import imgHP1 from "../multimedia/imgHP1.JPG";
import imgHP2 from "../multimedia/imgHP2.JPG";
import imgHP3 from "../multimedia/imgHP3.JPG";
import imgHP4 from "../multimedia/imgHP4.JPG";

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
                <a className="btnHP" href="">
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
                      <img className="imgSec2" src={imgHP1} />
                    </div>
                  </div>
                  <h2 className="textoSec2">Productos</h2>
                </a>
              </div>
              <div className="gridItem">
                <a className="seccion2Caja" href="/MiCarrito">
                  <div className="divImgSec2">
                    <div>
                      <img className="imgSec2" src={imgHP2} />
                    </div>
                  </div>
                  <h2 className="textoSec2">Mi Carrito</h2>
                </a>
              </div>
              <div className="gridItem">
                <a className="seccion2Caja" href="/QnA">
                  <div className="divImgSec2">
                    <div>
                      <img className="imgSec2" src={imgHP3} />
                    </div>
                  </div>
                  <h2 className="textoSec2">Preguntas Frecuentes</h2>
                </a>
              </div>
              <div className="gridItem">
                <a className="seccion2Caja" href="/SobreNosotros">
                  <div className="divImgSec2">
                    <div>
                      <img className="imgSec2" src={imgHP4} />
                    </div>
                  </div>
                  <h2 className="textoSec2">Sobre Nosotros</h2>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="seccion3">
        <div className="seccion3Padding">
          <div className="gridSec3">
            <div className="gridSec3Item">
              <div className="textoDivSec3">
                <h2>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry
                </h2>
                <div className="textoDiv">
                  <p>
                    Lorem Ipsum has been the industry's standard dummy text ever
                    since the 1500s, when an unknown printer took a galley of
                    type and scrambled it to make a type specimen book. It has
                    survived not only five centuries, but also the leap into
                    electronic typesetting, remaining essentially unchanged.
                  </p>
                </div>
                <a className="btnHP">Boton prueba</a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="seccion4">
        <div>
          <div className="seccion4Padding">
            <div>
              <div className="grid">
                <div className="gridItem">
                  <div className="divImgSec4">
                    <img
                      className="imgSec4"
                      src={
                        "https://cdn.shopify.com/s/files/1/1103/4864/files/Protein_5_600x_45161acf-386d-416b-92e4-d14fe9d3e55a_600x.png?v=1634915917"
                      }
                    ></img>
                  </div>
                  <div className="textoDiv">
                    Lorem Ipsum is simply dummy text of the printing
                  </div>
                </div>
                <div className="gridItem gridItemMedio">
                  <div className="divImgSec4">
                    <img
                      className="imgSec4"
                      src={
                        "https://cdn.shopify.com/s/files/1/1103/4864/files/Protein_1_600x_cb77db67-c3ac-48b8-94b5-cc4ca8d5eed0_600x.png?v=1634915924"
                      }
                    ></img>
                  </div>
                  <div className="textoDiv">
                    Lorem Ipsum is simply dummy text of the printing
                  </div>
                </div>
                <div className="gridItem gridItemDer">
                  <div className="divImgSec4">
                    <img
                      className="imgSec4"
                      src={
                        "https://cdn.shopify.com/s/files/1/1103/4864/files/run_600x.png?v=1635116720"
                      }
                    ></img>
                  </div>
                  <div className="textoDiv">
                    Lorem Ipsum is simply dummy text of the printing
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
                Lorem <span>Ipsum</span>
              </h2>
              <div className="textoDiv">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s.
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
                        url={video}
                      />
                    </div>
                  </div>
                  <div className="textoDiv">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s.
                  </div>
                </div>
              </div>
            </div>
            <div className="divBtnSec5">
              <a className="btnHP">Lorem Ipsum</a>
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
