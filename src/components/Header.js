import { useState } from "react";
import { Logo_Url } from "../utils/constants";
import { Link } from "react-router-dom";

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
            <li><Link to="/" className="link">Home</Link></li>
            <li><Link to="/about" className="link">About</Link></li>
            <li><Link to="/contact" className="link">Contact</Link></li>
            <li>Cart</li>
            <li><button className="login-button" onClick={()=>btnName==="LogIn"?setBtnName("LogOUt"):setBtnName("LogIn")}>{btnName}</button></li>
          </ul>
        </div>
      </div>
    );
  };

  export default Header;