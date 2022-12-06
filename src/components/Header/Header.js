import React from "react";
import HeaderCart from "../Header-cart/HeaderCart";
import './Header.css'

const Header = () => {
   return (
      <header className="header">
         <h1>MOSSHOP</h1>
         <HeaderCart />
      </header>
   );
};

export default Header;
