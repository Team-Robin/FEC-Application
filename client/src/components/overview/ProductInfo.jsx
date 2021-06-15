/* eslint-disable react/forbid-prop-types */
/* eslint-disable import/extensions */
/* eslint-disable no-unused-vars */
/* eslint-disable import/no-unresolved */
import React, { useContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import ProductPrice from './ProductPrice';
import StarRatings from '../StarRatings';
import TrackerContext from '../context/Tracker';
import ThemeContext from '../context/Theme';

const ProductInfo = ({
  Name, Category, Price, ReviewsRatings, SalePrice,
}) => {
  const [totalReviews, setTotalReviews] = useState();
  const { tracking, setTracking } = useContext(TrackerContext);
  const { themeMode } = useContext(ThemeContext);

  const scrollTo = (event) => {
    const tracked = { element: event.target, time: new Date(), module: 'Scroll to Reviews' };
    setTracking([...tracking, tracked]);
    document.querySelector('#ratingSummary').scrollIntoView({
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
        <button
          type="button"
          className={`py-1 ml-1 align-self-center cursor-pointer
            ${themeMode === 'Light'
            ? 'text-dark'
            : 'text-light '
          }`}
          onClick={scrollTo}
          onKeyDown={scrollTo}
        >
          Read all
          {` ${totalReviews} `}
          reviews
        </button>
      </div>
      <div className={`h3 text-thin ${themeMode === 'Light' ? 'text-muted' : 'text-muted-light'}`}>{Category}</div>
      <div className="text-size-10 text-bold text-primary" id="product-hero-name">{Name}</div>
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
