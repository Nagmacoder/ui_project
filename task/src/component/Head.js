import React from "react";
import "./Head.css";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter, FaYoutube, FaLinkedinIn, FaPhoneAlt } from "react-icons/fa";

export const Head = () => {
  return (
    <>
      <div id="container">
        <div id="headLeft">
          <div>sales@hivegrad.com</div>
          <div>
            <FaPhoneAlt />
            +91-9999999999
          </div>
        </div>

        <div id="headRight">
          <li>
            <FaFacebookF />
          </li>
          <li>
            <FaTwitter />
          </li>
          <li>
            <FaYoutube />
          </li>
          <li>
            <FaLinkedinIn />
          </li>
        </div>
      </div>
    </>
  );
};
