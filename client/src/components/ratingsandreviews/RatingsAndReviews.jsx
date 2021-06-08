import React from 'react';
import ReviewsOverview from './ReviewsOverview';

const RatingsAndReviews = () => (
  <div id="rnr">
    <ReviewsOverview />
    <div id="ratingsList">
      <div id="sortHead">
        <span>256 reviews, sorted by </span>
        <select>
          <option>Relevance</option>
          <option>Most Helpful</option>
          <option>Newest</option>
        </select>
        <div id="filters">
          Filters:
          <button type="button" className="filterBtn">1 Star</button>
          <button type="button" className="filterBtn">2 Star</button>
          <button type="button" className="filterBtn">3 Star</button>
          <button type="button" className="filterBtn">4 Star</button>
          <button type="button" className="filterBtn">5 Star</button>
          <button type="button">Remove All</button>
        </div>
      </div>
      <div id="reviewList">

        <div className="review">
          <div className="reviewHead">
            <span>Star Component</span>
            <span className="reviewInfo">
              <div className="verification" />
              <span>Noshuas </span>
              <span>June 7, 2021</span>
            </span>
          </div>
          <h3 className="reviewTitle">Here lies a generic title</h3>
          <p className="reviewBody">This stuff is the litteral shez-perezz. If you are not scooping this up by the handfuls, you may as well lop off those useless meat hooks. Get one right now!</p>
          <p className="recommended">I recomend this product</p>
          <div className="reviewResponse">
            <p className="responseTitle">Response: </p>
            <br />
            <p>What are you even talking about??</p>
          </div>
          <span className="helpfulReport">
            Was this review helpful?
            <button type="button">  Yes</button>
            <button type="button">  No</button>
            |
            <button type="button">  Report</button>
          </span>
        </div>
      </div>

      <div id="reviewButtons">
        <button type="button" id="seeMore">See More</button>
        <button type="button" id="addReview">Add Review</button>
      </div>
    </div>
  </div>
);

export default RatingsAndReviews;
