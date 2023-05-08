import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <>
      <div id="navContainer">
        <div id="nav">
          <div id="navLeft">
            <img src="./images/logo1.png" alt="logo" />
          </div>

          <div id="navRight">
            <li className="menu">Home</li>
            <li className="menu">Features</li>
            <li className="menu">pricing</li>
            <li className="menu">About us</li>
            <li className="menu">Industry Mentor</li>
            <button className="btn" id="loginBtn">
              Login
            </button>
            <button className="btn" id="signupBtn">
              Sign Up
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
