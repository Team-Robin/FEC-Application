import React from 'react';
import PropTypes from 'prop-types';

const ReviewContent = ({
  summary, recommended, body, seeMore,
}) => {
  let text = body;
  let seeMoreButton = '';
  const recommendation = (recommended) ? (<p className="recommended">I recomend this product</p>) : '';
  if (body.length > 250) {
    seeMoreButton = (
      <button type="button" value={body} onClick={seeMore}>
        See more
      </button>
    );
    text = body.slice(0, 250);
  }

  return (
    <div className="reviewContent">
      <h5 className="reviewTitle">{summary}</h5>
      <p className="reviewBody">{text}</p>
      {seeMoreButton}
      {recommendation}
    </div>
  );
};

ReviewContent.propTypes = {
  summary: PropTypes.string.isRequired,
  recommended: PropTypes.bool.isRequired,
  body: PropTypes.string.isRequired,
  seeMore: PropTypes.func.isRequired,
};

export default ReviewContent;
