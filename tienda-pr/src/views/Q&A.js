import React, { useState, useRef } from "react";
import "../css/Q&A.css";

import { MdKeyboardArrowDown } from "react-icons/md";
import { MdKeyboardArrowUp } from "react-icons/md";

const QnA = () => {
  const [apt1, setApt1] = useState(true);
  const ocultarApt1 = () => setApt1(!apt1);
  const [apt1Preg1, setApt1Preg1] = useState(false);
  const ocultarApt1Preg1 = () => setApt1Preg1(!apt1Preg1);
  const [apt1Preg2, setApt1Preg2] = useState(false);
  const ocultarApt1Preg2 = () => setApt1Preg2(!apt1Preg2);
  const [apt1Preg3, setApt1Preg3] = useState(false);
  const ocultarApt1Preg3 = () => setApt1Preg3(!apt1Preg3);

  const [apt2, setPApt2] = useState(true);
  const ocultarApt2 = () => setPApt2(!apt2);
  const [apt2Preg1, setApt2Preg1] = useState(false);
  const ocultarApt2Preg1 = () => setApt2Preg1(!apt2Preg1);
  const [apt2Preg2, setApt2Preg2] = useState(false);
  const ocultarApt2Preg2 = () => setApt2Preg2(!apt2Preg2);
  const [apt2Preg3, setApt2Preg3] = useState(false);
  const ocultarApt2Preg3 = () => setApt2Preg3(!apt2Preg3);
  const [apt2Preg4, setApt2Preg4] = useState(false);
  const ocultarApt2Preg4 = () => setApt2Preg4(!apt2Preg4);
  const [apt2Preg5, setApt2Preg5] = useState(false);
  const ocultarApt2Preg5 = () => setApt2Preg5(!apt2Preg5);
  const [apt2Preg6, setApt2Preg6] = useState(false);
  const ocultarApt2Preg6 = () => setApt2Preg6(!apt2Preg6);

  const [apt3, seApt3] = useState(true);
  const ocultarApt3 = () => seApt3(!apt3);
  const [apt3Preg1, setApt3Preg1] = useState(false);
  const ocultarApt3Preg1 = () => setApt3Preg1(!apt3Preg1);
  const [apt3Preg2, setApt3Preg2] = useState(false);
  const ocultarApt3Preg2 = () => setApt3Preg2(!apt3Preg2);
  const [apt3Preg3, setApt3Preg3] = useState(false);
  const ocultarApt3Preg3 = () => setApt3Preg3(!apt3Preg3);
  const [apt3Preg4, setApt3Preg4] = useState(false);
  const ocultarApt3Preg4 = () => setApt3Preg4(!apt3Preg4);

  const dropdownRef = useRef(null);

  return (
    <div>
      <div className="bannerQnA">
        <div>
          <h1>Preguntas Frecuentes</h1>
        </div>
      </div>
      <div className="QnA">
        <div className="preguntasSec">
          {/* Apt1 */}
          <div className={`panel panel1 ${apt1 ? "active" : "inactive"}`}>
            <div className="pregPanel">
              <h3 className="tituloQnAPanel">
                <a ref={dropdownRef} onClick={() => ocultarApt1()}>
                  <span className="flechaQnA">
                    <MdKeyboardArrowUp />
                  </span>
                  <span className="preguntaQnA">PR Nutrition</span>
                </a>
              </h3>
            </div>
            {/* Preg1 */}
            <div
              className={`preguntas pregPanel1 pregunta1Pan1 ${
                apt1Preg1 ? "active" : "inactive"
              }`}
            >
              <div className="preguntaN">
                <h4>
                  <a ref={dropdownRef} onClick={() => ocultarApt1Preg1()}>
                    <span className="preg">
                      ¿PR FUEL sustituye a los geles energéticos?
                    </span>
                    <span className="iconoPreg iconoPreg1"></span>
                  </a>
                </h4>
              </div>
              <div className="respuesta respuestaApt1Preg1">
                <div>
                  <p>
                    Puede hacerlo en su totalidad, pero te recomendamos
                    consultarlo con tu nutríolo@, ya que una combinación de
                    ambos puede complementar y potencializar el rendimiento.
                  </p>
                </div>
              </div>
            </div>
            {/* Preg2 */}
            <div
              className={`preguntas pregPanel1 pregunta2Pan1 ${
                apt1Preg2 ? "active" : "inactive"
              }`}
            >
              <div className="preguntaN">
                <h4>
                  <a ref={dropdownRef} onClick={() => ocultarApt1Preg2()}>
                    <span className="preg">ADVERTENCIAS</span>
                    <span className="iconoPreg iconoPreg2"></span>
                  </a>
                </h4>
              </div>
              <div className="respuesta pregPanel1 respuestaApt1Preg2">
                <div>
                  <p>
                    No se recomienda su uso a personas con condiciones médicas
                    preexistentes, a quienes están tomando algún medicamento, ni
                    a menores de 18 años.
                    <br />
                    Mantenga el producto fuera del alcance de los niños y las
                    mascotas
                  </p>
                </div>
              </div>
            </div>
            {/* Preg3 */}
            <div
              className={`preguntas pregPanel1 pregunta3Pan1 ${
                apt1Preg3 ? "active" : "inactive"
              }`}
            >
              <div className="preguntaN">
                <h4>
                  <a ref={dropdownRef} onClick={() => ocultarApt1Preg3()}>
                    <span className="preg">Exoneración de responsabilidad</span>
                    <span className="iconoPreg iconoPreg3"></span>
                  </a>
                </h4>
              </div>
              <div className="respuesta pregPanel1 respuestaApt1Preg3">
                <div>
                  <p>
                    "El embalaje y los materiales reales del producto pueden
                    contener más información diferente a la que se muestra en
                    nuestro sitio web. Le recomendamos que no confie únicamente
                    en la información presentada y que siempre lea las
                    etiquetas, advertencias e instrucciones antes de usar o
                    consumir un producto"
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/* Apt2 */}
          <div className={`panel panel2 ${apt2 ? "active" : "inactive"}`}>
            <div className="pregPanel">
              <h3 className="tituloQnAPanel">
                <a ref={dropdownRef} onClick={() => ocultarApt2()}>
                  <span className="flechaQnA">
                    <MdKeyboardArrowUp />
                  </span>
                  <span className="preguntaQnA">PR REDS</span>
                </a>
              </h3>
            </div>
            {/* Preg1 */}
            <div
              className={`preguntas pregPanel2 pregunta1Pan2 ${
                apt2Preg1 ? "active" : "inactive"
              }`}
            >
              <div className="preguntaN">
                <h4>
                  <a ref={dropdownRef} onClick={() => ocultarApt2Preg1()}>
                    <span className="preg">Resumen del producto</span>
                    <span className="iconoPreg iconoPreg2"></span>
                  </a>
                </h4>
              </div>
              <div className="respuesta respuestaApt2Preg1">
                <div>
                  <p>
                    PR REDS encontró la forma de asegurar la concentración de
                    nutrientes propios del betabel en su forma natural. <br />
                    Se trata de un suplemento creado para mejorar tu rendimiento
                    físico y mental.
                  </p>
                </div>
              </div>
            </div>
            {/* Preg2 */}
            <div
              className={`preguntas pregPanel2 pregunta2Pan2 ${
                apt2Preg2 ? "active" : "inactive"
              }`}
            >
              <div className="preguntaN">
                <h4>
                  <a ref={dropdownRef} onClick={() => ocultarApt2Preg2()}>
                    <span className="preg">¿Cómo usar PR Reds?</span>
                    <span className="iconoPreg iconoPreg2"></span>
                  </a>
                </h4>
              </div>
              <div className="respuesta pregPanel2 respuestaApt2Preg2">
                <div>
                  <p>
                    Disolver 1 scoop (5 gramos) en 500ml agua fría antes de
                    entrenar o en la mañana
                  </p>
                </div>
              </div>
            </div>
            {/* Preg3 */}
            <div
              className={`preguntas pregPanel2 pregunta3Pan2 ${
                apt2Preg3 ? "active" : "inactive"
              }`}
            >
              <div className="preguntaN">
                <h4>
                  <a ref={dropdownRef} onClick={() => ocultarApt2Preg3()}>
                    <span className="preg">¿Quién debería tomar PR REDS?</span>
                    <span className="iconoPreg iconoPreg3"></span>
                  </a>
                </h4>
              </div>
              <div className="respuesta pregPanel2 respuestaApt2Preg3">
                <div>
                  <p>
                    Gracias a su concentración de betalainas, fitonutriente
                    presente en el betabel, PR REDS puede utilizarse en todas
                    aquellas personas que quieran cuidar de la salud de su
                    sistema cardiovascular; incluidos deportistas de resistencia
                    que busquen optimizar su rendimiento favoreciento éste.
                  </p>
                </div>
              </div>
            </div>
            {/* Preg4 */}
            <div
              className={`preguntas pregPanel2 pregunta4Pan2 ${
                apt2Preg4 ? "active" : "inactive"
              }`}
            >
              <div className="preguntaN">
                <h4>
                  <a ref={dropdownRef} onClick={() => ocultarApt2Preg4()}>
                    <span className="preg">
                      ¿Cuáles son los beneficios de tomar PR REDS?
                    </span>
                    <span className="iconoPreg iconoPreg2"></span>
                  </a>
                </h4>
              </div>
              <div className="respuesta pregPanel2 respuestaApt2Preg4">
                <div>
                  <p>
                    Debido a su concentración de nitratos, PR REDS favorece la
                    vasodilatación, aumenta el flujo sanguineo y la oxigenación
                    del cuerpo, mejora la contracción y relajación muscular y
                    disminuye la presión sanguinea. Retrasa la aparición de la
                    fatiga, mejora la potencia muscular y mejora el rendimiento.
                  </p>
                </div>
              </div>
            </div>
            {/* Preg5 */}
            <div
              className={`preguntas pregPanel2 pregunta5Pan2 ${
                apt2Preg5 ? "active" : "inactive"
              }`}
            >
              <div className="preguntaN">
                <h4>
                  <a ref={dropdownRef} onClick={() => ocultarApt2Preg5()}>
                    <span className="preg">
                      ¿PR REDS tiene efectos contraproducentes?
                    </span>
                    <span className="iconoPreg iconoPreg2"></span>
                  </a>
                </h4>
              </div>
              <div className="respuesta pregPanel2 respuestaApt2Preg5">
                <div>
                  <p>
                    Al ser un producto natural PR REDS no tiene efectos
                    contraproducentes importantes. Por el poder firquímico del
                    betabel puede causar coloración marrón en heces.
                  </p>
                </div>
              </div>
            </div>
            {/* Preg6 */}
            <div
              className={`preguntas pregPanel2 pregunta6Pan2 ${
                apt2Preg6 ? "active" : "inactive"
              }`}
            >
              <div className="preguntaN">
                <h4>
                  <a ref={dropdownRef} onClick={() => ocultarApt2Preg6()}>
                    <span className="preg">
                      ¿Puedo mezclar PR REDS con otro suplemento?
                    </span>
                    <span className="iconoPreg iconoPreg2"></span>
                  </a>
                </h4>
              </div>
              <div className="respuesta pregPanel2 respuestaApt2Preg6">
                <div>
                  <p>
                    Sí, PR REDS se complementa bien con ayudar ergogénicas
                    durante el entrenamiento sin causar interacción.
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/* Apt3 */}
          <div className={`panel panel3 ${apt3 ? "active" : "inactive"}`}>
            <div className="pregPanel">
              <h3 className="tituloQnAPanel">
                <a ref={dropdownRef} onClick={() => ocultarApt3()}>
                  <span className="flechaQnA">
                    <MdKeyboardArrowUp />
                  </span>
                  <span className="preguntaQnA">PR Fuel</span>
                </a>
              </h3>
            </div>
            {/* Preg1 */}
            <div
              className={`preguntas pregPanel3 pregunta1Pan3 ${
                apt3Preg1 ? "active" : "inactive"
              }`}
            >
              <div className="preguntaN">
                <h4>
                  <a ref={dropdownRef} onClick={() => ocultarApt3Preg1()}>
                    <span className="preg">Resumen del producto</span>
                    <span className="iconoPreg iconoPreg3"></span>
                  </a>
                </h4>
              </div>
              <div className="respuesta respuestaApt3Preg1">
                <div>
                  <p>
                    Buscamos brindar al atleta el sustrato energético necesario
                    durante la actividad física intensa con la finalidad de
                    retrasar la fatiga y así mejorar el rendimiento durante los
                    entrenamientos y competencias, de igual forma darle los
                    electrolítos que se pierden durante.
                  </p>
                </div>
              </div>
            </div>
            {/* Preg2 */}
            <div
              className={`preguntas pregPanel3 pregunta2Pan3 ${
                apt3Preg2 ? "active" : "inactive"
              }`}
            >
              <div className="preguntaN">
                <h4>
                  <a ref={dropdownRef} onClick={() => ocultarApt3Preg2()}>
                    <span className="preg">Objetivos específicos</span>
                    <span className="iconoPreg iconoPreg2"></span>
                  </a>
                </h4>
              </div>
              <div className="respuesta pregPanel3 respuestaApt3Preg2">
                <div>
                  <p>
                    Brindar al atleta los electrolítos que se pierden durante
                    una actividad intensa
                  </p>
                </div>
              </div>
            </div>
            {/* Preg3 */}
            <div
              className={`preguntas pregPanel3 pregunta3Pan3 ${
                apt3Preg3 ? "active" : "inactive"
              }`}
            >
              <div className="preguntaN">
                <h4>
                  <a ref={dropdownRef} onClick={() => ocultarApt3Preg3()}>
                    <span className="preg">¿Cómo usar PR FUEL?</span>
                    <span className="iconoPreg iconoPreg3"></span>
                  </a>
                </h4>
              </div>
              <div className="respuesta pregPanel3 respuestaApt3Preg3">
                <div>
                  <p>
                    Agrega de 1-3 scoops en 500-700ml de agua y mezcla.
                    <br />
                    Como punto de partida: consume 1 scoop por hora de ejercicio
                    para recargar/reponer energías y rehidraterte durante el
                    entrenamiento o competencia.
                    <br />
                    PR FUEL se puede utilizar antes, durante o después del
                    entrenamiento. Agita la botella durante la sesión, ya que
                    algunos ingredientes pueden asentarse en el fondo de la
                    botella
                  </p>
                </div>
              </div>
            </div>
            {/* Preg4 */}
            <div
              className={`preguntas pregPanel3 pregunta4Pan3 ${
                apt3Preg4 ? "active" : "inactive"
              }`}
            >
              <div className="preguntaN">
                <h4>
                  <a ref={dropdownRef} onClick={() => ocultarApt3Preg4()}>
                    <span className="preg">
                      ¿Cuáles son los beneficios de tomar PR FUEL?
                    </span>
                    <span className="iconoPreg iconoPreg4"></span>
                  </a>
                </h4>
              </div>
              <div className="respuesta pregPanel3 respuestaApt3Preg4">
                <div>
                  <p>
                    Es un suplemento de endurance que contiene una fuente y
                    mezcla de carbohídratos de alta calidad más un perfil de
                    electrolítos que te proporciona sodio y potasio para que
                    puedas aguantar y tener una energía sostenida durante los
                    entrenamientos y competencias, debido a los ingredientes
                    usados tiene un vaciado gástrico rápido para evitar
                    molestias estomacales, hinchazón y gases
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QnA;
