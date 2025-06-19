import React from "react";
import { NavLink } from "react-router-dom";
import "../App";

const Navbar = () => {
  const handleNavClick = () => {
    const collapseMenu = document.getElementById("navbarNavAltMarkup");
    const bsCollapse = new window.bootstrap.Collapse(collapseMenu, { toggle: false });
    bsCollapse.hide();
  };

  return (
    <nav className="navbar navbar-expand-lg bg-dark position-fixed top-0 w-100 z-3">
      <div className="container-fluid">
        <NavLink className="navbar-brand fw-bolder text-warning fs-2" to="/"><i className="fa-solid fa-building-wheat"></i>&nbsp;Foodie~Palace</NavLink>
        <button
          className="navbar-toggler bg-light"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav ms-auto align-items-center">
            <NavLink to="/" className="nav-link fw-bold text-white nav-underline" onClick={handleNavClick}>Home</NavLink>
            <NavLink to="/about" className="nav-link fw-bold text-white nav-underline" onClick={handleNavClick}>About</NavLink>
            <NavLink to="/service" className="nav-link fw-bold text-white nav-underline" onClick={handleNavClick}>Service</NavLink>
            <NavLink to="/menu" className="nav-link fw-bold text-white nav-underline" onClick={handleNavClick}>Menu</NavLink>
            <NavLink to="/book" className="nav-link bg-warning p-2 fw-bold rounded text-dark" onClick={handleNavClick}>Book a Table</NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
