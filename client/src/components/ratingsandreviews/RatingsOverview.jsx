import React from 'react';
import PropTypes from 'prop-types';
import RatingSummary from './RatingSummary';
import RatingBreakdown from './RatingBreakdown';
import CharacteristicList from './CharacteristicList';

const RatingsOverview = ({ labels, ratingMetaData, controls }) => (
  <div id="ratingsOverview">
    <RatingSummary
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
);

RatingsOverview.propTypes = {
  labels: PropTypes.objectOf(PropTypes.object).isRequired,
  ratingMetaData: PropTypes.objectOf(PropTypes.object).isRequired,
  controls: PropTypes.func.isRequired,
};

export default RatingsOverview;
