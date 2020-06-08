import React, { Component } from 'react';
import logo from './../../logo.svg';
import './navbar.scss';

class Navbar extends Component {
  render() {
    return (
      <nav className="navbar">
        <img src={logo} alt="website brand" />
        <ul className="navbar-links">
          <li className="navlink">
            <a href="/">Home</a>
          </li>

          <li className="navlink">
            <a href="/">About</a>
          </li>

          <li className="navlink">
            <a href="/">Contact</a>
          </li>
        </ul>
      </nav>
    );
  }
}

export default Navbar;