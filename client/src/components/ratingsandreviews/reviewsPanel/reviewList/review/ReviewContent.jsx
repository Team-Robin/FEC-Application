import React from 'react';
import PropTypes from 'prop-types';

const ReviewContent = ({
  summary, recommended, body, seeMore, photos
}) => {
  const text = body.length > 250 ? body.slice(0, 250) : body;
  const seeMoreButton = body.length > 250 ? (
      <button type="button" value={body} onClick={seeMore}>
        See more
      </button>
    ) : '';
  const recommendation = (recommended) ? (<p className="recommended">I recomend this product</p>) : '';

  return (
    <div className="reviewContent">
      <h5 className="reviewTitle">{summary}</h5>
      <p className="reviewBody">{text}</p>
      {seeMoreButton}
      {recommendation}
      <div className="reviewPhotos">
        {photos.map(({url}) => (
          <img className="reviewThumbnail" src={url} />
        ))}
      </div>
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
