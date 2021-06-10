import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

const ProductExpandedView = ({ expanded, setExpanded, photoStyle }) => {
  const [zoomed, setZoomed] = useState(false);
  const [imageStyle, setImageStyle] = useState();

  useEffect(() => {
    setImageStyle({
      // backgroundImage: `url(${photoStyle})`,
      // backgroundSize: 'fit',
      // backgroundPosition: 'center',
      // backgroundRepeat: 'no-repeat',
      // backgroundOrigin: 'fixed',
      // height: '100%',
      // width: '100%',
      // maxHeight: '100%',
      // maxWidth: '100%',
      // margin: 'auto',
    });
  }, [photoStyle]);
  return (
    <div className={`mx-auto d-flex justify-content-center overview-carousel-image-wrapper ${expanded ? 'overview-expanded-carousel' : null}`}>
      <button
        type="button"
        // src={`${photoStyle}`}
        alt="product"
        style={{
          backgroundImage: `url(${photoStyle})`,
          backgroundSize: zoomed ? 'cover' : 'fit',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          backgroundOrigin: 'fixed',
          backgroundColor: 'transparent',
          height: '100%',
          width: '100%',
          maxHeight: '100%',
          maxWidth: '100%',
          margin: 'auto',
          transform: zoomed ? 'scale(200%)' : null,
        }}
        className={`mx-auto shadow-lg rounded-sm transition ${expanded ? '' : null}`}
      >
        {/* <img
          alt="product"
          src={photoStyle}
          style={{
            width: '100%',
            height: 'auto',
            maxHeight: 'inherit',
          }}
        /> */}
      </button>
      <i
        className="fas fa-expand fa-lg overview-expand-icon"
        style={{
          fontSize: '4rem',
          width: 'fit-content',
          height: 'fit-content',
          padding: '.5em',
          paddingRight: '.2em',
          zIndex: '120',
          opacity: '80%',
          position: 'absolute',
          left: 'calc(100% - 2.5em)',
          top: '1rem',
          bottom: '0',
          right: '0',
        }}
        onClick={() => {
          setExpanded(!expanded);
        }}
        onKeyDown={(event) => {
          if (event.key === 'Enter') {
            setExpanded(!expanded);
          }
        }}
        role="button"
        tabIndex="0"
      >
        &nbsp;
      </i>
    </div>
  );
};

ProductExpandedView.propTypes = {
  expanded: PropTypes.bool.isRequired,
  photoStyle: PropTypes.string.isRequired,
  setExpanded: PropTypes.func.isRequired,
};

export default ProductExpandedView;
