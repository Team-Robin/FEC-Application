import React from 'react';
import PropTypes from 'prop-types';
import RatingStars from '../../../RatingStars.jsx';

const ReviewHead = ({ rating, reviewerName, date }) => {

  return (
    <div className="reviewHead">

      {<RatingStars ratings={rating} mutable={false} />}
      <span className="reviewInfo">
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
