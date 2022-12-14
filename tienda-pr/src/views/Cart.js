import React, { useState } from "react";
import { TiArrowBack } from "react-icons/ti";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import PoliciaCarrito from "./policiaCarrito";

const Cart = ({ totalR, setTotalR }) => {
  const [flag, setFlag] = useState(false);
  let variable = 0;
  let total = 0;
  const cart = useSelector((state) => state);
  const dispatch = useDispatch();

  const verificar = () => {
    if (flag) {
      const addition = (acc, currentvalue) => {
        return acc + currentvalue.price * currentvalue.quantity;
      };
      total = cart.reduce(addition, 0);
      cart.forEach((element) => {
        variable = variable + element.precio * element.quantity;
      });
      setTotalR(variable);
      return (
        <div className="cart">
          {cart.map((item) => {
            return (
              <div className="cartcad" key={item.priceID}>
                <div>
                  <img
                    className="objCarroImg"
                    src={item.imagen[0]}
                    alt="cart"
                  />
                  <h4>{item.nombre}</h4>
                  <button
                    onClick={() => dispatch({ type: "REMOVE", payload: item })}
                    className="remover"
                  >
                    X
                  </button>
                  <p>
                    Precio: {/*M.N*/}$ {item.precio}
                  </p>
                  <p>
                    Cantidad : {/*M.N*/} {item.quantity}
                  </p>
                </div>
                <div className="btnsCantidad">
                  <button
                    onClick={(e) => {
                      e.preventDefault();
                      dispatch({ type: "INCREASE", payload: item });
                    }}
                    className="cantidadBtn"
                  >
                    +
                  </button>
                  <p className="cantidadCarro">{item.quantity}</p>
                  <button
                    onClick={(e) => {
                      if (item.quantity > 1) {
                        e.preventDefault();
                        dispatch({ type: "DECREASE", payload: item });
                      } else {
                        e.preventDefault();
                        dispatch({ type: "REMOVE", payload: item });
                      }
                    }}
                    className="cantidadBtn"
                  >
                    -
                  </button>
                </div>
              </div>
            );
          })}
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
      <PoliciaCarrito setFlag={setFlag} cart={cart} />
      {verificar()}
      {total > 0 && <h2>total:{total}</h2>}
    </div>
  );
};

export default Cart;
