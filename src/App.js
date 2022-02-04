import { Fragment } from "react";
import Navbar from "./Nav/Navbar";
import alpen from "./alpen.jpg";
import Description from "./Ui/Description";
import Menu from "./Ui/Menu";

function App() {
  return (
    <Fragment>
      <div className="bg-gray-900 h-screen">
        <Navbar></Navbar>
        <img className="object-cover h-1/3 w-full bg-fixed z-0" src={alpen} alt="" />
        <div className="flex flex-col">
        <Description></Description>
        <Menu></Menu>
        </div>
      </div>
    </Fragment>
  );
}

export default App;
