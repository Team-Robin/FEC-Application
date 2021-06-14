/* eslint-disable import/no-unresolved */
import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import ThemeContext from '../context/Theme';

const ProductPrice = ({ Price, SalePrice }) => {
  const { themeMode } = useContext(ThemeContext);
  return (
    <div className="h3 my-5">
      {SalePrice ? (
        <>
          <span className="text-red mr-3">{`$${SalePrice}`}</span>
          <span className={`text-strikethrough ${themeMode === 'Light' ? 'text-muted' : 'text-muted-light'}`}>{`$${Price}`}</span>
        </>
      ) : <span className={`${themeMode === 'Light' ? 'text-dark' : 'text-light'}`}>{`$${Price}`}</span>}
    </div>
  );
};
ProductPrice.propTypes = {
  Price: PropTypes.string.isRequired,
  SalePrice: PropTypes.string.isRequired,
};

export default ProductPrice;
