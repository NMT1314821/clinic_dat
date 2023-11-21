import React, { useState } from "react";
import "./Header.css";
import logo from "../assets/logo.jpeg";
import { Link } from "react-router-dom";

function Header({handleModal}) {
  return (
    <div className="header">
      <div className="header__left">
        <Link to="/">
          <img src={logo} alt="Logo" />
        </Link>
        <div className="header__main">
              <Link to="/about">About Clinic</Link>
              <Link to="/founder">Founder</Link>
              <Link>Request for Appointment</Link>
        </div>
        <div className="header__subheadings">
              <Link to="/location">Location</Link>
              <Link>Feedback</Link>
        </div>
      </div>
      <div className="header__login" onClick={handleModal}>Login</div>
    </div>
  );
} 

export default Header;
