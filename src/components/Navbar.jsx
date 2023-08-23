import React from 'react';
import { NavLink } from 'react-router-dom';
import '../index.css';

const Navbar = () => (
  <div className="nav-header">
    <nav className="nav-menu">
      <h1 className="text-xl font-bold text-blue">Bookstore CMS</h1>
      <NavLink to="/">Books</NavLink>
      <NavLink to="/Categories">Categories</NavLink>
    </nav>

    <div className="userLogo text-blue"><p>userlogo</p></div>
  </div>
);

export default Navbar;
