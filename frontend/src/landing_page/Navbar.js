import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
<nav class="navbar navbar-expand-lg shadow-sm">
    <div class="container py-2">
      <Link class="navbar-brand fw-bold" to="/">
        <img src="assets/images/logo.svg" style={{width:"25%"}} />
      </Link>
      <button
        class="navbar-toggler border-0"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <i class="fa-solid fa-bars fs-3"></i>
      </button>


      <div class="collapse navbar-collapse justify-content-end" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item">
            <Link class="nav-link" to="/signup">Signup</Link>
          </li>
          <li class="nav-item">
            <Link class="nav-link" to="/about">About</Link>
          </li>
          <li class="nav-item">
            <Link class="nav-link" to="/product">Products</Link>
          </li>
          <li class="nav-item">
            <Link class="nav-link" to="/pricing">Pricing</Link>
          </li>
          <li class="nav-item">
            <Link class="nav-link" to="/support">Support</Link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  );
}

export default Navbar;
