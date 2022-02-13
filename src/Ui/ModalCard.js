import { useContext } from "react";
import { cContext } from "../store/CartContext";

export default function ModalCard(props) {
  const cartContext = useContext(cContext);
  function deleteItem() {
    const id = props.id;
    cartContext.onDelete(id);
  }

  return (
    <div onClick={deleteItem} className="flex flex-row justify-center">
      <div className="bg-gray-100 w-10/12 m-1 rounded p-1 flex justify-between">
        <div className="w-28">
          <p>{props.itemName}</p>
        </div>
        <div className="w-20">
          <p>{props.itemPrice} €</p>
        </div>
        <div>
          <p>X</p>
        </div>
      </div>
    </div>
  );
}
