import React from 'react';
import PropTypes from 'prop-types';
import RatingBar from './RatingBar';

const RatingBreakdown = ({ ratingsObj, addFilter }) => {
  const ratings = [];
  for (let i = 1; i < 6; i += 1) {
    ratings.push(ratingsObj[i] || 0);
  }
  const totalRatings = ratings.reduce((votes, total = 0) => (total + votes));

  return (
    <div id="ratingBreakdown">
      {
        ratings.map((ratingCount, starCount) => (
          <RatingBar
            key={`${starCount + 1} Star`}
            ratingCount={ratingCount}
            percent={`${(ratingCount / totalRatings) * 100}%`}
            addFilter={addFilter}
          />
        ))
      }
    </div>
  );
};

RatingBreakdown.propTypes = {
  ratingsObj: PropTypes.objectOf(PropTypes.number).isRequired,
  addFilter: PropTypes.func.isRequired,
};

export default RatingBreakdown;
