import React from 'react';
import PropTypes from 'prop-types';

const RatingBar = ({
  key, ratingCount, percent, addFilter,
}) => (
  <div className="ratingBar">
    <button type="button" onClick={() => { addFilter(key); }}>
      { `${key} (${ratingCount})`}
    </button>
    <div className="backgroundBar" />
    <div className="forgroundBar" style={`width: ${percent};`} />
  </div>
);

RatingBar.propTypes = {
  key: PropTypes.string.isRequired,
  ratingCount: PropTypes.number.isRequired,
  percent: PropTypes.string.isRequired,
  addFilter: PropTypes.func.isRequired,
};

export default RatingBar;
