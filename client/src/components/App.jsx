/* eslint-disable import/no-cycle */
/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */

// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from 'react';
import Overview from './overview/Overview.jsx';
import QuestionsAndAnswers from './questionsandanswers/QuestionsAndAnswers.jsx';
import RatingsAndReviews from './ratingsandreviews/RatingsAndReviews.jsx';
import Connect from './connect.js';

const App = () => {
  // both the this.state and this.setState()
  // eslint-disable-next-line no-unused-vars
  const [productInfo, setProductInfo] = useState({});
  //  Component Did Mount
  useEffect(() => {
    const id = window.location.pathname.split('/')[2]; // splits '/products/###/' to '/', 'products', '####, '/'. we just want the numbers
    Connect.getProductById(id)
      .then((result) => {
        setProductInfo({ product: result.data });
      })
      .catch((error) => {
        throw error;
      });
  }, []);

  return (
    <>
      {productInfo.product ? (
        <Overview
          Name={productInfo.product.name}
          Category={productInfo.product.category}
          Description={productInfo.product.description}
          Slogan={productInfo.product.slogan}
          Price={productInfo.product.default_price}
        />
      ) : null}
      <QuestionsAndAnswers />
      <RatingsAndReviews />
    </>
  );
};

export default App;
