/* eslint-disable react/forbid-prop-types */
/* eslint-disable import/extensions */
/* eslint-disable no-unused-vars */
/* eslint-disable import/no-unresolved */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import ProductPrice from './ProductPrice';
import StarRatings from '../StarRatings';

const ProductInfo = ({
  Name, Category, Price, ReviewsRatings, SalePrice,
}) => {
  const scrollTo = (event) => {
    console.log('I got clicked!');
    // document.querySelector('NoshuaPit').scrollIntoView({
    //   behavior: 'smooth',
    // });
  };
  return (
    <div className="overview-right-dekstop">
      <div className="row">
        <StarRatings ReviewsRatings={ReviewsRatings} />
        <button type="button" className="ml-1 align-self-center text-underline cursor-pointer" onClick={scrollTo} onKeyDown={scrollTo}>Read all reviews</button>
      </div>
      <div className="h5 text-thin">{Category}</div>
      <div className="h3 text-bold">{Name}</div>
      <ProductPrice Price={Price} SalePrice={SalePrice} />
    </div>
  );
};

ProductInfo.propTypes = {
  Name: PropTypes.string.isRequired,
  Category: PropTypes.string.isRequired,
  Price: PropTypes.string.isRequired,
  ReviewsRatings: PropTypes.object.isRequired,
  SalePrice: PropTypes.string.isRequired,
};

export default ProductInfo;
