/* eslint-disable import/no-cycle */
/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */

// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from 'react';
import Overview from './overview/Overview.jsx';
import QuestionsView from './questionsandanswers/QuestionsView.jsx';
import RatingsAndReviews from './ratingsandreviews/RatingsAndReviews.jsx';
import Connect from './Connect';
import LoadingPulse from './LoadingPulse';
import TrackerContext from './context/Tracker';
import ThemeContext from './context/Theme';

const App = () => {
  // both the this.state and this.setState()
  const [productInfo, setProductInfo] = useState({});
  const [productReviewMeta, setProductReviewMeta] = useState({});
  const [questionInfo, setQuestionInfo] = useState({});
  const [productStyles, setProductStyles] = useState({});
  const [currentStyle, setCurrentStyle] = useState({});
  const [productSalesPrice, setProductSalesPrice] = useState({});
  const [tracking, setTracking] = useState([]);
  const [themeMode, setThemeMode] = useState('Light');
  //  Component Did Mount

  useEffect(async () => {
    const id = window.location.pathname.split('/')[2] || '17071'; // splits '/products/###/' to '/', 'products', '####, '/'. we just want the numbers
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
  }, []);

  useEffect(() => {
    if (currentStyle) {
      setProductSalesPrice(currentStyle.sale_price || '');
    }
  }, [currentStyle]);

  useEffect(() => {
    // const app = document.getElementById('#app');
    // if (themeMode === 'Light') {
    //   app.classList.add('bg-light');
    //   app.classList.remove('bg-dark');
    // } else if (themeMode === 'Dark') {
    //   app.classList.add('bg-dark');
    //   app.classList.remove('bg-light');
    // }
  }, [themeMode]);

  return (
    <div className={themeMode === 'Light' ? 'bg-light' : 'bg-dark'}>
      <TrackerContext.Provider value={{ tracking, setTracking }}>
        <ThemeContext.Provider value={{ themeMode }}>
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
              <QuestionsView
                questionInfo={questionInfo}
              />
            ) : null}
          </>
          {productInfo.product ? (
            <RatingsAndReviews productId={productInfo.product.id} />
          ) : null}
        </ThemeContext.Provider>
      </TrackerContext.Provider>
    </div>
  );
};

export default App;
