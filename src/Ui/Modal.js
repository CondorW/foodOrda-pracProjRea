import { useContext } from "react";
import { createPortal } from "react-dom";
import { Fragment } from "react/cjs/react.production.min";
import { cContext } from "../store/CartContext";
import ModalCard from "./ModalCard";
import reactDom from "react-dom";

export default function Modal() {
  const cartC = useContext(cContext);
  const cartItems = cartC.cartItems;

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
      <div className="bg-slate-300 w-1/3 h-auto flex absolute left-1/3 top-1/3 flex-col rounded">
        <div>
          {cartItems.map((ci) => {
            return <ModalCard itemName={ci.dishName}></ModalCard>;
          })}
        </div>
        <div>
          <button onClick={cartC.onShowCart}>
            <div>Order and Procced to Payment</div>
          </button>
        </div>
      </div>
    );
  };

  return (
    <Fragment>
      {reactDom.createPortal(
        <Backdrop></Backdrop>,
        document.getElementById("overlay-root")
      )}
      {reactDom.createPortal(
        <Modal></Modal>,
        document.getElementById("modal-root")
      )}
    </Fragment>
  );
}
