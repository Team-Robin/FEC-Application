import React from 'react';
import PropTypes from 'prop-types';
import Review from './review/Review';

const ReviewList = ({
  displayAmount, reviews, reviewControls,
}) => {
  // Set filters to an object for constant time lookup.

  return (
    <div id="reviewList">
      {
        !reviews.length ? <h1>No reviews here... :(</h1> : (
          reviews.map((review, i) => {
            // keep rendering reviews to the dom while we haven't met the display amount and
            // the review meets the filter requirements (or there are no filter requirements)
            if (i < displayAmount) {
              return (
                <Review
                  key={review.review_id}
                  name={review.review_id}
                  review={review}
                  reviewControls={reviewControls}
                />
              );
            }
            return '';
          })
        )
      }
    </div>
  );
}

ReviewList.propTypes = {
  displayAmount: PropTypes.number.isRequired,
  reviews: PropTypes.arrayOf(PropTypes.object).isRequired,
  reviewControls: PropTypes.objectOf(PropTypes.func).isRequired,
};

export default ReviewList;
