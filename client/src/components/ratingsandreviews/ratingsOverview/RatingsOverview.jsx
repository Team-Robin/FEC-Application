import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import RatingSummary from './RatingSummary';
import RatingBreakdown from './ratingBreakdown/RatingBreakdown';
import CharacteristicList from './characteristicList/CharacteristicList';
import ThemeContext from '../../context/Theme';

const RatingsOverview = ({
  starComponent, labels, ratingMetaData, controls,
}) => {
  const { themeMode } = useContext(ThemeContext);
  const lightMode = 'text-dark ratingsLight'
  const darkMode = 'text-light ratingsDark'
  return (
    <div id="ratingsOverview" className={themeMode === 'Light' ?  lightMode : darkMode }>
      <RatingSummary
        starComponent={starComponent}
        ratings={ratingMetaData.ratings}
        recommended={ratingMetaData.recommended}
      />
      <RatingBreakdown
        ratingsObj={ratingMetaData.ratings}
        addFilter={controls.addFilter}
      />
      <CharacteristicList
        characteristics={ratingMetaData.characteristics}
        labels={labels}
      />
    </div>
  )
};

RatingsOverview.propTypes = {
  starComponent: PropTypes.element.isRequired,
  labels: PropTypes.objectOf(PropTypes.object).isRequired,
  ratingMetaData: PropTypes.objectOf(PropTypes.any).isRequired,
  controls: PropTypes.objectOf(PropTypes.func).isRequired,
};

export default RatingsOverview;
