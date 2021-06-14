/* eslint-disable react/forbid-prop-types */
/* eslint-disable import/no-unresolved */
import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import TrackerContext from '../context/Tracker';

const ProductStyle = ({ Style, setCurrentStyle, CurrentStyle }) => {
  const { tracking, setTracking } = useContext(TrackerContext);
  return (
    <button
      type="button"
      className="styles-wrapper cursor-pointer py-2 btn-focus rounded-circle"
      onClick={(event) => {
        setCurrentStyle(Style);
        const tracked = { element: event.target, time: new Date(), module: 'Product Style Selector' };
        setTracking([...tracking, tracked]);
      }}
      aria-label={`style ${Style.name}`}
    >
      <div
        className={`styles-icon no-clicker shadow ${Style.style_id === CurrentStyle.style_id ? 'styles-selected' : 'styles-pop'}`}
        style={{
          backgroundImage: `url("${Style.photos[0].thumbnail_url}")`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      />
    </button>
  );
};

ProductStyle.propTypes = {
  Style: PropTypes.object.isRequired,
  setCurrentStyle: PropTypes.func.isRequired,
  CurrentStyle: PropTypes.object.isRequired,
};

export default ProductStyle;
