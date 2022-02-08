import Card from "./Card";
import { dishData } from "../data";

export default function Menu() {
  return (
    <div className="w-10/12 self-center bg-white rounded">
      {dishData.map((dish) => {
        return (
          <Card
            key={dish.key}
            id={dish.key}
            name={dish.dishName}
            price={dish.dishPrice}
            description={dish.dishDescription}
          ></Card>
        );
      })}
    </div>
  );
}
