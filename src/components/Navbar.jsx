import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-custom">
      <div className="container">
        <Link className="navbar-brand" to="/">
          Northcoders News
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item mx-2">
              <Link className="nav-link" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item mx-2">
              <Link className="nav-link" to="/articles">
                Articles
              </Link>
            </li>
            <li className="nav-item mx-2">
              <Link className="nav-link" to="/topics">
                Topics
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
