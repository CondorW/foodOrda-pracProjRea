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
        <p>{props.itemName}</p>
        <p>{props.itemCount}</p>
        <p>{props.itemPrice} €</p>
        <p>X</p>
      </div>
    </div>
  );
}
