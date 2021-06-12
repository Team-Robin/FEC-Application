import React from 'react';
import PropTypes from 'prop-types';

const RatingStars = ({ ratings, mutable, charId = 0, cb = ()=>{} }) => {
  const overallRating = (typeof ratings === 'number') ? ratings : (
    (
      Object.entries(ratings).reduce((result, r) => {
        let totalStars = r[0] * r[1];
        return [result[0] + totalStars, result[1] + Number(r[1])]
      },[0, 0]).reduce((totalStars, totalRatings ) => totalStars / totalRatings) * 4
    ).toFixed() / 4
  )

  const makeStars = (overallRating) => {
    const result = [];
    let count = 1;
    overallRating = mutable ? 5 : overallRating;
    while (overallRating >= 1) {
      result.push(makeStar(fill['1'], count));
      overallRating -= 1;
      count += 1;
    }
    result.push(makeStar(fill[overallRating], count));
    return result;
  }

  const redraw = (e) => {
    const target = e.target;
    let position  = target.parentElement.attributes.position.value;
    position = Number(position);
    const grandParent = target.parentElement.parentElement;
    for (var i = 0; i < grandParent.children.length; i++) {
      let svg = grandParent.children[i];
      if (i <= position) {
        svg.classList.remove('emptiness');
      } else {
        svg.classList.add('emptiness');
      }
    }
    cb(charId, position);
  }

  const makeStar = (pathDirection, count) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      viewBox="0 0 16 16"
      position={count - 1}
      key={`star ${count}`}
      className={mutable ? 'emptiness' : ''}
      onClick={mutable ? redraw : ()=>{}}
    >
      <path fill="#212121"
       fillRule="nonzero"
       d={pathDirection}
      />
    </svg>
  )

  const fill = {
    0.25: `M7.55167 1.77872L5.75771 5.41369L1.74627 5.99659C1.33616 6.05618 1.17241 6.56016 1.46917 6.84943L4.37187 9.67887L3.68663
          13.6741C3.61658 14.0825 4.04529 14.394 4.41211 14.2012L8.00004 12.3149L11.588 14.2012C11.9548 14.394 12.3835 14.0825 12.3134
          13.6741L11.6282 9.67887L14.5309 6.84943C14.8277 6.56016 14.6639 6.05618 14.2538 5.99659L10.2424 5.41369L8.44841 1.77872C8.265
          1.40709 7.73508 1.40709 7.55167 1.77872ZM6.16164 6.3655C6.32449 6.34183 6.46528 6.23955 6.53811 6.09198L8.00004 3.12978L9.46198
          6.09198C9.53481 6.23955 9.67559 6.34183 9.83844 6.3655L13.1074 6.84051L10.742 9.14626C10.6241 9.26113 10.5704 9.42663 10.5982
          9.58883L11.1566 12.8446L8.23271 11.3074C8.08705 11.2309 7.91303 11.2309 7.76737 11.3074L6 12.2366V6.38899L6.16164 6.3655Z`,

    0.5: `M7.55167 1.77872L5.75771 5.41369L1.74627 5.99659C1.33616 6.05618 1.17241 6.56016 1.46917 6.84943L4.37187 9.67887L3.68663
          13.6741C3.61658 14.0825 4.04529 14.394 4.41211 14.2012L8.00004 12.3149L11.588 14.2012C11.9548 14.394 12.3835 14.0825 12.3134
          13.6741L11.6282 9.67887L14.5309 6.84943C14.8277 6.56016 14.6639 6.05618 14.2538 5.99659L10.2424 5.41369L8.44841 1.77872C8.265
          1.40709 7.73508 1.40709 7.55167 1.77872ZM8 11.25L8.00004 3.12978L9.46198 6.09198C9.53481 6.23955 9.67559 6.34183 9.83844
          6.3655L13.1074 6.84051L10.742 9.14626C10.6241 9.26113 10.5704 9.42663 10.5982 9.58883L11.1566 12.8446L8.23271 11.3074C8.15987
          11.2691 8.07993 11.25 8 11.25Z`,

    0.75: `M10.2424 5.41369L8.44843 1.77872C8.35636 1.59217 8.17697 1.49926 7.99793 1.5C7.82028 1.50071 7.64296 1.59362 7.55161
          1.77872L5.75765 5.41369L1.74621 5.99659C1.3361 6.05618 1.17235 6.56016 1.46911 6.84943L4.37181 9.67887L3.68657
          13.6741C3.63115 13.9972 3.88785 14.2596 4.17912 14.2597C4.25608 14.2598 4.33546 14.2415 4.41213 14.2012L8.00002
          12.3149L11.5879 14.2012C11.651 14.2343 11.7159 14.2526 11.7798 14.258C11.8075 14.2603 11.835 14.2603 11.862
          14.258C12.1358 14.2346 12.3663 13.9819 12.3135 13.6741L11.6282 9.67887L14.5309 6.84943C14.8277 6.56016 14.6639
          6.05618 14.2538 5.99659L10.2424 5.41369ZM10.0001 12.2366V6.389L13.1074 6.84051L10.7419 9.14626C10.6241 9.26113
          10.5703 9.42663 10.5981 9.58883L11.1565 12.8446L10.0001 12.2366Z`,

    1: `M5.75766517,5.41369089 L7.55163196,1.77871714 C7.73503881,1.40709429 8.26496119,1.40709429 8.44836804,1.77871714
        L10.2423348,5.41369089 L14.2537665,5.99658603 C14.6638767,6.05617853 14.8276317,6.56016466 14.5308732,6.84943272
        L11.628174,9.67886518 L12.3134083,13.6740879 C12.3834635,14.082541 11.9547473,14.3940215 11.5879336,14.2011762
        L8,12.3148879 L4.41206642,14.2011762 C4.04525273,14.3940215 3.61653652,14.082541 3.6865917,13.6740879 L4.37182604,9.67886518
        L1.4691268,6.84943272 C1.17236829,6.56016466 1.33612331,6.05617853 1.74623349,5.99658603 L5.75766517,5.41369089 Z`,
  }

  return (
    <span className="starComponent">
      {makeStars(overallRating)}
    </span>
  )
}

RatingStars.proptypes = {
  ratings: PropTypes.any.isRequired,
  mutable: PropTypes.bool.isRequired,
  charId: PropTypes.number,
  cb: PropTypes.func,
}

export default RatingStars;
