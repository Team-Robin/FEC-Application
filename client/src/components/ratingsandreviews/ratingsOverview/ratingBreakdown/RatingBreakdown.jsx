import React from 'react';
import PropTypes from 'prop-types';
import RatingBar from './RatingBar';

const RatingBreakdown = ({ ratingsObj, addFilter }) => {
  const ratings = [];
  for (let i = 1; i < 6; i += 1) {
    ratings.push(Number(ratingsObj[i]) || 0);
  }
  const totalRatings = ratings.reduce((total, votes) => (total + Number(votes)), 0);

  return (
    <div id="ratingBreakdown">
      {
        ratings.map((ratingCount, starCount) => (
          <RatingBar
            key={`${starCount + Number(1)} Star`}
            name={`${starCount + Number(1)} Star`}
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
  ratingsObj: PropTypes.objectOf(PropTypes.any).isRequired,
  addFilter: PropTypes.func.isRequired,
};

export default RatingBreakdown;
