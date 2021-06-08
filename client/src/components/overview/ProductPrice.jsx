/* eslint-disable import/no-unresolved */
import React from 'react';
import PropTypes from 'prop-types';

const ProductPrice = ({ Price, SalePrice }) => (
  <div className="">
    {SalePrice ? (
      <>
        <span className="text-red mr-1">{`$${SalePrice}`}</span>
        <span className="text-muted text-strikethrough">{`$${Price}`}</span>
      </>
    ) : `$${Price}`}
  </div>
);

ProductPrice.propTypes = {
  Price: PropTypes.string.isRequired,
  SalePrice: PropTypes.string.isRequired,
};

export default ProductPrice;
