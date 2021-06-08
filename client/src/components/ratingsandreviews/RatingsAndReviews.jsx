import React from 'react';

const RatingsAndReviews = (props) => {


  return (
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
            <button>1 Star</button>
            <div className="backgroundBar"></div>
            <div className="forgroundBar"></div>
          </div>
          <div className="reviewBar">
            <button>2 Star</button>
            <div className="backgroundBar"></div>
            <div className="forgroundBar"></div>
          </div>
          <div className="reviewBar">
            <button>3 Star</button>
            <div className="backgroundBar"></div>
            <div className="forgroundBar"></div>
          </div>
          <div className="reviewBar">
            <button>4 Star</button>
            <div className="backgroundBar"></div>
            <div className="forgroundBar"></div>
          </div>
          <div className="reviewBar">
            <button>5 Star</button>
            <div className="backgroundBar"></div>
            <div className="forgroundBar"></div>
          </div>
        </div>
        <div id="characteristicList">
          <div className="characteristic">
            <h6>Attribute type</h6>
            <div className="charBar">
              <div className="backgroundBar"></div>
              <div className="icon"></div>
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
            <button className="filterBtn">1 Star</button>
            <button className="filterBtn">2 Star</button>
            <button className="filterBtn">3 Star</button>
            <button className="filterBtn">4 Star</button>
            <button className="filterBtn">5 Star</button>
            <button>Remove All</button>
          </div>
        </div>
        <div id="reviewList">
          <div className="review">
            <div className="reviewHead">
              <span>Star Component</span>
              <span className="userInfo">
                <span className="verification">verification</span>
                <span>username</span>
                <span>date</span>
              </span>
            </div>
          </div> {/*duplicate when done*/}
        </div>
        <div id="reviewButtons">
          <button id="seeMore">See More</button>
          <button id="addReview">Add Review</button>
        </div>
      </div>
    </div>
  )
}

export default RatingsAndReviews;