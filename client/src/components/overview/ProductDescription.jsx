/* eslint-disable react/forbid-prop-types */
/* eslint-disable import/no-unresolved */
import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import ProductSocials from './ProductSocials';
import ThemeContext from '../context/Theme';

const ProductDescription = ({
  Description, Slogan, Features,
}) => {
  const { themeMode } = useContext(ThemeContext);
  return (
    <div className="d-flex ">
      <div className="col w-50 ">
        <div className="text-bold text-secondary">{Slogan}</div>
        <div className={`${themeMode === 'Light' ? 'text-dark' : 'text-light'}`}>{Description}</div>
        <ProductSocials />
      </div>
      <div className="col w-50">
        <div style={{ maxHeight: 'fit-content' }} className="ml-3 overview-features-bar">
          {Features.map((feature) => (
            <div key={`Features-${feature.feature}`} className="flex-shrink">
              <i className="fas fa-check text-secondary mx-1" />
              <span className={`${themeMode === 'Light' ? 'text-muted' : 'text-muted-light'}`}>{`${feature.feature} : ${feature.value}`}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

ProductDescription.propTypes = {
  Description: PropTypes.string.isRequired,
  Slogan: PropTypes.string.isRequired,
  Features: PropTypes.array.isRequired,
};

export default ProductDescription;
