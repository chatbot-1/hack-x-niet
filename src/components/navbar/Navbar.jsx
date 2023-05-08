import React from "react";
import "./navbar.css";

const Navbar = () => {
  return (
    <div className="navbar section">
      <div className="nav-container">
        <div className="nav-logo"><h2>HealthPay</h2></div>
        <div className="nav-list">
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Statistics</li>
          </ul>
        </div>
        <button className="nav-btn">Login</button>
      </div>
    </div>
  );
};

export default Navbar;
