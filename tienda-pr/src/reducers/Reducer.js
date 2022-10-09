const Reducer = (cart = [], action) => {
  // console.log("reducer:" + cart.length);
  if (action.type === "ADD") {
    let tempcart = cart.filter(
      (item) => item.priceID === action.payload.priceID
    );
    if (tempcart < 1) {
      return [...cart, action.payload];
    } else {
      return cart;
    }
  }
  if (action.type === "REMOVE") {
    return cart.filter((item) => {
      if (item.priceID === action.payload.priceID) {
        return item.id !== action.payload.id;
      }
      return item;
    });
  }
  if (action.type === "INCREASE") {
    let tempcart = cart.map((item) => {
      if (item.priceID === action.payload.priceID) {
        return { ...item, quantity: item.quantity + 1 };
      }
      return item;
    });
    return tempcart;
  }
  if (action.type === "DECREASE") {
    let tempcart = cart.map((item) => {
      if (item.priceID === action.payload.priceID) {
        return { ...item, quantity: item.quantity - 1 };
      }
      return item;
    });
    return tempcart;
  }
  return cart;
};
export default Reducer;
