import React from 'react';
import { NavLink } from 'react-router-dom';
import './styles.css'
const NavigationMenu = () => {
  return (
    <nav className="navbar">
      <ul className="navbar-nav">
      <li className="nav-item">
          <NavLink to="/" className="nav-link">
            Home
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/about" className="nav-link">
            About
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/todolist" className="nav-link">
            Todo List
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/todoform" className="nav-link">
            Todo Form
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default NavigationMenu;
