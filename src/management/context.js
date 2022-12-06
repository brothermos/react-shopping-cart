// สร้าง context api => ให้บริการข้อมูลแก่ component ใน app
import { createContext, useContext, useEffect, useReducer } from "react";
import CartData from "../data/CartData";
import reducer from "./reducer";

// state เริ่มต้น
const initState = {
   cart: CartData,
   total: 0,
   amount: 0,
};

const CartContext = createContext();

// universal usecontext
export const MyCartContext = () => {
   return useContext(CartContext);
};

const CartProvider = ({ children }) => {
   const [state, dispatch] = useReducer(reducer, initState);

   // ดักว่าค่า ใน state cart เปลี่ยนแปลงมั้ย ถ้ามีการเปลี่ยนแปลง จะให้ dispatch
   useEffect(() => {
      dispatch({ type: "CALCULATE_TOTAL" });
   }, [state.cart]);

   // function ลบสินค้าในตะกร้า
   const removeItem = (id) => {
      dispatch({ type: "REMOVE_ITEM", payload: id });
   };

   // function เพิ่มและลบสินค้าในตะกร้า
   const toggleQuantity = (id, type) => {
      dispatch({ type: "TOGGLE_QUANTITY", payload: { id, type } });
   };

   // function เพิ่ม comma ในกรณีที่เกินหลักพัน
   const formatNumber = (num) => {
      return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
   };

   return (
      // ไว้กระจายข้อมูลให้ component ลูกใช้
      <CartContext.Provider value={{ ...state, removeItem, toggleQuantity, formatNumber }}>
         {children}
      </CartContext.Provider>
   );
};

export { CartContext, CartProvider };
