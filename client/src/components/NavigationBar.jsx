/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';

const NavigationBar = () => (
  <header>
    <h1 className="logo text-light"><i className="fas fa-store" /></h1>
    <input type="checkbox" id="nav-toggle" className="nav-toggle" />
    <nav id="navigation">
      <ul>
        <li>
          <button type="button" className="text-light hover-outline-light">Home</button>
        </li>
        <li className="user-input-form ">
          <input type="text" id="nav-search" className="user-input text-light" placeholder=" " />
          <div className="user-line bg-light" />
          <label htmlFor="nav-search" className="text-light">Search Item</label>
        </li>
      </ul>
    </nav>
    <label htmlFor="nav-toggle" className="nav-toggle-label">
      <span />
    </label>
  </header>
);

export default NavigationBar;
