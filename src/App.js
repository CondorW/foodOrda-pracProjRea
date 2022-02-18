import { Fragment, useContext } from "react";
import Navbar from "./Nav/Navbar";
import alpen from "./alpen.jpg"; //file extension matters because it is not a javascript file
import Description from "./Ui/Description";
import Menu from "./Ui/Menu";
import Modal from "./Ui/Modal";
import { cContext } from "./store/CartContext";


function App() {
  const cCart = useContext(cContext);
  const showCart = cCart.showCart;

  return (
    <Fragment>
      <div className="bg-gray-900 h-full">
        <Navbar></Navbar>
        {showCart ? <Modal></Modal> : null}
        <img className="object-cover h-48 w-full" src={alpen} alt="" />
        <div className="flex flex-col">
          <Description></Description>
          <Menu></Menu>
        </div>
      </div>
    </Fragment>
  );
}

export default App;
