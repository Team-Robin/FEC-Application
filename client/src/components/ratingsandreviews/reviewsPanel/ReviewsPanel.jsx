import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import SortHeader from './SortHeader';
import ReviewList from './reviewList/ReviewList';
import ReviewButtons from './ReviewButtons';
import ThemeContext from '../../context/Theme';

const ReviewsPanel = ({
  displayAmount, activeFilters, reviews, controls,
}) => {
  const { themeMode } = useContext(ThemeContext);
  const lightMode = 'text-dark'
  const darkMode = 'text-light'
  return (
    <div id="reviewPanel" className={themeMode === 'Light' ? lightMode : darkMode }>
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
}

ReviewsPanel.propTypes = {
  displayAmount: PropTypes.number.isRequired,
  activeFilters: PropTypes.arrayOf(PropTypes.string).isRequired,
  reviews: PropTypes.arrayOf(PropTypes.object).isRequired,
  controls: PropTypes.objectOf(PropTypes.object).isRequired,
};

export default ReviewsPanel;
