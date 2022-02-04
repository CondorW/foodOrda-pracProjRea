export default function Card() {
  return (
    <div className=" px-5 py-5 border-b-2 border-gray-500 flex justify-between">
      <div>
        <h1 className="text-2xl">Shunshi</h1>
        <p>Very fishy fish</p>
        <p>Price</p>
      </div>
      <div className="mt-6">
        <form action="">
        <label htmlFor="foodAmount">Amount </label>
          <input
            className="border-2 border-gray-500 w-10"
            type="number"
            name=""
            id="foodAmount"
          />
          <button className="block rounded-xl bg-red-500 px-4 mt-2 ml-5">+ Add</button>
        </form>
      </div>
    </div>
  );
}
