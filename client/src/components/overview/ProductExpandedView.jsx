import React, { useState } from 'react';
import PropTypes from 'prop-types';

const ProductExpandedView = ({ expanded, setExpanded }) => {
  const [zoomed, setZoomed] = useState(false);
  return (
    <div> </div>
  );
};

ProductExpandedView.propTypes = {
  expanded: PropTypes.bool.isRequired,
  setExpanded: PropTypes.func.isRequired,
};

export default ProductExpandedView;
