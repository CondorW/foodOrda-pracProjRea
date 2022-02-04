import Cart from "./Cart";

export default function Navbar() {
  return (
    <div className="bg-red-400 flex justify-between items-center text-white">
      <h1 className="mx-4 text-4xl">FoodOrda</h1>
      <Cart></Cart>
    </div>
  );
}
