import React from "react";
import "../css/homepage.css";
import ReactPlayer from "react-player";

import firma from "../multimedia/firma.PNG";
import redHP from "../multimedia/redHP.PNG";
import enduranceHP from "../multimedia/enduranceHP.PNG";
import greensHP from "../multimedia/greensHP.PNG";
import chocolateHP from "../multimedia/ChocolateHP.jpeg";
import clienteHP from "../multimedia/clienteHP.PNG";

import "../fonts/Avenir Light.ttf";

const Homepage = () => {
  return (
    <>
      <div className="seccion1">
        <section>
          <div className="seccion1Div">
            <div className="imgFondo"></div>
            <div className="datosSec1">
              <div className="tituloHP">
                <h2>#FUELINGYOUR </h2>
                <h1>DREAMS</h1>
                <div className="textoDiv">
                  <p>
                    Si tú cumples tus metas, nosotros cumplimos nuestro sueño.
                  </p>
                </div>
                <div className="btnHP">
                  <a href="/Tienda">Comprar</a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <div className="seccion1-5">
        <div className="imagenSec1-5">
          <img src="https://firebasestorage.googleapis.com/v0/b/pr-nutrition.appspot.com/o/imgAbout2.jpg?alt=media&token=56e8cc17-4e32-4fa0-9578-dd6a9ffeb03e" />
        </div>
        <p className="tituloSec1-5 cel">
          Become your <b>Strongest self</b>
        </p>
        <div className="textoSec1-5">
          <p className="tituloSec1-5 pc">
            Become your <b>Strongest self</b>
          </p>
          <p className="parrafoSec1-5">
            En PR Nutrition sueño con dos cosas: <b>Brindar la mejor opción </b>
            de suplementos deportivos para un alto rendimiento, no solo
            deportivo si no en el día a día de nuestras actividades comunes,
            donde la superacion personal es la mayor constante, y lo segundo es
            <b> generar una comunidad de cambio</b>, amistad y valores que
            tengan como comun denominador el deporte.
          </p>
          <img
            className="firma"
            src={firma}
            onContextMenu={(e) => {
              e.preventDefault();
              e.stopPropagation();
              return false;
            }}
          />
          <span className="nombreSec1-5">
            Mauricio Mendez Cruz
            <br />
            Co-fundador de PR, Atleta profesional, coach high permormance.
          </span>
        </div>
      </div>
      <div className="seccion2">
        <p className="tituloSec2">
          Nuestros <b>Productos</b>
        </p>
        <div>
          <div className="seccion2Padding">
            <div className="gridSec2">
              <div className="gridItem">
                <a className="seccion2Caja" href="/Tienda">
                  <div className="divImgSec2">
                    <div>
                      <img className="imgSec2" src={enduranceHP} />
                    </div>
                  </div>
                  <h2 className="textoSec2">Endurance Boost</h2>
                </a>
              </div>
              <div className="gridItem">
                <a className="seccion2Caja" href="/Tienda">
                  <div className="divImgSec2">
                    <div>
                      <img className="imgSec2" src={redHP} />
                    </div>
                  </div>
                  <h2 className="textoSec2">Unstappable Powder</h2>
                </a>
              </div>
              <div className="gridItem">
                <a className="seccion2Caja" href="/Tienda">
                  <div className="divImgSec2">
                    <div>
                      <img className="imgSec2" src={greensHP} />
                    </div>
                  </div>
                  <h2 className="textoSec2">Greens</h2>
                </a>
              </div>
              <div className="gridItem">
                <a className="seccion2Caja" href="/Tienda">
                  <div className="divImgSec2">
                    <div>
                      <img className="imgSec2" src={chocolateHP} />
                    </div>
                  </div>
                  <h2 className="textoSec2">Whey Protein Powder</h2>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="seccion4">
        <div>
          <p className="tituloSec4 cel">
            Nuestros <b>Objetivos</b>
          </p>
          <div className="sec4Img cel">
            <img src="https://firebasestorage.googleapis.com/v0/b/pr-nutrition.appspot.com/o/imgAbout1.jpg?alt=media&token=f894e91a-4406-4ec4-a9f4-0cb50e7c7908" />
          </div>
          <div className="seccion4Padding">
            <div className="seccion3Padding">
              <div className="gridSec3">
                <div className="gridSec3Item">
                  <div className="textoDivSec3">
                    <p className="tituloSec4 pc">
                      Nuestros <b>Objetivos</b>
                    </p>
                    <div className="textoDiv">
                      <ul>
                        <li>
                          Brindar <b>productos nutritivos</b> de alta calidad a
                          la comunidad deportiva
                        </li>
                        <li>
                          Que puedas <b>superar</b> tu "yo" de ayer
                        </li>
                        <li>
                          Queremos ser parte de tus <b>logros</b>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="sec4Img pc">
            <img src="https://firebasestorage.googleapis.com/v0/b/pr-nutrition.appspot.com/o/imgAbout1.jpg?alt=media&token=f894e91a-4406-4ec4-a9f4-0cb50e7c7908" />
          </div>
        </div>
      </div>

      <div className="seccion5">
        <div>
          <div className="seccion5Padding">
            <div className="divVideoSec5">
              <div>
                <ReactPlayer
                  controls
                  className="iframeVideo"
                  url="https://firebasestorage.googleapis.com/v0/b/pr-nutrition.appspot.com/o/reel2.MOV?alt=media&token=10d42e10-89b9-4f53-b908-f784bbcc69e7"
                />
              </div>
            </div>
            <div className="grid gridCel cel">
              <p className="tituloSec5 cel">
                Nuestra <b>Mentalidad</b>
              </p>
              <div className="textoDiv cel">
                Acompañando a toda persona que deseé rendir óptimamente en un
                estilo de vida activo.
              </div>
            </div>
            <div className="grid">
              <p className="tituloSec5 pc">
                Nuestra <b>Mentalidad</b>
              </p>
              <div className="textoDiv pc">
                Acompañando a toda persona que deseé rendir óptimamente en un
                estilo de vida activo.
              </div>
              <div className="gridItem">
                <div className="contenedorSec5">
                  <div className="textoDiv">
                    Sabemos que cada quien tiene una historia que contar, somos
                    testigos de los grandes logros que cada quien puede lograr.
                    <br /> Queremos ser parte de ello y brindar herramientas
                    para que esas historias se puedan volver una realidad.
                  </div>
                </div>
              </div>
              <div className="divBtnSec5">
                <a className="btnHP" href="/Tienda">
                  Más sobre nosotros
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="seccion6">
        <div className="divImgSec6">
          <img className="imgSec6" src={clienteHP} />
        </div>
        <p className="cel nombreCliente">Mariana Jasso @marizjassoc</p>
        <div className="divTextoSec6">
          <p className="textoSec6">
            “Estoy muy feliz y agradecida de haber probado PR, me ayuda a tener
            un buen rendimiento en los entrenamientos y en mi día a día para
            lograr los objetivos que me propongo.”
          </p>
          <p className="pc">Mariana Jasso @marizjassoc</p>
        </div>
      </div>
      {/* <Correo /> */}
    </>
  );
};

export default Homepage;
