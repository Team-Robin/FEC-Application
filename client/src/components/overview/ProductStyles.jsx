/* eslint-disable react/forbid-prop-types */
/* eslint-disable import/no-unresolved */
import React from 'react';
import PropTypes from 'prop-types';
import ProductStyle from './ProductStyle';

const ProductStyles = ({ Styles, CurrentStyle, setCurrentStyle }) => (
  <div className="overview-right-dekstop">
    <div className="row h4">
      <span className="text-bold">Style &gt;</span>
      <span className="text-muted text-thin">
        &nbsp;
        {CurrentStyle.name}
      </span>
    </div>
    <div className="row my-3">
      {Styles.map((iStyle) => (
        <ProductStyle
          Style={iStyle}
          CurrentStyle={CurrentStyle}
          setCurrentStyle={setCurrentStyle}
          key={iStyle.style_id}
        />
      ))}
    </div>
  </div>
);

ProductStyles.propTypes = {
  Styles: PropTypes.array.isRequired,
  CurrentStyle: PropTypes.object.isRequired,
  setCurrentStyle: PropTypes.func.isRequired,
};

export default ProductStyles;
