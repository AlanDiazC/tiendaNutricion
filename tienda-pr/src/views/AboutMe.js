import React, { useState, useRef } from "react";
import "../css/aboutMe.css";
import ReactPlayer from "react-player";

import imgAbout1 from "../multimedia/imgAbout1.jpg";
import imgAbout2 from "../multimedia/imgAbout2.jpg";

import video from "../multimedia/reel1.MOV";

const AboutMe = () => {
  return (
    <div className="aboutMe">
      <div className="aboutMeSec1">
        <div className="container">
          <div className="tituloAboutMe">
            <h1>Sobre Nosotros</h1>
          </div>
          <div className="row">
            <div className="imgAboutMe">
              <img src="https://firebasestorage.googleapis.com/v0/b/pr-nutrition.appspot.com/o/imgAbout1.jpg?alt=media&token=f894e91a-4406-4ec4-a9f4-0cb50e7c7908" />
            </div>
            <div className="contentAboutMe">
              <div className="subtituloAboutMe">
                <h2>Nuestra Misión</h2>
              </div>
              <p>
                Crear y desarrollar productos que están avalados científicamente
                y que sean de alta calidad para maximizar el bienestar y
                desempeño de las personas.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="aboutMeSec2 cel">
        <span>Just Do It</span>
        <div className="container">
          <div className="vidAboutMe">
            {/* <iframe src="https://www.youtube.com/embed/Oau9xqKARc0"></iframe> */}
            <ReactPlayer
              controls
              className="playerAbout"
              url="https://firebasestorage.googleapis.com/v0/b/pr-nutrition.appspot.com/o/reel1.MOV?alt=media&token=c37cca4a-16b9-42a3-b75d-351164ca6e32"
            />
          </div>
        </div>
        <div className="aboutMe2Col">
          <div className="container">
            <div className="row">
              <div className="aboutMeColIzq">
                <div className="contentAboutMe">
                  <div className="textoAboutMe">
                    <h2>Nuestra Visión</h2>
                    <p>
                      Complementar y acompañar a toda persona que deseé rendir
                      óptimamente ante las adversidades que un estilo de vida
                      activo tiene como precio.
                    </p>
                  </div>
                </div>
              </div>
              <div className="aboutMeColDer">
                <div className="divImgAboutMe">
                  <img src="https://firebasestorage.googleapis.com/v0/b/pr-nutrition.appspot.com/o/imgAbout2.jpg?alt=media&token=56e8cc17-4e32-4fa0-9578-dd6a9ffeb03e" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="aboutMeTextoFinal">
          <div className="container">
            <div className="subtituloAboutMe">
              <h2>Nuestra Filosofía</h2>
            </div>
            <p>
              Somos 3 amigos que soñamos y vivimos el deporte, por lo tanto,
              somos personas activas que buscan el mejor performance en la vida
              cotidiana. Sabemos que cada quien tiene una historia que contar,
              somos testigos de los grandes logros que cada quien como individuo
              puede lograr y queremos ser parte de ello y brindar herramientas
              para que esas historias se puedan volver una realidad, si tú
              cumples tus metas, nosotros cumplimos nuestro sueño.
            </p>
          </div>
        </div>
      </div>
      <div className="aboutMeSec2 pc">
        <div className="aboutMe2Col">
          <div className="container">
            <div className="row">
              <div className="aboutMeColIzq">
                <div className="contentAboutMe">
                  <div className="textoAboutMe">
                    <h2>Nuestra Visión</h2>
                    <p>
                      Complementar y acompañar a toda persona que deseé rendir
                      óptimamente ante las adversidades que un estilo de vida
                      activo tiene como precio.
                    </p>
                  </div>
                </div>
              </div>
              <div className="aboutMeColDer">
                <div className="vidAboutMe">
                  {/* <iframe src="https://www.youtube.com/embed/Oau9xqKARc0"></iframe> */}
                  <ReactPlayer
                    controls
                    className="playerAbout"
                    url="https://firebasestorage.googleapis.com/v0/b/pr-nutrition.appspot.com/o/reel1.MOV?alt=media&token=c37cca4a-16b9-42a3-b75d-351164ca6e32"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="aboutMe2Col">
          <div className="container">
            <div className="row">
              <div className="aboutMeColDer">
                <div className="divImgAboutMe">
                  <img src="https://firebasestorage.googleapis.com/v0/b/pr-nutrition.appspot.com/o/imgAbout2.jpg?alt=media&token=56e8cc17-4e32-4fa0-9578-dd6a9ffeb03e" />
                </div>
              </div>
              <div className="aboutMeColIzq">
                <div className="contentAboutMe">
                  <div className="textoAboutMe">
                    <h2>Nuestra Filosofía</h2>
                    <p>
                      Somos 3 amigos que soñamos y vivimos el deporte, por lo
                      tanto, somos personas activas que buscan el mejor
                      performance en la vida cotidiana. Sabemos que cada quien
                      tiene una historia que contar, somos testigos de los
                      grandes logros que cada quien como individuo puede lograr
                      y queremos ser parte de ello y brindar herramientas para
                      que esas historias se puedan volver una realidad, si tú
                      cumples tus metas, nosotros cumplimos nuestro sueño.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
