/* eslint-disable react/forbid-prop-types */
/* eslint-disable import/no-unresolved */
import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

const ProductFinalSelect = ({ SizeInformation = {} }) => {
  const [currentSize, setCurrentSize] = useState();
  const [quantity, setQuantity] = useState();
  const [quantityOptions, setQuantityOptions] = useState([]);
  const [selectedQuantity, setSelectedQuantity] = useState();

  useEffect(() => {
    if (currentSize) {
      setQuantity(currentSize.split(',')[1]);
      setSelectedQuantity(1);
    }
  }, [currentSize]);

  useEffect(() => {
    const qOpts = [];
    let max = 15;
    if (quantity < max) {
      max = quantity;
    }
    for (let i = 0; i < max; i += 1) {
      qOpts.push(i + 1);
    }
    setQuantityOptions(qOpts);
  }, [quantity]);

  return (
    <div>
      <select
        className="select-size text-size-2 rounded-sm mr-1 pl-4 hover-outline"
        onChange={(event) => setCurrentSize(event.target.value)}
        value={currentSize || ''}
      >
        <option value="">Select size</option>
        {Object.keys(SizeInformation).map((item) => (
          <option
            value={`${SizeInformation[item].size},${SizeInformation[item].quantity}`}
            className="text-size-1"
            key={`SelectSize-${item}`}
          >
            {SizeInformation[item].size}
          </option>
        ))}
      </select>
      <select
        className="select-size text-size-2 rounded-sm ml-1 pl-4"
        value={`${currentSize ? selectedQuantity : null}` || ''}
        onChange={(event) => setSelectedQuantity(event.target.value)}
      >
        <option value="">-</option>
        {quantityOptions.map((value) => (
          <option value={value} key={`Quantity-${value}`}>{value}</option>
        ))}
      </select>
      <div>
        <button type="button" aria-label="add to cart" className="select-size text-size-2 btn shadow-sm my-1 rounded-sm ">
          <span className="hover-outline"> Add to Bag </span>
        </button>
      </div>
      <div className="">
        <button type="button" className="select-size text-size-2 d-flex justify-content-center btn shadow-sm rounded-sm">
          <div className="star-empty star-muted align-self-center" />
        </button>
      </div>
    </div>
  );
};

ProductFinalSelect.propTypes = {
  SizeInformation: PropTypes.object.isRequired,
};

export default ProductFinalSelect;
