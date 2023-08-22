import React from 'react';
import { NavLink } from 'react-router-dom';
import './style.css';

const Navbar = () => (
  <div className="nav-header">
    <nav className="nav-menu">
      <h1>Bookstore CMS</h1>
      <NavLink to="/">Books</NavLink>
      <NavLink to="/Categories">Categories</NavLink>
    </nav>

    <div className="userLogo"><p>userlogo</p></div>
  </div>
);

export default Navbar;
