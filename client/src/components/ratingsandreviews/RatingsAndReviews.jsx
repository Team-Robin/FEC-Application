import React from 'react';
import RatingsOverview from './RatingsOverview';
import ReviewsPanel from './ReviewsPanel';
import Connect from '../Connect';

class RatingsAndReviews extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sortStyle: 'relevent',
      ratings: {},
      reviews: {},
      activeFilters: [],
    };
    this.lables = {
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
  }

  setHelpful(reviewId) {
    Connect.setHelpful(reviewId);
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
    console.log('loging sortStyle RatingsAndReviews 86', sortStyle);
    const options = {
      params: {
        count: 2,
        sort: sortStyle,
        product_id: this.props.productId,
      },
    };
    Connect.getReviews(options)
      .then((response) => response.data)
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
    const { sortStyle } = this.state;
    const options = {
      params: {
        count: 10,
        sort: sortStyle,
        product_id: this.props.productId,
      },
    };
    Connect.getReviews(options)
      .then((response) => response.data)
      .then((reviews) => this.setState({ reviews, sortStyle }));
  }

  render() {
    return (
      <div id="rnr">
        <RatingsOverview
          labels={this.labels}
          ratingMetaData={this.state.ratings}
          controls={this.controls.ratings}
        />
        <ReviewsPanel
          activeFilters={this.state.activeFilters}
          reviews={this.state.reviews}
          controls={this.controls.reviews}
        />
      </div>
    );
  }
}

export default RatingsAndReviews;
