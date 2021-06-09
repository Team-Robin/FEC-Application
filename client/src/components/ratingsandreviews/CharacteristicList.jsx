import React from 'react';
import PropTypes from 'prop-types';
import Characteristic from './Characteristic';

const CharacteristicList = ({ characteristics, labels }) => {
  const name = 0;
  const info = 1;
  console.log(labels, characteristics)
  return (
    <div id="characteristicList">
      {// get an array of characteristic components from the characteristics obj
        Object.entries(characteristics).map((characteristic) => (
        // characteristic looks like ['Size', {id, value}]
          <Characteristic
            key={characteristic[name]}
            name={characteristic[name]}
            value={Number(characteristic[info].value)}
            minLabel={labels[characteristic[name]]['1']}
            maxLabel={labels[characteristic[name]]['5']}
          />
        ))
      }
    </div>
  );
};

CharacteristicList.propTypes = {
  characteristics: PropTypes.objectOf(PropTypes.object).isRequired,
  labels: PropTypes.objectOf(PropTypes.object).isRequired,
};

export default CharacteristicList;
