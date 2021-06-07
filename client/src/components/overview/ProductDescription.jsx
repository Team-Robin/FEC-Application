/* eslint-disable import/extensions */
/* eslint-disable arrow-body-style */
/* eslint-disable no-unused-vars */
/* eslint-disable import/no-unresolved */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import ProductSocials from './ProductSocials.jsx';

const ProductDescription = ({ Description, Slogan }) => (
  <>
    <div className="text-bold">{Slogan}</div>
    <div className="">{Description}</div>
    <ProductSocials />
  </>
);

ProductDescription.propTypes = {
  Description: PropTypes.string.isRequired,
  Slogan: PropTypes.string.isRequired,
};

export default ProductDescription;
