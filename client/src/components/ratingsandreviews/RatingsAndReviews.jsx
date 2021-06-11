/* eslint-disable class-methods-use-this */
import React from 'react';
import RatingsOverview from './ratingsOverview/RatingsOverview';
import ReviewsPanel from './reviewsPanel/ReviewsPanel';
import Connect from '../Connect';
import ReviewButtons from './reviewsPanel/ReviewButtons';

class RatingsAndReviews extends React.Component {
  constructor(props) {
    super(props);
    this.labels = {
      Quality: {
        1: 'Hot garbage',
        2: 'Lukewarm garbage',
        3: 'Does the job I need it to do',
        4: 'Very niiice',
        5: 'OMGWOWSOGUUD',
      },
      Size: {
        1: 'A size too small',
        2: 'A half size too small',
        3: 'Perfect',
        4: 'A half size too big',
        5: 'A size too wide',
      },
      Width: {
        1: 'Too narrow',
        2: 'Slightly narrow',
        3: 'Perfect',
        4: 'Slightly wide',
        5: 'Too wide',
      },
      Comfort: {
        1: 'Uncomfortable',
        2: 'Slightly uncomfortable',
        3: 'Ok',
        4: 'Comfortable',
        5: 'Perfect',
      },
      Length: {
        1: 'Runs short',
        2: 'Runs slightly short',
        3: 'Perfect',
        4: 'Runs slightly long',
        5: 'Runs long',
      },
      Fit: {
        1: 'Runs tight',
        2: 'Runs slightly tight',
        3: 'Perfect',
        4: 'Runs slightly long',
        5: 'Runs long',
      },
    };
    this.controls = {
      reviews: {
        display: {
          remove: this.remove.bind(this),
          removeAll: this.removeAll.bind(this),
          sort: this.sort.bind(this),
        },
        reviews: {
          seeMore: this.expandBody.bind(this),
          setHelpful: this.setHelpful,
          reportReview: this.reportReview,
        },
        footer: {
          seeMore: this.expandReviewList.bind(this),
        },
      },
      ratings: {
        addFilter: this.addFilter.bind(this),
      },
    };
    this.state = {
      sortStyle: 'relevant',
      ratings: {},
      reviews: [],
      activeFilters: [],
      displayAmount: 2,
    };
  }

  componentDidMount() {
    const options = {
      params: {
        count: 100,
        sort: 'relevant',
        product_id: this.props.productId,
      },
    };
    Connect.getReviews(options)
      .then((reviewResponse) => {
        let reviews = reviewResponse.data;
        const id = reviews.product;
        Connect.getReviewMeta(id)
          .then((ratingsResponse) => {
            const ratings = ratingsResponse.data;
            reviews = this.removeDuplicateReviews(reviews);
            this.setState({ reviews, ratings });
          });
      });
  }

  setHelpful(reviewId) {
    Connect.setHelpful(reviewId);
  }

  removeDuplicateReviews(reviewsObj) {
    let reviews = reviewsObj.results;
    reviews.reduce((cache, r, i) => {
      if (i === 0) reviews = [];
      const result = cache;
      const propExists = !!result[r.summary];
      const valueAtPropExists = () => result[r.summary].indexOf(r.body) > -1;
      if (!propExists || !valueAtPropExists()) {
        reviews.push(r);
        result[r.summary] = (propExists) ? result[r.summary].concat([r.body]) : [r.body];
      }
      return result;
    }, {});
    return reviews;
  }

  reportReview(reviewId) {
    Connect.reportReview(reviewId);
  }

  expandBody(e) {
    const target = e.target;
    const parent = target.parent;
    const body = parent.children[1]; // should be the <p> element
    const fullText = e.target.value; // may need to use attribute.value
    body.innerHTML = fullText;
  }

  sort(e) {
    const sortStyle = e.target.value;
    const options = {
      params: {
        count: 100,
        sort: sortStyle,
        product_id: this.props.productId,
      },
    };
    Connect.getReviews(options)
      .then((response) => response.data)
      .then(this.removeDuplicateReviews)
      .then((reviews) => this.setState({ reviews, sortStyle }));
  }

  removeAll() {
    this.setState({
      activeFilters: [],
    });
  }

  remove(filter) {
    const newFilters = this.state.activeFilters.slice();
    const position = newFilters.indexOf(filter);
    newFilters.splice(position, 1);
    this.setState({
      activeFilters: newFilters,
    });
  }

  addFilter(key) {
    const position = parseInt(key.split(' ')[0], 10) - 1;
    const newFilters = this.state.activeFilters.slice();
    newFilters[position] = key;
    this.state({
      activeFilters: newFilters,
    });
  }

  expandReviewList() {
    this.setState({
      displayAmount: this.state.displayAmount + 2,
    });
  }

  render() {
    if (this.state.reviews.length) {
      return (
        <div id="rnr">
          <RatingsOverview
            labels={this.labels}
            ratingMetaData={this.state.ratings}
            controls={this.controls.ratings}
          />
          <ReviewsPanel
            displayAmount={this.state.displayAmount}
            activeFilters={this.state.activeFilters}
            reviews={this.state.reviews}
            controls={this.controls.reviews}
          />
        </div>
      );
    }
    return (
      <div id="addReviewPLS">
        <h1>No reviews yet... :(</h1>
        <div>
          <img src="https://media.giphy.com/media/dxPSj5kctYUpXOS4Tp/giphy.gif" alt="A rating system of reviews" />
        </div>
        <ReviewButtons
          displayAmount={0}
          reviewCount={0}
          footerControls={this.controls.reviews.footer}
        />
      </div>
    );
  }
}

export default RatingsAndReviews;
