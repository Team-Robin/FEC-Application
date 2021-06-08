import React from 'react';
import PropTypes from 'prop-types';

const RatingBar = ({ key, reviewCount, percent }) => (
  <div className="RatingBar">
    <button type="button">
      { `${key} (${reviewCount})`}
    </button>
    <div className="backgroundBar" />
    <div className="forgroundBar" style={`width: ${percent};`} />
  </div>
);

RatingBar.propTypes = {
  key: PropTypes.string.isRequired,
  reviewCount: PropTypes.number.isRequired,
  percent: PropTypes.string.isRequired,
};

export default RatingBar;
