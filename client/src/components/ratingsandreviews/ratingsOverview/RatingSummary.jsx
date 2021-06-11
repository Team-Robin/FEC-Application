import React from 'react';
import PropTypes from 'prop-types';

const RatingSummary = ({ ratings, recommended }) => {
  const totalRatings = Object.values(ratings).reduce((total, rateCount) => (
    parseInt(total) + parseInt(rateCount)
  ));
  const totalStars = Object.entries(ratings).reduce((total, rateCount) => (
    // rateCount looks like ['1', '5']
    total + (rateCount[0] * rateCount[1])
  ), 0);
  const overallRating = totalStars / totalRatings;

  return (
    <div id="ratingSummary">
      <h3>
        Ratings and Reviews
      </h3>
      <div>
        <h1>{overallRating.toString().slice(0, 3)}</h1>
        <div>--star component--</div>
      </div>
      <p>{`${Math.floor((parseInt(recommended.true) / totalRatings) * 100)}% of people recommend this product`}</p>
    </div>
  );
};

RatingSummary.propTypes = {
  ratings: PropTypes.objectOf(PropTypes.string).isRequired,
  recommended: PropTypes.objectOf(PropTypes.string).isRequired,
};

export default RatingSummary;
