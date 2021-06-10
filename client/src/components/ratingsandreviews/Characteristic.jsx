import React from 'react';
import PropTypes from 'prop-types';

const Characteristic = ({
  name, value, minLabel, maxLabel,
}) => (
  <div className="characteristic">
    <h6>{name}</h6>
    <div className="charBar">
      <div className="backgroundBar" />
      <div className="icon" style={{ left: `${(value / 5) * 100}%` }} />
    </div>
    <p className="minLabel">{minLabel}</p>
    <p className="maxLabel">{maxLabel}</p>
  </div>
);

Characteristic.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.number.isRequired,
  minLabel: PropTypes.string.isRequired,
  maxLabel: PropTypes.string.isRequired,
};

export default Characteristic;
