/* eslint-disable import/no-cycle */
/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
// eslint-disable-next-line no-unused-vars
import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Overview from './overview/Overview.jsx';
import QuestionsView from './questionsandanswers/QuestionsView.jsx';
import RatingsAndReviews from './ratingsandreviews/RatingsAndReviews.jsx';
import Connect from './Connect';
import LoadingPulse from './LoadingPulse';
import ProductName from './context/ProductName';

const App = () => {
  // both the this.state and this.setState()
  const [productInfo, setProductInfo] = useState({});
  const [productReviewMeta, setProductReviewMeta] = useState({});
  const [questionInfo, setQuestionInfo] = useState({});
  const [productStyles, setProductStyles] = useState({});
  const [currentStyle, setCurrentStyle] = useState({});
  const [productSalesPrice, setProductSalesPrice] = useState({});
  const [productName, setProductName] = useState({});
  const { id } = useParams();

  const dataGather = async () => {
    const product = await Connect.getProductById(id);
    const reviewMeta = await Connect.getReviewMeta(product.data.id);
    const questions = await Connect.getQuestions(product.data.id);
    const styles = await Connect.getProductStyles(product.data.id);

    setQuestionInfo({ questions: questions.data });
    setProductStyles({ styles: styles.data.results });
    setProductReviewMeta(reviewMeta.data);
    setProductInfo({ product: product.data });
    setCurrentStyle(styles.data.results[0]);
    setProductSalesPrice(styles.data.results[0].sale_price);
  };

  // async component did mount
  useEffect(dataGather, []);

  useEffect(() => {
    if (currentStyle) {
      setProductSalesPrice(currentStyle.sale_price || '');
    }
  }, [currentStyle]);

  useEffect(() => {
    if (productInfo && productInfo.product) {
      setProductName(productInfo.product.name);
    }
  }, [productInfo]);

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
          Features={productInfo.product.features}
          Styles={productStyles.styles}
          CurrentStyle={currentStyle}
          setCurrentStyle={setCurrentStyle}
          SalePrice={productSalesPrice}
        />
      ) : <LoadingPulse Message="quick coffee run!" />}
      <>
        {questionInfo.questions ? (
          <ProductName.Provider value={{ productName }}>
            <QuestionsView
            // Name={productInfo.product.name}
              questionInfo={questionInfo}
            />
          </ProductName.Provider>
        ) : null}
      </>
      {productInfo.product ? (
        <RatingsAndReviews productId={productInfo.product.id} />
      ) : null}
    </>
  );
};

export default App;
