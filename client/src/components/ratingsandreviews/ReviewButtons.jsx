import React from 'react';
import PropTypes from 'prop-types';

const ReviewButtons = ({ reviewCount, footerControls }) => {
  const seeMoreButton = (reviewCount > 2) ? (
    <button
      type="button"
      id="seeMore"
      onClick={footerControls.seeMore}
    >
      See More
    </button>
  ) : '';

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
  reviewCount: PropTypes.number.isRequired,
  footerControls: PropTypes.objectOf(PropTypes.func).isRequired,
};

export default ReviewButtons;
