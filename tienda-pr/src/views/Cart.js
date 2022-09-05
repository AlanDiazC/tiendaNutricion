import React from "react";
import { TiArrowBack } from "react-icons/ti";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

const Cart = ({ totalR, setTotalR }) => {
  const cart = useSelector((state) => state);
  const dispatch = useDispatch();
  const addition = (acc, currentvalue) => {
    return acc + currentvalue.price * currentvalue.quantity;
  };
  const total = cart.reduce(addition, 0);
  let variable = 0;
  cart.forEach((element) => {
    variable = variable + element.precio * element.quantity;
  });
  setTotalR(variable);

  return (
    <div className="cartcontainer">
      <Link to="/">
        <TiArrowBack />
      </Link>
      <div className="cart">
        {cart.map((item) => {
          return (
            <div className="cartcad" key={item.priceID}>
              <div>
                <img className="objCarroImg" src={item.imagen[0]} alt="cart" />
                <h4>{item.nombre}</h4>
                <p>
                  pecio: {/*M.N*/}$ {item.precio}
                </p>
                <p>
                  cantidad : {/*M.N*/} {item.quantity}
                </p>
                {/*  */}
                <button
                  onClick={() => dispatch({ type: "REMOVE", payload: item })}
                >
                  remove
                </button>
              </div>
              <div>
                <button
                  onClick={() => dispatch({ type: "INCREASE", payload: item })}
                >
                  +
                </button>
                <p>{item.quantity}</p>
                <button
                  onClick={() => {
                    if (item.quantity > 1) {
                      dispatch({ type: "DECREASE", payload: item });
                    } else {
                      dispatch({ type: "REMOVE", payload: item });
                    }
                  }}
                >
                  -
                </button>
              </div>
            </div>
          );
        })}
      </div>
      {total > 0 && <h2>total:{total}</h2>}
    </div>
  );
};

export default Cart;
