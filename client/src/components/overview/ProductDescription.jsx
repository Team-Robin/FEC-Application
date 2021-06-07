/* eslint-disable react/forbid-prop-types */
/* eslint-disable import/no-unresolved */
import React from 'react';
import PropTypes from 'prop-types';
import ProductSocials from './ProductSocials';

const ProductDescription = ({ Description, Slogan, ReviewsRatings, Features }) => (
  <div className="row">
    <div className="col">
      <div className="text-bold">{Slogan}</div>
      <div className="">{Description}</div>
      <ProductSocials />
    </div>
    <div className="col-auto">
      <div className="bar" />
    </div>
    <div className="col">
      {Features.map((feature) => (
        <div>
          <i className="fas fa-check text-muted" />
          {`${feature.feature} : ${feature.value}`}
        </div>
      ))}
    </div>
  </div>
);

ProductDescription.propTypes = {
  Description: PropTypes.string.isRequired,
  Slogan: PropTypes.string.isRequired,
  ReviewsRatings: PropTypes.object.isRequired,
  Features: PropTypes.array.isRequired,
};

export default ProductDescription;
