import { useContext } from "react";
import { cContext } from "../store/CartContext";
import ModalCard from "./ModalCard";

export default function Modal() {
  const cartC = useContext(cContext);
  const cartItems = cartC.cartItems;

  return (
    <div
      onClick={cartC.onShowCart}
      className="w-full h-full bg-gray-800 fixed bg-opacity-75"
    >
      <div className="bg-slate-300 w-1/3 h-40 flex absolute left-1/3 top-1/3 flex-col rounded">
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
    </div>
  );
}