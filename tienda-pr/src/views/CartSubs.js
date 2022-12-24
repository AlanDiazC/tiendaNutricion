import React, { useState } from "react";
import { TiArrowBack } from "react-icons/ti";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import PoliciaCarrito from "./policiaCarrito";

const Cart = ({ totalR, setTotalR, producto, setProducto }) => {
  const [flag, setFlag] = useState(true);
  let variable = 0;
  let total = 0;
  const cart = useSelector((state) => state);
  const dispatch = useDispatch();

  const verificar = () => {
    if (flag) {
      const addition = (acc, currentvalue) => {
        return acc + currentvalue.price * currentvalue.quantity;
      };
      variable = producto.precio * producto.quantity;
      setTotalR(variable);
      return (
        <div className="cart">
          <div className="cartcad" key={producto.priceID}>
            <div>
              <img
                className="objCarroImg"
                src={producto.imagen[0]}
                alt="cart"
              />
              <h4>{producto.nombre}</h4>
              <button
                className="remover"
                onClick={(e) => {
                  e.preventDefault();
                  window.location = `/Tienda`;
                }}
              >
                X
              </button>
              <p>
                Precio: {/*M.N*/}$ {producto.precio}
              </p>
              <p>
                Cantidad : {/*M.N*/} {producto.quantity}
              </p>
            </div>
            <div className="btnsCantidad">
              <button
                onClick={(e) => {
                  e.preventDefault();
                  setProducto({
                    ...producto,
                    producto0: {
                      nombre: producto.nombre,
                      imagen: producto.imagen,
                      descripcion: producto.descripcion,
                      precio: producto.precio,
                      uso: producto.uso,
                      tabla: producto.tabla,
                      articulos: producto.articulos,
                      beneficiosAdulto: producto.beneficiosAdulto,
                      beneficiosAtl: producto.beneficiosAtl,
                      beneficiosPrinc: producto.beneficiosPrinc,
                      preguntas: producto.Preguntas,
                      quantity: producto.quantity + 1,
                    },
                  });
                }}
                className="cantidadBtn"
              >
                +
              </button>
              <p className="cantidadCarro">{producto.quantity}</p>
              <button
                onClick={(e) => {
                  if (producto.quantity > 1) {
                    e.preventDefault();
                    setProducto({
                      ...producto,
                      producto0: {
                        nombre: producto.nombre,
                        imagen: producto.imagen,
                        descripcion: producto.descripcion,
                        precio: producto.precio,
                        uso: producto.uso,
                        tabla: producto.tabla,
                        articulos: producto.articulos,
                        beneficiosAdulto: producto.beneficiosAdulto,
                        beneficiosAtl: producto.beneficiosAtl,
                        beneficiosPrinc: producto.beneficiosPrinc,
                        preguntas: producto.Preguntas,
                        quantity: producto.quantity - 1,
                      },
                    });
                  } else {
                    e.preventDefault();
                    window.location = `/Tienda`;
                  }
                }}
                className="cantidadBtn"
              >
                -
              </button>
            </div>
          </div>
        </div>
      );
    }
  };

  return (
    <div className="cartcontainer">
      <Link to="/">
        <TiArrowBack
          style={{ fontSize: "30px", color: "black", marginBottom: "1rem" }}
        />
      </Link>
      {/* <PoliciaCarrito setFlag={setFlag} cart={producto} /> */}
      {verificar()}
      {total > 0 && <h2>total:{total}</h2>}
    </div>
  );
};

export default Cart;
