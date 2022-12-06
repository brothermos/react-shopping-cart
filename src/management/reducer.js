// กำหนด action ใน app
const reducer = (state, action) => {
   //ลบสินค้าในตะกร้า
   if (action.type === "REMOVE_ITEM") {
      return {
         ...state,
         cart: state.cart.filter((item) => item.id !== action.payload),
      };
   }

   //เพิ่ม ลบ จำนวนสินค้า
   if (action.type === "TOGGLE_QUANTITY") {
      let newCart = state.cart
         .map((item) => {
            if (item.id === action.payload.id) {
               // เพิ่มสินค้า
               if (action.payload.type === "plus") {
                  return {
                     ...item,
                     quantity: item.quantity < 20 ? item.quantity + 1 : item.quantity,
                  };
               }
               // ลบสินค้า
               if (action.payload.type === "minus") {
                  return {
                     ...item,
                     quantity: item.quantity - 1,
                  };
               }
            }
            return item;
         })
         .filter((item) => item.quantity !== 0);
      return {
         ...state,
         cart: newCart,
      };
   }

   // จำนวนสินค้าในตะกร้า
   if (action.type === "CALCULATE_TOTAL") {
      const { total, amount } = state.cart.reduce(
         (cartTotal, item) => {
            const { price, quantity } = item;
            const itemTotal = price * quantity;
            cartTotal.total += itemTotal;
            cartTotal.amount += quantity;
            return cartTotal;
         },
         {
            total: 0,
            amount: 0,
         }
      );
      return { ...state, total, amount };
   }
};

export default reducer;
