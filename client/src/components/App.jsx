

import React, {useEffect} from 'react';
import Overview from './overview/Overview.jsx';
import QuestionsAndAnswers from './questionsandanswers/QuestionsView.jsx';
import RatingsAndReviews from './ratingsandreviews/RatingsAndReviews.jsx';
import Connect from './Connect.js';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {

    }
  }

  componentDidMount() {

    const id = window.location.href;
    console.log('url', id)
    // Connect.getProductById(id)
    //   .then((result) => {
    //     console.log('received from server', result);
    //   })
    //   .catch((error) => {
    //     console.log('error from the server', error);
    //   })
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

