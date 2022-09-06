import React, { useState } from "react";
import { TiArrowBack } from "react-icons/ti";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import PoliciaCarrito from "./policiaCarrito";

const CartEnvio = ({ totalR, setTotalR }) => {
  const [flag, setFlag] = useState(false);
  let variable = 0;
  let total = 0;
  const cart = useSelector((state) => state);

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
                          <span className="cantidadProdEnvio">
                            {item.quantity}
                          </span>
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
    }
  };

  return (
    <div className="cartcontainer">
      <PoliciaCarrito setFlag={setFlag} cart={cart} />
      {verificar()}
    </div>
  );
};

export default CartEnvio;
