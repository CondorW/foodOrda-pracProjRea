import { createContext, useEffect, useState } from "react";
import { dishData } from "../data";

export const cContext = createContext({
  cartItems: [],
  cartItemsCount: 0,
  onAdd: (id, amount) => {},
  showCart: false,
  onShowCart: () => {},
});
var cartArray = [];
var cartCount = 0;

export default function Context(props) {
  const [itemCountState, setItemCountState] = useState();
  const [showCartState, setShowCartState] = useState(false);

  const addCartHandler = (id, amount) => {
    if (amount > 0 && id >= 0) {
      for (let x = 0; x < amount; x++) {
        cartArray.push(dishData[id]);
      }
    } else {
      return;
    }
    cartCount = cartArray.length;
    console.log(cartArray);
    setItemCountState(cartCount);
  };

  const showCartHandler = () => {
    if (!showCartState) {
      setShowCartState(true);
    } else if (showCartState) {
      setShowCartState(false);
    }
    console.log(showCartState);
  };

  return (
    <cContext.Provider
      value={{
        cartItems: cartArray,
        cartItemsCount: itemCountState,
        onAdd: addCartHandler,
        showCart: showCartState,
        onShowCart: showCartHandler,
      }}
    >
      {props.children}
    </cContext.Provider>
  );
}
