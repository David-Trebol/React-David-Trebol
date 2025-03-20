import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import CartWidget from './CartWidget';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <Link to="/" className="navbar-brand">
        <h1>TechStore</h1>
      </Link>
      
      <ul className="nav-links">
        <li>
          <NavLink 
            to="/categoria/laptops"
            className={({ isActive }) => isActive ? "active" : ""}
          >
            Laptops
          </NavLink>
        </li>
        <li>
          <NavLink 
            to="/categoria/smartphones"
            className={({ isActive }) => isActive ? "active" : ""}
          >
            Smartphones
          </NavLink>
        </li>
        <li>
          <NavLink 
            to="/categoria/accesorios"
            className={({ isActive }) => isActive ? "active" : ""}
          >
            Accesorios
          </NavLink>
        </li>
        <li>
          <CartWidget />
        </li>
      </ul>
    </nav>
  );
};

export default Navbar; 