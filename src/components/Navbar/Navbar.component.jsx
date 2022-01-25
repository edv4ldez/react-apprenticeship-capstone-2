import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.styles.css';

function Navbar() {
  return (
    <nav>
      <Link className="home-button" to="/react-apprenticeship-capstone-2">
        <img className="home-logo" src="./assets/wizeline-logo.jpeg" />
      </Link>
    </nav>
  );
}

export default Navbar;
