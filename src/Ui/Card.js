import { useContext, useState } from "react";
import { cContext } from "../store/CartContext";
export default function Card(props) {

  const {id,name,price,description} = props;
  const contextObj = useContext(cContext);
  const [amountState,setAmountState] = useState(0);

  const amountChangeHandler = (event) =>{
    setAmountState(event.target.value)
  }
  const formSubmissionHandler =(event)=>{
    event.preventDefault();
    contextObj.onAdd(id,amountState)
    setAmountState(0);
  }

  return (
    <div className=" px-5 py-5 border-b-2 border-gray-500 flex justify-between">
      <div>
        <h1 className="text-2xl">{name}</h1>
        <p>{description}</p>
        <p>{price} €</p>
      </div>
      <div className="mt-6">
        <form action="submit" onSubmit={formSubmissionHandler}>
          <label htmlFor="foodAmount">Amount </label>
          <input
            className="border-2 border-gray-500 w-10"
            type="number"
            value={amountState}
            id="foodAmount"
            onChange={amountChangeHandler}
            min={1}
          />
          <button className="block rounded-xl bg-red-500 px-4 mt-2 ml-5">
            + Add
          </button>
        </form>
      </div>
    </div>
  );
}
