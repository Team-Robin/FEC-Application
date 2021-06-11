import React from 'react';
import PropTypes from 'prop-types';

const ReviewResponse = ({ response }) => (
  <div className="reviewResponse">
    <p className="responseTitle">Response: </p>
    <p>{response}</p>
  </div>
);

ReviewResponse.propTypes = {
  response: PropTypes.string.isRequired,
};

export default ReviewResponse;
