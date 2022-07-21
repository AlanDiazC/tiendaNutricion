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
    <div>
      {cart.map((item) => {
        return (
          <div className="prodEnvio" key={item.priceID}>
            <table className="tablaProdEnvip">
              <tbody>
                <tr>
                  <td className="imagenProdEnvio">
                    <div className="prodEnvio-thumbnail">
                      <div className="imgProdEnvio">
                        <img src={item.imagen[0]} />
                      </div>
                      <span className="cantidadProdEnvio">1</span>
                    </div>
                  </td>
                  <tn className="nombreProdEnvio">
                    <span>{item.nombre}</span>
                  </tn>
                  <tn className="precioProdEnvio">
                    <span>${item.precio * item.quantity}</span>
                  </tn>
                </tr>
              </tbody>
            </table>
          </div>
        );
      })}
    </div>
  );
};

export default Cart;
