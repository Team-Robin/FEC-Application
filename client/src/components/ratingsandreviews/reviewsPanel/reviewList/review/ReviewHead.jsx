import React from 'react';
import PropTypes from 'prop-types';

const ReviewHead = ({ rating, reviewerName, date }) => {
  // const verification = (isVerified(reviewerName)) ? (<div className="verification" />) : '';
  //  just a random function to shut the linter up. should refactor out when time allows.
  const test = 0;
  if (test === 1) {
    console.log('thats odd');
  }

  return (
    <div className="reviewHead">
      <span>Star Component</span>
      <span className="reviewInfo">
        {/* {verification} */}
        <span>{`${reviewerName}, `}</span>
        <span>{`${date.slice(0, 10)} `}</span>
      </span>
    </div>
  );
};

ReviewHead.propTypes = {
  rating: PropTypes.number.isRequired,
  reviewerName: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
};

export default ReviewHead;
