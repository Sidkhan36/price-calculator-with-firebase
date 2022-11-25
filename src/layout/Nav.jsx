import React, { useState } from "react";
import { Link } from "react-router-dom";
import '../App.css'
import { useAuth } from "../contexts/AuthContext"
import { useNavigate } from "react-router-dom"


const Nav = () => {
  const [error, setError] = useState("")
  const { currentUser, logout } = useAuth()
  const history = useNavigate()
  async function handleLogout() {
    setError("")

    try {
      await logout()
      history("/login")
    } catch {
      setError("Failed to log out")
    }
  }
  console.log(error);
  return (
    <div className="container">
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <Link to="/" className="navbar-brand">
            MetaPer
          </Link>
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
              <Link to="/" className="nav-item nav-link border-hover">
                Home
              </Link>
              <Link to="/pricing" className="nav-item nav-link">
                Pricing
              </Link>
              <Link to="/about" className="nav-item nav-link ">
                About
              </Link>
              <Link to="/dashboard" className="nav-item nav-link">
                Profile
              </Link>
              <div className="nav-item dropdown">
                <div

                  className="btn nav-link dropdown-toggle"
                  data-bs-toggle="dropdown"
                >
                  Services
                </div>
                <div className="dropdown-menu">
                  <button className="dropdown-item ">
                    Wordpress Website
                  </button>
                  <button className="dropdown-item">
                    React Front-End
                  </button>
                  <button className="dropdown-item">
                    PSD To Bootstrap/Custom
                  </button>
                  <button className="dropdown-item">
                    Figma To Bootstrap/Custom
                  </button>
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
              {currentUser && <p className="mx-4 my-1">{currentUser.multiFactor.user.email}</p>}
              {currentUser ? <Link className="nav-item nav-link" onClick={handleLogout}>
                Logout
              </Link> :
                <Link to="/login" className="nav-item nav-link">
                  Login
                </Link>}
              {!currentUser && <Link to="/signup" className="nav-item nav-link">
                Sign up
              </Link>}
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Nav;
