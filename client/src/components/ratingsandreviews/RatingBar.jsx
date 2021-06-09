import React from 'react';
import PropTypes from 'prop-types';

const RatingBar = ({
  name, ratingCount, percent, addFilter,
}) => (
  <div className="ratingBar">
    <button type="button" onClick={() => { addFilter(name); }}>
      { `${name} (${ratingCount})`}
    </button>
    <div className="backgroundBar" />
    <div className="forgroundBar" styles={`width: ${percent};`} />
  </div>
);

RatingBar.propTypes = {
  name: PropTypes.string.isRequired,
  ratingCount: PropTypes.number.isRequired,
  percent: PropTypes.string.isRequired,
  addFilter: PropTypes.func.isRequired,
};

export default RatingBar;
