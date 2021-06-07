/* eslint-disable import/no-cycle */
/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */

// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from 'react';
import Overview from './overview/Overview.jsx';
import QuestionsAndAnswers from './questionsandanswers/QuestionsAndAnswers.jsx';
import RatingsAndReviews from './ratingsandreviews/RatingsAndReviews.jsx';
import Connect from './Connect';

const App = () => {
  // both the this.state and this.setState()
  const [productInfo, setProductInfo] = useState({});
  const [productReviewMeta, setProductReviewMeta] = useState({});

  //  Component Did Mount
  useEffect(async () => {
    const id = window.location.pathname.split('/')[2]; // splits '/products/###/' to '/', 'products', '####, '/'. we just want the numbers
    const product = await Connect.getProductById(id);
    const reviewMeta = await Connect.getReviewMeta(product.data.id);
    const questions = await Connect.getQuestions(product.data.id);

    console.log(questions);

    setProductInfo({ product: product.data });
    setProductReviewMeta(reviewMeta.data);
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
          ReviewsRatings={productReviewMeta.ratings}
        />
      ) : null}
      <QuestionsAndAnswers />
      <RatingsAndReviews />
    </>
  );
};

export default App;
