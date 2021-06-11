/* eslint-disable react/forbid-prop-types */
/* eslint-disable import/no-unresolved */
import React from 'react';
import PropTypes from 'prop-types';

const ProductStyle = ({ Style, setCurrentStyle, CurrentStyle }) => (
  <button
    type="button"
    className="styles-wrapper cursor-pointer py-2"
    onClick={() => {
      setCurrentStyle(Style);
    }}
    aria-label={`style ${Style.name}`}
  >
    <div
      className={`styles-icon no-clicker shadow-sm ${Style.style_id === CurrentStyle.style_id ? 'styles-selected' : 'styles-pop'}`}
      style={{
        backgroundImage: `url("${Style.photos[0].thumbnail_url}")`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    />
  </button>
);

ProductStyle.propTypes = {
  Style: PropTypes.object.isRequired,
  setCurrentStyle: PropTypes.func.isRequired,
  CurrentStyle: PropTypes.object.isRequired,
};

export default ProductStyle;
