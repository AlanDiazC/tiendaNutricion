import React from "react";
import "../css/footer.css";

const Footer = () => {
  return (
    <div className="secFooter">
      <footer className="footer">
        <div className="containerFooter">
          <div className="footerRow">
            <div className="footerColLogo">
              <img
                src="https://firebasestorage.googleapis.com/v0/b/pr-nutrition.appspot.com/o/Logo.png?alt=media&token=28787aa8-3cdb-4c68-b1bf-75bd9bbd8a64"
                className="footerLogo"
              />
            </div>
            <div className="footerCol">
              <div className="footerTitulo">
                <h4>Soporte</h4>
                <ul>
                  <li>
                    <a href="/Contacto">Contacto</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="footerCol">
              <div className="footerTitulo">
                <h4>Tienda</h4>
                <ul>
                  <li>
                    <a href="/Tienda">Productos</a>
                  </li>
                  <li>
                    <a href="/MiCarrito">Carrito</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="footerCol">
              <div className="footerTitulo">
                <h4>Cuenta</h4>
                <ul>
                  <li>
                    <a href="/MiCuenta">Mi Cuenta</a>
                  </li>
                  <li>
                    <a href="/LogIn">Cerrar Sesión</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="footerCol">
              <div className="footerTitulo">
                <h4>Contactanos</h4>
                <ul>
                  <li>
                    <a>pr.nutritionmx@gmail.com</a>
                  </li>
                  <li>
                    <a href="https://wa.me/525516820762">+52 55 1682 0762</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
