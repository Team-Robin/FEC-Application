import React from 'react';
import PropTypes from 'prop-types';
import SortHeader from './SortHeader';
import ReviewList from './reviewList/ReviewList';
import ReviewButtons from './ReviewButtons';

const ReviewsPanel = ({
  displayAmount, activeFilters, reviews, controls,
}) => (
  <div id="reviewPanel">
    <SortHeader
      reviews={reviews}
      displayControls={controls.display}
      activeFilters={activeFilters}
    />
    <ReviewList
      displayAmount={displayAmount}
      reviews={reviews}
      reviewControls={controls.reviews}
    />
    <ReviewButtons
      displayAmount={displayAmount}
      reviewCount={reviews.length}
      footerControls={controls.footer}
    />
  </div>
);

ReviewsPanel.propTypes = {
  displayAmount: PropTypes.number.isRequired,
  activeFilters: PropTypes.arrayOf(PropTypes.string).isRequired,
  reviews: PropTypes.arrayOf(PropTypes.object).isRequired,
  controls: PropTypes.objectOf(PropTypes.object).isRequired,
};

export default ReviewsPanel;
