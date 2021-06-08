/* eslint-disable react/forbid-prop-types */
// eslint-disable-next-line import/no-unresolved
import React from 'react';
import PropTypes from 'prop-types';
import ProductInfo from './ProductInfo';
import ProductDescription from './ProductDescription';
import ProductStyles from './ProductStyles';

// eslint-disable-next-line object-curly-newline
const Overview = ({
  Name, Category, Description, Slogan, Price, ReviewsRatings, Features, Styles,
}) => (
  <>
    <ProductInfo Name={Name} Category={Category} Price={Price} ReviewsRatings={ReviewsRatings} />
    <ProductStyles Styles={Styles} />
    <ProductDescription
      Description={Description}
      Slogan={Slogan}
      ReviewsRatings={ReviewsRatings}
      Features={Features}
    />
  </>
);

Overview.propTypes = {
  Name: PropTypes.string.isRequired,
  Category: PropTypes.string.isRequired,
  Description: PropTypes.string.isRequired,
  Slogan: PropTypes.string.isRequired,
  Price: PropTypes.string.isRequired,
  ReviewsRatings: PropTypes.object.isRequired,
  Features: PropTypes.array.isRequired,
  Styles: PropTypes.object.isRequired,
};

export default Overview;
