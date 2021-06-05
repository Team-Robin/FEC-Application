

import React, {useEffect} from 'react';
import Overview from './overview/Overview.jsx';
import QuestionsAndAnswers from './questionsandanswers/QuestionsAndAnswers.jsx';
import RatingsAndReviews from './ratingsandreviews/RatingsAndReviews.jsx';
import Connect from './connect.js';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      product: '',
    }
  }

  componentDidMount() {
    const id = window.location.pathname.split('/')[2];  // splits '/products/###/' to '/', 'products', '####, '/'. we just want the numbers
    console.log(id);
    // Some work with cookies, not sure if I want to venture on this further
    // var body = document.cookie.split(';');
    // console.log('body is', body[0]);

    // work with connecting to server to fetch the necessary data
    Connect.getProductById(id)
      .then((result) => {
        this.setState({product: result.data});
      })
      .catch((error) => {
        console.log('error from the server', error);
      })
  }

// const App = (props) => {

//   // both the this.state and this.setState()
//   const [productInfo, setProduct Info] = useState({});

//    Component Did Mount
//   useEffect(() => {
//     // do api fetch for the product
//     // setProductInfo = ApiFetch
//   }, [])

  render() {
    return (
      <>
        <div className="prime-color">From React!</div>
        <Overview />
        <QuestionsAndAnswers />
        <RatingsAndReviews />
      </>
    )
  }
}

export default App;

