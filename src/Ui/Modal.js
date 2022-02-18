import { useContext } from "react";
import { Fragment } from "react/cjs/react.production.min";
import { cContext } from "../store/CartContext";
import ModalCard from "./ModalCard";
import reactDom from "react-dom";

export default function Modal() {
  const cartC = useContext(cContext);
  const overlayRoot = document.getElementById("overlay-root");
  const modalRoot = document.getElementById("modal-root");

  const Backdrop = () => {
    return (
      <div
        onClick={cartC.onShowCart}
        className="w-full h-full bg-gray-800 fixed bg-opacity-75"
      ></div>
    );
  };
  const Modal = () => {
    return (
      <div className="bg-slate-200 w-1/3 h-auto flex absolute left-1/3 top-1/3 flex-col rounded">
        <h1 className="self-center p-2 text-2xl font-bolder">Your Cart</h1>
        {cartC.cartItems.length <= 0 && <p className="self-center">There is nothing in your Cart - Add some Food M8</p>}
        <div>
          {cartC.cartItems.map((ci, index) => {
            return (
              <ModalCard
                id={index}
                key={index}
                itemName={ci.dishName}
                itemPrice={ci.dishPrice}
              ></ModalCard>
            );
          })}
          <div></div>
        </div>
        <div className="flex flex-row place-content-between mx-14 text-2xl">
          <p>Total</p>
          <p>{cartC.cartTotal} €</p>
        </div>
        <button
          className="rounded bg-red-400 p-1 m-1 hover:scale-105 hover:bg-red-500 duration-300"
          onClick={cartC.onShowCart}
        >
          <div>Order and proceed to Payment</div>
        </button>
      </div>
    );
  };
  return (
    <Fragment>
      {reactDom.createPortal(<Backdrop></Backdrop>, overlayRoot)}
      {reactDom.createPortal(<Modal></Modal>, modalRoot)}
    </Fragment>
  );
}
