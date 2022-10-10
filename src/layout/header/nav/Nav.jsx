import React from "react";

const Nav = () => {
  return (
    <div className="container">
<nav className="navbar navbar-expand-lg navbar-light bg-light">
    <div className="container-fluid">
        <a href="#" className="navbar-brand">Brand</a>
        <button type="button" className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-between" id="navbarCollapse">
            <div className="navbar-nav">
                <a href="#" className="nav-item nav-link active">Home</a>
                <a href="#" className="nav-item nav-link">Profile</a>
                <div className="nav-item dropdown">
                    <a href="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">Messages</a>
                    <div className="dropdown-menu">
                        <a href="#" className="dropdown-item">Inbox</a>
                        <a href="#" className="dropdown-item">Sent</a>
                        <a href="#" className="dropdown-item">Drafts</a>
                    </div>
                </div>
            </div>
            <form className="d-flex">
                <div className="input-group">                    
                    <input type="text" className="form-control" placeholder="Search"/>
                    <button type="button" className="btn btn-secondary"><i className="bi-search"></i></button>
                </div>
            </form>
            <div className="navbar-nav">
                <a href="#" className="nav-item nav-link">Login</a>
            </div>
        </div>
    </div>
</nav>
    </div>
  );
};

export default Nav;
