import React from "react";
import { MyCartContext } from "../../management/context";
// import CartData from "../../data/CartData";
import CartItem from "../Cart-item/CartItem";
import "./Cart.css";

const Cart = () => {
   // ดึงข้อมูล cart มาจาก MyCartContext แล้วเอามา map
   const { cart, total, formatNumber } = MyCartContext();

   if (cart.length === 0) {
      return (
         <div className="shopping-cart">
            <div className="empty">ไม่มีสินค้าในตะกร้า</div>
         </div>
      );
   } else {
      return (
         <div className="shopping-cart">
            <div className="title-shopping-cart">สินค้าในตะกร้า</div>
            {cart.map((data) => {
               return <CartItem key={data.id} {...data} />;
            })}
            <div className="total-shopping-cart">
               ยอดชำระเงินรวม &nbsp;<span><u>{formatNumber(total)}</u></span>&nbsp; บาท
            </div>
         </div>
      );
   }
};

export default Cart;
