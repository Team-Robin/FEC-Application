import React, {useState, useEffect, useContext} from 'react';
import PropTypes from 'prop-types';
import RatingStars from './RatingStars';
import ThemeContext from '../context/Theme';

const AddReviewModal = ({ labels, ratings, submitReview, handleClose, uploader }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [summary, setSummary] = useState('');
  const [body, setBody] = useState('');
  const [photos, setPhotos] = useState([]);
  const [recommend, setRecommend] = useState(false);
  const [characteristics, setCharacteristics] = useState({});
  const [rating, setRating] = useState(0);
  const [test, setTest] = useState([]);
  // contexts
  const { themeMode } = useContext(ThemeContext);
  const lightMode = 'modalLight';
  const darkMode = 'modalDark';

  const product_id = Number(ratings.product_id);

  labels.rating = {
    1: 'Poor',
    2: 'Fair',
    3: 'Average',
    4: 'Good',
    5: 'Great',
  }

  const setters = {
    setName,
    setEmail,
    setSummary,
    setBody,
    setPhotos,
    setRecommend,
  }

  const handleChange = (e) => {
    const target = e.target;
    const newState = target.type === 'checkbox' ? target.checked : target.value;
    const name = e.target.name;
    const state = name[0].toUpperCase() + name.slice(1);
    setters[`set${state}`](newState);
  }

  const manageCharacteristic = (charId, rating) => {
    const result = {};
    Object.assign(result, characteristics)
    result[charId] = rating + 1;
    setCharacteristics(result);
  }

  const updateRating = (notUsed, num) => {
    setRating(num + 1);
  }

  const closeModal = (e) => {
    var outerModal = document.getElementById('outerModal');
    if (e.target === outerModal) {
      handleClose();
    }
  }

  // const uploader = cloudinary.createUploadWidget({
  //   cloudName: 'ddrvosdfa',
  //   uploadPreset: 'wmysnpod',
  //   maxFiles: 5,
  //   thumbnails: '#formPics',
  // }, (error, result) => {
  //     if (!error && result && result.event === "success") {
  //       console.log('Done! Here is the image info: ', result.info);
  //       photoQueue.push(result.info.url)
  //     }
  //   }
  // )

  const submit = () => {
    let thumbnails = document.getElementsByClassName('cloudinary-thumbnails')[0];
    if (thumbnails !== undefined) {
       thumbnails = thumbnails.children;
       for (var i = 0; i < thumbnails.length; i++) {
         let thumbnail = thumbnails[i];
         let { url } = JSON.parse(thumbnail.attributes[1].value)
         photoQueue.push(url);
       }
    }
    setPhotos(photoQueue.slice(0, 5));
  }

  useEffect(() => {
    console.log(photos)
      submitReview({
        name, email, summary, body, recommend, product_id, rating, photos, characteristics,
      });
  }, [photos])

  const photoQueue = [];

  return (
    <div id="outerModal" onClick={closeModal}>
      <div id="modalWindow">
        <div id="modalTop" className={themeMode === 'Light' ? lightMode : darkMode} >
          <div id="ratingSelectors" >
          <div>
            <h4>Overall Rating</h4>
            <RatingStars
              ratings={ratings}
              mutable={true}
              cb={updateRating}
            />
            <p>{labels.rating[rating]}</p>
          </div>
          {
            Object.keys(ratings.characteristics).map((characteristic) => {
              let charId = ratings.characteristics[characteristic].id;
              let value = (characteristics[charId] || 0);
              return (
                <div>
                  <h5>{characteristic}</h5>
                  <RatingStars
                    ratings={ratings}
                    mutable={true}
                    charId={charId}
                    cb={manageCharacteristic}
                  />
                  <p>{labels[characteristic][value]}</p>
                </div>
              )
            })
          }
          </div>
          <div id="addReviewForm">
            <div id="formHeader">
              <h2>Add a review</h2>
            </div>
            <div id="formContent">
              <div id="formText">
                <div id="userInfo">
                  <input
                    type="text"
                    name="name"
                    placeholder="Username"
                    value={name}
                    onChange={handleChange}
                    required
                  />
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={email}
                    onChange={handleChange}
                    required
                  />
                </div>
                <input type="text"
                  name="summary"
                  placeholder="Your title goes here"
                  value={summary}
                  onChange={handleChange}
                  required
                /><br />
                <textarea
                  name="body"
                  placeholder="Tell us what you think!"
                  value={body}
                  onChange={handleChange}
                  required
                  row="20"
                  col="10"
                />
              </div>
              <div id="formPics" >
                <h5>Uploaded Photos</h5>
              </div>
            </div>
            <div id="formFooter" >
              <span>
                <label htmlFor="recommendCheckbox" >
                  <input id="recommendCheckbox"
                    type="checkbox"
                    value={recommend}
                    onChange={handleChange}
                    name="recommend"
                  />
                  I recommend this product!
                </label>
              </span>
              <button
              type="button"
              onClick={submit}
              >Submit Reveiw</button>
              <button id="photoButton" type="button" onClick={uploader.open}>Add Picture</button>
            </div>
          </div>
        </div>
        <div id="modalBottom" />
      </div>
    </div>
  )
}

AddReviewModal.propTypes = {
  labels: PropTypes.objectOf(PropTypes.object).isRequired,
  ratings: PropTypes.objectOf(PropTypes.any).isRequired,
  submitReview: PropTypes.func.isRequired,
  handleClose: PropTypes.func.isRequired,
  uploader: PropTypes.objectOf(PropTypes.any).isRequired,
}

export default AddReviewModal;
