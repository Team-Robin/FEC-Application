/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';

const NavigationBar = () => (
  <header>
    <h1 className="logo text-light cursor-pointer"><i className="fas fa-store" /></h1>
    <input type="checkbox" id="nav-toggle" className="nav-toggle" />
    <nav id="navigation">
      <ul>
        <li>
          <a href="/" className="text-light hover-outline-light cursor-pointer">Home</a>
        </li>
        <li className="user-input-form ">
          <input type="text" id="nav-search" className="user-input text-light cursor-pointer" placeholder=" " />
          <div htmlFor="nav-search" className="user-line bg-light cursor-pointer" />
          <label htmlFor="nav-search" className="text-light cursor-pointer">Search Item</label>
        </li>
      </ul>
    </nav>
    <label htmlFor="nav-toggle" className="nav-toggle-label">
      <span />
    </label>
  </header>
);

export default NavigationBar;
