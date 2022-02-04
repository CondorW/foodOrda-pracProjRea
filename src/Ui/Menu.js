import Card from "./Card";
import {dishData} from "../data"

export default function Menu() {
    console.log(dishData);
  return <div className="w-10/12 self-center bg-white rounded">
      <Card></Card>
      <Card></Card>
      <Card></Card>
  </div>;
}
