import React from 'react';
import PropTypes from 'prop-types';

const sortHeader = ({ activeFilters, displayControls, reviews }) => {
  let filters = '';
  if (activeFilters.length) {
    filters = (
      <div id="filters">
        Filters:
        {
          activeFilters.map((filter) => (
            <button
              type="button"
              className="filterBtn"
              onClick={() => { displayControls.remove(filter); }}
              key={filter}
            >
              {filter}
            </button>
          ))
        }
        <button type="button" onClick={displayControls.removeAll}>
          Remove All
        </button>
      </div>
    );
  }

  return (
    <div id="sortHeader">
      <div >
        <span>{`${reviews.length}  reviews, sorted by `}</span>
        <select onChange={displayControls.sort}>
          <option value="relevant">Relevance</option>
          <option value="helpful">Most Helpful</option>
          <option value="newest">New</option>
        </select>
      </div>
      {filters}
    </div>
  );
};

sortHeader.propTypes = {
  activeFilters: PropTypes.arrayOf(PropTypes.string).isRequired,
  displayControls: PropTypes.objectOf(PropTypes.func).isRequired,
  reviews: PropTypes.arrayOf(PropTypes.any).isRequired,
};

export default sortHeader;
