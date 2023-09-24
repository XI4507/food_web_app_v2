import { useState } from "react";
import { Logo_Url } from "../utils/constants";

const Header = () => {
    const [btnName,setBtnName]=useState("LogIn")
    return (
      <div className="header">
        <div className="logo-container">
          <img
            className="logo"
            src={Logo_Url}
            alt="logo"
          />
        </div>
        <div className="nav-items">
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
            <li>Cart</li>
            <li><button className="login-button" onClick={()=>btnName==="LogIn"?setBtnName("LogOUt"):setBtnName("LogIn")}>{btnName}</button></li>
          </ul>
        </div>
      </div>
    );
  };

  export default Header;