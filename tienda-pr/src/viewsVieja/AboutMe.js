import React, { useState, useRef } from "react";
import "../css/aboutMe.css";
import logo from "../multimedia/Logo.png";
const AboutMe = () => {
  return (
    <div>
      <div className="Nosotros">
        <h1 className="nosTitulo">Sobre Nosotros</h1>
        <div>
          <div className="nosotrosCateg">
            <h1 className="nosCatTitulo">Misión</h1>
            <p>
              Crear y desarrollar productos que están avalados científicamente y
              que sean de alta calidad para maximizar el bienestar y desempeño
              de las personas.
            </p>
          </div>
          <img src={logo} className="nosImg" />
        </div>
        <div>
          <div className="nosotrosCateg">
            <h1 className="nosCatTitulo">Visión</h1>
            <p>
              Complementar y acompañar a toda persona que deseé rendir
              óptimamente ante las adversidades que un estilo de vida activo
              tiene como precio.
            </p>
          </div>
          <img src={logo} className="nosImg" />
        </div>
        <div>
          <div className="nosotrosCateg">
            <h1 className="nosCatTitulo">Filosofía</h1>
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
          <img src={logo} className="nosImg" />
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
