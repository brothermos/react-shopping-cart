import React from "react";
import { MyCartContext } from "../../management/context";
import "./HeaderCart.css";
const HeaderCart = () => {
   const { amount } = MyCartContext();
   return (
      <button className="button">
         <span>ตะกร้าสินค้า</span>
         <span className="badge">{amount}</span>
      </button>
   );
};

export default HeaderCart;
