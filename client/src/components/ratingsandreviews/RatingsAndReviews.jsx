import React from 'react';

const RatingsAndReviews = () => (
  <div id="rnr">
    <div id="ratingsOverview">
      <div id="reviewSummary">
        <h4>
          Ratings and Reviews
        </h4>
        <div>
          <h1>3.5</h1>
          <div>--star component--</div>
        </div>
        <p>1,000,000% of people recommend this product</p>
      </div>
      <div id="reviewBreakdown">
        <div className="reviewBar">
          <button type="button"> 1 Star</button>
          <div className="backgroundBar" />
          <div className="forgroundBar" />
        </div>
        <div className="reviewBar">
          <button type="button">2 Star</button>
          <div className="backgroundBar" />
          <div className="forgroundBar" />
        </div>
        <div className="reviewBar">
          <button type="button">3 Star</button>
          <div className="backgroundBar" />
          <div className="forgroundBar" />
        </div>
        <div className="reviewBar">
          <button type="button">4 Star</button>
          <div className="backgroundBar" />
          <div className="forgroundBar" />
        </div>
        <div className="reviewBar">
          <button type="button">5 Star</button>
          <div className="backgroundBar" />
          <div className="forgroundBar" />
        </div>
      </div>
      <div id="characteristicList">
        <div className="characteristic">
          <h6>Attribute type</h6>
          <div className="charBar">
            <div className="backgroundBar" />
            <div className="icon" />
          </div>
          <p className="minLabel">MinLable</p>
          <p className="maxLabel">MaxLable</p>
        </div>
      </div>
    </div>
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
