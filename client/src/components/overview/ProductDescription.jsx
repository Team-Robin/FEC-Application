/* eslint-disable react/forbid-prop-types */
/* eslint-disable import/no-unresolved */
import React from 'react';
import PropTypes from 'prop-types';
import ProductSocials from './ProductSocials';

const ProductDescription = ({
  Description, Slogan, Features,
}) => (
  <div className="d-flex">
    <div className="col w-50 ">
      <div className="text-bold">{Slogan}</div>
      <div className="">{Description}</div>
      <ProductSocials />
    </div>
    <div className="col w-50">
      <div style={{ maxHeight: 'fit-content' }} className="ml-3 overview-features-bar">
        {Features.map((feature) => (
          <div key={`Features-${feature.feature}`} className="flex-shrink">
            <i className="fas fa-check text-muted" />
            {`${feature.feature} : ${feature.value}`}
          </div>
        ))}
      </div>
    </div>
  </div>
);

ProductDescription.propTypes = {
  Description: PropTypes.string.isRequired,
  Slogan: PropTypes.string.isRequired,
  Features: PropTypes.array.isRequired,
};

export default ProductDescription;
