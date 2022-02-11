import { useContext} from "react";
import { Fragment } from "react/cjs/react.production.min";
import { cContext } from "../store/CartContext";
import ModalCard from "./ModalCard";
import reactDom from "react-dom";

export default function Modal() {
  
  const cartC = useContext(cContext)
  

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
        <h1 className="self-center p-2 text-2xl font-bolder">Your Cart</h1>
        <div>
          {cartC.cartItems.map((ci, index) => {
            return (
              <ModalCard
                id={index}
                key={index}
                itemName={ci.dishName}
              ></ModalCard>
            );
          })}
        </div>
        <div className="rounded bg-red-400 p-1 m-1 hover:scale-105 hover:bg-red-500 duration-300">
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
