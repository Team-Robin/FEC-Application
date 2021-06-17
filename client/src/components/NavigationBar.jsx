/* eslint-disable import/no-unresolved */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ThemeContext from './context/Theme';

const NavigationBar = () => {
  const { themeMode, setThemeMode } = useContext(ThemeContext);
  const [dayMode, setDayMode] = useState(false);

  useEffect(() => {
    if (themeMode === 'Light') {
      setDayMode(true);
    } else {
      setDayMode(false);
    }
  }, [themeMode]);

  const ToggleMode = () => {
    const newMode = !dayMode;
    if (newMode) {
      setThemeMode('Light');
    } else {
      setThemeMode('Dark');
    }
  };
  return (
    <header>
      <Link className="logo text-light cursor-pointer h1" to="/"><i className="fas fa-store" /></Link>
      <input type="checkbox" id="nav-toggle" className="nav-toggle" />
      <nav id="navigation">
        <ul>
          <li>
            <label className="switch">
              <input id="themeSwitch" type="checkbox" checked={dayMode} onChange={ToggleMode} />
              <span htmlFor="themeSwitch" className="slider" />
              <span htmlFor="themeSwitch" className="slider-icons" />
            </label>
          </li>
          <li>
            <Link to="/" className="text-light hover-outline-light cursor-pointer">Home</Link>
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
}

export default NavigationBar;
