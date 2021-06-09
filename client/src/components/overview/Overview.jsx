/* eslint-disable react/forbid-prop-types */
// eslint-disable-next-line import/no-unresolved
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import ProductInfo from './ProductInfo';
import ProductDescription from './ProductDescription';
import ProductStyles from './ProductStyles';
import ProductFinalSelect from './ProductFinalSelect';
import ProductCarousel from './ProductCarousel';

// eslint-disable-next-line object-curly-newline
const Overview = ({
  Name, Category, Description, Slogan, Price, ReviewsRatings, Features, Styles,
  CurrentStyle, setCurrentStyle, SalePrice,
}) => {
  useEffect(() => {

  }, []);
  return (
    <div className="ml-4 mt-5 full-view">
      <div className="row">
        {CurrentStyle.photos && CurrentStyle.photos.length > 0
          ? (<ProductCarousel Photos={CurrentStyle.photos} />)
          : null}
        <div className="col ml-3 overview-product-info">
          <ProductInfo
            Name={Name}
            Category={Category}
            Price={Price}
            ReviewsRatings={ReviewsRatings}
            SalePrice={SalePrice}
          />
          <ProductStyles
            Styles={Styles}
            CurrentStyle={CurrentStyle}
            setCurrentStyle={setCurrentStyle}
          />
          { CurrentStyle.skus ? <ProductFinalSelect SizeInformation={CurrentStyle.skus} /> : null}
        </div>
      </div>
      <div className="mt-3 row align-items-center justify-content-center w-75 mx-auto">
        <ProductDescription
          Description={Description}
          Slogan={Slogan}
          Features={Features}
        />
      </div>
    </div>
  );
};
Overview.propTypes = {
  Name: PropTypes.string.isRequired,
  Category: PropTypes.string.isRequired,
  Description: PropTypes.string.isRequired,
  Slogan: PropTypes.string.isRequired,
  Price: PropTypes.string.isRequired,
  ReviewsRatings: PropTypes.object.isRequired,
  Features: PropTypes.array.isRequired,
  Styles: PropTypes.array.isRequired,
  CurrentStyle: PropTypes.object.isRequired,
  setCurrentStyle: PropTypes.func.isRequired,
  SalePrice: PropTypes.string.isRequired,
};

export default Overview;
