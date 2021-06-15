/* eslint-disable react/forbid-prop-types */
/* eslint-disable import/no-unresolved */
import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import ProductStyle from './ProductStyle';
import ThemeContext from '../context/Theme';

const ProductStyles = ({ Styles, CurrentStyle, setCurrentStyle }) => {
  const { themeMode } = useContext(ThemeContext);
  return (
    <div className="overview-right-dekstop">
      <div className="row h4">
        <span className={`text-bold ${themeMode === 'Light' ? 'text-dark' : 'text-light'}`}>Style &gt;</span>
        <span className={`text-thin ${themeMode === 'Light' ? 'text-muted' : 'text-muted-light'}`}>
          &nbsp;
          {CurrentStyle.name}
        </span>
      </div>
      <div className="row my-3">
        {Styles.map((iStyle) => (
          <ProductStyle
            Style={iStyle}
            CurrentStyle={CurrentStyle}
            setCurrentStyle={setCurrentStyle}
            key={iStyle.style_id}
          />
        ))}
      </div>
    </div>
  );
};

ProductStyles.propTypes = {
  Styles: PropTypes.array.isRequired,
  CurrentStyle: PropTypes.object.isRequired,
  setCurrentStyle: PropTypes.func.isRequired,
};

export default ProductStyles;
