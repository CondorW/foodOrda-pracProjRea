import { useContext, useEffect } from "react";
import { cContext } from "../store/CartContext";
import cart from "./shopping-cart.png";

export default function Cart() {
  const cartState = useContext(cContext);
  const itemCount = cartState.cartItemsCount;

  return (
    <button onClick={cartState.onShowCart}>
      <div className="flex bg-black bg-opacity-50 rounded p-2 m-2 text-white">
        <img className="object-scale-down h-6 pr-2" src={cart} alt="" />
        <h1>Your Cart</h1>
        <h1 className="mx-6">{itemCount}</h1>
      </div>
    </button>
  );
}
