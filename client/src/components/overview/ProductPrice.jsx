/* eslint-disable import/no-unresolved */
import React from 'react';
import PropTypes from 'prop-types';

const ProductPrice = ({ Price, SalePrice }) => (
  <div className="h3 my-5">
    {SalePrice ? (
      <>
        <span className="text-red mr-3">{`$${SalePrice}`}</span>
        <span className="text-muted text-strikethrough">{`$${Price}`}</span>
      </>
    ) : <span className="">{`$${Price}`}</span>}
  </div>
);

ProductPrice.propTypes = {
  Price: PropTypes.string.isRequired,
  SalePrice: PropTypes.string.isRequired,
};

export default ProductPrice;
