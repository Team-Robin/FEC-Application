import React from 'react';
import PropTypes from 'prop-types';
import SortHeader from './SortHeader';
import ReviewList from './ReviewList';
import ReviewButtons from './ReviewButtons';

const ReviewsPanel = ({ activeFilters, reviews, controls }) => (
  <div id="reviewsPanel">
    <SortHeader
      displayControls={controls.display}
      activeFilters={activeFilters}
    />
    <ReviewList
      reviews={reviews.results}
      reviewControls={controls.reviews}
    />
    <ReviewButtons
      reviewCount={reviews.results.length}
      footerControls={controls.footer}
    />
  </div>
);

ReviewsPanel.propTypes = {
  activeFilters: PropTypes.arrayOf(PropTypes.string).isRequired,
  reviews: PropTypes.objectOf(PropTypes.any).isRequired,
  controls: PropTypes.objectOf(PropTypes.object).isRequired,
};

export default ReviewsPanel;
