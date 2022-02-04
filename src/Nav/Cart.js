import { Fragment } from "react";
import cart from "./shopping-cart.png";

export default function Cart() {
  return (
    <div className="flex bg-black bg-opacity-50 rounded p-2 m-2 text-white">
      <img className="object-scale-down h-6 pr-2"  src={cart} alt="" />
      <h1>Your Cart</h1>
      <h1 className="mx-6">4</h1>
    </div>
  );
}
