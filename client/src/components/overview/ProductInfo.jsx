/* eslint-disable import/extensions */
/* eslint-disable no-unused-vars */
/* eslint-disable import/no-unresolved */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import ProductPrice from './ProductPrice.jsx';

const ProductInfo = ({ Name, Category, Price }) => (
  <div>
    <div className="row">
      <div className="star-empty star-muted" title="rating empty" />
      <div className="star-25 star-muted" title="rating empty" />
      <div className="star-50 star-muted" title="rating empty" />
      <div className="star-75 star-muted" title="rating empty" />
      <div className="star-100 star-muted" title="rating empty" />
    </div>
    <div className="h5 text-thin">{Category}</div>
    <div className="h3 text-bold">{Name}</div>
    <ProductPrice Price={Price} />
  </div>
);

ProductInfo.propTypes = {
  Name: PropTypes.string.isRequired,
  Category: PropTypes.string.isRequired,
  Price: PropTypes.string.isRequired,
};

export default ProductInfo;
