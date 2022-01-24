import React from 'react';
import './Navbar.styles.css';

function Navbar() {
  return (
    <nav>
      <a className="home-button" href="home">
        <img className="home-logo" src="./assets/wizeline-logo.jpeg" />
      </a>
    </nav>
  );
}

export default Navbar;
