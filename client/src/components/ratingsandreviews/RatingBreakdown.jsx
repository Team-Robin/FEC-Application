import React from 'react';
import PropTypes from 'prop-types';
import RatingBar from './RatingBar';

const RatingBreakdown = ({ ratingsObj }) => {
  const ratings = [];
  for (let i = 1; i < 6; i += 1) {
    ratings.push(ratingsObj[i] || 0);
  }
  const totalReviews = ratings.reduce((votes, total = 0) => (total + votes));

  return (
    <div id="reviewBreakdown">
      {
        ratings.map((reviewCount, starCount) => (
          <RatingBar
            key={`${starCount + 1} Star`}
            reviewCount={reviewCount}
            percent={`${(reviewCount / totalReviews) * 100}%`}
          />
        ))
      }
    </div>
  );
};

RatingBreakdown.propTypes = {
  ratingsObj: PropTypes.objectOf(PropTypes.number).isRequired,
};

export default RatingBreakdown;
