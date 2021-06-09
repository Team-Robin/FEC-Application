/* eslint-disable react/forbid-prop-types */
/* eslint-disable import/extensions */
/* eslint-disable no-unused-vars */
/* eslint-disable import/no-unresolved */
import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import ProductPrice from './ProductPrice';
import StarRatings from '../StarRatings';

const ProductInfo = ({
  Name, Category, Price, ReviewsRatings, SalePrice,
}) => {
  const [totalReviews, setTotalReviews] = useState();
  const scrollTo = (event) => {
    document.querySelector('#reviewSummary').scrollIntoView({
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    if (ReviewsRatings) {
      // do somethig
      setTotalReviews(Object.values(ReviewsRatings)
        .reduce((acc, val) => parseInt(acc, 10) + parseInt(val, 10)));
    }
  }, [ReviewsRatings]);

  return (
    <div className="overview-right-dekstop">
      <div className="row">
        <StarRatings ReviewsRatings={ReviewsRatings} />
        <button type="button" className="py-1 ml-1 align-self-center cursor-pointer hover-outline-cascade" onClick={scrollTo} onKeyDown={scrollTo}>
          Read all
          {` ${totalReviews} `}
          reviews
        </button>
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
