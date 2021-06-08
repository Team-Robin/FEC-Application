import React from 'react';
import PropTypes from 'prop-types';
import ReviewSummary from './ReviewSummary';
import RatingBreakdown from './RatingBreakdown';
import CharacteristicList from './CharacteristicList';

const ReviewsOverview = ({ reviewMetaData, labels }) => (
  <div id="reviewsOverview">
    <ReviewSummary
      ratings={reviewMetaData.ratings}
      recommended={reviewMetaData.recommended}
    />
    <RatingBreakdown ratingsObj={reviewMetaData.ratings} />
    <CharacteristicList
      characteristics={reviewMetaData.characteristics}
      labels={labels}
    />
  </div>
);

ReviewsOverview.propTypes = {
  reviewMetaData: PropTypes.objectOf(PropTypes.object).isRequired,
  labels: PropTypes.objectOf(PropTypes.object).isRequired,
};

export default ReviewsOverview;
