import React from "react";
import { NavLink } from "react-router-dom";
import './header.css';
import logo from '../../assets/logo.png';
function Header() {
  return (
    <nav className="nav-bar">
      <div className="container">
      <div className="logo-div">
      <img src={logo} alt="Cinque Terre" width="160" height="80"></img>
      </div>
      <div className="menu-items">
      <NavLink exact activeClassName="active" className="nav-link" to="/">
        Home
      </NavLink>
      <a className="nav-link" href="/#">
        Product
      </a>
      <a className="nav-link" href="/#">
        Pricing
      </a>
      <a className="nav-link" href="/#">
        Demo
      </a>
      <a className="nav-link" href="/#">
        About
      </a>
      </div>
      </div>
    </nav>
  );
}
export default Header;