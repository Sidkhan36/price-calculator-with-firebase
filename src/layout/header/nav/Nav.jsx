import React from "react";
import { Link, Outlet } from "react-router-dom";
import './nav.css'

const Nav = () => {
  return (
    <div className="container">
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <a href="#" className="navbar-brand">
            MetaPer
          </a>
          <button
            type="button"
            className="navbar-toggler"
            data-bs-toggle="collapse"
            data-bs-target="#navbarCollapse"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse justify-content-between"
            id="navbarCollapse"
          >
            <div className="navbar-nav">
              <Link to="/" className="nav-item nav-link active">
                Home
              </Link>
              <Link to="/pricing" className="nav-item nav-link active">
                Pricing
              </Link>
              <a href="#" className="nav-item nav-link">
                Profile
              </a>
              <div className="nav-item dropdown">
                <a
                  href="#"
                  className="nav-link dropdown-toggle"
                  data-bs-toggle="dropdown"
                >
                  Services
                </a>
                <div className="dropdown-menu">
                  <a href="#" className="dropdown-item">
                    Wordpress Website
                  </a>
                  <a href="#" className="dropdown-item">
                    React Front-End 
                  </a>
                  <a href="#" className="dropdown-item">
                    PSD To Bootstrap/Custom
                  </a>
                  <a href="#" className="dropdown-item">
                    Figma To Bootstrap/Custom
                  </a>
                </div>
              </div>
            </div>
            <form className="d-flex">
              <div className="input-group">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Search"
                />
                <button type="button" className="btn btn-secondary">
                  Search
                </button>
              </div>
            </form>
            <div className="navbar-nav">
              <Link to="/login" className="nav-item nav-link">
                Login
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Nav;
