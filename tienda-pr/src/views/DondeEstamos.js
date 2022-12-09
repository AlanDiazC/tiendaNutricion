import React from "react";
import "../css/dondeEstamos.css";

import Mau from "../multimedia/Mau.JPG";
import Alo from "../multimedia/Alo.JPG";

import Contacto from "./Contacto";

const DondeEstamos = () => {
  return (
    <>
      <div className="dondeEstamosSec1">
        <section>
          <div className="imgFondoAbout">
            <span>Donde Estamos</span>
          </div>
        </section>
      </div>
      <div className="dondeEstamos">
        <div className="dondeEstamosSec3">
          <div className="persona1 direccion">
            <div className="divCaraLogo">
              <img className="caraLogo" src={Mau} />
            </div>
            <p className="nombreLogo">CLUB HAUS</p>
            <span>Pedregal 44, lomas virreyes, Miguel hidalgo 11040 CDMX</span>
          </div>
          <div className="persona2 direccion">
            <div className="divCaraLogo">
              <img className="caraLogo" src={Alo} />
            </div>
            <p className="nombreLogo">METTA RUNNING HAUS</p>
            <span>
              C. Enrique Wallon 414, Polanco V secc Miguel Hidalgo 11580 CDMX
            </span>
          </div>
        </div>
      </div>
      <Contacto />
    </>
  );
};

export default DondeEstamos;
