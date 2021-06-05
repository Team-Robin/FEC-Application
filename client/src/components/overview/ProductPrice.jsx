/* eslint-disable import/no-unresolved */
import React from 'react';
import PropTypes from 'prop-types';

const ProductPrice = ({ Price }) => (
  <div className="">
    {`$${Price}`}
  </div>
);

ProductPrice.propTypes = {
  Price: PropTypes.string.isRequired,
};

export default ProductPrice;
