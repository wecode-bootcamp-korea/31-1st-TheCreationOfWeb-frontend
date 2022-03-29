import React from 'react';
import './Header.scss';

const Header = () => {
  return (
    <section className="header">
      <nav className="nav">
        <div className="navTitle">
          <h3 className="title">FRUITZ COMPANY</h3>
          <p className="subTitle">FRESH & NUTRITION</p>
        </div>
        <ul className="navMenu">
          <li className="navList">LOGIN</li>
          <li className="navWall" />
          <li className="navList">MY PAGE</li>
          <li className="navWall" />
          <li className="navList">CART</li>
        </ul>
      </nav>
    </section>
  );
};

export default Header;
