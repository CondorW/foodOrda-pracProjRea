import { createContext, useReducer } from "react";
import { dishData } from "../data";

const cartReducer = (state, action) => {
  switch (action.type) {
    case "CART_COUNT":
      console.log(action.value);
      return {
        count: action.value,
        items: state.items,
        cartState: false,
      };
    case "CART_ITEMS":
      console.log(action.value);
      return {
        count: state.count,
        items: action.value,
        cartState: false,
      };
    case "DELETE_ITEM":
      console.log(action.value);
      return {
        count: action.value.length,
        items: action.value,
        cartState: state.cartState,
      };
    case "CART_STATE":
      return {
        count: state.count,
        items: state.items,
        cartState: !state.cartState,
      };
    default:
      return state;
  }
};

export const cContext = createContext({
  cartItems: [],
  cartItemsCount: 0,
  cartTotal: 0,
  onAdd: (id, amount) => {},
  onDelete: (id) => {},
  showCart: false,
  onShowCart: () => {},
});
var cartArray = [];
var cartCount = 0;

export default function Context(props) {
  const [cartState, dispatchCartReducer] = useReducer(cartReducer, {
    count: 0,
    state: false,
    items: [],
  });

  const addCartHandler = (id, amount) => {
    if (amount > 0 && id >= 0) {
      for (let x = 0; x < amount; x++) {
        cartArray.push(dishData[id]);
      }
    } else {
      return;
    }
    cartCount = cartArray.length;
    dispatchCartReducer({ type: "CART_COUNT", value: cartCount });
    dispatchCartReducer({ type: "CART_ITEMS", value: cartArray });
  };
  const deleteCartHandler = (id) => {
    const stackArray = cartState.items;
    stackArray.splice(id, 1);
    dispatchCartReducer({ type: "DELETE_ITEM", value: stackArray });
  };

  const showCartHandler = () => {
    dispatchCartReducer({ type: "CART_STATE" });
  };

  let totalCartPrice = 0;
  for (let x = 0; x < cartState.items.length; x++) {
    console.log(cartState.items[x].dishPrice);
    totalCartPrice += cartState.items[x].dishPrice;
  }
  totalCartPrice = totalCartPrice.toFixed(2);
  console.log(totalCartPrice);
  return (
    <cContext.Provider
      value={{
        cartItems: cartState.items,
        cartItemsCount: cartState.count,
        cartTotal: totalCartPrice,
        onAdd: addCartHandler,
        showCart: cartState.cartState,
        onShowCart: showCartHandler,
        onDelete: deleteCartHandler,
      }}
    >
      {props.children}
    </cContext.Provider>
  );
}
