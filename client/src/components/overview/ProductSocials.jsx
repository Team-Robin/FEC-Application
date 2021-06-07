/* eslint-disable import/no-unresolved */
import React from 'react';

const ProductSocials = () => {
  const handleFacebook = () => {
    // when we deploy. only difference is the u
    // window.open(`https://www.facebook.com/sharer.php?u=${window.location.href}`, '_blank');
    window.open(`https://www.facebook.com/sharer.php?${window.location.href}`, '_blank');
  };
  const handleTwitter = () => {
    window.open(`https://twitter.com/intent/tweet?url=${window.location.href}&text=From Hack Reactor Student Front End Capstone Project!&hashtags=FEC,HackReactor,Bootcamp,Student`, '_blank');
  };
  const handlePinterest = () => {
    window.open(`http://pinterest.com/pin/create/button/?url=${window.location.href}&description=Hack Reactor Student FEC`, '_blank');
  };
  return (
    <div className="d-flex">
      <button
        type="button"
        className="btn text-light social-icon mx-1 bg-transparent"
        onClick={handleFacebook}
        style={{fontSize: '24px'}}
      >
      <i class="fab fa-facebook fa-lg fb-text-color"></i>
      </button>
      <button
        type="button"
        className="btn twtr-bg-color rounded-circle text-light social-icon mx-1"
        onClick={handleTwitter}
      >
        TWT
      </button>
      <button
        type="button"
        className="btn pins-bg-color rounded-circle text-light social-icon mx-1"
        onClick={handlePinterest}
      >
        PINS
      </button>
    </div>
  );
};

export default ProductSocials;
