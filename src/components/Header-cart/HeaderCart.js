import React from "react";
import { MyCartContext } from "../../management/context";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import "./HeaderCart.css";
const HeaderCart = () => {
   const { amount } = MyCartContext();
   return (
      <button className="button">
         <div>
            <FontAwesomeIcon icon={faCartShopping} />
         </div>
         <span className="badge">{amount}</span>
      </button>
   );
};

export default HeaderCart;
