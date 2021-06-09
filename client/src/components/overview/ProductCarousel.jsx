/* eslint-disable react/forbid-prop-types */
// eslint-disable-next-line import/no-unresolved
import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import ProductGallery from './ProductGallery';

const ProductCarousel = ({ Photos }) => {
  // hello
  const [currentPhoto, setCurrentPhoto] = useState();
  const [photoGallery, setPhotoGallery] = useState([]);
  const [photoStyle, setPhotoStyle] = useState();
  const [restrict, setRestrict] = useState('decrement');
  const [expanded, setExpanded] = useState('false');

  useEffect(async () => {
    if (Photos) {
      let photos = [];
      Photos.forEach((photo, index) => {
        photos = [...photos, { photo, index }];
      });
      setPhotoGallery(photos);
      setCurrentPhoto(photos[0]);
    }
  }, [Photos]);

  useEffect(() => {
    if (currentPhoto && currentPhoto.photo) {
      // setPhotoStyle({
      //   backgroundImage: `url(${currentPhoto.url})`,
      //   backgroundSize: 'constraint',
      //   backgroundPosition: 'center',
      //   backgroundRepeat: 'no-repeat',
      //   backgroundColor: 'transparent',
      // });
      setPhotoStyle(currentPhoto.photo.url);
      if (currentPhoto.index >= photoGallery.length - 1) {
        setRestrict('increment');
      } else if (currentPhoto.index <= 0) {
        setRestrict('decrement');
      } else {
        setRestrict('none');
      }
    }
  }, [currentPhoto]);

  const carouselReducer = (direction) => {
    let newIndex = direction;
    if (newIndex < 0) {
      // newIndex = photoGallery.length - 1;
      newIndex = 0;
    } else if (newIndex >= photoGallery.length) {
      // newIndex = 0;
      newIndex = photoGallery.length - 1;
    }
    setCurrentPhoto(photoGallery[newIndex]);
  };

  return (
    <div className="overview-gallery text-center">
      <div
        className={`overview-carousel mx-auto d-flex justify-content-center ${!expanded ? 'overview-expanded-carousel' : null}`}
        style={{
          // backgroundImage: `url(${photoStyle})`,
          // backgroundSize: 'contain',
          // backgroundPosition: 'center',
          // backgroundRepeat: 'no-repeat',
        }}
      >
        { currentPhoto && currentPhoto.photo && expanded ? (
          <ProductGallery
            PhotoGallery={photoGallery}
            CurrentPhoto={currentPhoto}
            SelectPhoto={setCurrentPhoto}
          />
        ) : null}

        <div
          onClick={() => {
            setExpanded(!expanded);
          }}
          onKeyDown={() => {
            setExpanded(!expanded);
          }}
          style={{
            color: 'transparent',
            position: 'absolute',
            backgroundColor: 'transparent',
            left: 'min(10em, 20%)',
            right: '0',
            top: '0',
            bottom: '0',
            width: 'calc(100% - min(20em, 40%))',
          }}
          className={`${!expanded ? 'zoomer' : null}`}
          role="button"
          tabIndex="0"
        >
          expand image
        </div>
        <img
          src={`${photoStyle}`}
          alt="product"
          style={{
            maxHeight: '100%',
            maxWidth: '100%',
            margin: 'auto',
          }}
          className={`mx-auto shadow-lg ${!expanded ? 'overview-expanded-carousel' : null}`}
        />
        {restrict !== 'decrement' ? (
          <button
            type="button"
            className="overview-carousel-decrement"
            onClick={() => {
              carouselReducer(currentPhoto.index - 1);
            }}
          >
            <i className="fas fa-chevron-left fa-lg rounded-circle overview-carousel-icon" style={{ overflow: 'hidden', fontSize: '2em' }} />
          </button>
        ) : null}
        {restrict !== 'increment' ? (
          <button
            type="button"
            className="overview-carousel-increment"
            onClick={() => {
              carouselReducer(currentPhoto.index + 1);
            }}
          >
            <i className="fas fa-chevron-right fa-lg rounded-circle overview-carousel-icon" style={{ overflow: 'hidden', fontSize: '2em' }} />
          </button>
        ) : null}
      </div>
    </div>
  );
};

ProductCarousel.propTypes = {
  Photos: PropTypes.array.isRequired,
};

export default ProductCarousel;
