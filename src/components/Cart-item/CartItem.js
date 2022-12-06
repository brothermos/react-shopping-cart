import React from "react";
import "./CartItem.css";
import plus from "../../image/plus.svg";
import minus from "../../image/minus.svg";
import deleteIcon from "../../image/delete-icn.svg";
import { MyCartContext } from "../../management/context";

// แสดงรายการสินค้าแต่ละรายการ
const CartItem = ({ id, name, image_url, price, quantity }) => {
   const { removeItem, toggleQuantity, formatNumber } = MyCartContext();
   return (
      <div className="item">
         <div className="product_img">
            <img src={image_url} />
         </div>
         <div className="description">
            <span>{name}</span>
            <span>ราคา {formatNumber(price)} บาท</span>
         </div>
         <div className="quantity">
            <button className="plus-btn" onClick={() => toggleQuantity(id, "plus")}>
               <img src={plus}></img>
            </button>
            <input type="text" value={quantity} disabled></input>
            <button className="minus-btn" onClick={() => toggleQuantity(id, "minus")}>
               <img src={minus}></img>
            </button>
         </div>

         <div className="total-price">{formatNumber(quantity * price)}</div>
         <div className="remove" onClick={() => removeItem(id)}>
            <img src={deleteIcon}></img>
         </div>
      </div>
   );
};

export default CartItem;
