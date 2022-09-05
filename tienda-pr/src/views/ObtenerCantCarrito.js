import React from "react";
import { useSelector, useDispatch } from "react-redux";

const ObtenerProductos = ({ setCantCarrito, cantCarrito }) => {
  const cart = useSelector((state) => state);
  const dispatch = useDispatch();
  const addition = (acc, currentvalue) => {
    return acc + currentvalue.price * currentvalue.quantity;
  };
  const total = cart.reduce(addition, 0);
  let variable = 0;
  cart.forEach((element) => {
    variable = variable + element.quantity;
  });
  setCantCarrito(variable);
  return null;
};

export default ObtenerProductos;
