import React, { useState } from "react";
import { TiArrowBack } from "react-icons/ti";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import PoliciaCarrito from "./policiaCarrito";

const CartEnvio = ({ totalR, setTotalR, producto }) => {
  const [flag, setFlag] = useState(true);
  let variable = 0;
  let total = 0;
  const cart = useSelector((state) => state);

  const verificar = () => {
    if (flag) {
      const addition = (acc, currentvalue) => {
        return acc + currentvalue.price * currentvalue.quantity;
      };
      variable = producto.precio * producto.quantity;
      setTotalR(variable);
      return (
        <div>
          <div className="prodEnvio" key={producto.priceID}>
            <table className="tablaProdEnvip">
              <tbody>
                <tr>
                  <td className="imagenProdEnvio">
                    <div className="prodEnvio-thumbnail">
                      <div className="imgProdEnvio">
                        <img src={producto.imagen[0]} />
                      </div>
                      <span className="cantidadProdEnvio">
                        {producto.quantity}
                      </span>
                    </div>
                  </td>
                  <tn className="nombreProdEnvio">
                    <span>{producto.nombre}</span>
                  </tn>
                  <tn className="precioProdEnvio">
                    <span>${producto.precio * producto.quantity}</span>
                  </tn>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      );
    }
  };

  return (
    <div className="cartcontainer">
      {/* <PoliciaCarrito setFlag={setFlag} cart={producto} /> */}
      {verificar()}
    </div>
  );
};

export default CartEnvio;
