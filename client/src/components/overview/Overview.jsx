/* eslint-disable react/forbid-prop-types */
// eslint-disable-next-line import/no-unresolved
import React from 'react';
import PropTypes from 'prop-types';
import ProductInfo from './ProductInfo';
import ProductDescription from './ProductDescription';
import ProductStyles from './ProductStyles';
import ProductFinalSelect from './ProductFinalSelect';

// eslint-disable-next-line object-curly-newline
const Overview = ({
  Name, Category, Description, Slogan, Price, ReviewsRatings, Features, Styles,
  CurrentStyle, setCurrentStyle, SalePrice,
}) => (
  <div className="ml-5 mt-5">
    <div className="row">
      <div className="col border text-primamry" />
      <div className="col ml-3">
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
