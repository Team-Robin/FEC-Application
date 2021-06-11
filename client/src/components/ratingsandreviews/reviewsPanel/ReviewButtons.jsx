import React from 'react';
import PropTypes from 'prop-types';

const ReviewButtons = ({ displayAmount, reviewCount, footerControls }) => {
  const seeMoreButton = (reviewCount > displayAmount) ? (
    <button
      type="button"
      id="seeMore"
      onClick={footerControls.seeMore}
    >
      See More
    </button>
  ) : <p>No More Reviews</p>;

  return (
    <div id="reviewButtons">
      {seeMoreButton}
      <button
        type="button"
        id="addReview"
        onClick={footerControls.addReview}
      >
        Add Review
      </button>
    </div>
  );
};

ReviewButtons.propTypes = {
  displayAmount: PropTypes.number.isRequired,
  reviewCount: PropTypes.number.isRequired,
  footerControls: PropTypes.objectOf(PropTypes.func).isRequired,
};

export default ReviewButtons;
