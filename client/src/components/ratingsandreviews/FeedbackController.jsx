import React from 'react';
import PropTypes from 'prop-types';

const FeedbackController = ({ reviewId, setHelpful, reportReview }) => (
  <span className="FeedbackController">
    Was this review helpful?
    <button type="button" onClick={() => { setHelpful(reviewId); }}>  Yes </button>
    |
    <button type="button" onClick={() => { reportReview(reviewId); }}>  Report</button>
  </span>
);

FeedbackController.propTypes = {
  reviewId: PropTypes.number.isRequired,
  setHelpful: PropTypes.func.isRequired,
  reportReview: PropTypes.func.isRequired,
};

export default FeedbackController;
