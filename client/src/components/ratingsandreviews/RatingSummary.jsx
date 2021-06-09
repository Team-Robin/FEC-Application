import React from 'react';
import PropTypes from 'prop-types';

const RatingSummary = ({ ratings, recommended }) => {
  const totalRatings = Object.values(ratings).reduce((rateCount, total = 0) => rateCount + total);
  const totalStars = Object.entries(ratings).reduce((rateCount, total = 0) => (
    // rateCount looks like ['1', 5]
    total + (rateCount[0] * rateCount[1])
  ));
  const overallRating = totalStars / totalRatings;

  return (
    <div id="ratingSummary">
      <h3>
        Ratings and Reviews
      </h3>
      <div>
        <h1>{overallRating}</h1>
        <div>--star component--</div>
      </div>
      <p>{`${Math.floor((recommended[0] / totalRatings) * 100)}% of people recommend this product`}</p>
    </div>
  );
};

RatingSummary.propTypes = {
  ratings: PropTypes.objectOf(PropTypes.number).isRequired,
  recommended: PropTypes.objectOf(PropTypes.number).isRequired,
};

export default RatingSummary;
