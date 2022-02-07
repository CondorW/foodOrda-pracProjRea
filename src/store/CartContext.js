import { createContext, useState } from "react";
import { dishData } from "../data";

export const cContext = createContext({
  cartItems: [],
  onAdd: (id, amount) => {},
});

export default function Context(props) {
  const [cartState, setCartState] = useState([]);

  const addCartHandler = (id, amount) => {
    setCartState((cartState) => {
      for (let x = 0; x < amount; x++) {
        cartState.push(dishData[id]);
      }
    });
  };

  return (
    <cContext.Provider value={{ cartItems: cartState, onAdd: addCartHandler }}>
      {props.children}
    </cContext.Provider>
  );
}
