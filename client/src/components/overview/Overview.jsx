/* eslint-disable arrow-body-style */
/* eslint-disable import/extensions */
/* eslint-disable no-undef */
// eslint-disable-next-line import/no-unresolved
import React from 'react';
import PropTypes from 'prop-types';
import ProductInfo from './ProductInfo.jsx';
import ProductDescription from './ProductDescription.jsx';

// eslint-disable-next-line object-curly-newline
const Overview = ({ Name, Category, Description, Slogan, Price }) => (
  <>
    <ProductInfo Name={Name} Category={Category} Price={Price} />
    <ProductDescription Description={Description} Slogan={Slogan} />
  </>
);

Overview.propTypes = {
  Name: PropTypes.string.isRequired,
  Category: PropTypes.string.isRequired,
  Description: PropTypes.string.isRequired,
  Slogan: PropTypes.string.isRequired,
  Price: PropTypes.string.isRequired,
};

export default Overview;
