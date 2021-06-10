/* eslint-disable react/forbid-prop-types */
/* eslint-disable array-callback-return */
/* eslint-disable react/prop-types */
/* eslint-disable import/no-cycle */
/* eslint-disable no-unused-vars */
import React from 'react';
import { useState } from 'react';
import PropTypes from 'prop-types';
import Questions from './Questions';

const Answer = React.memo(({ answerBody }) => {
  const dateFormat = (inputTime) => {
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July',
      'August', 'September', 'October', 'November', 'December',
    ];

    const today = new Date(inputTime);
    const date = `${months[today.getMonth()]} ${today.getDate()}, ${today.getFullYear()}`;
    return date;
  };

  const [helpful, setHelpful] = useState("");

  console.log(answerBody);
  return (
    <div id="answers">
      <p>
        A:
        {' '}
        {answerBody.body}
      </p>
      <p className="answer-user">
        User:
        {answerBody.answerer_name}
        {' '}
        Date:
        {dateFormat(answerBody.date)}
      </p>
      <p className="helpful">
        Helpful? {answerBody.helpfulness}
        <button className="helpful-btn" type="button">  Yes</button>
         |
        <button className="helpful-btn" type="button">  No</button>
      </p>
    </div>
  );
});

Answer.propTypes = {
  answerBody: PropTypes.object.isRequired,
};

export default Answer;
