import React from 'react';

const NavigationBar = () => (
  <>
    <ul>
      <li>
        <button type="button" className="text-light hover-outline">Home</button>
      </li>
      <li>
        <input type="text" placeholder="search item" className="" />
      </li>
    </ul>
  </>
);

export default NavigationBar;
