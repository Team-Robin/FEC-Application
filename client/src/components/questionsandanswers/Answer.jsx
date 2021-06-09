/* eslint-disable array-callback-return */
/* eslint-disable react/prop-types */
/* eslint-disable import/no-cycle */
/* eslint-disable no-unused-vars */
import React from 'react';
import Questions from './Questions';
import PropTypes from 'prop-types';

const Answer = ({ answerBody }) => {
  console.log('within answersJSX', answerBody)
  return (
    <div>
      <p>A: {answerBody.body}</p>

    </div>
  );
};

Answer.propTypes = {
  answerBody: PropTypes.object.isRequired,
};

export default Answer;
