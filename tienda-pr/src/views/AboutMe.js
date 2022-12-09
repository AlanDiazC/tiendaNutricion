import React, { useState, useRef } from "react";
import "../css/aboutMe.css";
import ReactPlayer from "react-player";

import meet from "../multimedia/meet.PNG";
import Mau from "../multimedia/Mau.JPG";
import Lalo from "../multimedia/Lalo.JPG";
import Alo from "../multimedia/Alo.JPG";

import video from "../multimedia/reel1.MOV";

const AboutMe = () => {
  return (
    <>
      <div className="aboutMeSec1">
        <section>
          <div className="imgFondoAbout"></div>
        </section>
      </div>
      <div className="aboutMe">
        <div className="aboutMeSec2">
          <div className="meetTeam">
            <img className="meet" src={meet} />
          </div>
          <div className="meetTexto">
            <span className="textoTeam">
              Somos 3 amigos que soñamos y vivimos el deporte, por lo tanto,
              somos personas activas que buscan el performance en la vida
              cotidiana. Sabemos que cada quien tiene una historia y meta que
              cruzar, queremos ser parte de tus sueños, acompañarte y brindarte
              herramientas para que tus metas se vuelvan realidad.
            </span>
          </div>
        </div>
        <div className="aboutMeSec3">
          <div className="persona">
            <div className="divCara">
              <img className="cara" src={Mau} />
            </div>
            <p className="nombre">MAU</p>
            <span className="puesto">
              Coach, atleta profesional, cofundador
            </span>
            <br />
            <span>Marketing y relaciones publicas</span>
          </div>
          <div className="persona">
            <div className="divCara">
              <img className="cara" src={Alo} />
            </div>
            <p className="nombre">ALO</p>
            <span className="puesto">
              Coach, nutricionista, triatleta, cofundador
            </span>
            <br />
            <span>Desarrollo de productos, servicio al cliente.</span>
          </div>
          <div className="persona">
            <div className="divCara">
              <img className="cara" src={Lalo} />
            </div>
            <p className="nombre">LALO</p>
            <span className="puesto">
              Ingeniero, godin, triatleta cofundador
            </span>
            <br />
            <span>Finanzas y relaciones comerciales</span>
          </div>
        </div>
      </div>
      <div className="aboutMeSec4">
        <ReactPlayer
          controls
          className="playerAbout"
          url="https://firebasestorage.googleapis.com/v0/b/pr-nutrition.appspot.com/o/reel1.MOV?alt=media&token=c37cca4a-16b9-42a3-b75d-351164ca6e32"
        />
        <div className="texto">
          <div className="texto1About">
            <p className="h1">
              Nuestra <b>Misión</b>
            </p>
            <p>
              Crear y desarrollar productos que están avalados científicamente y
              que sean de alta calidad para maximizar el bienestar y desempeño
              de las personas.
            </p>
          </div>
          <div className="texto2About">
            <p className="h1">
              Nuestra <b>Visión</b>
            </p>
            <p>
              Complementar y acompañar a toda persona que deseé rendir
              óptimamente ante las adversidades que un estilo de vida activo
              tiene como precio.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutMe;
