import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import ReviewHead from './ReviewHead';
import ReviewContent from './ReviewContent';
import ReviewResponse from './ReviewResponse';
import FeedbackController from './FeedbackController';
import ThemeContext from '../../../../context/Theme'

const Review = ({ name, review, reviewControls }) => {
  const response = (review.response !== null) ? <ReviewResponse response={review.response} /> : '';
  const { themeMode } = useContext(ThemeContext);
  const lightMode = 'reviewLight';
  const darkMode = 'reviewDark';
  return (
    <div className={`review ${themeMode === 'Light' ? lightMode : darkMode}`}>
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
