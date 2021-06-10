import React from 'react';
import PropTypes from 'prop-types';
import Review from './Review';

const ReviewList = ({ reviews, reviewControls }) => (
  <div id="reviewList">
    {
      reviews.map((review, i) => {
        if (i < 2) {
          console.log(reviews);
          return (
            <Review
              key={review.review_id}
              name={review.review_id}
              review={review}
              reviewControls={reviewControls}
            />
          )
        }
      })
    }
  </div>
);

ReviewList.propTypes = {
  reviews: PropTypes.arrayOf(PropTypes.object).isRequired,
  reviewControls: PropTypes.objectOf(PropTypes.func).isRequired,
};

export default ReviewList;
