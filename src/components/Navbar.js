import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../styles/About_image.jpg";
import "../styles/Navbar.css";

function Navbar() {
  const [openMenu, setOpenMenu] = useState(false);

  const toggleMenu = () => {
    setOpenMenu(!openMenu);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          <img src={Logo} alt="Logo" />
        </Link>
        <div className={`navbar-links ${openMenu ? "active" : ""}`}>
          <Link to="/">Home</Link>
          <Link to="/catalogues">Catalog</Link>
          <Link to="/about">About</Link>
        </div>
        <div className="navbar-toggle" onClick={toggleMenu}>
          <i className={`fas fa-bars ${openMenu ? "active" : ""}`}></i>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;