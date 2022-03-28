import React from 'react';
import './Header.scss';

const Header = () => {
  return (
    <header>
      <nav className="nav">
        <div className="navTitle">
          <h3>FRUITZ COMPANY</h3>
          <p>FRESH & NUTRITION</p>
        </div>
        <ul className="navMenu">
          <li>LOGIN</li>
          <li className="navWall" />
          <li>MY PAGE</li>
          <li className="navWall" />
          <li>CART</li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
