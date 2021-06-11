/* eslint-disable import/no-unresolved */
import React, { useContext } from 'react';
import TrackerContext from '../context/Tracker';

const ProductSocials = () => {
  const { tracking, setTracking } = useContext(TrackerContext);
  const handleFacebook = (event) => {
    // when we deploy. only difference is the u
    // window.open(`https://www.facebook.com/sharer.php?u=${window.location.href}`, '_blank');
    const tracked = { element: event.target, time: new Date(), module: 'Share to Facebook' };
    setTracking([...tracking, tracked]);
    window.open(`https://www.facebook.com/sharer.php?${window.location.href}`, '_blank');
  };
  const handleTwitter = (event) => {
    const tracked = { element: event.target, time: new Date(), module: 'Share to Twitter' };
    setTracking([...tracking, tracked]);
    window.open(`https://twitter.com/intent/tweet?url=${window.location.href}&text=From Hack Reactor Student Front End Capstone Project!&hashtags=FEC,HackReactor,Bootcamp,Student`, '_blank');
  };
  const handlePinterest = (event) => {
    const tracked = { element: event.target, time: new Date(), module: 'Share to Pintrest' };
    setTracking([...tracking, tracked]);
    window.open(`http://pinterest.com/pin/create/button/?url=${window.location.href}&description=Hack Reactor Student FEC`, '_blank');
  };
  return (
    <div className="d-flex mt-2">
      <button
        type="button"
        className="btn text-light social-icon bg-transparent shadow cursor-pointer"
        onClick={handleFacebook}
        style={{ fontSize: '2rem' }}
      >
        <i className="fab fa-facebook-square fa-lg fb-text-color" />
      </button>
      <button
        type="button"
        className="btn text-light social-icon bg-transparent shadow cursor-pointer"
        onClick={handleTwitter}
        style={{ fontSize: '2rem' }}
      >
        <i className="fab fa-twitter-square fa-lg twtr-text-color cursor-pointer" />
      </button>
      <button
        type="button"
        className="btn text-light social-icon bg-transparent shadow"
        onClick={handlePinterest}
        style={{ fontSize: '2rem' }}
      >
        <i className="fab fa-pinterest-square fa-lg pins-text-color cursor-pointer" />
      </button>
    </div>
  );
};

export default ProductSocials;
