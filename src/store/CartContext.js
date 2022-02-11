import { createContext, useState, useReducer } from "react";
import { dishData } from "../data";

const itemReducer = ()=>{
  switch (key) {
    case value:
      
      break;
  
    default:
      break;
  }
}

export const cContext = createContext({
  cartItems: [],
  cartItemsCount: 0,
  onAdd: (id, amount) => {},
  onDelete: (id) => {},
  showCart: false,
  onShowCart: () => {},
});
var cartArray = [];
var cartCount = 0;

export default function Context(props) {
  const [itemCountState, setItemCountState] = useState();
  const [showCartState, setShowCartState] = useState(false);
  const [itemCartState, setItemCartState] = useState([]);

  const [itemReducer, dispatchItemReducer] = useReducer(itemReducer,{itemCount:0,showCart:false, itemCart:[]})

  const addCartHandler = (id, amount) => {
    if (amount > 0 && id >= 0) {
      for (let x = 0; x < amount; x++) {
        cartArray.push(dishData[id]);
      }
    } else {
      return;
    }
    cartCount = cartArray.length;
    setItemCartState(cartArray);
    console.log(cartArray);
    setItemCountState(cartCount);
  };
  const deleteCartHandler = (id) => {
    const stackArray = itemCartState;
    stackArray.splice(id,1);
    setItemCartState(stackArray);
    console.log(itemCartState);
  };

  const showCartHandler = () => {
    if (!showCartState) {
      setShowCartState(true);
    } else if (showCartState) {
      setShowCartState(false);
    }
    console.log(showCartState);
  };
  console.log(itemCartState);
  return (
    <cContext.Provider
      value={{
        cartItems: itemCartState,
        cartItemsCount: itemCountState,
        onAdd: addCartHandler,
        showCart: showCartState,
        onShowCart: showCartHandler,
        onDelete: deleteCartHandler,
      }}
    >
      {props.children}
    </cContext.Provider>
  );
}
