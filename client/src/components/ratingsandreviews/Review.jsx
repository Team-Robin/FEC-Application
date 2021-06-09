import React from 'react';
import PropTypes from 'prop-types';
import ReviewHead from './ReviewHead';
import ReviewContent from './ReviewContent';
import ReviewResponse from './ReviewResponse';
import FeedbackController from './FeedbackController';

const Review = ({ name, review, reviewControls }) => {
  const response = (review.response !== null) ? <ReviewResponse response={review.response} /> : '';
  return (
    <div className="review">
      <ReviewHead
        rating={review.rating}
        reviewerName={review.reviewer_name}
        date={review.date}
      />
      <ReviewContent
        summary={review.summary}
        recommended={review.recommend}
        body={review.body}
        seeMore={reviewControls.seeMore}
      />
      {response}
      <FeedbackController
        reviewId={name}
        setHelpful={reviewControls.setHelpful}
        reportReview={reviewControls.reportReview}
      />
    </div>
  );
};

Review.propTypes = {
  name: PropTypes.number.isRequired,
  review: PropTypes.objectOf(PropTypes.any).isRequired,
  reviewControls: PropTypes.objectOf(PropTypes.func).isRequired,
};

export default Review;
